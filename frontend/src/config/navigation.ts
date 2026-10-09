/**
 * Navegacion publica del sitio.
 * El orden sigue el mandato de usabilidad de la especificacion de requisitos:
 * seccion inicial (Hero) → Noticias → Claustro → Servicios.
 */

export type NavItem = {
  label: string
  to: string
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Claustro', to: '/claustro' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Contacto', to: '/contacto' },
]

/** Enlaces secundarios del pie de pagina. */
export const footerNav: NavItem[] = [
  { label: 'Maestrías', to: '/servicios#master' },
  { label: 'Diplomados', to: '/servicios#diplomados' },
  { label: 'Cursos y entrenamientos', to: '/servicios#cursos' },
  { label: 'Líneas de investigación', to: '/servicios#lineas' },
  { label: 'Laboratorio Alexis Codina', to: '/servicios#laboratorio' },
  { label: 'Cátedra UNESCO · Redec', to: '/servicios#redec' },
]
