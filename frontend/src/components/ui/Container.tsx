import { cn } from '@/lib/cn'
import type { ElementType, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  as?: ElementType
  /** `proceso` = 1200px para contenido. `extenso` = 1440px para bloques a sangre. */
  ancho?: 'proceso' | 'extenso'
  className?: string
}

/**
 * Contenedor de rejilla.
 * Un solo control de ancho para todo el sitio: la medida de linea se mantiene
 * estable en cada pagina, que es lo que sostiene la legibilidad.
 */
export function Container({
  children,
  as: Tag = 'div',
  ancho = 'proceso',
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-5 sm:px-8 lg:px-12',
        ancho === 'proceso' ? 'max-w-proceso' : 'max-w-extenso',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
