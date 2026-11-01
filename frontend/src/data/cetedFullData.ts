import {
  FacultyMember,
  ResearchLine,
  ResearchProject,
  BlogPost,
  HistoryMilestone,
} from '../types';

export const CETED_INFO = {
  name: 'CETED',
  fullName: 'Centro de Estudios de Técnicas de Dirección',
  slogan: 'Un centro de excelencia que piensa con usted',
  logo: '/assets/aistudio/CETED_b437d2ec.png',
  address: 'Calle L No. 353 e/ 21 y 23, Vedado, Plaza de la Revolución, La Habana, Cuba',
  directions: 'A 150 metros del Hotel Habana Libre y de la Universidad de La Habana. Accesible por las principales líneas de transporte de Calle 23 (La Rampa) y Calle L.',
  phones: ['+53 (7) 832-4521', '+53 (7) 832-9844'],
  emails: {
    general: 'contacto@ceted.edu.cu',
    admisiones: 'admisiones@ceted.edu.cu',
    direccion: 'direccion@ceted.edu.cu',
    gabinete: 'gabinete.metodologico@ceted.edu.cu',
  },
  social: [
    { name: 'Facebook', url: 'https://facebook.com/ceted.oficial', handle: '@ceted.oficial' },
    { name: 'LinkedIn', url: 'https://linkedin.com/school/ceted-direccion', handle: 'CETED Cuba' },
    { name: 'Telegram', url: 'https://t.me/ceted_posgrado', handle: '@ceted_posgrado' },
    { name: 'YouTube', url: 'https://youtube.com/@ceted_direccion', handle: 'Canal CETED' },
  ],
};

export const ABOUT_CETED = {
  mision:
    'Contribuir al perfeccionamiento continuo de la gestión de organizaciones a través de la formación de pregrado y posgrado de excelencia en técnicas de dirección, la investigación científica aplicada, la consultoría de alto nivel y la extensión académica con alto impacto socioeconómico.',
  vision:
    'Consolidarse como el centro académico de referencia nacional e internacional en técnicas de dirección y liderazgo organizacional, reconocido por la calidad de su claustro, la pertinencia de sus investigaciones y la capacidad transformadora de sus egresados en beneficio de la sociedad.',
  valores: [
    {
      title: 'Rigor Científico y Académico',
      description: 'Fundamentamos cada método, diagnóstico y programa en la investigación rigurosa y las mejores prácticas de dirección global.',
    },
    {
      title: 'Ética y Responsabilidad Social',
      description: 'Promovemos un liderazgo humanista, transparente y comprometido con el desarrollo sostenible de las organizaciones.',
    },
    {
      title: 'Pensamiento Crítico y Proactivo',
      description: 'Enseñamos a cuestionar los problemas complejos y formular soluciones estratégicas contextualizadas a cada realidad.',
    },
    {
      title: 'Cercanía y Colaboración',
      description: 'Fieles a nuestro eslogan, pensamos con usted, acompañando a cada estudiante, directivo y organización en su evolución.',
    },
  ],
  historia: [
    {
      year: '1990',
      title: 'Fundación del CETED',
      description:
        'Nace como una unidad académica pionera dedicada al estudio, sistematización y docencia de las técnicas modernas de dirección en el ámbito universitario.',
    },
    {
      year: '1998',
      title: 'Primera Edición de la Maestría en Dirección',
      description:
        'Se aprueba el programa oficial de posgrado con énfasis en la formación de cuadros de alta dirección del país, incorporando la metodología de casos.',
    },
    {
      year: '2006',
      title: 'Creación de la Marca Consultora y Gabinete Metodológico',
      description:
        'Se formaliza el brazo consultor institucional para intervenir en empresas estratégicas y asesorar planes de desarrollo socioeconómico.',
    },
    {
      year: '2015',
      title: 'Incorporación de la Cátedra UNESCO y Redec',
      description:
        'Afiliación internacional para la cooperación con redes iberoamericanas en gestión universitaria y formación continua de directivos.',
    },
    {
      year: '2026',
      title: 'Centro de Excelencia y Transformación Digital',
      description:
        'Con más de 35 años de historia ininterrumpida, el CETED expande sus maestrías en Dirección, Marketing y Gestión de Proyectos en modalidad híbrida.',
    },
  ] as HistoryMilestone[],
};

export const SERVICES_DATA = {
  pregrado: {
    title: 'Formación de Pregrado',
    subtitle: 'Semillero de futuros directivos y líderes organizacionales',
    description:
      'Impartimos docencia en técnicas de dirección, habilidades directivas y gestión estratégica para estudiantes universitarios, dotándolos de herramientas analíticas para su inserción profesional.',
    features: [
      'Asignaturas curriculares y optativas de Teoría y Práctica de la Dirección',
      'Talleres de liderazgo, negociación y comunicación interpersonal',
      'Prácticas laborales y pasantías directivas en empresas colaboradoras',
      'Tutoría de trabajos de diploma e investigaciones estudiantiles en gestión',
    ],
    audience: 'Estudiantes universitarios de carreras afines a la economía, ingeniería y humanidades.',
  },
  posgrado: {
    title: 'Programas de Posgrado Académico',
    subtitle: 'Formación de posgrado de excelencia con reconocimiento oficial',
    description:
      'Nuestra oferta de posgrado está conformada por tres programas de maestría acreditados de excelencia, junto con diplomados de especialización profesional.',
    maestrias: [
      {
        id: 'direccion',
        name: 'Maestría en Dirección',
        duration: '24 meses (Tiempo parcial modular)',
        focus: 'Pensamiento estratégico, toma de decisiones bajo incertidumbre, gestión del cambio y gobierno organizacional.',
        requirements: 'Título universitario, experiencia laboral mínima de 3 años en responsabilidades directivas o de asesoría.',
      },
      {
        id: 'marketing',
        name: 'Maestría en Marketing',
        duration: '20 meses (Modalidad híbrida)',
        focus: 'Investigación de mercados, propuesta de valor, analítica comercial, branding y estrategias omnicanal.',
        requirements: 'Profesionales graduados de economía, comunicación, mercadotecnia o directivos comerciales.',
      },
      {
        id: 'proyectos',
        name: 'Maestría en Gestión de Proyectos para el Desarrollo',
        duration: '22 meses (Presencial modular fines de semana)',
        focus: 'Formulación de proyectos, metodologías ágiles (Scrum/PMBOK), financiamiento y medición de impacto social.',
        requirements: 'Directores de proyectos, consultores, especialistas de instituciones públicas y de cooperación técnica.',
      },
    ],
    diplomados: [
      'Diplomado en Habilidades Directivas y Negociación Estratégica',
      'Diplomado en Gestión Financiera para Cuadros de Dirección',
      'Diplomado en Dirección de la Transformación Digital',
    ],
  },
  gabinete: {
    title: 'Gabinete Metodológico',
    subtitle: 'Investigación pedagógica y diseño curricular de la enseñanza directiva',
    description:
      'El Gabinete Metodológico de CETED es el órgano técnico especializado en la constante actualización de los métodos de enseñanza y aprendizaje para la formación de directivos.',
    functions: [
      'Diseño y validación de planes de estudio y programas curriculares de posgrado',
      'Elaboración y edición de casos de estudio pedagógicos basados en la realidad local e iberoamericana',
      'Capacitación pedagógica y metodológica continua a profesores y conferencistas',
      'Supervisión y aseguramiento de la calidad académica según estándares nacionales e internacionales',
      'Desarrollo de simuladores de toma de decisiones y materiales didácticos interactivos',
    ],
  },
  consultora: {
    title: 'Marca Consultora en Gestión',
    subtitle: 'Asesoría estratégica y soluciones organizacionales a la medida',
    description:
      'Brazo de consultoría aplicada de CETED que acompaña a empresas públicas, mixtas, privadas y organismos gubernamentales en sus procesos de diagnóstico, reestructuración y mejora continua.',
    servicesList: [
      'Diagnóstico estratégico integral y planificación corporativa a mediano y largo plazo',
      'Rediseño de procesos organizacionales, manuales de gestión y optimización de flujos de trabajo',
      'Evaluación del clima organizacional, cultura institucional y planes de retención del talento',
      'Estudios de mercado aplicados y diseño de planes comerciales de comercialización',
      'Acompañamiento en la formulación y auditoría de proyectos de desarrollo local',
    ],
    clients: 'Más de 140 organizaciones asesoradas en sectores industriales, de servicios, salud, turismo y administración pública.',
  },
};

export const EXTENSION_REDEC = {
  title: 'Redec - Cátedra UNESCO',
  subtitle: 'Red de Estudios de Dirección y Educación Continua',
  badge: 'Cátedra UNESCO de Dirección y Gestión',
  externalUrl: 'https://unesdoc.unesco.org',
  description:
    'La extensión académica internacional de CETED se canaliza a través de la coordinación de la Redec y la Cátedra UNESCO en Gestión Organizacional, impulsando la cooperación sur-sur y la formación permanente de directores en el espacio iberoamericano.',
  objectives: [
    'Promover redes de investigación conjunta en dirección estratégica entre universidades de la región',
    'Facilitar la movilidad docente y conferencias magistrales con catedráticos de prestigio global',
    'Difundir buenas prácticas de gobernanza universitaria y sostenibilidad en instituciones públicas',
    'Organizar el Simposio Bianual de Educación Continua para la Alta Dirección',
  ],
  cooperationAgreements: [
    'Universidad de La Habana (Coordinación sede nacional)',
    'Consejo Latinoamericano de Escuelas de Administración (CLADEA)',
    'Red Iberoamericana de Universidades por la Responsabilidad Social',
    'Organización de Estados Iberoamericanos (OEI)',
  ],
};

export const RESEARCH_LINES: ResearchLine[] = [
  {
    id: 'line-1',
    title: 'Dirección Estratégica, Gobernanza y Toma de Decisiones',
    leader: 'Dr. Alejandro Morales Ramos (PhD)',
    leaderId: 'fac-1',
    description:
      'Estudio de modelos de planificación y control estratégico adaptados a condiciones de alta incertidumbre y restricción de recursos.',
    keyTopics: ['Modelos prospectivos', 'Gobernanza corporativa', 'Sistemas de control de gestión', 'Simulación de escenarios'],
    activeProjects: 4,
  },
  {
    id: 'line-2',
    title: 'Marketing Estratégico, Branding y Comportamiento del Consumidor',
    leader: 'Dra. María Elena Valdés',
    leaderId: 'fac-2',
    description:
      'Investigación sobre dinámicas de mercado, posicionamiento de marcas nacionales en el entorno global y analítica predictiva del consumo.',
    keyTopics: ['Branding identitario', 'Estrategias omnicanal', 'Consumo responsable y ético', 'Marketing digital analítico'],
    activeProjects: 3,
  },
  {
    id: 'line-3',
    title: 'Gestión de Proyectos, Innovación y Desarrollo Sostenible',
    leader: 'Dr. Carlos Mendoza Peñalver',
    leaderId: 'fac-3',
    description:
      'Metodologías ágiles y tradicionales para la formulación, estructuración financiera y evaluación de impacto de proyectos territoriales.',
    keyTopics: ['Marco lógico avanzado', 'Metodologías ágiles (Scrum/Lean)', 'Evaluación ex-post de impacto', 'Economía circular'],
    activeProjects: 5,
  },
  {
    id: 'line-4',
    title: 'Liderazgo Organizacional, Negociación y Gestión del Talento',
    leader: 'Dra. Sofía Navarro Cordero',
    leaderId: 'fac-4',
    description:
      'Análisis psicosocial de los estilos de liderazgo en directivos contemporáneos, negociación cooperativa y gestión de equipos diversos.',
    keyTopics: ['Liderazgo transformacional', 'Resolución constructiva de conflictos', 'Clima organizacional', 'Salud ocupacional directiva'],
    activeProjects: 3,
  },
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'proj-1',
    title: 'Modelo para la Gestión Estratégica Participativa en Gobiernos Municipales',
    lineId: 'line-1',
    duration: '2024 - 2026',
    coordinator: 'Dr. Alejandro Morales Ramos',
    coordinatorId: 'fac-1',
    scope: '45 municipios del occidente y centro del país',
    status: 'En ejecución',
    abstract:
      'Desarrollo e implementación de un kit de herramientas metodológicas para formular estrategias municipales alineadas con los Objetivos de Desarrollo Sostenible 2030.',
  },
  {
    id: 'proj-2',
    title: 'Observatorio Sectorial de Adopción de Metodologías Ágiles en Pymes',
    lineId: 'line-3',
    duration: '2025 - 2027',
    coordinator: 'Dr. Carlos Mendoza Peñalver',
    coordinatorId: 'fac-3',
    scope: 'Más de 120 pequeñas y medianas empresas',
    status: 'En ejecución',
    abstract:
      'Investigación empírica que mide las barreras culturales y de capacitación para la implementación efectiva de Scrum y metodologías híbridas en el tejido productivo.',
  },
  {
    id: 'proj-3',
    title: 'Impacto de la Omnicanalidad y Reputación de Marca en Servicios Especializados',
    lineId: 'line-2',
    duration: '2024 - 2025',
    coordinator: 'Dra. María Elena Valdés',
    coordinatorId: 'fac-2',
    scope: 'Nacional y regional',
    status: 'Concluido',
    abstract:
      'Evaluación de métricas de percepción pública y lealtad de marca ante la migración de canales físicos a plataformas digitales de atención al usuario.',
  },
];

export const FACULTY_MEMBERS_FULL: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Alejandro Morales Ramos',
    role: 'Director del CETED y Catedrático Titular',
    degree: 'Doctor en Ciencias Económicas (PhD) | Máster en Dirección de Empresas',
    specialty: 'Dirección Estratégica, Prospectiva Organizacional y Políticas Públicas',
    bio: 'Más de 26 años dedicados a la docencia e investigación de posgrado. Ha liderado más de 60 proyectos de consultoría estratégica y presidido comisiones de acreditación de maestrías.',
    image: '/src/assets/images/claustro_ceted_faculty_1793301388016.jpg',
    cvHighlights: [
      'Doctor en Ciencias Económicas con mención de honor',
      'Autor de 4 libros sobre dirección estratégica y modelos de prospectiva',
      'Premio Nacional de la Academia de Ciencias por investigaciones en gestión pública',
      'Docente invitado en programas de posgrado en México, España y Colombia',
    ],
    publicationsCount: 34,
    experienceYears: 26,
    email: 'alejandro.morales@ceted.edu.cu',
  },
  {
    id: 'fac-2',
    name: 'Dra. María Elena Valdés',
    role: 'Coordinadora de la Maestría en Marketing',
    degree: 'Doctora en Ciencias de la Comunicación y Mercadotecnia | Máster en Gestión Comercial',
    specialty: 'Investigación de Mercados, Branding y Comunicación Corporativa',
    bio: 'Especialista en comportamiento del consumidor y posicionamiento estratégico. Asesora permanente de marcas líderes y miembro del comité editorial de revistas científicas de administración.',
    image: '/src/assets/images/hero_ceted_collaborative_workshop_1793301387230.jpg',
    cvHighlights: [
      'Doctora en Ciencias de la Comunicación con enfoque en analítica de mercado',
      'Coordinadora académica de programas de marketing directivo por más de 12 años',
      'Consultora sénior para el diseño de marcas territoriales y de exportación',
      'Ponente destacada en congresos internacionales de CLADEA y ALAS',
    ],
    publicationsCount: 22,
    experienceYears: 19,
    email: 'maria.valdes@ceted.edu.cu',
  },
  {
    id: 'fac-3',
    name: 'Dr. Carlos Mendoza Peñalver',
    role: 'Profesor Principal de Gestión de Proyectos',
    degree: 'Doctor en Ingeniería Industrial | Certificación PMP® y Scrum Master',
    specialty: 'Metodologías Ágiles, Formulación de Inversiones y Marco Lógico',
    bio: 'Experto en estructuración, evaluación y dirección de proyectos de infraestructura y modernización institucional. Ha dirigido equipos de investigación multidisciplinarios.',
    image: '/src/assets/images/hero_ceted_case_discussion_1793301387437.jpg',
    cvHighlights: [
      'Doctor en Ingeniería Industrial con especialización en optimización de operaciones',
      'Director técnico en más de 30 proyectos de cooperación internacional',
      'Formador de cuadros directivos en gestión de riesgos y contratación pública',
      'Miembro de la Asociación Iberoamericana de Gestión de Proyectos',
    ],
    publicationsCount: 18,
    experienceYears: 21,
    email: 'carlos.mendoza@ceted.edu.cu',
  },
  {
    id: 'fac-4',
    name: 'Dra. Sofía Navarro Cordero',
    role: 'Coordinadora del Gabinete Metodológico y Docente de Liderazgo',
    degree: 'Doctora en Psicología del Trabajo y de las Organizaciones | Máster en Gestión Humana',
    specialty: 'Comportamiento Organizacional, Mediación de Conflictos y Liderazgo Ético',
    bio: 'Investigadora dedicada a la salud mental directiva, toma de decisiones bajo estrés y diseño de pedagogías activas para la enseñanza de posgrado.',
    image: '/src/assets/images/impact_ceted_social_leadership_1793301388477.jpg',
    cvHighlights: [
      'Doctora en Psicología con investigaciones pioneras en mediación directiva',
      'Responsable técnica del diseño pedagógico de los simuladores del CETED',
      'Capacitadora de directores de hospitales y universidades en gestión de crisis',
      'Autora de publicaciones sobre resiliencia en el liderazgo organizacional',
    ],
    publicationsCount: 15,
    experienceYears: 17,
    email: 'sofia.navarro@ceted.edu.cu',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'El Liderazgo Basado en la Evidencia: Decisiones Rigurosas vs Intuición en la Gestión Moderna',
    author: 'Dr. Alejandro Morales Ramos',
    role: 'Director del CETED',
    date: '14 de Octubre de 2026',
    readTime: '6 min de lectura',
    category: 'Dirección Estratégica',
    summary:
      'Un análisis crítico sobre por qué las organizaciones de alto desempeño sustituyen la improvisación directiva por marcos analíticos rigurosos basados en datos y prospectiva.',
    content: [
      'En tiempos de alta volatilidad económica e incertidumbre estructural, los directivos a menudo caen en la trampa de recurrir exclusivamente a la intuición o a recetas simplistas importadas de otros contextos.',
      'El enfoque que promovemos desde el CETED sostiene que la dirección es una disciplina científica aplicada. Tomar decisiones con rigor exige evaluar escenarios probabilísticos, entender las restricciones sistémicas y calibrar el impacto humano sobre cada colaborador.',
      'A través de nuestros estudios en más de 200 empresas, confirmamos que aquellas juntas directivas que sistematizan la revisión de métricas operativas y fomentan el debate constructivo reducen las fallas estratégicas en más del 40%.',
    ],
    doi: 'doi.org/10.ceted/art.2026.10.01',
  },
  {
    id: 'blog-2',
    title: 'El Desafío de la Creación de Marcas Éticas y Sostenibles en Mercados Emergentes',
    author: 'Dra. María Elena Valdés',
    role: 'Coordinadora de Marketing',
    date: '28 de Septiembre de 2026',
    readTime: '5 min de lectura',
    category: 'Marketing y Sociedad',
    summary:
      'Cómo la coherencia entre la promesa de marca y la responsabilidad socioambiental define la verdadera lealtad del consumidor contemporáneo.',
    content: [
      'El marketing ya no puede limitarse a la persuasión publicitaria tradicional. El consumidor actual exige transparencia en la cadena de valor, respeto al medio ambiente y honestidad en la propuesta comercial.',
      'En nuestras investigaciones sobre marcas de impacto social, demostramos que las empresas con un propósito ético claro no solo resisten mejor los ciclos de contracción económica, sino que consolidan una comunidad de usuarios leales.',
      'Construir valor de marca sostenible requiere articular investigación rigurosa con empatía hacia las necesidades reales de la población.',
    ],
    doi: 'doi.org/10.ceted/art.2026.09.04',
  },
  {
    id: 'blog-3',
    title: 'Metodologías Ágiles vs Marco Lógico: Integración Necesaria en Proyectos de Desarrollo',
    author: 'Dr. Carlos Mendoza Peñalver',
    role: 'Profesor Principal de Proyectos',
    date: '12 de Septiembre de 2026',
    readTime: '7 min de lectura',
    category: 'Gestión de Proyectos',
    summary:
      'Una propuesta metodológica para fusionar la solidez del Marco Lógico tradicional con la capacidad de adaptación rápida de los marcos ágiles (Scrum y Lean).',
    content: [
      'Existe un falso debate entre los defensores de las metodologías tradicionales y los promotores de la agilidad. En proyectos de desarrollo social y territorial, ambos enfoques se complementan de manera ideal.',
      'El Marco Lógico ofrece la brújula estratégica: el para qué, los supuestos de riesgo y los indicadores de impacto a largo plazo. Por su parte, la gestión ágil proporciona la cadencia de ejecución semanal, la adaptación ante imprevistos y el involucramiento de los beneficiarios en cada iteración.',
      'En el CETED enseñamos a nuestros maestrantes a diseñar modelos híbridos que garantizan control presupuestario y flexibilidad operativa simultánea.',
    ],
    doi: 'doi.org/10.ceted/art.2026.09.02',
  },
];
