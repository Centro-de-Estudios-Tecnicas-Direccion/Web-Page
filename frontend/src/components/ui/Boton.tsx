import { Link } from 'react-router'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Vector } from '@/components/brand/MallaDecision'
import { cn } from '@/lib/cn'

type Variante = 'solido' | 'contorno' | 'inverso' | 'fantasma' | 'texto'
type Tamano = 'sm' | 'md' | 'lg'

type BotonBaseProps = {
  children: ReactNode
  variante?: Variante
  tamano?: Tamano
  /** Muestra el vector direccional de la marca. */
  conVector?: boolean
  className?: string
  /** Oculta el texto a lectores de pantalla; el vector ya aporta el significado. */
  srSolo?: boolean
}

const VARIANTES: Record<Variante, string> = {
  // Azul institucional. Un solo boton solido por pantalla.
  solido: 'bg-ceted-600 text-white hover:bg-ceted-700 active:bg-ceted-800 disabled:bg-tinta-300',
  contorno:
    'border border-ceted-600 text-ceted-700 hover:bg-ceted-600 hover:text-white active:bg-ceted-700',
  // Para bloques de color oscuro: se comporta como el solido invertido.
  inverso: 'bg-white text-ceted-800 hover:bg-ceted-50 active:bg-ceted-100 disabled:bg-tinta-300',
  // Sobre fotografia: necesita su propio fondo para garantizar contraste.
  fantasma:
    'border border-white/60 text-white backdrop-blur-sm hover:bg-white hover:text-ceted-800',
  texto: 'text-ceted-700 hover:text-ceted-500 px-0',
}

const TAMANOS: Record<Tamano, string> = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-[0.9375rem]',
}

function clases(variante: Variante, tamano: Tamano, conVector: boolean, className?: string) {
  return cn(
    'group/btn inline-flex items-center justify-center gap-2.5 rounded-xs font-display',
    'font-semibold tracking-tight whitespace-nowrap select-none',
    'transition-colors duration-200 ease-marca',
    'disabled:cursor-not-allowed disabled:opacity-70',
    'aria-disabled:pointer-events-none',
    variante !== 'texto' && TAMANOS[tamano],
    VARIANTES[variante],
    conVector && 'group-hover/btn:[&_.vector]:translate-x-1',
    className,
  )
}

function Contenido({
  children,
  conVector,
  srSolo,
}: Pick<BotonBaseProps, 'children' | 'conVector' | 'srSolo'>) {
  return (
    <>
      <span className={cn(srSolo && 'sr-only')}>{children}</span>
      {conVector && <Vector className="opacity-70" />}
    </>
  )
}

type BotonProps = BotonBaseProps & Omit<ComponentPropsWithoutRef<'button'>, 'children'>

/** Accion dentro de la pagina: enviar, confirmar, continuar. */
export function Boton({
  children,
  variante = 'solido',
  tamano = 'md',
  conVector = false,
  className,
  srSolo,
  type = 'button',
  ...props
}: BotonProps) {
  return (
    <button type={type} className={clases(variante, tamano, conVector, className)} {...props}>
      <Contenido conVector={conVector} srSolo={srSolo}>
        {children}
      </Contenido>
    </button>
  )
}

type EnlaceBotonProps = BotonBaseProps & { to: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    'children' | 'className'
  >

/** Navegacion: siempre un enlace de verdad, no un `onClick` disfrazado. */
export function EnlaceBoton({
  children,
  to,
  variante = 'solido',
  tamano = 'md',
  conVector = false,
  className,
  srSolo,
  ...props
}: EnlaceBotonProps) {
  return (
    <Link to={to} className={clases(variante, tamano, conVector, className)} {...props}>
      <Contenido conVector={conVector} srSolo={srSolo}>
        {children}
      </Contenido>
    </Link>
  )
}

type EnlaceExternoBotonProps = BotonBaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<'a'>,
    'children' | 'className'
  >

export function EnlaceExternoBoton({
  children,
  href,
  variante = 'contorno',
  tamano = 'md',
  conVector = false,
  className,
  srSolo,
  ...props
}: EnlaceExternoBotonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={clases(variante, tamano, conVector, className)}
      {...props}
    >
      <Contenido conVector={conVector} srSolo={srSolo}>
        {children}
      </Contenido>
    </a>
  )
}
