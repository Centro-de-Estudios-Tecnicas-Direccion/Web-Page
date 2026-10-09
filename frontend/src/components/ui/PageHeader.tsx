import type { ReactNode } from 'react'

import { MallaDecision } from '@/components/brand/MallaDecision'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

type PageHeaderProps = {
  /** Antetitulo corto: "Servicios", "Claustro"… */
  antetitulo: string
  titulo: ReactNode
  descripcion?: ReactNode
  children?: ReactNode
}

/**
 * Cabecera de pagina interior.
 *
 * Todas las paginas de segundo nivel abren con el mismo bloque de color que
 * cierra el pie. Es el recurso que da unidad al sitio: el visitante siempre
 * sabe donde esta porque la pagina le dice como se llama.
 */
export function PageHeader({ antetitulo, titulo, descripcion, children }: PageHeaderProps) {
  return (
    <header className="sobre-ceted-800 bg-ceted-900 relative isolate overflow-hidden text-white">
      <MallaDecision intensidad={0.16} className="absolute inset-0 text-white" />

      <Container className="relative">
        <div className="pb-20 pt-32 lg:pb-28 lg:pt-40">
          <p className="antetitulo mb-8 text-white/60">{antetitulo}</p>
          <h1 className="text-display-1 font-display font-estirado max-w-4xl text-balance font-semibold">
            {titulo}
          </h1>
          {descripcion && (
            <div className="text-lead mt-8 max-w-2xl text-white/75">{descripcion}</div>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </Container>
    </header>
  )
}

/**
 * Aviso de contenido pendiente de backend.
 *
 * Se usa en las paginas cuya informacion llegara desde la API: deja claro que
 * el hueco es tecnico y no de contenido, para que ni el usuario ni el equipo
 * lo interpreten como un error.
 */
export function AvisoPendiente({
  titulo,
  descripcion,
  className,
}: {
  titulo: string
  descripcion: string
  className?: string
}) {
  return (
    <div className={cn('border-tinta-300 bg-tinta-50 border border-dashed p-8', className)}>
      <p className="font-display text-etiqueta tracking-etiqueta text-ceted-600 font-semibold uppercase">
        Pendiente de la API
      </p>
      <h2 className="font-display mt-4 text-[1.25rem] font-semibold">{titulo}</h2>
      <p className="text-tinta-600 mt-3 max-w-prose">{descripcion}</p>
    </div>
  )
}
