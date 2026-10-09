import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/ui/Container'
import { mainNav } from '@/config/navigation'
import { contactInfo } from '@/config/site'
import { cn } from '@/lib/cn'

/**
 * Cabecera del sitio.
 *
 * Dos comportamientos, deliberadamente distintos:
 *   · En la portada el logotipo va sobre el bloque de color y la cabecera es
 *     transparente, para que el hero ocupe la pantalla completa.
 *   · En el resto de paginas la cabecera es solida, con filete inferior.
 */
export function SiteHeader() {
  const [desplazado, setDesplazado] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { pathname } = useLocation()
  const enPortada = pathname === '/'

  useEffect(() => {
    const alDesplazar = () => setDesplazado(window.scrollY > 24)
    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  // El menu movil se cierra al cambiar de pagina.
  useEffect(() => setMenuAbierto(false), [pathname])

  // Bloquea el scroll del cuerpo mientras el menu movil esta abierto.
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAbierto])

  const solida = !enPortada || desplazado

  return (
    <header
      className={cn(
        'ease-marca fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solida ? 'border-tinta-200 border-b bg-white/95 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <Container ancho="extenso">
        <div
          className={cn(
            'ease-marca flex items-center justify-between gap-6 transition-[height] duration-300',
            solida ? 'h-18' : 'h-24',
          )}
        >
          <Link
            to="/"
            className={cn(
              'shrink-0 transition-colors duration-300',
              solida ? 'text-ceted-600' : 'text-white',
            )}
            aria-label="CETED — ir al inicio"
          >
            <Logo height={solida ? 32 : 40} />
          </Link>

          {/* Navegacion principal — escritorio */}
          <nav
            aria-label="Navegacion principal"
            className={cn(
              'hidden items-center gap-1 lg:flex',
              solida ? 'text-tinta-900' : 'text-white',
            )}
          >
            {mainNav.slice(0, -1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={() =>
                  cn(
                    'font-display relative px-3.5 py-2 text-sm font-medium tracking-tight',
                    'transition-colors duration-200',
                    'after:absolute after:inset-x-3.5 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0',
                    'after:bg-ceted-500 after:ease-marca after:transition-transform after:duration-200',
                    solida
                      ? 'hover:text-ceted-700 aria-[current]:text-ceted-700 after:hover:scale-x-100 aria-[current]:after:scale-x-100'
                      : 'text-white/85 after:bg-white hover:text-white after:hover:scale-x-100 aria-[current]:text-white aria-[current]:after:scale-x-100',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`mailto:${contactInfo.email}`}
              className={cn(
                'rounded-xs font-display ml-3 inline-flex h-10 items-center px-5 text-sm font-semibold tracking-tight',
                'transition-colors duration-200',
                solida
                  ? 'bg-ceted-600 hover:bg-ceted-700 text-white'
                  : 'text-ceted-700 hover:bg-ceted-50 bg-white',
              )}
            >
              Contáctenos
            </a>
          </nav>

          {/* Accion movil */}
          <button
            type="button"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            className={cn(
              'relative -mr-2 inline-flex size-11 items-center justify-center lg:hidden',
              'transition-colors duration-200',
              solida ? 'text-tinta-900' : 'text-white',
            )}
          >
            <span className="sr-only">{menuAbierto ? 'Cerrar el menu' : 'Abrir el menu'}</span>
            <svg
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuAbierto ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Panel del menu movil */}
      <div
        id="menu-movil"
        hidden={!menuAbierto}
        className="animate-entrada border-tinta-200 border-t bg-white lg:hidden"
      >
        <Container>
          <nav aria-label="Navegacion movil" className="py-4">
            {mainNav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'border-tinta-100 flex items-baseline gap-4 border-b py-4 last:border-b-0',
                    'font-display text-lg font-semibold tracking-tight',
                    isActive ? 'text-ceted-600' : 'text-tinta-900',
                  )
                }
              >
                <span className="cifras text-etiqueta text-tinta-400 font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a
            href={`mailto:${contactInfo.email}`}
            className="rounded-xs bg-ceted-600 font-display my-4 flex h-12 items-center justify-center font-semibold text-white"
          >
            {contactInfo.email}
          </a>
        </Container>
      </div>
    </header>
  )
}
