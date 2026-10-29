import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { noticias } from '@/features/home/noticias'

function fechaCorta(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es-CU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function Noticias() {
  return (
    <section className="bg-white py-16">
      <Container ancho="proceso">
        <div className="border-b border-tinta-200 pb-4 mb-8 flex justify-between items-baseline">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-ceted-600 block mb-1">
              Actualidad
            </span>
            <h2 className="font-display text-display-2 font-normal text-tinta-950">
              Convocatorias y Publicaciones
            </h2>
          </div>
          <Link
            to="/noticias"
            className="font-sans text-xs font-semibold text-ceted-600 hover:text-ceted-700 uppercase tracking-wider"
          >
            Ver todas las publicaciones →
          </Link>
        </div>

        <div className="divide-y divide-tinta-200 border-y border-tinta-200">
          {noticias.map((item) => (
            <article key={item.slug} className="py-4 grid gap-2 sm:grid-cols-12 sm:items-baseline">
              <div className="sm:col-span-3 text-xs font-sans text-tinta-500">
                <span className="font-semibold text-ceted-600 uppercase tracking-wider block">
                  {item.categoria}
                </span>
                <time dateTime={item.fecha} className="cifras block mt-0.5">
                  {fechaCorta(item.fecha)}
                </time>
              </div>

              <div className="sm:col-span-9">
                <h3 className="font-display text-lg font-medium text-tinta-950 hover:text-ceted-600 transition-colors">
                  <Link to={`/noticias/${item.slug}`}>{item.titulo}</Link>
                </h3>
                <p className="font-sans text-xs text-tinta-600 mt-1 leading-relaxed">
                  {item.resumen}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}