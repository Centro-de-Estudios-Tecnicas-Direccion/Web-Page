import { appConfig } from '@/config/site'

/**
 * Cliente HTTP del frontend hacia la API de FastAPI.
 *
 * Decisiones:
 *  · Sin dependencias: `fetch` nativo y tipado por el llamador.
 *  · Errores normalizados en `ApiError` con el codigo HTTP y el detalle que
 *    devuelve FastAPI (`detail`), para que la UI pueda mostrarlos.
 *  · El token de sesion se envia si existe; la gestion del estado de
 *    autenticacion vive en `features/auth`, no aqui.
 */

const BASE_URL = appConfig.apiUrl
const TOKEN_KEY = 'ceted.token'

export class ApiError extends Error {
  readonly status: number
  readonly detail: unknown

  constructor(status: number, detail: unknown, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.detail = detail
  }

  /** Mensaje apto para mostrar: FastAPI suele enviar `detail` como texto. */
  get mensajeUsuario(): string {
    if (typeof this.detail === 'string') return this.detail
    if (Array.isArray(this.detail)) {
      return this.detail
        .map((item) =>
          typeof item === 'object' && item && 'msg' in item ? String(item.msg) : String(item),
        )
        .join('. ')
    }
    return this.message
  }
}

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

export function setToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token)
    else localStorage.removeItem(TOKEN_KEY)
  } catch {
    /* Modo privado o almacenamiento bloqueado: la sesion durara lo que la pestana. */
  }
}

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown
  /** Parametros de consulta. Los `undefined` se descartan automaticamente. */
  query?: Record<string, string | number | boolean | undefined>
}

function buildUrl(path: string, query?: RequestOptions['query']): string {
  const base = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
  if (!query) return base
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) params.set(key, String(value))
  }
  const qs = params.toString()
  return qs ? `${base}?${qs}` : base
}

async function request<T>(method: string, path: string, options: RequestOptions = {}): Promise<T> {
  const { body, query, headers, ...rest } = options

  const finalHeaders = new Headers(headers)
  if (body !== undefined && !(body instanceof FormData)) {
    finalHeaders.set('Content-Type', 'application/json')
  }
  const token = getToken()
  if (token) finalHeaders.set('Authorization', `Bearer ${token}`)

  let response: Response
  try {
    response = await fetch(buildUrl(path, query), {
      ...rest,
      method,
      headers: finalHeaders,
      body: body === undefined ? undefined : body instanceof FormData ? body : JSON.stringify(body),
    })
  } catch {
    throw new ApiError(0, null, 'No se pudo conectar con el servidor. Intentalo de nuevo.')
  }

  if (response.status === 204) return undefined as T

  const esJson = response.headers.get('content-type')?.includes('application/json')
  const payload: unknown = esJson ? await response.json() : await response.text()

  if (!response.ok) {
    const detail =
      esJson && payload && typeof payload === 'object' && 'detail' in payload
        ? (payload as { detail: unknown }).detail
        : payload
    throw new ApiError(response.status, detail, `Error ${response.status} en ${path}`)
  }

  return payload as T
}

export const api = {
  get: <T>(path: string, options?: RequestOptions) => request<T>('GET', path, options),
  post: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>('POST', path, { ...options, body }),
  patch: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>('PATCH', path, { ...options, body }),
  put: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>('PUT', path, { ...options, body }),
  delete: <T>(path: string, options?: RequestOptions) => request<T>('DELETE', path, options),
}
