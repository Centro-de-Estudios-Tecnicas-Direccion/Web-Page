import { Hero } from '@/features/home/sections/Hero'
import { Oferta } from '@/features/home/sections/Oferta'
import { Catedra } from '@/features/home/sections/Catedra'
import { Noticias } from '@/features/home/sections/Noticias'

/**
 * Portada Académica del CETED.
 *
 * Flujo de información limpio (Patrón Harvard Economics):
 * 1. Hero      → Identidad, misión docente y acceso rápido.
 * 2. Oferta    → Catálogo oficial de posgrados (Maestrías y Diplomados).
 * 3. Cátedra   → Investigación aplicada (Cátedra UNESCO y Laboratorio).
 * 4. Noticias  → Publicaciones, defensas de tesis y convocatorias abiertas.
 */
export function InicioPage() {
  return (
    <>
      <Hero />
      <Oferta />
      <Catedra />
      <Noticias />
    </>
  )
}