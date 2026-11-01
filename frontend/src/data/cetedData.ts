import { Maestria, FacultyMember, ImpactProject, NewsItem, UniversityPartner } from '../types';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: '/src/assets/images/hero_ceted_executive_class_1793301385890.jpg',
    caption: 'Sesión ejecutiva de toma de decisiones',
    subcaption: 'Discusión de casos reales y liderazgo estratégico en el aula magna',
  },
  {
    id: 'slide-2',
    image: '/src/assets/images/hero_ceted_collaborative_workshop_1793301387230.jpg',
    caption: 'Taller de formulación y gestión de proyectos',
    subcaption: 'Equipos multidisciplinarios diseñando soluciones organizacionales de alto impacto',
  },
  {
    id: 'slide-3',
    image: '/src/assets/images/hero_ceted_case_discussion_1793301387437.jpg',
    caption: 'Debate académico con expertos internacionales',
    subcaption: 'Metodología activa centrada en el análisis riguroso de problemáticas directivas',
  },
];

export const MAESTRIAS: Maestria[] = [
  {
    id: 'direccion',
    title: 'Maestría en Dirección',
    shortTitle: 'Dirección',
    tagline: 'Liderazgo visionario, gestión del cambio y pensamiento estratégico para la alta dirección.',
    duration: '24 meses (Tiempo parcial modular)',
    modality: 'Presencial con soporte híbrido virtual',
    credits: '72 créditos académicos',
    description:
      'Diseñada para directivos, ejecutivos y líderes de organizaciones que buscan perfeccionar sus habilidades de gobierno, visión sistémica y capacidad de negociación en entornos de alta incertidumbre.',
    profile:
      'Graduados universitarios con más de 3 años de experiencia en cargos de gestión, dirección o asesoría ejecutiva.',
    competencies: [
      'Toma de decisiones estratégicas bajo riesgo e incertidumbre',
      'Liderazgo transformacional y gestión del talento humano',
      'Diagnóstico organizacional y diseño de estructuras ágiles',
      'Negociación avanzada y resolución constructiva de conflictos',
    ],
    modules: [
      'Pensamiento Estratégico y Gobierno Corporativo',
      'Comportamiento Organizacional y Liderazgo',
      'Finanzas para la Toma de Decisiones',
      'Gestión del Cambio y Transformación Digital',
      'Negociación y Comunicación Estratégica',
      'Tesis de Grado en Consultoría Aplicada',
    ],
    intakeDate: 'Convocatoria abierta — Inicio Septiembre 2026',
  },
  {
    id: 'marketing',
    title: 'Maestría en Marketing',
    shortTitle: 'Marketing',
    tagline: 'Investigación de mercados, posicionamiento de valor y estrategias comerciales integrales.',
    duration: '20 meses (Tiempo parcial)',
    modality: 'Híbrida (Sesiones presenciales intensivas y campus virtual)',
    credits: '68 créditos académicos',
    description:
      'Forma especialistas de vanguardia en la conceptualización, posicionamiento y gestión de productos y servicios con impacto en mercados locales e internacionales, fundamentado en datos e investigación científica.',
    profile:
      'Profesionales de mercadotecnia, comunicación, economía, ingeniería comercial y directivos comerciales.',
    competencies: [
      'Investigación aplicada y analítica del comportamiento del consumidor',
      'Desarrollo y posicionamiento de marcas sostenibles (Branding)',
      'Estrategias de comunicación integrada y marketing omnicanal',
      'Gestión de precios, canales de distribución y experiencia de cliente',
    ],
    modules: [
      'Fundamentos y Métodos de Investigación de Mercados',
      'Comportamiento del Consumidor en la Era Digital',
      'Estrategia de Marca y Propuesta de Valor',
      'Marketing Digital y Analítica de Datos Comerciales',
      'Dirección de Ventas y Canales de Distribución',
      'Plan Integral de Marketing (Trabajo de Aplicación)',
    ],
    intakeDate: 'Convocatoria abierta — Inicio Octubre 2026',
  },
  {
    id: 'proyectos',
    title: 'Maestría en Gestión de Proyectos para el Desarrollo',
    shortTitle: 'Gestión de Proyectos',
    tagline: 'Planificación, financiamiento y ejecución ágil de iniciativas que transforman comunidades y sectores productivos.',
    duration: '22 meses (Tiempo parcial)',
    modality: 'Presencial modular los fines de semana',
    credits: '70 créditos académicos',
    description:
      'Responde a la necesidad urgente de concebir, evaluar y dirigir proyectos de desarrollo social, económico e industrial, articulando recursos con estándares internacionales de sostenibilidad y gestión ágil.',
    profile:
      'Directores de proyectos, consultores, funcionarios públicos y especialistas de instituciones sociales y empresariales.',
    competencies: [
      'Formulación y evaluación ex-ante de proyectos de inversión y desarrollo',
      'Aplicación de metodologías ágiles y marco lógico para la gestión',
      'Gestión de riesgos, compras y aseguramiento de la calidad',
      'Medición de impacto social, retorno sostenible y rendición de cuentas',
    ],
    modules: [
      'Enfoque de Marco Lógico y Teoría del Cambio',
      'Evaluación Financiera y Social de Proyectos',
      'Metodologías Ágiles de Dirección (Scrum / Lean / PMBOK)',
      'Gestión de Riesgos, Adquisiciones y Contratación',
      'Monitoreo, Evaluación de Impacto y Sostenibilidad',
      'Proyecto Integrador de Desarrollo Sectorial',
    ],
    intakeDate: 'Convocatoria abierta — Inicio Septiembre 2026',
  },
];

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    id: 'impact-1',
    title: 'Programa de Fortalecimiento a la Gestión Territorial',
    sector: 'Desarrollo Local y Sector Público',
    description:
      'Asistencia técnica y capacitación directiva a más de 45 municipios y gobiernos locales para optimizar sus planes de desarrollo económico sustentable.',
    achievement: 'Optimización de presupuestos participativos y reducción de tiempos de tramitación en un 38%.',
    metric: '45+',
    metricLabel: 'Municipios asesorados',
  },
  {
    id: 'impact-2',
    title: 'Observatorio de Liderazgo y Productividad Empresarial',
    sector: 'Tejido Empresarial y Pymes',
    description:
      'Monitoreo continuo de prácticas de dirección en más de 200 empresas medianas y pequeñas, transfiriendo herramientas metodológicas de gobernanza.',
    achievement: 'Incremento promedio del 24% en índices de eficiencia operativa en organizaciones asesoradas.',
    metric: '200+',
    metricLabel: 'Empresas vinculadas',
  },
  {
    id: 'impact-3',
    title: 'Capacitación Directiva en Instituciones de Salud y Educación',
    sector: 'Servicios Sociales Clave',
    description:
      'Diplomados e intervenciones directivas especializadas para directores de hospitales y centros educativos, priorizando el liderazgo humanista.',
    achievement: 'Más de 850 directivos capacitados en gestión de crisis y liderazgo centrado en las personas.',
    metric: '850+',
    metricLabel: 'Directivos graduados',
  },
  {
    id: 'impact-4',
    title: 'Red de Innovación Abierta y Emprendimiento Sostenible',
    sector: 'Innovación y Ecosistema Social',
    description:
      'Mentoring y acompañamiento a iniciativas de economía circular y modelos colaborativos de producción con enfoque de equidad.',
    achievement: '62 proyectos sostenibles acelerados y vinculados con fuentes de financiamiento solidario.',
    metric: '62',
    metricLabel: 'Proyectos acelerados',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Alejandro Morales Ramos',
    role: 'Director Académico y Catedrático Principal',
    degree: 'Doctor en Ciencias Económicas (PhD) | Máster en Dirección Estratégica',
    specialty: 'Dirección Estratégica, Prospectiva Organizacional y Toma de Decisiones',
    bio: 'Más de 25 años dedicados a la investigación y consultoría en alta dirección. Ha asesorado a más de 50 organismos empresariales e instituciones públicas en planes estratégicos de largo plazo.',
    image: '/src/assets/images/claustro_ceted_faculty_1793301388016.jpg',
    publicationsCount: 34,
    experienceYears: 26,
  },
  {
    id: 'fac-2',
    name: 'Dra. María Elena Valdés',
    role: 'Coordinadora de la Maestría en Marketing',
    degree: 'Doctora en Comunicación y Marketing | Especialista en Comportamiento del Consumidor',
    specialty: 'Investigación de Mercados, Branding Estratégico y Analítica Digital',
    bio: 'Consultora internacional en investigación de mercados y posicionamiento de marcas éticas y sostenibles. Conferencista invitada en foros de CLADEA y universidades iberoamericanas.',
    image: '/src/assets/images/hero_ceted_collaborative_workshop_1793301387230.jpg',
    publicationsCount: 22,
    experienceYears: 19,
  },
  {
    id: 'fac-3',
    name: 'Dr. Carlos Mendoza Peñalver',
    role: 'Profesor Principal de Gestión de Proyectos',
    degree: 'Doctor en Ingeniería Industrial | Certificado PMP® y Agile Coach',
    specialty: 'Metodologías Ágiles, Evaluación Social de Proyectos y Cadena de Valor',
    bio: 'Experto en evaluación de proyectos de inversión y cooperación técnica internacional. Ha dirigido proyectos de infraestructura y modernización institucional en América Latina.',
    image: '/src/assets/images/hero_ceted_case_discussion_1793301387437.jpg',
    publicationsCount: 18,
    experienceYears: 21,
  },
  {
    id: 'fac-4',
    name: 'Dra. Sofía Navarro Cordero',
    role: 'Investigadora Titular y Docente de Liderazgo',
    degree: 'Doctora en Psicología Organizacional | Máster en Gestión del Talento',
    specialty: 'Comportamiento Organizacional, Negociación Compleja y Liderazgo Ético',
    bio: 'Pionera en la aplicación de modelos de liderazgo empático y resiliencia en equipos directivos sometidos a alta presión competitiva. Autora de tres libros sobre mediación de conflictos.',
    image: '/src/assets/images/impact_ceted_social_leadership_1793301388477.jpg',
    publicationsCount: 15,
    experienceYears: 17,
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Apertura de la Convocatoria de Maestrías para el Período 2026-2027',
    date: '15 de Mayo de 2026',
    category: 'Institucional',
    readTime: '3 min de lectura',
    summary:
      'CETED abre su período oficial de postulaciones para las maestrías en Dirección, Marketing y Gestión de Proyectos con becas de excelencia y facilidades de financiamiento.',
    content:
      'El Centro de Estudios de Técnicas de Dirección (CETED) ha iniciado formalmente el proceso de recepción de expedientes para la cohorte 2026. Los comités académicos evaluarán antecedentes profesionales, proyectos de grado propuestos y entrevistas de admisión directiva.',
  },
  {
    id: 'news-2',
    title: 'Firma de Acuerdo de Cooperación Académica con Redes de Escuelas de Negocios',
    date: '28 de Abril de 2026',
    category: 'Alianzas',
    readTime: '4 min de lectura',
    summary:
      'El convenio facilitará el intercambio de profesores, clases magistrales compartidas y acceso a colecciones de casos de estudio de referencia internacional.',
    content:
      'Este acuerdo estratégico consolida el compromiso de CETED con la internacionalización de la enseñanza directiva, permitiendo que nuestros estudiantes analicen casos con profesores de renombradas universidades del continente.',
  },
  {
    id: 'news-3',
    title: 'Publicación del Informe Anual de Tendencias Directivas y Gestión Empresarial',
    date: '10 de Marzo de 2026',
    category: 'Investigación',
    readTime: '5 min de lectura',
    summary:
      'El Observatorio de CETED presenta los hallazgos clave sobre adopción tecnológica, sostenibilidad y retención de talento en las organizaciones contemporáneas.',
    content:
      'El informe destaca la urgente necesidad de directivos capaces de gestionar equipos interdisciplinarios en esquemas flexibles sin perder la visión de rentabilidad social y financiera.',
  },
  {
    id: 'news-4',
    title: 'V Simposio Internacional de Técnicas de Dirección y Liderazgo Ético',
    date: '18 de Febrero de 2026',
    category: 'Eventos',
    readTime: '3 min de lectura',
    summary:
      'Más de 350 directores y académicos se reunieron para debatir sobre la toma de decisiones en contextos de transformación digital y cambio climático.',
    content:
      'El evento contó con mesas redondas, ponencias de clausura y talleres de simulación de crisis que pusieron a prueba las competencias de los participantes en tiempo real.',
  },
];

export const UNIVERSITY_PARTNERS: UniversityPartner[] = [
  {
    name: 'Universidad de La Habana',
    shortName: 'UH Cuba',
    location: 'La Habana, Cuba',
    role: 'Sede Académica y Casa Matriz de Posgrado',
    impactForStudents: 'Titulación oficial de posgrado con acreditación institucional de excelencia y acceso a tribunales académicos de máximo nivel científico.',
    url: 'https://www.uh.cu',
  },
  {
    name: 'Harvard Business Publishing Education',
    shortName: 'Harvard Business Publishing',
    location: 'Boston, Estados Unidos',
    role: 'Plataforma Pedagógica y Metodología de Casos',
    impactForStudents: 'Acceso y análisis en clase de la colección internacional de casos de estudio reales, simuladores directivos y notas técnicas de Harvard.',
    url: 'https://hbsp.harvard.edu',
  },
  {
    name: 'Tecnológico de Monterrey (EGADE)',
    shortName: 'EGADE Business School',
    location: 'Monterrey, México',
    role: 'Intercambio Docente e Investigación en Dirección',
    impactForStudents: 'Clases magistrales conjuntas con conferencistas internacionales y benchmarking en innovación y liderazgo directivo.',
    url: 'https://egade.tec.mx',
  },
  {
    name: 'Universidad de Salamanca',
    shortName: 'USAL España',
    location: 'Salamanca, España',
    role: 'Cooperación Científica y Movilidad de Posgrado',
    impactForStudents: 'Intercambio bibliográfico en teoría organizacional, co-tutorías de tesis doctorales y pasantías de investigación.',
    url: 'https://www.usal.es',
  },
  {
    name: 'Consejo Latinoamericano de Escuelas de Administración (CLADEA)',
    shortName: 'CLADEA Internacional',
    location: 'Red Global Iberoamericana',
    role: 'Red de Acreditación y Calidad Académica',
    impactForStudents: 'Validación de estándares de formación gerencial de las maestrías y publicación de investigaciones en revistas indexadas.',
    url: 'https://cladea.org',
  },
  {
    name: 'Cátedra UNESCO / Redec',
    shortName: 'UNESCO Educación Continua',
    location: 'París / Iberoamérica',
    role: 'Red Internacional de Educación Continua de Cuadros',
    impactForStudents: 'Participación en el simposio regional de directores y programas de formación continua con enfoque en desarrollo sustentable.',
    url: 'https://unesdoc.unesco.org',
  },
];

export const CETED_VALUES = [
  {
    title: 'Rigor y Pensamiento Crítico',
    description: 'Formamos directivos que no aplican fórmulas mecánicas, sino que comprenden el contexto y razonan de manera integral.',
  },
  {
    title: 'Cercanía y Acompañamiento Humano',
    description: 'Un centro que piensa con usted: relación cercana entre el claustro y cada estudiante durante toda su trayectoria.',
  },
  {
    title: 'Impacto Social Tangible',
    description: 'Nuestros programas están orientados a resolver problemas reales de las organizaciones y las comunidades.',
  },
  {
    title: 'Excelencia sin Fatiga Visual',
    description: 'Metodologías pedagógicas claras, dinámicas y orientadas al aprendizaje efectivo y equilibrado.',
  },
];
