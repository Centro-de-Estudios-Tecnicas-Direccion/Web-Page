import { MallaDecision } from '@/components/brand/MallaDecision'
import { EnlaceBoton } from '@/components/ui/Boton'
import { EncabezadoSeccion, Seccion } from '@/components/ui/Seccion'
import { Tarjeta } from '@/components/ui/Tarjeta'
import { catedra } from '@/features/home/catedra'

/**
 * Catedra UNESCO · Redec.
 *
 * Es el bloque que ancla la dimension internacional del centro. Se presenta
 * sobre el azul institucional porque es el proyecto de mayor visibilidad; el
 * resto del sitio lo rodea con superficies claras y el bloque oscuro del hero.
 */
export function Catedra() {
  return (
    <Seccion tono="marca" id="catedra" indice="03" rail="Cátedra UNESCO">
      <div className="relative isolate overflow-hidden">
        <MallaDecision intensidad={0.07} className="absolute inset-0 text-white" />

        <div className="relative z-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <EncabezadoSeccion antetitulo={`Desde ${catedra.fecha}`} titulo={catedra.titulo}>
              <p>{catedra.resumen}</p>
            </EncabezadoSeccion>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="antetitulo mb-6 text-white/70">Objetivos</h3>
            <ul className="space-y-4">
              {catedra.objetivos.map((objetivo) => (
                <li key={objetivo} className="text-lead flex gap-4 text-white/85">
                  <span aria-hidden="true" className="mt-3 size-2 shrink-0 bg-white" />
                  {objetivo}
                </li>
              ))}
            </ul>

            <h3 className="antetitulo mb-6 mt-12 text-white/70">Proyectos destacados</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {catedra.proyectos.map((proyecto) => (
                <Tarjeta key={proyecto.nombre} tono="plena">
                  <h4 className="font-display text-[1.0625rem] font-semibold tracking-tight">
                    {proyecto.nombre}
                  </h4>
                  <p className="mt-3 text-sm text-white/70">{proyecto.descripcion}</p>
                </Tarjeta>
              ))}
            </div>

            <div className="mt-10">
              <EnlaceBoton to="/proyectos" variante="inverso" conVector>
                Conocer los proyectos
              </EnlaceBoton>
            </div>
          </div>
        </div>
      </div>
    </Seccion>
  )
}
