import { QueryClient } from '@tanstack/react-query'

import { ApiError } from '@/lib/api'

/**
 * Cliente de TanStack Query.
 *
 * Configuracion orientada a una intranet de gestion: los datos publicos del
 * catalogo cambian poco, mientras que el estado de una inscripcion debe
 * reflejarse rapido en la interfaz.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      gcTime: 5 * 60_000,
      refetchOnWindowFocus: false,
      retry: (intentos: number, error: Error) => {
        // No reintentamos ante errores del cliente: son deterministas.
        if (error instanceof ApiError && error.status >= 400 && error.status < 500) return false
        return intentos < 2
      },
    },
    mutations: {
      retry: false,
    },
  },
})

/** Claves de cache centralizadas: evitan colisiones yInvalidaciones manuales. */
export const queryKeys = {
  noticias: (filtros?: Record<string, unknown>) => ['noticias', filtros] as const,
  noticia: (slug: string) => ['noticias', slug] as const,
  claustro: (filtros?: Record<string, unknown>) => ['claustro', filtros] as const,
  cursos: (filtros?: Record<string, unknown>) => ['cursos', filtros] as const,
  curso: (id: string) => ['cursos', id] as const,
  programas: () => ['programas'] as const,
  lineas: () => ['lineas-investigacion'] as const,
  sesion: () => ['sesion'] as const,
  misInscripciones: () => ['inscripciones', 'mias'] as const,
}
