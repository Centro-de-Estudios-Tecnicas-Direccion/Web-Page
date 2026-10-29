import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { maestrias, diplomados, doctorado } from '@/features/home/programas'
import type { Programa } from '@/types/domain'

function FichaPrograma({ programa }: { programa: Programa }) {
  return (
    <article className="border border-tinta-200 p-6 flex flex-col justify-between hover:border-ceted-600 transition-colors bg-white">
      <div>
        <div className="flex justify-between items-center text-xs font-sans text-tinta-500 pb-2 mb-3 border-b border-tinta-100">
          <span className="font-bold text-ceted-600 uppercase tracking-wider">
            {programa.nivel === 'maestria' ? 'Maestría' : 'Diplomado'}
          </span>
          <span>Presencial · La Habana</span>
        </div>

        <h3 className="font-display text-xl font-medium text-tinta-950 mb-3">
          {programa.nombre}
        </h3>

        <p className="font-sans text-xs text-tinta-600 leading-relaxed">
          {programa.descripcion}
        </p>
      </div>

      <div className="mt-6 pt-3 border-t border-tinta-100 flex justify-between text-xs font-sans text-tinta-600">
        <span><strong>{programa.cargaHoraria}</strong> horas</span>
        <span>{programa.ediciones ? `${programa.ediciones}.ª Edición` : 'Convocatoria periódica'}</span>
      </div>
    </article>
  )
}

export function Oferta() {
  return (
    <section className="bg-white py-16 border-b border-tinta-200" id="oferta">
      <Container ancho="proceso">
        <div className="border-b border-tinta-200 pb-4 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-ceted-600 block mb-1">
              Oferta de Posgrado
            </span>
            <h2 className="font-display text-display-2 font-normal text-tinta-950">
              Programas Académicos
            </h2>
          </div>
          <Link
            to="/servicios"
            className="font-sans text-xs font-semibold text-ceted-600 hover:text-ceted-700 uppercase tracking-wider"
          >
            Ver todos los diplomados y cursos →
          </Link>
        </div>

        {/* Maestrías */}
        <div className="mb-10">
          <h3 className="font-sans text-xs uppercase tracking-widest text-tinta-500 font-bold mb-4">
            Maestrías Principales
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {maestrias.map((p) => (
              <FichaPrograma key={p.id} programa={p} />
            ))}
          </div>
        </div>

        {/* Doctorado y Diplomados */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-tinta-200 p-6 bg-tinta-50 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-ceted-600 block mb-2">
                Grado Científico
              </span>
              <h4 className="font-display text-lg font-medium text-tinta-950 mb-2">
                {doctorado.nombre}
              </h4>
              <p className="font-sans text-xs text-tinta-600 leading-relaxed">
                {doctorado.descripcion}
              </p>
            </div>
            <Link
              to="/servicios#doctorado"
              className="mt-6 font-sans text-xs font-semibold text-ceted-600 uppercase tracking-wider block"
            >
              Requisitos y líneas →
            </Link>
          </div>

          {diplomados.slice(0, 2).map((p) => (
            <FichaPrograma key={p.id} programa={p} />
          ))}
        </div>
      </Container>
    </section>
  )
}