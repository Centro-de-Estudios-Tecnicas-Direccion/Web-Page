import type { ElementType, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type Tono = 'marca' | 'inverso' | 'hielo' | 'tinta'

type SeccionProps = {
  children: ReactNode
  /** Numero o codigo que aparece en el rail lateral. */
  indice?: string
  /** Etiqueta corta que acompaña al indice en el rail. */
  rail?: string
  tono?: Tono
  /** Reduce el ritmo vertical para secciones densas. */
  compacta?: boolean
  as?: ElementType
  id?: string
  className?: string
  /** Contenido que ocupa todo el ancho (por ejemplo, una fila de noticias). */
  aSangre?: boolean
}

const FONDO: Record<Tono, string> = {
  marca: 'bg-ceted-600 text-white sobre-ceted-800',
  inverso: 'bg-ceted-900 text-white sobre-ceted-800',
  hielo: 'bg-hielo text-tinta-900',
  tinta: 'bg-white text-tinta-900',
}

/**
 * Envoltorio de seccion — la unidad estructural de todas las paginas.
 *
 * Aporta tres cosas del manual de identidad:
 *   1. El ritmo vertical fijo (`--spacing-seccion`), igual en todo el sitio.
 *   2. El rail lateral numerado, que ordena la lectura como un documento.
 *   3. La superficie de color plano, unica via para marcar el contraste entre
 *      bloques. No hay bordes ni sombras separando secciones: el color basta.
 */
export function Seccion({
  children,
  indice,
  rail,
  tono = 'tinta',
  compacta = false,
  as: Tag = 'section',
  id,
  className,
  aSangre = false,
}: SeccionProps) {
  return (
    <Tag id={id} className={cn(FONDO[tono], compacta ? 'py-seccion-sm' : 'py-seccion', className)}>
      {rail ? (
        <div className="max-w-extenso mx-auto flex gap-6 px-5 sm:px-8 lg:px-12">
          <Rail etiqueta={rail} indice={indice} className="hidden shrink-0 lg:block" />
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      ) : (
        <div className={aSangre ? 'w-full' : 'max-w-proceso mx-auto px-5 sm:px-8 lg:px-12'}>
          {children}
        </div>
      )}
    </Tag>
  )
}

/**
 * Rail lateral: indice + etiqueta en vertical, como los pliegos del manual.
 * Se oculta por debajo de `lg` porque en movil compite con el contenido.
 */
function Rail({
  etiqueta,
  indice,
  className,
}: {
  etiqueta: string
  indice?: string
  className?: string
}) {
  return (
    <aside className={cn('w-14 pt-2', className)}>
      <div className="sticky top-32 flex flex-col items-center gap-4">
        {indice && (
          <span className="cifras font-display text-display-3 font-semibold leading-none opacity-25">
            {indice}
          </span>
        )}
        <span aria-hidden="true" className="h-10 w-px bg-current opacity-30" />
        <span className="rail-texto opacity-70">{etiqueta}</span>
      </div>
    </aside>
  )
}

/**
 * Encabezado de seccion: antetitulo, titular y texto complementario.
 * Es el patron que se repite en toda la web; mantenerlo siempre igual.
 */
export function EncabezadoSeccion({
  antetitulo,
  titulo,
  children,
  className,
}: {
  antetitulo?: string
  titulo: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('max-w-proceso mb-12 lg:mb-16', className)}>
      {antetitulo && <p className="antetitulo mb-6 opacity-80">{antetitulo}</p>}
      <h2 className="text-display-2 font-display text-balance font-semibold">{titulo}</h2>
      {children && <div className="text-lead mt-6 max-w-2xl opacity-80">{children}</div>}
    </div>
  )
}
