/**
 * Atributos de la identidad del CETED.
 *
 * Son el equivalente funcional de los tres pilares del manual de la REDEC,
 * adaptados a lo que el centro realmente comunica: una escuela de directivos
 * con formación, investigación aplicada y extensión.
 */

export type Pilar = {
  indice: string
  titulo: string
  texto: string
}

export const pilares: readonly Pilar[] = [
  {
    indice: '01',
    titulo: 'Rigor',
    texto:
      'Formación de posgrado con rigor metodológico: 25 ediciones de la Maestría en Dirección y una Maestría en Gestión de Proyectos para el Desarrollo que fortalece capacidades locales.',
  },
  {
    indice: '02',
    titulo: 'Gestión',
    texto:
      'Investigación aplicada y servicios profesionales que responden a problemas concretos de organización, con resultados medibles y transferibles al sector.',
  },
  {
    indice: '03',
    titulo: 'Comunidad',
    texto:
      'Una red de centros en todo el país y una Cátedra UNESCO que conectan a la Universidad de La Habana con barrios y territorios donde el desarrollo lo exige.',
  },
  {
    indice: '04',
    titulo: 'Laboratorio',
    texto:
      'El Laboratorio «Alexis Codina Jiménez» entrena a directivos en condiciones reales: crisis, trabajo en equipo y resolución de problemas.',
  },
]
