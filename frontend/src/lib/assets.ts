/**
 * Resolucion de rutas de assets publicos.
 *
 * GitHub Pages sirve el sitio bajo un subdirectorio (`/Web-Page/`), no en la
 * raiz del dominio. Una ruta absoluta como `/images/foto.jpg` se resolveria
 * contra el dominio y daria 404. Este helper antepone la ruta base que Vite
 * calcula en tiempo de compilacion, de modo que el mismo codigo funciona en
 * desarrollo, en un subdirectorio y en un dominio propio.
 */

/** Ruta base normalizada: siempre empieza y termina en `/`. */
export const BASE_URL: string = import.meta.env.BASE_URL

/**
 * Devuelve la URL publica de un asset del directorio `public/`.
 *
 * @example
 * rutaAsset('images/pasillo.jpg')  // '/Web-Page/images/pasillo.jpg'
 */
export function rutaAsset(ruta: string): string {
  return `${BASE_URL}${ruta.replace(/^\//, '')}`
}
