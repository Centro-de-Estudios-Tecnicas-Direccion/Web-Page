/**
 * Estados de carga de ruta.
 *
 * Viven aparte de la tabla de rutas para que ese modulo exporte solo el router:
 * asi la recarga en caliente de React funciona durante el desarrollo.
 */

import { Suspense, type ReactNode } from 'react'

export function Cargando() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60dvh] items-center justify-center"
    >
      <p className="antetitulo text-tinta-400">Cargando</p>
    </div>
  )
}

/**
 * Envoltura de carga perezosa.
 * Envuelve cualquier pagina cargada bajo demanda y muestra el estado mientras
 * se descarga su fragmento.
 */
export function RutaPerezosa({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Cargando />}>{children}</Suspense>
}
