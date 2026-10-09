import { Link, useParams } from 'react-router'

import { Vector } from '@/components/brand/MallaDecision'
import { EnlaceBoton } from '@/components/ui/Boton'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Distintivo } from '@/components/ui/Tarjeta'
import { noticias } from '@/features/home/noticias'

function fechaLarga(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es-CU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Noticias.
 *
 * La misma ruta sirve para el listado y para la pieza: si llega un `slug`, se
 * muestra el articulo. Asi el enlace es compartible desde el primer dia, sin
 * depender de que el backend esté listo.
 */
export default function NoticiasPage() {
  const { slug } = useParams()
  const articulo = slug ? noticias.find((n) => n.slug === slug) : undefined

  if (slug && !articulo) {
    return (
      <>
        <PageHeader antetitulo="Noticias" titulo="No encontramos esa publicación" />
        <Container className="py-seccion">
          <p className="text-lead text-tinta-600 max-w-prose">
            Puede que el enlace esté desactualizado o que la noticia se haya retirado del
            encabezado.
          </p>
          <div className="mt-10">
            <EnlaceBoton to="/noticias" variante="solido" conVector>
              Volver a noticias
            </EnlaceBoton>
          </div>
        </Container>
      </>
    )
  }

  if (articulo) {
    return (
      <>
        <PageHeader antetitulo={articulo.categoria} titulo={articulo.titulo}>
          <time dateTime={articulo.fecha} className="text-nota text-white/60">
            {fechaLarga(articulo.fecha)}
          </time>
        </PageHeader>

        <article className="py-seccion">
          <Container ancho="proceso">
            <p className="text-lead text-tinta-700 max-w-prose">{articulo.resumen}</p>
            <div className="border-tinta-200 mt-12 border-t pt-10">
              <p className="text-tinta-600 max-w-prose">
                El cuerpo completo de la publicación llegará desde la API. El modelo de datos
                <code className="bg-ceted-50 text-ceted-700 mx-1 px-1.5 py-0.5 font-mono text-sm">
                  Noticia
                </code>
                ya contempla el campo <code className="font-mono text-sm">cuerpo</code>, por lo que
                conectar el endpoint solo requiere sustituir el origen de los datos en esta
                pantalla.
              </p>
            </div>

            <div className="border-tinta-200 mt-16 border-t pt-8">
              <Link
                to="/noticias"
                className="font-display text-ceted-700 hover:text-ceted-500 group inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight transition-colors"
              >
                <span className="rotate-180">
                  <Vector />
                </span>
                Volver a todas las noticias
              </Link>
            </div>
          </Container>
        </article>
      </>
    )
  }

  return (
    <>
      <PageHeader
        antetitulo="Noticias"
        titulo="Actualidad del CETED"
        descripcion="Comunicados, convocatorias, resultados de investigación y eventos del claustro y de nuestros estudiantes de posgrado."
      />

      <Container className="py-seccion">
        <ul className="border-tinta-200 md:divide-tinta-200 grid border-t md:grid-cols-2 md:divide-x">
          {noticias.map((noticia) => (
            <li
              key={noticia.slug}
              className="border-tinta-200 border-b py-9 md:px-9 md:first:pl-0 md:last:pr-0"
            >
              <article className="flex h-full flex-col">
                <div className="flex flex-wrap items-center gap-4">
                  <Distintivo tono="neutro">{noticia.categoria}</Distintivo>
                  <time dateTime={noticia.fecha} className="text-nota text-tinta-500">
                    {fechaLarga(noticia.fecha)}
                  </time>
                </div>
                <h2 className="font-display text-display-3 mt-5 text-balance font-semibold">
                  <Link to={`/noticias/${noticia.slug}`} className="enlace-marca">
                    {noticia.titulo}
                  </Link>
                </h2>
                <p className="text-tinta-600 mt-4 flex-1">{noticia.resumen}</p>
                <Link
                  to={`/noticias/${noticia.slug}`}
                  className="font-display text-ceted-700 group mt-7 inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight"
                >
                  Leer la publicación
                  <Vector className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
