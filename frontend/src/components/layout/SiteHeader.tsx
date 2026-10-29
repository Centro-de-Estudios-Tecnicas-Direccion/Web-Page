import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/ui/Container'
import { mainNav } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'

export function SiteHeader() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setMenuAbierto(false), [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-tinta-200">
      {/* Cintillo institucional superior en azul oficial del CETED */}
      <div className="bg-ceted-600 text-white text-[0.72rem] tracking-wider uppercase py-1.5 font-sans">
        <Container ancho="proceso">
          <div className="flex justify-between items-center">
            <span className="font-semibold tracking-wide">
              {siteConfig.affiliation}
            </span>
            <span className="hidden sm:inline text-white/90">
              Centro de Estudios de Técnicas de Dirección
            </span>
          </div>
        </Container>
      </div>

      {/* Barra de navegación principal */}
      <Container ancho="proceso">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-3 text-ceted-600 transition-opacity hover:opacity-90"
            aria-label="CETED — Inicio"
          >
            <Logo height={42} />
            <div className="hidden sm:flex flex-col border-l border-tinta-200 pl-3.5 text-left">
              <span className="font-display text-base font-semibold text-tinta-900 leading-tight">
                CETED
              </span>
              <span className="font-sans text-[0.68rem] text-tinta-500 uppercase tracking-wider">
                Universidad de La Habana
              </span>
            </div>
          </Link>

          {/* Menú de escritorio */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'font-sans text-sm tracking-normal transition-colors py-1 border-b-2',
                    isActive
                      ? 'border-ceted-600 font-semibold text-ceted-600'
                      : 'border-transparent text-tinta-700 hover:text-ceted-600',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/acceso"
              className="inline-flex h-9 items-center border border-ceted-600 px-4 font-sans text-xs font-semibold tracking-wider uppercase text-ceted-600 transition-colors hover:bg-ceted-600 hover:text-white"
            >
              Acceso
            </Link>
          </nav>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            className="inline-flex size-10 items-center justify-center text-tinta-700 lg:hidden border border-tinta-200"
          >
            <span className="sr-only">{menuAbierto ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
              {menuAbierto ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="square" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Menú desplegable móvil */}
      {menuAbierto && (
        <div id="menu-movil" className="border-t border-tinta-200 bg-white py-4 lg:hidden">
          <Container ancho="proceso">
            <nav className="flex flex-col space-y-3 font-sans">
              {mainNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'py-2 text-sm border-b border-tinta-100',
                      isActive ? 'text-ceted-600 font-semibold' : 'text-tinta-800',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/acceso"
                className="mt-2 inline-flex h-10 items-center justify-center bg-ceted-600 text-white text-xs font-semibold uppercase tracking-wider"
              >
                Acceso al Sistema
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}