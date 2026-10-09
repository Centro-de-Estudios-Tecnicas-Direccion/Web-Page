/**
 * Noticias destacadas de la portada.
 * TODO: sustituir por `useQuery(queryKeys.noticias({ limite: 3 }))`.
 */
export type NoticiaResumen = {
  slug: string
  titulo: string
  resumen: string
  categoria: string
  fecha: string
  destacada?: boolean
}

export const noticias: readonly NoticiaResumen[] = [
  {
    slug: 'catedra-unesco-economias-circulares',
    titulo: 'El CETED crea la Cátedra UNESCO de Economías Circulares',
    resumen:
      'La nueva cátedra, surgida de la Red Universitaria para el Desarrollo de la Economía Circular, conecta investigación, formación y acción territorial.',
    categoria: 'Comunicado',
    fecha: '2025-02-20',
    destacada: true,
  },
  {
    slug: 'convocatoria-maestria-gestion-proyectos',
    titulo: 'Abierta la convocatoria de la Maestría en Gestión de Proyectos',
    resumen:
      'Segunda edición del programa que fortalece las capacidades locales para la gestión eficiente de proyectos de desarrollo.',
    categoria: 'Convocatoria',
    fecha: '2026-01-15',
  },
  {
    slug: 'laboratorio-alexis-codina',
    titulo: 'El Laboratorio «Alexis Codina Jiménez» incorpora nuevos escenarios',
    resumen:
      'Simulaciones de crisis y trabajo en equipo para el entrenamiento de directivos en condiciones reales.',
    categoria: 'Evento',
    fecha: '2025-11-08',
  },
]
