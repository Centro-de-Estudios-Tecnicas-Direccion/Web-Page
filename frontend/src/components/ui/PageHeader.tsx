import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

type PageHeaderProps = {
  antetitulo: string
  titulo: ReactNode
  descripcion?: ReactNode
  children?: ReactNode
}

export function PageHeader({ antetitulo, titulo, descripcion, children }: PageHeaderProps) {
  return (
    <header className="bg-white pt-36 pb-12 border-b border-tinta-200">
      <Container ancho="proceso">
        <div className="max-w-3xl">
          <span className="font-sans text-xs uppercase tracking-widest text-ceted-600 font-bold block mb-2">
            {antetitulo}
          </span>
          <h1 className="font-display text-display-1 font-normal text-tinta-950">
            {titulo}
          </h1>
          {descripcion && (
            <div className="font-sans text-lead text-tinta-600 mt-4 leading-relaxed">
              {descripcion}
            </div>
          )}
          {children && <div className="mt-6 pt-6 border-t border-tinta-200">{children}</div>}
        </div>
      </Container>
    </header>
  )
}

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
    <div className={cn('border border-tinta-200 bg-tinta-50 p-6', className)}>
      <span className="font-sans text-[0.7rem] uppercase tracking-wider text-ceted-600 font-bold block mb-1">
        Información del Sistema
      </span>
      <h2 className="font-display text-lg font-medium text-tinta-900">{titulo}</h2>
      <p className="font-sans text-xs text-tinta-600 mt-2 max-w-prose leading-relaxed">{descripcion}</p>
    </div>
  )
}