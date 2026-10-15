/**
 * Post-construccion para GitHub Pages.
 *
 * GitHub Pages es un servidor de archivos estaticos: no sabe de enrutado. Si
 * alguien abre `/Web-Page/servicios`, busca ese archivo, no lo encuentra y
 * devuelve su pagina de error con codigo 404.
 *
 * La solucion estandar es publicar tambien una copia del `index.html` como
 * `404.html`. Como esta aplicacion se dibuja por completo en el cliente, esa
 * copia arranca la aplicacion en la URL correcta y React Router resuelve la
 * ruta a partir de `window.location`. No hace falta ningun truco de
 * almacenamiento ni redireccion.
 *
 * Uso: `node scripts/postbuild.mjs`
 */

import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const raizProyecto = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(raizProyecto, 'dist')
const index = join(dist, 'index.html')
const notFound = join(dist, '404.html')

if (!existsSync(index)) {
  console.error('[postbuild] No se encontró dist/index.html. Ejecuta antes `vite build`.')
  process.exit(1)
}

// 1 · Copia directa: sirve para el enrutado del cliente.
copyFileSync(index, notFound)

// 2 · Aviso para quien abra directamente una ruta inexistente desde el
//     navegador sin pasar por la aplicacion (por ejemplo, al compartir un
//     enlace equivocado). Se inyecta antes de la aplicacion para que no
//     modifique el renderizado.
const aviso = `<script>
      // Solo informational: GitHub Pages sirve 404.html con codigo 404. La ruta
      // la resuelve la aplicacion en el cliente.
      if (location.pathname.replace(/\\/+$/, '').split('/').pop().includes('.')) {
        console.info('[CETED] Ruta con extension: ' + location.pathname)
      }
    </script>`

const html = readFileSync(index, 'utf8')
writeFileSync(notFound, html.replace('</head>', `${aviso}\n  </head>`), 'utf8')

console.log('[postbuild] 404.html generado para el enrutado del cliente.')
