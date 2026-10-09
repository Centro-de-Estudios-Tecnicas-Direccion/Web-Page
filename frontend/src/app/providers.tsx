import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

import { queryClient } from '@/lib/query-client'

/**
 * Proveedores globales de la aplicacion.
 *
 * Nota sobre el router: `createBrowserRouter` crea su propio contexto de
 * navegacion, asi que `RouterProvider` se monta directamente aqui — sin
 * envolverlo en un `BrowserRouter`, que produciria un router anidado.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
