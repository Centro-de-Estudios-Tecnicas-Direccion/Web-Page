import { PageHeader, AvisoPendiente } from '@/components/ui/PageHeader'
import { Seccion } from '@/components/ui/Seccion'
import { EncabezadoSeccion } from '@/components/ui/Seccion'
import { EnlaceBoton } from '@/components/ui/Boton'
import { Vector } from '@/components/brand/MallaDecision'

const GRADOS = [
  { id: 'doctor', etiqueta: 'Doctor en Ciencias' },
  { id: 'master', etiqueta: 'Máster' },
  { id: 'titular', etiqueta: 'Profesor Titular' },
  { id: 'asociado', etiqueta: 'Profesor Asociado' },
  { id: 'asistente', etiqueta: 'Profesor Asistente' },
] as const

/**
 * Clausstro.
 *
 * Requisito funcional: mostrar el conjunto de profesores y su informacion
 * detallada para consulta del publico. La ficha individual llegara desde la
 * API; aqui queda el filtro por grado y por linea de investigacion, que es la
 * forma en que el publico real busca a un profesor.
 */
export default function ClaustroPage() {
  return (
    <>
      <PageHeader
        antetitulo="Claustro"
        titulo="Los docentes e investigadores del CETED"
        descripcion="Un equipo multidisciplinario que combina la experiencia de los doctores y profesores titulares con la frescura de los jovenes investigadores."
      />

      <Seccion tono="tinta" compacta>
        <EncabezadoSeccion
          antetitulo="Criterios de búsqueda"
          titulo="Filtrar por grado académico o línea de investigación"
        />

        <div className="border-tinta-200 mb-14 flex flex-wrap items-center gap-3 border-y py-5">
          <span className="font-display text-etiqueta tracking-etiqueta text-tinta-500 me-2 font-semibold uppercase">
            Grado
          </span>
          {GRADOS.map((grado) => (
            <button
              key={grado.id}
              type="button"
              className="rounded-xs border-tinta-300 font-display text-tinta-700 hover:border-ceted-600 hover:bg-ceted-50 border px-3.5 py-1.5 text-sm font-medium transition-colors"
            >
              {grado.etiqueta}
            </button>
          ))}
        </div>

        <AvisoPendiente
          titulo="Las fichas del claustro llegarán desde la API"
          descripcion="Cada profesor expone su grado, cargo, línea de investigación, biografía y correo. El modelo de datos ya está definido en `src/types/domain.ts` como `Profesor`, de modo que conectar el endpoint GET /api/claustro no requiere cambios en esta página."
        />

        <ul className="bg-tinta-200 mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="bg-white p-7">
              <div className="flex items-center gap-4">
                <div aria-hidden="true" className="bg-tinta-100 size-14 shrink-0 rounded-full" />
                <div>
                  <p className="font-display font-semibold">Nombre del profesor</p>
                  <p className="text-nota text-tinta-500">Grado académico</p>
                </div>
              </div>
              <Vector className="text-tinta-300 mt-5" />
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion tono="hielo" compacta>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <EncabezadoSeccion
            className="mb-0"
            antetitulo="Docencia"
            titulo="¿Eres docente o quieres incorporarte al claustro?"
          >
            <p>
              El CETED mantiene acuerdos con profesionales en ejercicio que tengan experiencia
              directiva y disposición para la investigación aplicada.
            </p>
          </EncabezadoSeccion>
          <EnlaceBoton to="/contacto" variante="solido" conVector className="shrink-0">
            Escribir al CETED
          </EnlaceBoton>
        </div>
      </Seccion>
    </>
  )
}
