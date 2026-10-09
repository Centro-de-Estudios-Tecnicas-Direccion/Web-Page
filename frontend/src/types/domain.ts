/**
 * Modelo de dominio del CETED.
 *
 * Estos tipos son el contrato entre el frontend y la API de FastAPI. Si el
 * backend cambia un nombre de campo, se corrige aqui y no en cuarenta
 * componentes.
 *
 * Convenciones:
 *  · Los identificadores son cadenas porque PostgreSQL usara UUID.
 *  · Las fechas viajan como ISO-8601 en UTC y se formatean en el cliente.
 *  · Los campos derivados NO se modelan: se calculan al presentar.
 *  · Las duraciones viajan en horas o minutos, nunca formateadas.
 */

/* -------------------------------------------------------------------------- */
/* Actores y acceso                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Roles definidos por la especificacion de requisitos. El orden es el nivel de
 * privilegio: cada rol hereda los permisos del anterior.
 */
export const ROLES = ['visitante', 'estudiante', 'profesor', 'administrador'] as const
export type Rol = (typeof ROLES)[number]

export type Usuario = {
  id: string
  nombre: string
  correo: string
  rol: Exclude<Rol, 'visitante'>
  activo: boolean
  creadoEn: string
}

export type Credenciales = {
  usuario: string
  contrasena: string
}

export type Sesion = {
  tokenAcceso: string
  tipoToken: 'bearer'
  usuario: Usuario
}

/* -------------------------------------------------------------------------- */
/* Catalogos enumerados                                                        */
/* -------------------------------------------------------------------------- */

export const NIVELES_CURSO = ['maestria', 'diplomado', 'curso', 'doctorado'] as const
export type NivelCurso = (typeof NIVELES_CURSO)[number]

export const ESTADOS_CURSO = [
  'borrador',
  'convocatoria',
  'inscripcion',
  'en_curso',
  'cerrado',
] as const
export type EstadoCurso = (typeof ESTADOS_CURSO)[number]

export const ESTADOS_INSCRIPCION = ['solicitada', 'aprobada', 'rechazada', 'retirada'] as const
export type EstadoInscripcion = (typeof ESTADOS_INSCRIPCION)[number]

export const CATEGORIAS_NOTICIA = ['comunicado', 'investigacion', 'evento', 'convocatoria'] as const
export type CategoriaNoticia = (typeof CATEGORIAS_NOTICIA)[number]

export const GRADOS_ACADEMICOS = ['doctor', 'master', 'titular', 'asociado', 'asistente'] as const
export type GradoAcademico = (typeof GRADOS_ACADEMICOS)[number]

export const MODALIDADES = ['presencial', 'semipresencial', 'a_distancia'] as const
export type Modalidad = (typeof MODALIDADES)[number]

/* -------------------------------------------------------------------------- */
/* Contenido publico                                                           */
/* -------------------------------------------------------------------------- */

export type Noticia = {
  id: string
  titulo: string
  slug: string
  resumen: string
  cuerpo: string
  categoria: CategoriaNoticia
  imagen: string | null
  autorId: string | null
  publicadoEn: string
  destacado: boolean
}

export type Profesor = {
  id: string
  nombre: string
  grado: GradoAcademico
  cargo: string | null
  areaLinea: string
  biografia: string
  foto: string | null
  correo: string | null
  lineasIds: string[]
}

export type LineaInvestigacion = {
  id: string
  nombre: string
  descripcion: string
}

/** Programa formativo del catalogo academico. */
export type Programa = {
  id: string
  nombre: string
  descripcion: string
  /** Nivel academico. Determina la etiqueta y el tratamiento en el catalogo. */
  nivel: NivelCurso
  /** Duracion en horas. El cliente la formatea; nunca se envia ya formateada. */
  cargaHoraria: number
  ediciones: number | null
  plazas: number | null
  imagen: string | null
}

/* -------------------------------------------------------------------------- */
/* Catalogo academico y enrollment                                            */
/* -------------------------------------------------------------------------- */

export type Curso = {
  id: string
  codigo: string
  titulo: string
  descripcion: string
  nivel: NivelCurso
  estado: EstadoCurso
  cupoTotal: number
  inscritos: number
  inicio: string
  fin: string
  modalidad: Modalidad
  /** Profesor responsable. Es quien recibe la notificacion de solicitud. */
  profesorId: string
  sede: string
  programaId: string | null
}

export type Inscripcion = {
  id: string
  cursoId: string
  estudianteId: string
  estado: EstadoInscripcion
  solicitadaEn: string
  resueltaEn: string | null
  observacion: string | null
}

/* -------------------------------------------------------------------------- */
/* Notificaciones                                                              */
/* -------------------------------------------------------------------------- */

export type Notificacion = {
  id: string
  destinatarioId: string
  asunto: string
  cuerpo: string
  enviadaEn: string | null
  leida: boolean
}
