export type PageId =
  | 'inicio'
  | 'nosotros'
  | 'claustro'
  | 'servicios'
  | 'investigacion'
  | 'contacto';

export interface Maestria {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  duration: string;
  modality: string;
  credits: string;
  description: string;
  profile: string;
  competencies: string[];
  modules: string[];
  intakeDate: string;
}

export interface ImpactProject {
  id: string;
  title: string;
  sector: string;
  description: string;
  achievement: string;
  metric: string;
  metricLabel: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Investigación' | 'Alianzas' | 'Eventos' | 'Institucional';
  readTime: string;
  summary: string;
  content: string;
}

export interface UniversityPartner {
  name: string;
  shortName: string;
  location: string;
  role: string;
  impactForStudents: string;
  url: string;
}

export interface ServiceSubcategory {
  id: 'pregrado' | 'posgrado' | 'gabinete' | 'consultora';
  title: string;
  shortDesc: string;
}

export interface ResearchLine {
  id: string;
  title: string;
  leader: string;
  leaderId: string;
  description: string;
  keyTopics: string[];
  activeProjects: number;
}

export interface ResearchProject {
  id: string;
  title: string;
  lineId: string;
  duration: string;
  coordinator: string;
  coordinatorId: string;
  scope: string;
  status: 'En ejecución' | 'Concluido' | 'En convocatoria';
  abstract: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  degree: string;
  specialty: string;
  bio: string;
  image: string;
  cvHighlights?: string[];
  publicationsCount: number;
  experienceYears: number;
  email?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  authorId?: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  doi?: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
}
