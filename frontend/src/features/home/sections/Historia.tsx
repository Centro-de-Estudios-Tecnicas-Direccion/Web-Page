import { EncabezadoSeccion, Seccion } from '@/components/ui/Seccion'
import { hitos } from '@/features/home/hitos'

/**
 * Linea de tiempo.
 *
 * Recurso heredado de la estructura del manual: una cronologia vertical sobre
 * bloque de color profundo, con el ano en caracteres grandes. Sirve para
 * anclar la institucion sin robarle sitio a la oferta formativa.
 */
export function Historia() {
  return (
    <Seccion tono="inverso" indice="02" rail="Trayectoria">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <EncabezadoSeccion
            antetitulo="Desde 1988"
            titulo="Más de tres décadas gestando desarrollo"
          >
            <p>
              Nacimos en 1988 para fortalecer el estudio y la enseñanza de la teoría y la práctica
              de la dirección en Cuba. Cada hito nos ha aproximado un poco más al territorio.
            </p>
          </EncabezadoSeccion>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {hitos.map((hito, i) => (
            <li
              key={hito.anio}
              className="grid grid-cols-[auto_1fr] gap-x-8 border-t border-white/15 py-8 first:border-t-0 first:pt-0 lg:last:border-b lg:last:pb-0"
            >
              <span className="cifras font-display text-display-2 font-estirado row-span-2 font-semibold leading-none text-white/35">
                {hito.anio}
              </span>
              <p className="text-lead text-white/85">{hito.texto}</p>
              <span className="sr-only">Hito {i + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </Seccion>
  )
}
