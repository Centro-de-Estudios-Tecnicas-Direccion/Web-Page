import { Vector } from '@/components/brand/MallaDecision'
import { PageHeader } from '@/components/ui/PageHeader'
import { EnlaceBoton } from '@/components/ui/Boton'
import { EncabezadoSeccion, Seccion } from '@/components/ui/Seccion'
import { Distintivo } from '@/components/ui/Tarjeta'
import type { NivelCurso, Programa } from '@/types/domain'
import { rutaAsset } from '@/lib/assets'
import { cursos, diplomados, doctorado, maestrias } from '@/features/home/programas'
import { lineas } from '@/features/home/lineas'

function horas(valor: number): string {
  return `${valor.toLocaleString('es-CU')} h`
}

const NIVEL: Record<NivelCurso, string> = {
  maestria: 'Maestria',
  diplomado: 'Diplomado',
  curso: 'Curso',
  doctorado: 'Doctorado',
}

function ProgramaCard({ programa }: { programa: Programa }) {
  return (
    <article className="group/card border-ceted-600 hover:border-ceted-900 flex flex-col border-t-2 bg-white p-7 transition-colors duration-200">
      <Distintivo tono="neutro">{NIVEL[programa.nivel]}</Distintivo>

      <p className="text-tinta-600 mt-6 flex-1">{programa.descripcion}</p>

      <dl className="border-tinta-200 text-nota mt-8 grid grid-cols-3 gap-4 border-t pt-5">
        <div>
          <dt className="tracking-etiqueta text-tinta-500 uppercase">Carga</dt>
          <dd className="cifras mt-1 text-sm font-semibold">{horas(programa.cargaHoraria)}</dd>
        </div>
        <div>
          <dt className="tracking-etiqueta text-tinta-500 uppercase">Ediciones</dt>
          <dd className="cifras mt-1 text-sm font-semibold">{programa.ediciones ?? '—'}</dd>
        </div>
        <div>
          <dt className="tracking-etiqueta text-tinta-500 uppercase">Plazas</dt>
          <dd className="cifras mt-1 text-sm font-semibold">{programa.plazas ?? '—'}</dd>
        </div>
      </dl>
    </article>
  )
}

function Bloque({
  id,
  indice,
  titulo,
  descripcion,
  children,
}: {
  id?: string
  indice: string
  titulo: string
  descripcion?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="border-tinta-200 py-seccion-sm scroll-mt-28 border-t first:border-t-0 first:pt-0"
    >
      <div className="mb-12 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="cifras font-display text-display-3 text-ceted-600/30 font-semibold leading-none">
            {indice}
          </p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-display-3 font-display text-balance font-semibold">{titulo}</h2>
          {descripcion && (
            <p className="text-lead text-tinta-600 mt-4 max-w-prose">{descripcion}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  )
}

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        antetitulo="Servicios"
        titulo="Formación, investigación y actualización profesional"
        descripcion="Un catálogo que va del doctorado al curso corto, con la misma exigencia metodológica en todos los niveles."
      >
        <nav aria-label="Ir a una sección">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              ['#master', 'Maestrías'],
              ['#diplomados', 'Diplomados'],
              ['#cursos', 'Cursos'],
              ['#doctorado', 'Doctorado'],
              ['#lineas', 'Líneas de investigación'],
              ['#laboratorio', 'Laboratorio'],
            ].map(([ancla, etiqueta]) => (
              <li key={ancla}>
                <a
                  href={ancla}
                  className="font-display group inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
                >
                  <Vector className="opacity-50 transition-transform group-hover:translate-x-0.5" />
                  {etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <Seccion tono="tinta" compacta>
        <Bloque
          id="master"
          indice="01"
          titulo="Maestrías"
          descripcion="Programas de posgrado que cubren la formación directiva y la gestión de proyectos para el desarrollo."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {maestrias.map((p) => (
              <ProgramaCard key={p.id} programa={p} />
            ))}
          </div>
        </Bloque>

        <Bloque id="diplomados" indice="02" titulo="Diplomados">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diplomados.map((p) => (
              <ProgramaCard key={p.id} programa={p} />
            ))}
          </div>
        </Bloque>

        <Bloque id="cursos" indice="03" titulo="Cursos y entrenamientos">
          <div className="grid gap-6 md:grid-cols-3">
            {cursos.map((p) => (
              <ProgramaCard key={p.id} programa={p} />
            ))}
          </div>
        </Bloque>

        <Bloque id="doctorado" indice="04" titulo="Doctorado" descripcion={doctorado.descripcion}>
          <div className="border-tinta-200 bg-tinta-50 border p-8">
            <Distintivo tono="neutro">Colaborativo</Distintivo>
            <p className="text-lead text-tinta-700 mt-5">{doctorado.nombre}</p>
          </div>
        </Bloque>
      </Seccion>

      <Seccion tono="hielo" id="lineas" compacta>
        <EncabezadoSeccion
          antetitulo="Investigación"
          titulo="Seis líneas donde el claustro trabaja"
        />
        <ol className="bg-tinta-200 grid gap-px md:grid-cols-2">
          {lineas.map((linea, i) => (
            <li key={linea.id} className="flex gap-6 bg-white p-8">
              <span className="cifras font-display text-etiqueta tracking-etiqueta text-ceted-600/50 shrink-0 font-semibold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-[1.0625rem] font-semibold leading-snug">
                  {linea.nombre}
                </h3>
                <p className="text-tinta-600 mt-2 text-sm">{linea.descripcion}</p>
              </div>
            </li>
          ))}
        </ol>
      </Seccion>

      <Seccion tono="inverso" id="laboratorio" indice="04" rail="Laboratorio" compacta>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <EncabezadoSeccion
              antetitulo="Laboratorio Alexis Codina Jiménez"
              titulo="Entrenar la decisión antes de que se tome"
            >
              <p>
                Un espacio equipado con tecnología para simular crisis, trabajo en equipo y
                resolución de problemas, diseñado para que el directivos practique antes de que la
                realidad lo obligue.
              </p>
            </EncabezadoSeccion>
            <EnlaceBoton to="/contacto" variante="inverso" conVector>
              Solicitar una visita
            </EnlaceBoton>
          </div>
          <figure className="lg:col-span-6 lg:col-start-7">
            <img
              src={rutaAsset('images/edificio-economia.jpg')}
              alt="Edificio de la Facultad de Economía de la Universidad de La Habana"
              loading="lazy"
              className="foto-oscuro aspect-4/3 w-full object-cover"
            />
          </figure>
        </div>
      </Seccion>
    </>
  )
}
