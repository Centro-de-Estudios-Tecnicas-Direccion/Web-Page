import { cn } from '@/lib/cn'

type MallaDecisionProps = {
  className?: string
  /** Opacidad del trazo. Mantener bajo: es textura, no ilustracion. */
  intensidad?: number
}

/**
 * Grafica de apoyo 1 · "Malla de decision".
 *
 * Red ortogonal de nodos unidos en angulo recto, escalable sin perder el
 * gesto. Representa el metodo del CETED —diagnosticar, decidir, ejecutar— y
 * cumple tres funciones a la vez:
 *   · textura de fondo en secciones de color plano;
 *   · contenedor de un bloque de contenido;
 *   · ritmo visual que separa bloques sin necesidad de bordes.
 *
 * El area de seguridad del manual se respeta aqui por construccion: la
 * geometria nace de una unidad (el nodo) y todo lo demas es multiplo.
 */
export function MallaDecision({ className, intensidad = 0.16 }: MallaDecisionProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      className={cn('trama-malla text-ceted-600 size-full', className)}
      aria-hidden="true"
      focusable="false"
      style={{ opacity: intensidad }}
    >
      {/* Retícula de decision: tres ejes que convergen en un nodo rector. */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
        <path d="M0 120 H140 V40 H400" />
        <path d="M0 260 H90 V330 H400" />
        <path d="M400 210 H250 V300 H150 V400" />
        <path d="M140 40 V120 H260 V40" opacity="0.55" />
      </g>

      {/* Nodos */}
      <g fill="currentColor">
        <rect x="134" y="114" width="12" height="12" />
        <rect x="84" y="324" width="12" height="12" />
        <rect x="244" y="204" width="12" height="12" />
        <rect x="254" y="34" width="12" height="12" />
        <rect x="144" y="294" width="12" height="12" />
      </g>
    </svg>
  )
}

/**
 * Grafica de apoyo 2 · "Vector".
 *
 * Unidad minima de navegacion. Se emplea como marcador de enlace, como viñeta
 * de lista y como indicador de transicion entre secciones. Hereda `currentColor`
 * y se desplaza al interactuarse.
 */
export function Vector({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn('vector', className)} />
}
