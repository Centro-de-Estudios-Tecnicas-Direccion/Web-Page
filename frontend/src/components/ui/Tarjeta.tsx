import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

/* -------------------------------------------------------------------------- */
/* Tarjeta                                                                     */
/* -------------------------------------------------------------------------- */

type TarjetaProps = {
  children: ReactNode
  /** `contorno` = borde fino, el uso por defecto. `plena` = bloque de color. */
  tono?: 'contorno' | 'plena' | 'acento'
  /** Anima la elevacion y el vector al pasar el cursor. */
  interactiva?: boolean
  className?: string
}

/**
 * Tarjeta base.
 * Sin sombras decorativas: la jerarquia se construye con borde, color y aire,
 * coherente con una identidad geometrica.
 */
export function Tarjeta({
  children,
  tono = 'contorno',
  interactiva = false,
  className,
}: TarjetaProps) {
  return (
    <div
      className={cn(
        'rounded-xs ease-marca relative p-7 transition-colors duration-200',
        tono === 'contorno' && 'border-tinta-200 border bg-white',
        tono === 'plena' && 'bg-white/6 text-white ring-1 ring-white/15',
        tono === 'acento' && 'border-ceted-600 bg-ceted-600 border text-white',
        interactiva &&
          'group/card hover:border-ceted-600 hover:bg-ceted-50 focus-within:border-ceted-600 focus-within:bg-ceted-50',
        className,
      )}
    >
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Distintivo                                                                  */
/* -------------------------------------------------------------------------- */

type DistintivoProps = {
  children: ReactNode
  /** `marca` = azul institucional. `inverso` = para bloques oscuros. */
  tono?: 'marca' | 'inverso' | 'neutro'
  className?: string
}

/** Distintivo de etiqueta: nivel de curso, estado, categoria. */
export function Distintivo({ children, tono = 'marca', className }: DistintivoProps) {
  return (
    <span
      className={cn(
        'rounded-xs font-display text-etiqueta inline-flex w-fit items-center px-2.5 py-1 font-semibold uppercase',
        tono === 'marca' && 'bg-ceted-600 text-white',
        tono === 'inverso' && 'bg-white/12 text-white ring-1 ring-white/25',
        tono === 'neutro' && 'bg-ceted-50 text-ceted-700',
        className,
      )}
    >
      {children}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/* Lista de definiciones                                                      */
/* -------------------------------------------------------------------------- */

/** Pares dato/valor. Reemplaza a las tablas sueltas en la ficha de un curso. */
export function ListaDatos({
  items,
  className,
}: {
  items: { dato: string; valor: ReactNode }[]
  className?: string
}) {
  return (
    <dl className={cn('divide-tinta-200 border-tinta-200 divide-y border-y', className)}>
      {items.map(({ dato, valor }) => (
        <div
          key={dato}
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
        >
          <dt className="font-display text-etiqueta tracking-etiqueta text-tinta-500 font-semibold uppercase">
            {dato}
          </dt>
          <dd className="text-tinta-900 text-sm font-medium">{valor}</dd>
        </div>
      ))}
    </dl>
  )
}
