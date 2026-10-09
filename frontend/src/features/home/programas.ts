import type { Programa } from '@/types/domain'

/**
 * Catálogo académico.
 *
 * Tipado con el modelo de dominio para que el futuro endpoint `/api/programas`
 * sea un sustituto directo: el compilador ya valida el contrato.
 *
 * TODO: sustituir por `useQuery(queryKeys.programas())`.
 */

export const maestrias: readonly Programa[] = [
  {
    id: 'mae-direccion',
    nivel: 'maestria',
    nombre: 'Maestría en Dirección',
    descripcion:
      'Programa académico concebido para propiciar una experiencia única en la formación y desarrollo de profesionales en el ámbito gerencial. Dirigida a directivos del sector energético y otras ramas.',
    cargaHoraria: 2400,
    ediciones: 25,
    plazas: 30,
    imagen: null,
  },
  {
    id: 'mae-gestion-proyectos',
    nivel: 'maestria',
    nombre: 'Maestría en Gestión de Proyectos para el Desarrollo',
    descripcion:
      'Iniciativa de formación avanzada cuyo propósito es fortalecer las capacidades locales para la gestión eficiente de proyectos de desarrollo.',
    cargaHoraria: 2200,
    ediciones: 2,
    plazas: 25,
    imagen: null,
  },
]

export const diplomados: readonly Programa[] = [
  {
    id: 'dip-desarrollo-gerencial',
    nivel: 'diplomado',
    nombre: 'Desarrollo Gerencial y Habilidades Directivas',
    descripcion:
      'Actualización profesional para directivos en ejercicio, centrada en la toma de decisiones y el liderazgo de equipos.',
    cargaHoraria: 320,
    ediciones: null,
    plazas: 40,
    imagen: null,
  },
  {
    id: 'dip-desarrollo-organizacional',
    nivel: 'diplomado',
    nombre: 'Desarrollo Organizacional',
    descripcion:
      'Diseño de estructuras, procesos y sistemas de trabajo que sostienen el cambio en una organización.',
    cargaHoraria: 280,
    ediciones: null,
    plazas: 40,
    imagen: null,
  },
  {
    id: 'dip-colaboracion-internacional',
    nivel: 'diplomado',
    nombre: 'Gestión de Proyectos de Colaboración Internacional',
    descripcion:
      'Herramientas para diseñar, negociar y ejecutar proyectos con financiamiento y cooperación internacional.',
    cargaHoraria: 300,
    ediciones: null,
    plazas: 35,
    imagen: null,
  },
]

export const cursos: readonly Programa[] = [
  {
    id: 'cur-diagnostico-organizacional',
    nivel: 'curso',
    nombre: 'Herramientas para el Diagnóstico Organizacional',
    descripcion:
      'Métodos y técnicas para identificar problemas estructurales y de proceso dentro de una organización.',
    cargaHoraria: 60,
    ediciones: null,
    plazas: null,
    imagen: null,
  },
  {
    id: 'cur-metodologia-investigacion',
    nivel: 'curso',
    nombre: 'Metodología de la Investigación Científica',
    descripcion:
      'Diseño de investigación, análisis de datos y escritura de resultados con rigor académico.',
    cargaHoraria: 80,
    ediciones: null,
    plazas: null,
    imagen: null,
  },
  {
    id: 'cur-consultoria-gerencial',
    nivel: 'curso',
    nombre: 'Consultoría Gerencial',
    descripcion:
      'El proceso de consultoría interna: diagnóstico, propuesta, negociación e implantación.',
    cargaHoraria: 96,
    ediciones: null,
    plazas: null,
    imagen: null,
  },
]

export const doctorado = {
  id: 'doc-ciencias-administracion',
  nivel: 'doctorado',
  nombre: 'Doctorado colaborativo en Ciencias de la Administración',
  descripcion:
    'Programa de doctorado en colaboración con otras instituciones, dirigido a investigadores en el ámbito de las ciencias de la administración.',
} as const
