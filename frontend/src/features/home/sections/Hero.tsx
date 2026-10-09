import { MallaDecision } from '@/components/brand/MallaDecision'
import { Logo } from '@/components/brand/Logo'
import { EnlaceBoton } from '@/components/ui/Boton'
import { siteConfig } from '@/config/site'
import { pilares } from '@/features/home/pilares'

/**
 * Seccion inicial (Hero).
 *
 * Requisito no funcional de usabilidad: "la seccion inicial debe mostrar el
 * logotipo y la informacion principal del centro". Se cumple literalmente y,
 * a la vez, establece el ritmo visual de toda la pagina.
 *
 * Decisiones de composicion:
 *  · Bloque de color plano a sangre con la trama como unica textura.
 *  · Titular en la version extendida de la familia display, a sangre por la
 *    izquierda para marcar la alineacion del resto del sitio.
 *  · La cita de la directora aparece como texto de apoyo, no como cita
 *    destacada: la institucion es el sujeto, no una persona.
 */
export function Hero() {
  return (
    <section className="sobre-ceted-800 bg-ceted-900 relative isolate overflow-hidden text-white">
      <MallaDecision intensidad={0.2} className="absolute inset-0 text-white" />

      {/* Bloque de marca arriba a la derecha: ancla visual del bloque. */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-[34rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-8 size-[22rem] rounded-full border border-white/10"
      />

      <div className="max-w-extenso relative mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[100dvh] items-center gap-16 py-28 lg:grid-cols-12 lg:py-36">
          {/* Antetitulo + titular */}
          <div className="lg:col-span-8">
            <p className="antetitulo mb-8 text-white/65">
              {siteConfig.affiliation} · {siteConfig.country}
            </p>

            <h1 className="text-display-1 font-display font-estirado text-balance font-semibold">
              Centro de Estudios de Técnicas de Dirección
            </h1>

            <p className="text-lead mt-8 max-w-xl text-white/75">
              {siteConfig.tagline}. Formamos, investigamos y prestamos servicios profesionales para
              el desarrollo de habilidades directivas en Cuba.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <EnlaceBoton to="/servicios" variante="inverso" tamano="lg" conVector>
                Ver la oferta académica
              </EnlaceBoton>
              <EnlaceBoton to="/contacto" variante="fantasma" tamano="lg" conVector>
                Contactar al CETED
              </EnlaceBoton>
            </div>
          </div>

          {/* Logotipo en el bloque de color, con su area de seguridad */}
          <div className="lg:col-span-4">
            <div className="text-ceted-600 shadow-flotante inline-flex rounded-none bg-white/95 px-10 py-8">
              <Logo height={64} />
            </div>

            <blockquote className="border-ceted-400 mt-12 max-w-sm border-l-2 pl-6">
              <p className="text-sm leading-relaxed text-white/70">
                «Nuestro concepto es que para entrenar a directivos tiene que existir un espacio que
                no sea el aula clásica. Tiene que haber un espacio de intercambio, de socialización,
                de autonomía, que propicie el debate porque de ahí surgen las nuevas ideas.»
              </p>
              <footer className="font-display text-nota tracking-etiqueta mt-4 font-semibold uppercase text-white/50">
                Dra. C. Katy C. Herrera Lemus
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Tira de atributos: los cuatro pilares en una sola linea */}
      <div className="border-white/12 relative border-t">
        <div className="max-w-extenso mx-auto px-5 sm:px-8 lg:px-12">
          <ul className="grid grid-cols-2 divide-white/10 lg:grid-cols-4 lg:divide-x">
            {pilares.map((pilar) => (
              <li key={pilar.indice} className="px-0 py-6 lg:px-8 lg:first:pl-0">
                <span className="cifras font-display text-etiqueta tracking-etiqueta text-ceted-300 block font-semibold uppercase">
                  {pilar.indice} · {pilar.titulo}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
