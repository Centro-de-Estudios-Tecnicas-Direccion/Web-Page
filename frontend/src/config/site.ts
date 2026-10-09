/**
 * Configuracion global de la aplicacion.
 * Valores institucionales: no deben editarse desde los componentes.
 */

const env = import.meta.env

export const siteConfig = {
  name: 'CETED',
  fullName: 'Centro de Estudios de Técnicas de Dirección',
  affiliation: 'Universidad de La Habana',
  country: 'Cuba',
  tagline: 'Laboratorio de ideas para gestar desarrollo',
  foundedYear: 1988,
  description:
    'Formación de directivos, investigación aplicada y servicios profesionales en dirección y gestión. Adscrito a la Universidad de La Habana, Cuba.',
  url: 'https://www.ceted.uh.cu',
} as const

export const contactInfo = {
  address: 'Calle L #353 e/ 21 y 23. Edif. "Julio Antonio Mella", Piso 15. Vedado',
  city: 'La Habana, Cuba',
  phone: '+53 7 832 0000',
  email: 'info@ceted.uh.cu',
  social: [
    { label: 'Facebook', handle: 'CETED-UH', href: 'https://www.facebook.com/CETEDUH' },
    { label: 'X', handle: '@CETED_UH', href: 'https://twitter.com/CETED_UH' },
  ],
} as const

export const appConfig = {
  env: env.VITE_APP_ENV ?? 'development',
  /** Si se deja vacio se usa el proxy de Vite hacia el backend local. */
  apiUrl: (env.VITE_API_URL ?? '').replace(/\/$/, ''),
  isProduction: env.PROD,
} as const
