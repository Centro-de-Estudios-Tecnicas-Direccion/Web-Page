import { EncabezadoSeccion, Seccion } from '@/components/ui/Seccion'
import { pilares } from '@/features/home/pilares'

/**
 * Seccion de atributos.
 *
 * Traduce en contenido los cuatro pilares de la identidad. El recurso grafico
 * es el mismo numero gigante y la misma linea de la ficha tecnica: una
 * retícula sobria que ordena sin competir con el texto.
 */
export function Pilares() {
  return (
    <Seccion tono="tinta" indice="01" rail="Identidad">
      <EncabezadoSeccion
        antetitulo="Lo que nos define"
        titulo="Cuatro atributos, una escuela"
        className="max-w-prose"
      >
        <p>
          El CETED se sostiene sobre cuatro ideas que condicionan todo lo que hacemos: el rigor de
          la formación, la utilidad de la investigación, la densidad de nuestra red y la orientación
          práctica de la enseñanza.
        </p>
      </EncabezadoSeccion>

      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {pilares.map((pilar) => (
          <li key={pilar.indice} className="border-tinta-200 group border-t pt-6">
            <div className="flex items-baseline gap-5">
              <span className="cifras font-display text-display-3 text-ceted-600/30 group-hover:text-ceted-600 font-semibold leading-none transition-colors">
                {pilar.indice}
              </span>
              <div>
                <h3 className="font-display text-display-3 font-semibold tracking-tight">
                  {pilar.titulo}
                </h3>
                <p className="text-tinta-600 mt-4 max-w-prose">{pilar.texto}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Seccion>
  )
}
