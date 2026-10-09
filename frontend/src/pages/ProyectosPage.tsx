import { PageHeader } from '@/components/ui/PageHeader'
import { Seccion, EncabezadoSeccion } from '@/components/ui/Seccion'
import { Tarjeta, Distintivo } from '@/components/ui/Tarjeta'
import { EnlaceBoton } from '@/components/ui/Boton'
import { MallaDecision } from '@/components/brand/MallaDecision'
import { catedra } from '@/features/home/catedra'
import { lineas } from '@/features/home/lineas'

export default function ProyectosPage() {
  return (
    <>
      <PageHeader
        antetitulo="Proyectos"
        titulo="Extensión institucional y acción territorial"
        descripcion="El CETED trabaja dentro y fuera de la universidad: gabinete metodológico, red de centros en todo el país y la Cátedra UNESCO de Economías Circulares."
      />

      <Seccion tono="tinta" compacta>
        <EncabezadoSeccion
          antetitulo="Estructura"
          titulo="Dónde operamos"
          className="max-w-prose"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              titulo: 'Gabinete Metodológico',
              texto:
                'Espacio dedicado a la investigación y la aplicación de metodologías innovadoras para la enseñanza de las ciencias de la administración.',
            },
            {
              titulo: 'Red de centros',
              texto:
                'Una red de centros en todo el país que permite tener un impacto nacional en la formación de directivos.',
            },
            {
              titulo: 'Laboratorio Alexis Codina',
              texto:
                'Entrenamiento de directivos con escenarios simulados de crisis, equipo y resolución de problemas.',
            },
          ].map((bloque) => (
            <Tarjeta key={bloque.titulo} interactiva>
              <h3 className="font-display text-[1.125rem] font-semibold tracking-tight">
                {bloque.titulo}
              </h3>
              <p className="text-tinta-600 mt-4 text-sm">{bloque.texto}</p>
            </Tarjeta>
          ))}
        </div>
      </Seccion>

      <Seccion tono="marca" compacta>
        <div className="relative isolate overflow-hidden">
          <MallaDecision intensidad={0.07} className="absolute inset-0 text-white" />
          <div className="relative isolate overflow-hidden">
            <EncabezadoSeccion
              antetitulo={`Cátedra UNESCO · ${catedra.fecha}`}
              titulo={catedra.titulo}
              className="max-w-prose"
            >
              <p>{catedra.resumen}</p>
            </EncabezadoSeccion>

            <div className="grid gap-6 md:grid-cols-2">
              {catedra.proyectos.map((proyecto) => (
                <Tarjeta key={proyecto.nombre} tono="plena">
                  <Distintivo tono="inverso">Proyecto</Distintivo>
                  <h3 className="font-display text-display-3 mt-5 font-semibold">
                    {proyecto.nombre}
                  </h3>
                  <p className="mt-4 text-white/75">{proyecto.descripcion}</p>
                </Tarjeta>
              ))}
            </div>
          </div>
        </div>
      </Seccion>

      <Seccion tono="hielo" compacta>
        <EncabezadoSeccion antetitulo="Líneas de investigación" titulo="Dónde se pregunta" />
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

        <div className="mt-14">
          <EnlaceBoton to="/contacto" variante="solido" conVector>
            Proponer un proyecto conjunto
          </EnlaceBoton>
        </div>
      </Seccion>
    </>
  )
}
