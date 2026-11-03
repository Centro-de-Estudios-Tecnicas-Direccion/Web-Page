import {
  Maestria,
  FacultyMember,
  InstitutionalAffiliation,
} from '../types';
import { FACULTY_MEMBERS_FULL } from './cetedFullData';

export const HERO_SLIDES = [
  {
    id: 'slide-2',
    image: `${import.meta.env.BASE_URL}assets/images/hero_2.JPG`,
    caption: 'Claustro y equipo de trabajo del CETED',
    subcaption: 'Un colectivo comprometido con la excelencia académica y la investigación',
  },
  {
    id: 'slide-3',
    image: `${import.meta.env.BASE_URL}assets/images/hero_3.JPG`,
    caption: 'Sesión académica y análisis de casos',
    subcaption: 'Participación activa de directivos y estudiantes en el aula',
  },
  {
    id: 'slide-4',
    image: `${import.meta.env.BASE_URL}assets/images/hero_4.JPG`,
    caption: 'Intercambio directivo y debate académico',
    subcaption: 'Profesores y expertos compartiendo experiencias en tiempo real',
  },
  {
    id: 'slide-5',
    image: `${import.meta.env.BASE_URL}assets/images/hero_5.JPG`,
    caption: 'Exposiciones y conferencias de alto nivel',
    subcaption: 'Vinculación de la teoría con la práctica en la resolución de problemas',
  },
];

export const MAESTRIAS: Maestria[] = [
  {
    id: 'direccion',
    title: 'Maestría en Dirección',
    shortTitle: 'Dirección',
    tagline: 'Liderazgo participativo, dirección por valores y toma de decisiones estratégicas.',
    duration: '24 meses (Tiempo parcial modular)',
    modality: 'Presencial y semipresencial modular',
    credits: 'Programa de Posgrado Académico',
    description:
      'Formación integral para directivos, cuadros y consultores en la ciencia y técnica de la dirección. Enfatiza el desarrollo de competencias claves, liderazgo ético, negociación y modelos de dirección participativa.',
    profile:
      'Graduados universitarios con experiencia en cargos de dirección, gestión institucional o asesoría.',
    competencies: [
      'Ciencia de la dirección y toma de decisiones complejas',
      'Liderazgo, comunicación y comportamiento organizacional',
      'Dirección participativa y dirección por valores',
      'Manejo de conflictos y técnicas de negociación',
    ],
    modules: [
      'Fundamentos y Teoría de la Dirección',
      'Desarrollo del Potencial Directivo y Liderazgo',
      'Dirección Estratégica y Control de Gestión',
      'Negociación y Comunicación Organizacional',
      'Dirección Participativa en Empresas Cubanas',
      'Investigación Aplicada y Tesis de Maestría',
    ],
    intakeDate: 'Convocatoria académica de posgrado en el CETED',
  },
  {
    id: 'marketing',
    title: 'Maestría en Marketing',
    shortTitle: 'Marketing',
    tagline: 'Investigación de mercados, posicionamiento estratégico y gestión comercial.',
    duration: '20 meses (Modalidad modular)',
    modality: 'Semipresencial con sesiones intensivas',
    credits: 'Programa de Posgrado Académico',
    description:
      'Especialización en sistemas de información de marketing, estudios de mercado, estrategias comerciales y posicionamiento de servicios e intangibles en entornos competitivos y cambiantes.',
    profile:
      'Profesionales vinculados a la gestión comercial, mercadotecnia, comunicación y dirección económica.',
    competencies: [
      'Sistemas de información e investigación aplicada de mercados',
      'Estrategias de comercialización y posicionamiento',
      'Comunicación integrada y gestión de servicios',
      'Estrategia y competitividad organizacional',
    ],
    modules: [
      'Investigación de Mercados y Comportamiento del Consumidor',
      'Gestión Estratégica de Marketing y Servicios',
      'Estrategias de Precios y Canales de Distribución',
      'Comunicación Organizacional y Branding',
      'Estrategia y Competitividad Empresarial',
      'Tesis de Maestría en Aplicación Comercial',
    ],
    intakeDate: 'Convocatoria académica de posgrado en el CETED',
  },
  {
    id: 'proyectos',
    title: 'Maestría en Gestión de Proyectos para el Desarrollo',
    shortTitle: 'Gestión de Proyectos',
    tagline: 'Formulación, evaluación socioeconómica y sostenibilidad de proyectos territoriales.',
    duration: '22 meses (Modular)',
    modality: 'Presencial modular',
    credits: 'Coordinada por la Dra. C. Katy Herrera Lemus',
    description:
      'Programa coordinado por la Dra. C. Katy C. Herrera Lemus, orientado a capacitar especialistas y directivos en el diseño, gestión de riesgos, financiamiento y evaluación de proyectos que impacten el desarrollo local y productivo.',
    profile:
      'Coordinadores de proyectos, consultores, funcionarios y directivos de instituciones y empresas.',
    competencies: [
      'Metodología de marco lógico y formulación integral de proyectos',
      'Evaluación económica, social y ambiental de inversiones',
      'Gestión de riesgos, alianzas público-privadas y cadenas de valor',
      'Modelos de economía circular aplicados a proyectos territoriales',
    ],
    modules: [
      'Metodología y Diseño de Proyectos de Desarrollo',
      'Evaluación Ex-ante y Sostenibilidad Socioeconómica',
      'Gestión de Riesgos y Monitoreo de Indicadores',
      'Encadenamientos Productivos y Desarrollo Local',
      'Economía Circular y Gestión de Recursos',
      'Tesis de Grado en Gestión de Proyectos',
    ],
    intakeDate: 'Coordinada por Dra. C. Katy C. Herrera Lemus',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = FACULTY_MEMBERS_FULL;

export const INSTITUTIONAL_AFFILIATIONS: InstitutionalAffiliation[] = [
  {
    id: 'uh',
    name: 'Universidad de La Habana',
    role: 'Institución Matriz y Aval Académico Oficial',
    roleBadge: 'Casa de Altos Estudios (Fund. 1728)',
    description:
      'El CETED es un centro de estudios de posgrado adscrito a la Universidad de La Habana. Su sede radica en el Edificio "Julio Antonio Mella" (Calle L e/ 21 y 23, Vedado) y todos sus programas cuentan con certificación académica oficial de la Universidad.',
    url: 'https://www.uh.cu',
    urlText: 'Portal Oficial UH',
  },
  {
    id: 'unesco',
    name: 'Cátedra UNESCO / Redec',
    role: 'Educación y Desarrollo de Economías Circulares',
    roleBadge: 'Red Universitaria Dual UNESCO',
    description:
      'Red universitaria con carácter dual respaldada por la UNESCO y la Universidad de La Habana. Articula la docencia de posgrado, extensión universitaria y proyectos científicos sobre gestión sostenible de recursos y modelos circulares.',
    url: 'https://linktr.ee/CatedraUNESCORedec.Cuba',
    urlText: 'Portal Redec UNESCO',
  },
  {
    id: 'gti',
    name: 'GTI: Consultores Asociados',
    role: 'Gestión Talento e Innovación',
    roleBadge: 'Marca Consultora de la UH',
    description:
      'Marca oficial de consultoría de la Universidad de La Habana para el acompañamiento e intervención en empresas, organismos de la administración central del Estado, gobiernos territoriales y cooperativas.',
    url: 'https://www.uh.cu',
    urlText: 'Servicios GTI',
  },
  {
    id: 'gabinete',
    name: 'Gabinete Metodológico',
    role: 'Gestión del Conocimiento Científico',
    roleBadge: 'Repositorio y Biblioteca Central UH',
    description:
      'Unidad del CETED dedicada a centralizar la producción científica del centro, repositorio de tesis de posgrado, búsquedas bibliográficas de alto impacto y vinculación permanente con la Biblioteca Central de la Universidad de La Habana.',
  },
  {
    id: 'redes-investigacion',
    name: 'Programas Nacionales de Ciencia e Innovación',
    role: 'Investigación Aplicada (PAPN y PAPS)',
    roleBadge: 'Proyectos Aprobados MES',
    description:
      'El claustro del CETED lidera y participa en proyectos del Programa Nacional de Ciencia y Técnica (PAPN) y Programas Sectoriales (PAPS), generando impacto en competencias directivas, dirección participativa y calidad institucional.',
  },
];
