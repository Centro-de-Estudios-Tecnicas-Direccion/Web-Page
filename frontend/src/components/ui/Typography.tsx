import { Link } from 'react-router'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/lib/cn'

/* -------------------------------------------------------------------------- */
/* Antetitulo                                                                  */
/* -------------------------------------------------------------------------- */

type EyebrowProps = {
  children: ReactNode
  className?: string
}

/**
 * Antetitulo en versalitas con linea de entrada.
 * Sustituye al punto o al bullet como recurso de entrada de seccion.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn('antetitulo text-ceted-600', className)}>
      <span>{children}</span>
    </p>
  )
}

/* -------------------------------------------------------------------------- */
/* Titulares                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Titular principal. Usa la version extendida de la familia display, que es la
 * que genera el impacto; por debajo de 24px el ancho se normaliza para no
 * comprometer la legibilidad.
 */
function Display1({ className, ...props }: ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1
      className={cn(
        'text-display-1 font-display font-estirado text-balance font-semibold',
        className,
      )}
      {...props}
    />
  )
}

function Display2({ className, ...props }: ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      className={cn(
        'text-display-2 font-display font-estirado text-balance font-semibold',
        className,
      )}
      {...props}
    />
  )
}

function Display3({ className, ...props }: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      className={cn('text-display-3 font-display text-balance font-semibold', className)}
      {...props}
    />
  )
}

function Subtitle({ className, ...props }: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      className={cn('font-display text-[1.0625rem] font-semibold tracking-tight', className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/* Textos                                                                      */
/* -------------------------------------------------------------------------- */

function Lead({ className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return <p className={cn('text-lead text-tinta-600', className)} {...props} />
}

function Body({ className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return <p className={cn('text-body', className)} {...props} />
}

function Small({ className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return <p className={cn('text-tinta-600 text-sm', className)} {...props} />
}

/** Nota al pie y metadatos: el cuerpo mas pequeno permitido por la escala. */
function Nota({ className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return <p className={cn('text-nota text-tinta-500', className)} {...props} />
}

/* -------------------------------------------------------------------------- */
/* Enlaces                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Enlace de marca: subrayado que crece desde la izquierda.
 * Dentro de un boton pierde el subrayado para no duplicar la senal.
 */
function LinkText({ className, to, children, ...props }: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link to={to} className={cn('enlace-marca text-ceted-700 font-medium', className)} {...props}>
      {children}
    </Link>
  )
}

function LinkExterno({ className, children, ...props }: ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      className={cn('enlace-marca text-ceted-700 font-medium', className)}
      rel="noreferrer noopener"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
}

export { Body, Display1, Display2, Display3, Lead, LinkExterno, LinkText, Nota, Small, Subtitle }
