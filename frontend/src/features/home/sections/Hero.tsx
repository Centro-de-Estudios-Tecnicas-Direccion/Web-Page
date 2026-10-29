import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="bg-white pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-tinta-200">
      <Container ancho="proceso">
        <div className="max-w-3xl">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-ceted-600 block mb-3">
            Universidad de La Habana · Posgrado e Investigación
          </span>

          <h1 className="font-display text-display-1 text-tinta-950 font-normal text-balance">
            Técnicas de dirección y gestión estratégica para el desarrollo
          </h1>

          <p className="font-sans text-lead text-tinta-700 mt-6 leading-relaxed">
            El CETED es la institución académica de posgrado de la Universidad de La Habana consagrada a la superación presencial de directivos, la consultoría gerencial y la investigación aplicada a las organizaciones cubanas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/servicios"
              className="bg-ceted-600 hover:bg-ceted-700 text-white font-sans text-sm font-semibold px-6 py-3 transition-colors inline-flex items-center gap-2"
            >
              Catálogo de Maestrías y Cursos
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/claustro"
              className="border border-tinta-300 hover:border-ceted-600 text-tinta-800 hover:text-ceted-600 font-sans text-sm font-semibold px-6 py-3 transition-colors"
            >
              Conocer al Claustro
            </Link>
          </div>
        </div>

        {/* Cita institucional única de la dirección (sin duplicarse en otros bloques) */}
        <div className="mt-16 pt-8 border-t border-tinta-200 grid gap-6 md:grid-cols-12 md:items-baseline">
          <div className="md:col-span-3">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-ceted-600 block">
              Enfoque Pedagógico
            </span>
            <span className="font-sans text-xs text-tinta-500 block mt-0.5">
              Dirección del Centro
            </span>
          </div>

          <div className="md:col-span-9">
            <blockquote className="font-display text-lg italic text-tinta-800 leading-snug">
              «Para entrenar a directivos tiene que existir un espacio que no sea el aula clásica: un entorno de intercambio, rigor científico y autonomía que propicie el debate y la resolución de problemas reales.»
            </blockquote>
            <span className="font-sans text-xs text-tinta-600 block mt-2">
              — Dra. C. Katy C. Herrera Lemus, Directora del CETED
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}