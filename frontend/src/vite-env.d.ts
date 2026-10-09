/// <reference types="vite/client" />

/**
 * Tipos del entorno de Vite.
 * `import.meta.env.VITE_*` queda disponible tras esta referencia.
 */

interface ImportMetaEnv {
  /** URL base de la API de FastAPI. Vacia = usar el proxy de Vite. */
  readonly VITE_API_URL?: string
  /** Destino del proxy de /api durante el desarrollo. */
  readonly VITE_PROXY_TARGET?: string
  /** Etiqueta del entorno: development | production */
  readonly VITE_APP_ENV?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
