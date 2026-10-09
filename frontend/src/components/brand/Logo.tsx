import { LOGO_PATH_DATA, LOGO_RATIO, LOGO_VIEWBOX } from '@/assets/brand/logo-paths'
import { cn } from '@/lib/cn'

type LogoProps = {
  /**
   * Altura en pixels. El ancho se deriva de la proporcion real del trazado,
   * de modo que el logotipo no puede deformarse.
   */
  height?: number
  /** Añade el generico textual junto al logotipo. */
  withGeneric?: boolean
  /** Oculta el logotipo a lectores de pantalla cuando el texto cercano ya lo nombra. */
  decorative?: boolean
  className?: string
}

/**
 * Logotipo del CETED.
 *
 * El trazado vectorial va incrustado (no se carga como `<img>`) para que herede
 * `currentColor` y pueda recolorearse desde CSS: el mismo componente sirve
 * sobre fondos claros y oscuros sin generar variantes.
 *
 * Reglas de uso — area de seguridad: el espacio libre alrededor del
 * identificador equivale a la altura de su trazo. No deformarlo, girarlo,
 * Sombrearlo, degradarlo ni encerrarlo en un marco.
 */
export function Logo({
  height = 40,
  withGeneric = false,
  decorative = false,
  className,
}: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <svg
        viewBox={LOGO_VIEWBOX}
        role={decorative ? 'presentation' : 'img'}
        aria-hidden={decorative || undefined}
        aria-label={decorative ? undefined : 'CETED, Centro de Estudios de Técnicas de Dirección'}
        className="block shrink-0"
        style={{ height: `${height}px`, width: `${height * LOGO_RATIO}px` }}
      >
        {/* Un unico `path` con todos los contornos anidados: la regla par-impar
            es la que abre los huecos del logotipo. */}
        <path d={LOGO_PATH_DATA} fill="currentColor" fillRule="evenodd" />
      </svg>

      {withGeneric && (
        <span className="flex flex-col justify-center leading-[1.15]">
          <span className="font-display text-[0.92em] font-semibold tracking-tight">
            Centro de Estudios
          </span>
          <span className="font-display text-[0.92em] font-semibold tracking-tight opacity-75">
            de Técnicas de Dirección
          </span>
        </span>
      )}
    </span>
  )
}
