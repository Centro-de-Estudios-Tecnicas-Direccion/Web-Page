import { EnlaceBoton, EnlaceExternoBoton } from '@/components/ui/Boton'
import { Container } from '@/components/ui/Container'
import { EncabezadoSeccion, Seccion } from '@/components/ui/Seccion'
import { Distintivo } from '@/components/ui/Tarjeta'
import { maestrias } from '@/features/home/programas'
import { rutaAsset } from '@/lib/assets'
import type { Programa } from '@/types/domain'

function horas(valor: number): string {
  return `${valor.toLocaleString('es-CU')} h`
}

function Ficha({ programa }: { programa: Programa }) {
  return (
    <article className="group/card border-tinta-900 flex flex-col border-t-2 pt-7">
      <Distintivo>{programa.id.startsWith('mae-') ? 'Posgrado' : 'Formación continua'}</Distintivo>

      <h3 className="font-display text-display-3 mt-5 text-balance font-semibold">
        {programa.nombre}
      </h3>

      <p className="text-tinta-600 mt-4 flex-1">{programa.descripcion}</p>

      <dl className="border-tinta-200 text-nota text-tinta-500 mt-7 flex flex-wrap gap-x-8 gap-y-2 border-t pt-4">
        <div className="flex gap-2">
          <dt>Carga</dt>
          <dd className="cifras text-tinta-900 font-semibold">{horas(programa.cargaHoraria)}</dd>
        </div>
        {programa.ediciones !== null && (
          <div className="flex gap-2">
            <dt>Ediciones</dt>
            <dd className="cifras text-tinta-900 font-semibold">{programa.ediciones}</dd>
          </div>
        )}
        {programa.plazas !== null && (
          <div className="flex gap-2">
            <dt>Plazas</dt>
            <dd className="cifras text-tinta-900 font-semibold">{programa.plazas}</dd>
          </div>
        )}
      </dl>
    </article>
  )
}

/**
 * Oferta académica.
 *
 * Seccion de alto impacto visual. Solo muestra la oferta principal
 * (maestrias); el catalogo completo vive en `/servicios`.
 */
export function Oferta() {
  return (
    <Seccion tono="hielo" id="oferta">
      <EncabezadoSeccion
        antetitulo="Formación de posgrado"
        titulo="Maestrías con más de 25 ediciones de experiencia"
      >
        <p>
          La Maestría en Dirección es la primera de Cuba en su tipo. Junto a ella, la Maestría en
          Gestión de Proyectos para el Desarrollo amplía la formación a los actores del desarrollo
          territorial.
        </p>
      </EncabezadoSeccion>

      <div className="grid gap-10 md:grid-cols-2">
        {maestrias.map((programa) => (
          <Ficha key={programa.id} programa={programa} />
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-4">
        <EnlaceBoton to="/servicios" variante="solido" conVector>
          Ver el catálogo completo
        </EnlaceBoton>
        <EnlaceExternoBoton
          href="mailto:info@ceted.uh.cu?subject=Consulta%20sobre%20la%20oferta%20academica"
          variante="contorno"
        >
          Consultar por correo
        </EnlaceExternoBoton>
      </div>
    </Seccion>
  )
}

/**
 * Fragmento con imagen institucional.
 *
 * El tratamiento fotografico duotono es norma de marca: ninguna fotografia se
 * publica en color natural. Sobre superficies oscuras la imagen se invierte y
 * se funde con la pantalla, de modo que la banda nunca compite con el texto.
 *
 * La banda declara su propia altura y la imagen es absoluta: asi el bloque no
 * depende del tamano intrinseco del archivo, no salta al cargar y el texto
 * siempre queda sobre una superficie estable.
 */
export function Laboratorio() {
  return (
    <section className="sobre-ceted-800 bg-ceted-800 relative isolate min-h-[34rem] overflow-hidden text-white md:min-h-[40rem] lg:min-h-[46rem]">
      <img
        src={rutaAsset('images/pasillo.jpg')}
        alt="Interior del CETED en la Universidad de La Habana"
        loading="lazy"
        className="foto-oscuro absolute inset-0 size-full object-cover"
      />
      <div aria-hidden="true" className="velo-foto absolute inset-0" />

      <Container className="py-seccion-sm relative flex min-h-[34rem] flex-col justify-end md:min-h-[40rem] lg:min-h-[46rem]">
        <p className="antetitulo text-ceted-300 mb-6">Laboratorio para el desarrollo</p>
        <h2 className="text-display-2 font-display font-estirado max-w-3xl text-balance font-semibold">
          Un espacio que no sea el aula clásica
        </h2>
        <p className="text-lead mt-6 max-w-xl text-white/85">
          El Laboratorio «Alexis Codina Jiménez» está equipado con tecnología que permite simular
          situaciones de crisis, trabajo en equipo y resolución de problemas.
        </p>
        <div className="mt-10">
          <EnlaceBoton to="/servicios#laboratorio" variante="inverso" conVector>
            Conocer el laboratorio
          </EnlaceBoton>
        </div>
      </Container>
    </section>
  )
}

/**
 * Bloque de contacto rápido.
 * Cierra el relato con una llamada a la acción, en el único lugar donde el
 * azul institucional vuelve a ser protagonista sobre fondo claro.
 */
export function Llamada() {
  return (
    <Seccion tono="marca" compacta>
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="antetitulo mb-6 text-white/70">¿Empezamos?</p>
          <h2 className="text-display-2 font-display font-estirado text-balance font-semibold">
            Hablemos de su próxima formación
          </h2>
          <p className="text-lead mt-5 text-white/80">
            Escríbanos y le orientamos sobre el programa que mejor se ajusta a su caso y al momento
            de su organización.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-4">
          <EnlaceBoton to="/contacto" variante="inverso" tamano="lg" conVector>
            Contactar
          </EnlaceBoton>
          <EnlaceBoton to="/servicios" variante="fantasma" tamano="lg" conVector>
            Diplomados y cursos
          </EnlaceBoton>
        </div>
      </div>
    </Seccion>
  )
}
