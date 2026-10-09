import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Une clases condicionales y resuelve conflictos de Tailwind.
 * `cn('p-2', cond && 'p-4')` -> siempre gana la ultima regla.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
