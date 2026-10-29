import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { catedra } from '@/features/home/catedra'

export function Catedra() {
  return (
    <section className="bg-white py-16 border-b border-tinta-200">
      <Container ancho="proceso">
        <div className="border-b border-tinta-200 pb-4 mb-10">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-ceted-600 block mb-1">
            Investigación y Práctica Aplicada
          </span>
          <h2 className="font-display text-display-2 font-normal text-tinta-950">
            Espacios de Desarrollo y Cooperación
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Bloque 1: Laboratorio Alexis Codina */}
          <div className="border border-tinta-200 p-8 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-ceted-600 block mb-2">
                Infraestructura Docente
              </span>
              <h3 className="font-display text-2xl font-medium text-tinta-950 mb-3">
                Laboratorio «Alexis Codina Jiménez»
              </h3>
              <p className="font-sans text-sm text-tinta-600 leading-relaxed">
                Espacio especializado dotado de dinámicas interactivas para simular situaciones de crisis, trabajo en equipo y toma de decisiones gerenciales en condiciones reales.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-tinta-100">
              <Link
                to="/contacto"
                className="font-sans text-xs font-semibold text-ceted-600 hover:text-ceted-700 uppercase tracking-wider"
              >
                Solicitar visita o sesión de trabajo →
              </Link>
            </div>
          </div>

          {/* Bloque 2: Cátedra UNESCO */}
          <div className="border border-tinta-200 p-8 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-ceted-600 block mb-2">
                Cooperación Internacional
              </span>
              <h3 className="font-display text-2xl font-medium text-tinta-950 mb-3">
                {catedra.titulo}
              </h3>
              <p className="font-sans text-sm text-tinta-600 leading-relaxed">
                {catedra.resumen}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-tinta-100">
              <Link
                to="/proyectos"
                className="font-sans text-xs font-semibold text-ceted-600 hover:text-ceted-700 uppercase tracking-wider"
              >
                Conocer proyectos territoriales →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}