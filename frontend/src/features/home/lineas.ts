import type { LineaInvestigacion } from '@/types/domain'

/**
 * Líneas de investigación del claustro.
 * TODO: sustituir por `useQuery(queryKeys.lineas())`.
 */
export const lineas: readonly LineaInvestigacion[] = [
  {
    id: 'lin-1',
    nombre: 'Ciencias de la Administración y Dirección Empresarial',
    descripcion: 'Teoría y práctica de la dirección dentro del entorno corporativo.',
  },
  {
    id: 'lin-2',
    nombre: 'Gestión de Proyectos para el Desarrollo Local',
    descripcion: 'Herramientas de gestión aplicadas al desarrollo de comunidades y territorios.',
  },
  {
    id: 'lin-3',
    nombre: 'Economía Circular y Sostenibilidad',
    descripcion: 'Modelos de producción y consumo circulares, en el marco de la Cátedra UNESCO.',
  },
  {
    id: 'lin-4',
    nombre: 'Capital Humano y Desarrollo Organizacional',
    descripcion: 'Formación, retención y desarrollo de las capacidades de las personas.',
  },
  {
    id: 'lin-5',
    nombre: 'Innovación y Creatividad en la Gestión',
    descripcion: 'Diseño de procesos, experimentación y capacidad de innovación organizacional.',
  },
  {
    id: 'lin-6',
    nombre: 'Diagnóstico Organizacional y Solución de Problemas',
    descripcion: 'Métodos estructurados para analizar y resolver problemas complejos.',
  },
]
