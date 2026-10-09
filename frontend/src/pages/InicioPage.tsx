import { Hero } from '@/features/home/sections/Hero'
import { Pilares } from '@/features/home/sections/Pilares'
import { Oferta, Laboratorio, Llamada } from '@/features/home/sections/Oferta'
import { Historia } from '@/features/home/sections/Historia'
import { Catedra } from '@/features/home/sections/Catedra'
import { Noticias } from '@/features/home/sections/Noticias'

/**
 * Portada.
 *
 * El orden de las secciones no es decorativo: es un argumento.
 *   Hero        → de que institution se trata
 *   Pilares     → con que criterios trabaja
 *   Oferta      → que forma ofrece
 *   Laboratorio → como se enseña de verdad
 *   Historia    → que respaldo tiene
 *   Catedra     → hacia donde se proyecta
 *   Noticias    → que esta pasando ahora
 *   Llamada     → que hacer a continuacion
 */
export function InicioPage() {
  return (
    <>
      <Hero />
      <Pilares />
      <Oferta />
      <Laboratorio />
      <Historia />
      <Catedra />
      <Noticias />
      <Llamada />
    </>
  )
}
