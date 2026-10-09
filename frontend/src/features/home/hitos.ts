/**
 * Hitos institucionales del CETED.
 * Fuente: README del proyecto y especificación de requisitos.
 */

export type Hito = {
  anio: string
  texto: string
}

export const hitos: readonly Hito[] = [
  {
    anio: '1988',
    texto: 'Fundación del CETED por decisión de los niveles superiores de la dirección del país.',
  },
  { anio: '1992', texto: 'Inicio de la Maestría en Dirección, primera de su clase en Cuba.' },
  {
    anio: '2023',
    texto: 'Inauguración de la Maestría en Gestión de Proyectos para el Desarrollo.',
  },
  {
    anio: '2025',
    texto: 'Creación de la Cátedra UNESCO de Educación y Desarrollo de Economías Circulares.',
  },
]
