import { Link } from 'react-router'

import { Vector } from '@/components/brand/MallaDecision'
import { Container } from '@/components/ui/Container'
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
 * Requisito funcional: el sitio debe mostrar las ultimas publicaciones. La
 * noticia destacada ocupa el ancho completo y el resto se alinea en fila: es
 * la manera de marcar jerarquia sin recurrir a sombras ni a bordes dobles.
 */
export function Noticias() {
  const [destacada, ...resto] = noticias

  return (
    <section className="py-seccion">
      <Container>
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="antetitulo text-ceted-600 mb-6">Actualidad</p>
            <h2 className="text-display-2 font-display font-estirado text-balance font-semibold">
              Últimas noticias
            </h2>
            <p className="text-lead text-tinta-600 mt-6 max-w-2xl">
              Conversaciones, convocatorias y resultados de investigación del claustro y de nuestros
              estudiantes de posgrado.
            </p>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              to="/noticias"
              className="font-display text-ceted-700 hover:text-ceted-500 group inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight transition-colors"
            >
              Ver todas
              <Vector className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <article className="border-tinta-900 grid gap-8 border-y py-9 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Distintivo>{destacada?.categoria}</Distintivo>
            <h3 className="font-display text-display-2 font-estirado mt-5 text-balance font-semibold">
              <Link to={`/noticias/${destacada?.slug}`} className="enlace-marca">
                {destacada?.titulo}
              </Link>
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lead text-tinta-600">{destacada?.resumen}</p>
            <time dateTime={destacada?.fecha} className="text-nota text-tinta-500 mt-5 block">
              {destacada && fechaLarga(destacada.fecha)}
            </time>
          </div>
        </article>

        <ul className="bg-tinta-200 grid gap-px sm:grid-cols-2">
          {resto.map((noticia) => (
            <li key={noticia.slug} className="bg-white py-9 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <article className="group flex h-full flex-col">
                <div className="flex items-center gap-4">
                  <Distintivo tono="neutro">{noticia.categoria}</Distintivo>
                  <time dateTime={noticia.fecha} className="text-nota text-tinta-500">
                    {fechaLarga(noticia.fecha)}
                  </time>
                </div>
                <h3 className="font-display mt-5 text-balance text-[1.25rem] font-semibold">
                  <Link to={`/noticias/${noticia.slug}`} className="enlace-marca">
                    {noticia.titulo}
                  </Link>
                </h3>
                <p className="text-tinta-600 mt-3 flex-1 text-sm">{noticia.resumen}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
