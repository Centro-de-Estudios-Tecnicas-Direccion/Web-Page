import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

/**
 * Envoltorio de la aplicacion: cabecera, contenido y pie.
 *
 * `main` no lleva relleno superior. La cabecera es fija y se superpone al
 * contenido, asi que cada pagina reserva su propio espacio superior: la
 * portada porque su bloque de color llega hasta el borde, las paginas
 * interiores mediante el relleno de su bloque de encabezado. Asi nunca queda
 * un hueco blanco detras de una cabecera transparente.
 */
export function AppLayout() {
  const { pathname, hash } = useLocation()

  // Al cambiar de pagina se vuelve al inicio y se lleva el foco al contenido,
  // para que la navegacion con teclado y lectores de pantalla sea coherente.
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#contenido"
        className="focus:z-100 focus:rounded-xs focus:bg-ceted-600 focus:font-display sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:px-4 focus:py-2.5 focus:font-semibold focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <SiteHeader />

      <main id="contenido" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}
