import { Link } from 'react-router'

import { MallaDecision } from '@/components/brand/MallaDecision'
import { EnlaceBoton } from '@/components/ui/Boton'
import { Container } from '@/components/ui/Container'
import { Vector } from '@/components/brand/MallaDecision'
import { mainNav } from '@/config/navigation'

export default function NoEncontradaPage() {
  return (
    <section className="sobre-ceted-800 bg-ceted-900 relative isolate overflow-hidden text-white">
      <MallaDecision intensidad={0.18} className="absolute inset-0 text-white" />

      <Container className="relative">
        <div className="flex min-h-[100dvh] flex-col justify-center pb-24 pt-32 lg:pt-40">
          <p className="cifras font-display text-display-1 font-estirado font-semibold leading-none text-white/20">
            404
          </p>

          <h1 className="text-display-3 font-display font-estirado mt-8 text-balance font-semibold">
            Esta página no existe
          </h1>

          <p className="text-lead mt-6 max-w-xl text-white/70">
            Puede que el enlace esté mal escrito o que el contenido se haya movido. Desde aquí puede
            volver al inicio o ir directamente a la sección que buscaba.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <EnlaceBoton to="/" variante="inverso" tamano="lg" conVector>
              Ir al inicio
            </EnlaceBoton>
          </div>

          <nav aria-label="Secciones del sitio" className="border-white/12 mt-16 border-t pt-8">
            <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    <Vector className="opacity-50 transition-transform group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  )
}
