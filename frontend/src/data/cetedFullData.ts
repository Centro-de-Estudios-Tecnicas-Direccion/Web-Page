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
  institution: 'Universidad de La Habana',
  slogan: 'Un centro de excelencia que piensa con usted',
  logo: '/assets/aistudio/CETED_b437d2ec.png',
  address: 'Calle L No. 353 e/ 21 y 23, Edif. "Julio Antonio Mella", Universidad de La Habana. Plaza de la Revolución, La Habana, Cuba.',
  directions: 'Ubicado en el Edificio "Julio Antonio Mella" de la Universidad de La Habana, en el corazón del Vedado, entre las calles 21 y 23 (La Rampa), a pasos del Hotel Habana Libre.',
  phones: ['(+53) 78328898'],
  emails: {
    general: 'ceted@rect.uh.cu',
    unesco: 'catedraecuh@gmail.com',
  },
  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/share/1CncFyvzXE/', handle: 'ceted.oficial' },
    { name: 'Instagram', url: 'https://www.instagram.com/ceted3?igsh=dnRzc21lcHd4b2Nw', handle: '@ceted3' },
    { name: 'Telegram', url: 'https://t.me/infoceted', handle: '@infoceted' },
  ],
};

export const ABOUT_CETED = {
  mision:
    'Satisfacer necesidades de conocimientos, desarrollo de habilidades, competencias, y solución de problemas en el campo de la dirección, para contribuir a la preparación y superación de directivos, profesores, investigadores, estudiantes y organizaciones; mediante la formación de profesionales, superación profesional y formación académica de posgrado en todas sus modalidades; así como servicios de consultorías, asesorías e investigaciones con alto nivel de eficacia e innovación para las partes interesadas nacionales e internacionales, contando con un capital humano altamente calificado y el soporte logístico necesario.',
  vision:
    'El Centro de Estudios de Técnicas de Dirección es una institución con prestigio nacional en la formación y el estudio sobre los directivos y la dirección en las organizaciones, altamente comprometido con los procesos de cambio e innovación en el país, lo cual es resultado de un relevante trabajo de investigación y docencia que se materializa en producción científica, programas de superación profesional, formación académica y servicios profesionales con apoyo en proceso de transformación digital; con el incremento de los vínculos académicos interinstitucionales y las relaciones internacionales.',
  valores: [
    {
      title: 'Orientación al Cliente',
      description:
        'Mostrar disposición permanente por satisfacer necesidades de capacitación, superación y desarrollo de las organizaciones, directivos y estudiantes de forma oportuna, actualizada y ajustada a sus expectativas.',
    },
    {
      title: 'Profesionalidad',
      description:
        'Ejercer la profesión y las relaciones interpersonales con capacidad y eficacia, mostrando respeto, ética y una permanente superación.',
    },
    {
      title: 'Colaboración',
      description:
        'Contribuir a la solución de problemas para alcanzar objetivos comunes, ayudar y compartir con los compañeros para lograr una meta común.',
    },
    {
      title: 'Compromiso',
      description:
        'Defender los intereses y objetivos del Centro como si fueran los personales.',
    },
    {
      title: 'Calidad Humana',
      description:
        'Mantener una actitud respetuosa, empática y de reconocimiento de la individualidad ante los diferentes públicos.',
    },
    {
      title: 'Trabajo en Equipo',
      description:
        'Desarrollar la capacidad de participar activamente en el logro de una meta común, subordinando los intereses personales a los objetivos del equipo.',
    },
  ],
  historiaNarrativa:
    'A mediados de los años ochenta, el gobierno cubano identificó la necesidad estratégica de estudiar, sistematizar y aplicar las técnicas modernas de dirección en el entorno productivo e institucional del país. Fue en el histórico discurso del 26 de Julio de 1984 pronunciado por Fidel Castro Ruz donde se trazaron las directrices para la profesionalización de la gestión. En 1988, esta visión se materializó con la creación del Centro de Estudios de Técnicas de Dirección (CETED) en la Universidad de La Habana, convirtiéndonos en pioneros indiscutibles en la docencia de posgrado e investigación directiva. Desde entonces, bajo el lema "un centro de excelencia que piensa con usted", el CETED ha acompañado codo a codo a directivos, investigadores y organizaciones en el perfeccionamiento continuo.',
  historia: [
    {
      year: '1984',
      title: 'Génesis y Definición Estratégica',
      description:
        'Discurso del 26 de Julio de 1984 por Fidel Castro Ruz, donde se establece la prioridad de asimilar y adaptar las técnicas de dirección más avanzadas del mundo al contexto cubano.',
    },
    {
      year: '1988',
      title: 'Fundación del CETED en la Universidad de La Habana',
      description:
        'Creación oficial del Centro de Estudios de Técnicas de Dirección en la Universidad de La Habana como centro pionero e interdisciplinario para la preparación integral de directivos y profesores.',
    },
    {
      year: '1996',
      title: 'Consolidación de Programas de Posgrado',
      description:
        'Aprobación y lanzamiento de los primeros programas de maestría y diplomados especializados en Dirección, incorporando claustros con formación doctoral internacional.',
    },
    {
      year: '2006',
      title: 'Marca Consultora GTI y Extensión Territorial',
      description:
        'Consolidación de la marca consultora universitaria y expansión de proyectos de intervención estratégica en empresas e instituciones de alcance nacional.',
    },
    {
      year: '2026',
      title: 'Cátedra UNESCO y Transformación Digital',
      description:
        'Liderazgo en la Cátedra UNESCO sobre Educación y Desarrollo de Economías Circulares, repositorio digital y articulación con redes científicas globales.',
    },
  ] as HistoryMilestone[],
};

export const SERVICES_DATA = {
  pregrado: {
    title: 'Formación de Pregrado',
    subtitle: 'Formación directiva y gerencial en carreras universitarias',
    description:
      'El CETED aporta una sólida formación en disciplinas de dirección, habilidades gerenciales y pensamiento estratégico para las carreras universitarias de la Universidad de La Habana, sentando las bases del liderazgo profesional de las futuras generaciones.',
    features: [
      'Asignaturas curriculares en Fundamentos de Administración y Teoría de la Dirección',
      'Talleres prácticos de liderazgo, comunicación asertiva y negociación',
      'Desarrollo de competencias laborales tempranas para el entorno productivo',
      'Tutoría de tesis de grado y proyectos de investigación estudiantil orientados a la solución de problemas reales',
    ],
    audience: 'Estudiantes de las facultades de Contabilidad y Finanzas, Turismo, Economía y ciencias afines.',
  },
  posgrado: {
    title: 'Formación Académica de Posgrado',
    subtitle: 'Maestrías, Especialidades y Diplomados de Alto Impacto',
    description:
      'Nuestra formación de posgrado ofrece programas reconocidos por su rigor científico y pertinencia práctica, dirigidos a directivos, cuadros de dirección, especialistas y docentes universitarios.',
    maestrias: [
      {
        id: 'direccion',
        name: 'Maestría en Dirección',
        duration: '24 meses (Tiempo parcial modular)',
        focus: 'Dirección estratégica, liderazgo, dirección participativa, toma de decisiones complejas, gestión por valores y control de gestión.',
        requirements: 'Título universitario de nivel superior, experiencia directiva comprobada y aval institucional.',
      },
      {
        id: 'marketing',
        name: 'Maestría en Marketing',
        duration: '20 meses (Modalidad semipresencial)',
        focus: 'Sistemas de información de marketing, investigación de mercados, dirección comercial, branding y estrategias omnicanal.',
        requirements: 'Graduados de ciencias económicas, empresariales o directivos vinculados a la gestión comercial.',
      },
      {
        id: 'proyectos',
        name: 'Maestría en Gestión de Proyectos para el Desarrollo',
        duration: '22 meses (Presencial y modular)',
        focus: 'Formulación, evaluación de impacto socioeconómico, marco lógico, riesgos, sostenibilidad y metodologías de gestión de proyectos.',
        requirements: 'Coordinada por la Dra. C. Katy Herrera Lemus. Dirigida a gestores de proyectos, directivos y consultores.',
      },
    ],
    diplomados: [
      'Diplomado en Dirección para la Fiscalía General de la República (Coordinado por M.Sc. Francisco Rodríguez)',
      'Diplomado en Gestión de Proyectos de Colaboración Internacional (Riesgos y Sostenibilidad)',
      'Diplomado de Perfeccionamiento Empresarial para Directivos',
    ],
  },
  consultora: {
    title: 'Gestión Talento e Innovación (GTI): Consultores Asociados',
    subtitle: 'Marca de servicios de consultoría de la Universidad de La Habana',
    description:
      'Gestión Talento e Innovación (GTI): Consultores Asociados es la marca oficial de servicios de consultoría de la Universidad de La Habana, creada con el propósito de acompañar a directivos y organizaciones en el desarrollo de sus competencias y la mejora continua de sus procesos de negocio.',
    manifesto:
      'Nuestra firma se especializa en intervenciones integrales, brindando soluciones de alto valor agregado que permiten a nuestros clientes adquirir nuevas capacidades de gestión, enfrentar problemas complejos con creatividad y potenciar un desempeño competitivo, innovador y comprometido con la responsabilidad social. Respaldados por el prestigio y el rigor científico de la Universidad de La Habana, trabajamos bajo una visión clara para el 2026: consolidarnos como la entidad referente en el mercado nacional para el desarrollo directivo y la resolución de retos organizacionales.',
    servicesList: [
      'Diagnóstico organizacional y herramientas de intervención institucional',
      'Diseño y rediseño de modelos de negocio (Business Model Canvas e ISO 9001)',
      'Gestión por competencias laborales y perfil del potencial directivo',
      'Dirección participativa y modelos organizacionales para empresas cubanas',
      'Sistemas de gestión de la calidad normalizados y auditorías de procesos',
      'Gestión estratégica de costos y análisis en servicios de salud y productivos',
      'Asesoría en economía circular, cadenas de valor y desarrollo local',
    ],
    clients: 'Entidades empresariales nacionales, organismos de la administración central del Estado, gobiernos territoriales y cooperativas.',
  },
  gabinete: {
    title: 'Gabinete Metodológico',
    subtitle: 'Gestión del conocimiento científico y metodológico del CETED',
    description:
      'El Gabinete Metodológico busca centralizar y gestionar el flujo de información científica del CETED. Alberga un repositorio de tesis de grado, maestría, especialidad y doctorado, además de una biblioteca física y digital con títulos especializados en gestión, con un enfoque particular en el contexto cubano y latinoamericano.',
    functions: [
      'Repositorio de tesis de grado, maestría, especialidad y doctorado del centro',
      'Biblioteca física y digital de títulos especializados en gestión y dirección',
      'Búsquedas bibliográficas especializadas en bases de datos de alto impacto (OpenAlex, Google Scholar)',
      'Elaboración de informes bibliométricos personalizados para investigadores',
      'Soporte técnico integral en la revisión antiplagio de documentos científicos',
      'Flujo de trabajo constante y articulación mensual con la Biblioteca Central de la Universidad de La Habana',
    ],
  },
};

export const EXTENSION_REDEC = {
  title: 'Redec - Cátedra UNESCO',
  subtitle: 'Educación y Desarrollo de Economías Circulares',
  badge: 'Cátedra UNESCO de la Universidad de La Habana',
  description:
    'Redec es una Red Universitaria que busca articular la investigación, la formación y la extensión universitaria en la Universidad de La Habana para impulsar modelos de gestión circular. Adquiere un carácter dual al estar respaldada por la UNESCO bajo el título de Cátedra UNESCO sobre Educación y Desarrollo de Economías Circulares, por lo cual contamos con el respaldo internacional para fomentar investigaciones que promuevan buenas prácticas en la gestión de recursos.',
  linktree: 'https://linktr.ee/CatedraUNESCORedec.Cuba',
  facebook: 'https://www.facebook.com/share/1D5VDtYqhm/',
  instagram: 'https://www.instagram.com/redec_unesco?igsh=MXVyM3RncGV4aWJjMA==',
  email: 'catedraecuh@gmail.com',
  phone: '+53 56079674',
  objectives: [
    'Articular investigación, formación y extensión universitaria en modelos de gestión circular',
    'Fomentar investigaciones aplicadas y buenas prácticas en la gestión integral de recursos',
    'Conectar iniciativas entre la academia, el sector empresarial y los territorios cubanos',
    'Fortalecer el intercambio académico y científico con la red internacional de cátedras UNESCO',
  ],
};

export const RESEARCH_LINES: ResearchLine[] = [
  {
    id: 'line-potencial',
    title: 'Desarrollo del potencial directivo',
    leader: 'Dr. C. Rey Felipe González Meriño',
    leaderId: 'fac-rey-felipe',
    description:
      'Desarrollo de la ciencia de la dirección; formación de directivos; estudios sobre liderazgo, comunicación, comportamiento, desarrollo de competencias, toma de decisiones; manejo de conflictos y negociación; técnicas y tecnologías administrativas, dirección participativa, dirección por valores, gestión de calidad; tecnología de la información y las comunicaciones para la toma de decisiones.',
    keyTopics: [
      'Ciencia de la dirección y toma de decisiones',
      'Liderazgo, comunicación y comportamiento organizacional',
      'Competencias laborales de directivos',
      'Dirección participativa y dirección por valores',
      'Manejo de conflictos y técnicas de negociación',
      'Gestión de calidad y TIC aplicadas',
    ],
    activeProjects: 3,
  },
  {
    id: 'line-sistemas',
    title: 'Desarrollo de sistemas organizativos institucionales y territoriales',
    leader: 'Dra. C. Katy C. Herrera Lemus',
    leaderId: 'fac-katy-herrera',
    description:
      'Efectividad organizacional y responsabilidad social; capacidades y flexibilidad organizacional e innovación; encadenamientos, redes, cadenas de valor; desarrollo local; alianzas público-privada; articulación entre actores en función del desarrollo; economía circular.',
    keyTopics: [
      'Efectividad y responsabilidad social institucional',
      'Flexibilidad organizacional e innovación',
      'Encadenamientos productivos y cadenas de valor',
      'Desarrollo local y articulación territorial',
      'Alianzas público-privadas',
      'Economía circular y sostenibilidad',
    ],
    activeProjects: 4,
  },
  {
    id: 'line-estrategia',
    title: 'Estrategia y competitividad',
    leader: 'Dra. C. Angela Palacios Hidalgo',
    leaderId: 'fac-angela-palacios',
    description:
      'Planeación y dirección estratégica; proceso de implementación y soportes estratégicos; competencias organizacionales y competitividad; marketing y gestión comercial; comunicación organizacional; gestión de emprendimientos privados y estatales.',
    keyTopics: [
      'Planeación y dirección estratégica',
      'Implementación y soportes estratégicos',
      'Competencias organizacionales y competitividad',
      'Marketing y gestión comercial de servicios',
      'Comunicación organizacional',
      'Gestión de emprendimientos estatales y no estatales',
    ],
    activeProjects: 4,
  },
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'proj-papn-1',
    title: 'PN223LH011-050: Formación de competencias claves para una dirección efectiva y saludable',
    lineId: 'line-potencial',
    duration: '2023 - 2026',
    coordinator: 'Dr. C. Rey Felipe González Meriño',
    coordinatorId: 'fac-rey-felipe',
    scope: 'Programa Nacional de Ciencia y Técnica (PAPN)',
    status: 'En ejecución',
    abstract:
      'Diseño e implementación de un procedimiento metodológico integral para la formación y evaluación de competencias claves orientadas a una dirección efectiva, ética y saludable en las organizaciones.',
  },
  {
    id: 'proj-papn-2',
    title: 'PN223LH011-040: Modelo de Dirección Participativa para las Empresas Cubanas',
    lineId: 'line-potencial',
    duration: '2024 - 2025',
    coordinator: 'Dr. C. Rey Felipe González Meriño',
    coordinatorId: 'fac-rey-felipe',
    scope: 'Programa Nacional "Las Ciencias Sociales y las Humanidades"',
    status: 'En ejecución',
    abstract:
      'Liderado científicamente por el Dr. Rey Felipe González Meriño. Propone e implementa un modelo de dirección participativa contextualizado a los retos de productividad, compromiso del talento y gestión colectiva en el sistema empresarial cubano.',
  },
  {
    id: 'proj-paps-1',
    title: 'Fortalecimiento de capacidades para el desarrollo de la Infraestructura Nacional de la Calidad',
    lineId: 'line-sistemas',
    duration: '2023 - 2026',
    coordinator: 'Dra. C. Marlene Martínez Navarro',
    coordinatorId: 'fac-marlene-martinez',
    scope: 'Programa Sectorial (PAPS)',
    status: 'En ejecución',
    abstract:
      'Desarrollo de capacidades institucionales y metodológicas para fortalecer la infraestructura de la calidad y los sistemas de normalización y acreditación técnica.',
  },
  {
    id: 'proj-paps-2',
    title: 'Sistema de Vigilancia e Inteligencia Colaborativa en RED para la Gestión del Conocimiento',
    lineId: 'line-sistemas',
    duration: '2022 - 2025',
    coordinator: 'Dra. C. Marlene Martínez Navarro',
    coordinatorId: 'fac-marlene-martinez',
    scope: 'Programa Sectorial (PAPS)',
    status: 'En ejecución',
    abstract:
      'Implementación de un sistema de vigilancia infotecnológica e inteligencia estratégica en red para la gestión de la información y el conocimiento estratégico en instituciones universitarias y científicas.',
  },
  {
    id: 'proj-paps-3',
    title: 'Transformación del proceso administrativo de la Fiscalía General de la República de Cuba',
    lineId: 'line-potencial',
    duration: '2023 - 2026',
    coordinator: 'M.Sc. Francisco Rodríguez González',
    coordinatorId: 'fac-francisco-rodriguez',
    scope: 'Programa Sectorial (PAPS)',
    status: 'En ejecución',
    abstract:
      'Transformación de procesos de gestión y perfeccionamiento administrativo en función de la misión constitucional de la Fiscalía General de la República de Cuba, articulado con diplomados especializados.',
  },
  {
    id: 'proj-paps-4',
    title: 'Gestión de la Economía Circular (EC)',
    lineId: 'line-sistemas',
    duration: '2024 - 2027',
    coordinator: 'Dra. C. Katy C. Herrera Lemus',
    coordinatorId: 'fac-katy-herrera',
    scope: 'Cátedra UNESCO - PAPS',
    status: 'En ejecución',
    abstract:
      'Articulación de investigación y modelos de producción y gestión circular en entidades productivas y académicas bajo el auspicio de la Cátedra UNESCO.',
  },
  {
    id: 'proj-pnap-1',
    title: 'NAP223LH001-117: Certificación de un Sistema de Gestión en Organización Educativa UH',
    lineId: 'line-sistemas',
    duration: '2023 - 2025',
    coordinator: 'Dra. C. Marlene Martínez Navarro',
    coordinatorId: 'fac-marlene-martinez',
    scope: 'Proyecto No Asociado a Programas con Demanda Externa (PNAP)',
    status: 'En ejecución',
    abstract:
      'Diseño, implementación y certificación de un sistema de gestión de la calidad normalizado bajo estándares internacionales en una organización educativa de la Universidad de La Habana.',
  },
  {
    id: 'proj-pnap-2',
    title: 'NAP223LH223-123: Fortalecimiento de capacidades para la gestión de proyectos de I+D',
    lineId: 'line-estrategia',
    duration: '2024 - 2026',
    coordinator: 'Dra. C. Katy C. Herrera Lemus',
    coordinatorId: 'fac-katy-herrera',
    scope: 'Demanda Externa (PNAP)',
    status: 'En ejecución',
    abstract:
      'Formación metodológica y transferencia de herramientas avanzadas para la gestión ágil y rigurosa de proyectos de investigación, desarrollo e innovación en centros científicos.',
  },
];

export const FACULTY_MEMBERS_FULL: FacultyMember[] = [
  {
    id: 'fac-alexis-codina',
    name: 'Dr. C. Alexis Codina Jiménez',
    role: 'Profesor de Mérito de la Universidad de La Habana | Fundador del CETED',
    degree: 'Doctor en Ciencias Económicas | Licenciado en Economía (UH, 1966)',
    specialty: 'Liderazgo, Habilidades Directivas, Inteligencia Emocional, Solución de Conflictos y Negociación',
    bio: 'El Dr. C. Alexis Codina Jiménez, Profesor de Mérito, es una figura de referencia en el ámbito de las ciencias económicas y la gestión en Cuba. Su vínculo con la Universidad de La Habana comenzó en 1962, cuando inició sus estudios de Economía. En 1966 fue seleccionado para integrarse a los Equipos de Investigaciones Económicas, una iniciativa impulsada por el Comandante en Jefe Fidel Castro con el objetivo de analizar sectores estratégicos de la economía cubana, tales como la industria, el transporte y la pesca. A lo largo de su destacada carrera, ha desempeñado responsabilidades de alto nivel como Decano de la Facultad de Economía y Vicerrector de la Universidad de La Habana. Asimismo, es reconocido como fundador y directivo del Centro de Estudios de Técnicas de Dirección (CETED) en 1988, institución pionera desde la cual ha contribuido significativamente a la modernización de la gestión en el país. Su prestigio académico trasciende fronteras, habiendo impartido cursos de posgrado en naciones como España, México, Venezuela, Argentina y Bolivia, además de ser autor de cuatro libros y más de 150 artículos especializados publicados a nivel nacional e internacional.',
    image: '/assets/faculty/photo_codina.png',
    email: 'ceted@rect.uh.cu',
    experienceYears: 45,
    cvHighlights: [
      'Profesor de Mérito de la Universidad de La Habana',
      'Fundador y directivo del CETED en 1988',
      'Premio Nacional de Economía por la Obra de toda la Vida (2006)',
      'Condecoración Frank País y Medalla José Tey del Consejo de Estado',
      'Ex-Decano de la Facultad de Economía y Ex-Vicerrector de la Universidad de La Habana',
      'Huésped de Honor y Llave de la Ciudad de Mar del Plata (Argentina)',
    ],
    ejesTematicos: [
      'Ciencia de la dirección y toma de decisiones gerenciales',
      'Liderazgo y desarrollo de habilidades directivas',
      'Inteligencia emocional y comportamiento en las organizaciones',
      'Técnicas y tácticas de negociación y manejo de conflictos',
    ],
    premios: [
      'Premio Nacional de Economía por la Obra de toda la Vida (2006)',
      'Condecoración Frank País otorgada por el Consejo de Estado y el MES',
      'Medalla José Tey del Consejo de Estado',
      'Distinción por la Educación Cubana',
      'Medallas 250 y 270 Aniversario de la Universidad de La Habana',
      'Medalla de la Amistad de la Escuela Superior de Economía de Bratislava',
      'Huésped de Honor y Llave de la Ciudad de Mar del Plata, Argentina',
    ],
    publications: [
      'Autor de 4 libros seminales sobre habilidades gerenciales y solución de conflictos',
      'Más de 150 artículos especializados en revistas nacionales e internacionales de dirección',
    ],
    docencia: [
      'Cursos de posgrado y diplomados en Habilidades Directivas y Liderazgo',
      'Docencia internacional en España, México, Venezuela, Argentina y Bolivia',
    ],
  },
  {
    id: 'fac-katy-herrera',
    name: 'Dra. C. Katy C. Herrera Lemus',
    role: 'Profesora Titular | Copresidenta Cátedra UNESCO | Coordinadora de Posgrado',
    degree: 'Doctora en Ciencias Técnicas (2000) | Máster en Dirección (1996) | Ingeniera Industrial (1994) | Profesora Titular (2012)',
    specialty: 'Gestión del Conocimiento y Talento Humano, Dirección Estratégica, Diseño Organizacional y Gestión de Proyectos',
    bio: 'Ingeniera Industrial (1994), Máster en Dirección (1996), Doctora en Ciencias Técnicas (2000) y Profesora Titular por la Universidad de La Habana (2012). Diplomada del Programa Europeo para la Enseñanza de la Gestión (PEEG-FORGEC) Cuba-UE (2016). Desarrolla actividades como profesora e investigadora del Centro de Estudios de Técnicas de Dirección (CETED) de la UH. Es Copresidenta de la Cátedra UNESCO Educación y Desarrollo de Economías Circulares de la UH (2026), Coordinadora general del Máster en Gestión de Proyectos para el Desarrollo y Consultora del Centro Internacional de La Habana (CIH). Participa en proyectos de investigación nacional e internacional, siendo experta para acciones de formación, capacitación y asesoría en los ámbitos de la Gestión del Conocimiento y el Talento Humano, Dirección Estratégica, Diseño Organizacional y por procesos y Gestión de Proyectos. Posee amplia experiencia nacional e internacional como gestora de proyectos y académica en instituciones homólogas de México, Colombia, Ecuador, Venezuela, España, Portugal y Francia.',
    image: '/assets/faculty/photo_katy.png',
    email: 'katy@ceted.uh.cu',
    experienceYears: 30,
    cvHighlights: [
      'Copresidenta de la Cátedra UNESCO Educación y Desarrollo de Economías Circulares (UH, 2026)',
      'Coordinadora general de la Maestría en Gestión de Proyectos para el Desarrollo',
      'Doctora en Ciencias Técnicas y Profesora Titular de la Universidad de La Habana',
      'Diplomada del Programa Europeo para la Enseñanza de la Gestión (PEEG-FORGEC Cuba-UE)',
      'Consultora acreditada del Centro Internacional de La Habana (CIH)',
      'Experiencia académica internacional en 7 países europeos y latinoamericanos',
    ],
    ejesTematicos: [
      'Gestión del Conocimiento y del Talento Humano',
      'Dirección Estratégica y Alineación Institucional',
      'Diseño Organizacional y Enfoque por Procesos',
      'Formulación, riesgos y evaluación de proyectos para el desarrollo',
      'Economía Circular y Sostenibilidad Territorial',
    ],
    premios: [
      'Copresidencia oficial Cátedra UNESCO de la Universidad de La Habana (2026)',
      'Certificación Docente de Posgrado PEEG-FORGEC Unión Europea (2016)',
      'Categoría Docente Principal de Profesora Titular UH (2012)',
    ],
    docencia: [
      'Coordinación general y docencia en la Maestría en Gestión de Proyectos para el Desarrollo',
      'Módulos de Dirección Estratégica y Gestión del Talento en la Maestría en Dirección',
      'Capacitación y asesorías ejecutivas a entidades y organismos territoriales',
    ],
  },
  {
    id: 'fac-marusia-monagas',
    name: 'Dra. C. Marusia Monagas Docasal',
    role: 'Profesora Titular | Experta de la Junta de Acreditación Nacional (JAN)',
    degree: 'Doctora en Ciencias de la Administración | Licenciada en Ciencias Económicas',
    specialty: 'Control Estratégico de Gestión, Plan de Negocio, Marketing de Servicios y Habilidades Directivas',
    bio: 'Con una trayectoria de más de 35 años dedicada a la dirección de centros docentes de alto nivel —incluyendo la Escuela de Capacitación Azucarera, la Escuela de Altos Estudios de Hotelería y Turismo y la Universidad de La Habana—, cuenta con una sólida experiencia en la gestión educativa y académica. En el ámbito de la acreditación y la calidad educativa, se desempeña como experta de la Junta de Acreditación Nacional en Cuba (JAN), evaluando programas de grado, maestrías, doctorados e instituciones. Su labor se extiende a la participación activa en comisiones nacionales de carrera, donde ha colaborado en el diseño de planes de estudio para las Licenciaturas en Turismo y en Contabilidad y Finanzas. Asimismo, forma parte del comité académico del programa de doctorado en Ciencias de la Administración y ha ejercido como coordinadora, docente y miembro de comités en diversos programas de maestría, especializándose en el diseño de planes de estudio bajo modalidades a distancia y semipresencial. Dirige tesis doctorales, de fin de máster y fin de grado, y actúa como miembro de tribunales evaluadores para categorías docentes de Profesor Titular y Auxiliar. Como consultora especializada ofrece capacitaciones, mentoría y metodologías adaptadas para optimizar la competitividad organizacional, respaldada por más de diez artículos en Scielo y Scopus.',
    image: '/assets/faculty/photo_marusia.png',
    email: 'marusia.monagas@ceted.uh.cu',
    experienceYears: 35,
    cvHighlights: [
      'Más de 35 años en dirección de centros docentes de posgrado y turismo',
      'Experta oficial de la Junta de Acreditación Nacional (JAN) de la República de Cuba',
      'Comité Académico del Doctorado en Ciencias de la Administración (UH)',
      'Diseño curricular de carreras nacionales en Turismo y Contabilidad y Finanzas',
      'Consultora sénior en competitividad, control de gestión y planes de negocio',
    ],
    ejesTematicos: [
      'Control Estratégico de Gestión y Cuadro de Mando Integral',
      'Plan de Negocio y Ambiente de Negocios',
      'Marketing de los Servicios y Gestión Comercial',
      'Evaluación y Acreditación de la Calidad Universitaria (JAN)',
      'Habilidades Directivas y Administración General',
    ],
    publications: [
      'Más de diez artículos en revistas científicas indexadas en Scopus y Scielo sobre gestión y educación',
    ],
    premios: [
      'Experta Designada de la Junta de Acreditación Nacional (JAN Cuba)',
      'Reconocimiento por más de tres décadas de liderazgo docente y directivo en la educación superior',
    ],
    docencia: [
      'Cursos de posgrado en Control Estratégico de Gestión, Plan de Negocio y Marketing de Servicios',
      'Docencia en las Maestrías en Dirección y en Marketing del CETED',
      'Tutoría de tesis doctorales y de maestría en ciencias de la administración',
    ],
  },
  {
    id: 'fac-marlene-martinez',
    name: 'Dra. C. Marlene Martínez Navarro',
    role: 'Profesora Titular | Investigadora y Líder de Proyectos de Calidad Normalizada',
    degree: 'Doctora en Ciencias Técnicas (2023) | Licenciada en Geografía (1989)',
    specialty: 'Sistemas de Gestión Normalizados, Vigilancia e Inteligencia Colaborativa, Calidad en Organizaciones Educativas',
    bio: 'Graduada en Geografía (1989) y Doctora en Ciencias Técnicas (2023). Su trayectoria profesional se caracteriza por una sólida vinculación entre la docencia, la investigación y la gestión de la calidad en organizaciones educativas. En el ámbito investigativo ha desempeñado un rol activo en importantes proyectos institucionales: el "Sistema de Vigilancia e Inteligencia Estratégica Colaborativa en Red en las Universidades" y el desarrollo del "Observatorio Infotecnológico de las Ciencias y Tecnologías Aplicadas". Asimismo, ha liderado el proyecto "Fortalecimiento de la gestión en organizaciones educativas a partir de los sistemas normalizados" y actualmente dirige el proyecto institucional centrado en la "Certificación de un Sistema de Gestión implementado en una organización educativa de la Universidad de La Habana". Su producción científica cuenta con publicaciones en revistas de alto impacto (Grupos 1 y 2) entre 2020 y 2024 en información, educación superior y desarrollo social. Se ha desempeñado como profesora en el InSTEC y en la Facultad de Contabilidad y Finanzas de la UH. Profesora invitada en el Tecnológico de Sinaloa y la Universidad Pedagógica Nacional 212 de Teziutlán (México). Dirige tesis de Técnico Superior, Diploma, Maestría y Doctorado.',
    image: '/assets/faculty/photo_marlene.png',
    email: 'marlene.martinez@ceted.uh.cu',
    experienceYears: 34,
    cvHighlights: [
      'Distinción por la Educación Cubana otorgada por el Ministerio de Educación Superior (MES, 2023)',
      'Premio a la Mejor Tesis de Doctorado en Ciencias Técnicas de la Universidad de La Habana (2024)',
      'Galardón otorgado por la UNAICC (Geociencias) por sus aportes científicos (2024)',
      'Directora del proyecto institucional de Certificación de Sistemas de Gestión en la UH',
      'Profesora invitada en el Tecnológico de Sinaloa y UPN 212 Teziutlán (México)',
    ],
    ejesTematicos: [
      'Sistemas de Gestión Normalizados (Normas ISO aplicadas a la educación y servicios)',
      'Sistema de Vigilancia e Inteligencia Estratégica Colaborativa en Red',
      'Observatorios Infotecnológicos de Ciencia y Tecnología',
      'Gestión de la Calidad y Certificación en Organizaciones Educativas',
    ],
    premios: [
      'Distinción por la Educación Cubana (MES, 2023)',
      'Premio a la Mejor Tesis Doctoral en Ciencias Técnicas de la Universidad de La Habana (2024)',
      'Premio Científico UNAICC Sociedad de Geociencias (2024)',
    ],
    publications: [
      'Diversas publicaciones en revistas de alto impacto (Grupos 1 y 2) entre 2020 y 2024 sobre vigilancia infotecnológica y calidad educativa',
    ],
    docencia: [
      'Administración General en la Facultad de Contabilidad y Finanzas (UH)',
      'Docencia en InSTEC y módulos de posgrado en sistemas de gestión normalizados',
      'Dirección de tesis de doctorado, maestría y diploma',
    ],
  },
  {
    id: 'fac-rey-felipe',
    name: 'Dr. C. Rey Felipe González Meriño',
    role: 'Profesor Titular | Investigador | Consultor Organizacional',
    degree: 'Doctor en Ciencias Económicas (Univ. de Oriente, 2003) | Máster en Dirección (CUJAE, 1997) | Lic. Economía Política y Economista (Univ. Estatal de Moscú, 1985)',
    specialty: 'Dirección Participativa, Calidad Directiva, Competencias Laborales y Diagnóstico Organizacional',
    bio: 'Graduado como Licenciado en Economía Política y Economista en la Universidad Estatal de Moscú (1985), Máster en Dirección por la CUJAE (1997), Doctor en Ciencias Económicas por la Universidad de Oriente (2003) y Profesor Titular certificado por el MES (2006). Profesor, investigador y consultor del CETED. Inició como docente en el ISP Julio Antonio Mella (Universidad de Oriente). Ha sido profesor-entrenador de Técnicas de Dirección para directivos impartiendo posgrados en Técnicas y Habilidades de Negociación, Gestión de la Calidad, Recursos Humanos y Solución de Problemas en Equipo. Ha impartido cursos en maestrías de universidades ecuatorianas (Machala, Escuela Superior Politécnica del Chimborazo y Univ. Simón Bolívar de Guaranda), formador en Venezuela (Caracas, Miranda y Maturín) y profesor invitado de la Cátedra UNESCO y Mediterránea de la Universidad de Valencia (España). Realizó estancias de investigación en la Univ. de Valencia (4 estancias), Univ. de La Coruña y ESADE Barcelona. Trabajó 4 años en la Univ. de Huambo (Angola) impartiendo cátedras en lengua portuguesa. Ha dirigido el Proyecto Nacional "Modelo de Dirección Participativa para las Empresas Cubanas" (PN223LH011-040) y participa en la Red de Estudios Laborales, Red de Desarrollo Local UH y Cátedra UNESCO de Economía Circular. Tutora activamente diplomados, maestrías y tesis doctorales.',
    image: '/assets/faculty/photo_rey_felipe.png',
    email: 'rfglez@ceted.uh.cu',
    experienceYears: 40,
    cvHighlights: [
      'Graduado con honores en Economía Política de la Universidad Estatal de Moscú (1985)',
      'Líder científico del Proyecto Nacional: Modelo de Dirección Participativa para Empresas Cubanas',
      'Profesor Titular con amplia trayectoria en formación de directivos y consultoría',
      'Cuatro estancias de investigación en la Universidad de Valencia, Univ. de La Coruña y ESADE Barcelona',
      'Profesor en Angola durante 4 años impartiendo cátedras en idioma portugués',
    ],
    ejesTematicos: [
      'Calidad Directiva y Competencias Claves de Dirección',
      'Modelo de Dirección Participativa para las Empresas Cubanas',
      'Técnicas y Habilidades de Negociación y Solución de Problemas en Equipo',
      'Herramientas de Diagnóstico Organizacional y Clima Laboral',
      'Gestión de Proyectos de Desarrollo y Gestión de Recursos Humanos',
    ],
    docencia: [
      'Administración General y Administración Estratégica',
      'Metodología de la Investigación Científica',
      'Gestión de Recursos Humanos, Calidad y Marketing',
      'Herramientas de Diagnóstico Organizacional y Negociación',
    ],
    publications: [
      'Líder y autor principal de publicaciones sobre competencias laborales de directivos y dirección participativa',
      'Coautor en monografías sobre redes de desarrollo local y desempeño empresarial',
    ],
  },
  {
    id: 'fac-carlos-mas',
    name: 'Dr. C. Carlos Javier Más López',
    role: 'Profesor Titular | Jefe de Departamento Docente FCF | Coordinador de Posgrado',
    degree: 'Doctor en Ciencias Contables y Financieras (UH, 2015) | Máster en Contabilidad (UH, 2008) | Licenciado en Contabilidad y Finanzas',
    specialty: 'Gestión Estratégica de Costos, Costos en Salud, Valuación de Inventarios y Toma de Decisiones',
    bio: 'Doctor en Ciencias Contables y Financieras (UH, 2015), Máster en Contabilidad (UH, 2008) y Profesor Titular. Se desempeña como Jefe de Departamento Docente de Costos y Sistemas de Información Contables en la Facultad de Contabilidad y Finanzas de la Universidad de La Habana. Es Coordinador de la Maestría en Gestión Estratégica de Costos, Miembro de la Comisión Nacional de la Carrera de Contabilidad y Finanzas de Cuba, Miembro de la Comisión Permanente del Doctorado en Ciencias Contables y Financieras, y Miembro de los Comités Académicos de los Doctorados y Maestrías en Contabilidad, Finanzas y Gestión Estratégica de Costos. Miembro del Tribunal de Categorías Docentes. Coordina el Proyecto de Investigación "Gestión de Costos en los Servicios Cubanos de Salud". Sus ejes se centran en prácticas docentes de alto impacto, aprendizaje adaptativo personalizado, gestión de costos empresariales y de salud, valuación de inventarios, planeación y control de gastos y toma de decisiones. Es coautor de libros con la editorial IntechOpen (Londres, 2024) y numerosas publicaciones de impacto regional e internacional.',
    image: '/assets/faculty/photo_carlos_mas.png',
    email: 'carlos.jmas@ceted.uh.cu',
    orcid: 'https://orcid.org/0000-0003-1284-6444',
    experienceYears: 18,
    cvHighlights: [
      'Jefe de Departamento Docente de Costos y Sistemas de Información Contables (FCF, UH)',
      'Coordinador de la Maestría en Gestión Estratégica de Costos',
      'Miembro de la Comisión Nacional de la Carrera de Contabilidad y Finanzas de Cuba',
      'Coordinador del Proyecto: Gestión de Costos en los Servicios Cubanos de Salud',
      'Coautor del libro internacional "The Costs of Cervical Cancer Treatment with a Social Focus" (IntechOpen, 2024)',
    ],
    ejesTematicos: [
      'Gestión Estratégica de Costos en el sector empresarial',
      'Costos de Salud: análisis de enfermedades y procesos hospitalarios',
      'Valuación de inventarios, planeación y control de gastos',
      'Sistemas de información contable para la toma de decisiones',
      'Prácticas docentes de alto impacto y aprendizaje adaptativo personalizado',
    ],
    publications: [
      'Libro: "The Costs of Cervical Cancer Treatment with a Social Focus" (IntechOpen, 2024)',
      'García-Aliaga, L., Más López, C., Aguayo Joza, J. (2024). Revista Espacios, Vol. 45.',
      'Gutiérrez Guerra, Y., Más López, C., López Rodríguez, M. L. (2023). La gestión de costos y toma de decisiones.',
      'Más López, C., & Vidal González, I. M. (2023). Procedimiento para la gestión de costos en salud.',
      'Machado Almeyda, M. I., & Más López, C. (2022). Planeación y control de costos hospitalarios.',
    ],
    docencia: [
      'Coordinador de la Maestría en Gestión Estratégica de Costos',
      'Docente en Maestrías de Contabilidad y Finanzas (UH)',
      'Tribunales de Doctorado en Ciencias Contables y Financieras',
    ],
  },
  {
    id: 'fac-damaris-cruz',
    name: 'Dra. C. Damaris Cruz Amarán',
    role: 'Profesora Auxiliar | Consultora en Modelos de Negocio, Liderazgo e Innovación',
    degree: 'Doctora en Ciencias Económicas (UH, 2023) | Máster en Dirección (CUJAE, 2007) | Diplomados en RR.PP. (MINCULT, 2002) y Comercio Exterior (MINCEX, 2023)',
    specialty: 'Transformación Organizacional, Liderazgo, Business Model Canvas e ISO 9001, Parques Científico-Tecnológicos',
    bio: 'Doctora en Ciencias Económicas por la Universidad de La Habana (2023), Máster en Dirección por la CUJAE (2007) y Profesora Auxiliar. Especialista en la transformación organizacional de empresas en crecimiento, formación en liderazgo, diseño e innovación de modelos de negocio y desarrollo de marca personal. Imparte los cursos ejecutivos "Curso en Liderazgo" y "De la idea al negocio: diseño y validación con Business Model Canvas e ISO 9001". Ha recibido el Premio a la Mejor Tesis de Doctorado en Ciencias Económicas del país (MES, 2023), el Premio Nacional de Innovación en Salud Pública (2021) y el Premio de la Academia de Ciencias de Cuba (ACC). Ha publicado en editoriales internacionales de primer nivel como Springer y en revistas indexadas de alto impacto (Sustainability, Ingeniería Industrial).',
    image: '/assets/faculty/photo_damaris_cruz.png',
    orcid: 'https://orcid.org/0000-0002-9063-2807',
    linkedIn: 'https://www.linkedin.com/in/damaris-cruz-amaran-25470021',
    experienceYears: 19,
    cvHighlights: [
      'Premio a la Mejor Tesis de Doctorado en Ciencias Económicas del país (MES, 2023)',
      'Premio Nacional de Innovación en Salud Pública (2021) y Premio Academia de Ciencias de Cuba',
      'Autora de capítulos en Springer sobre transferencia tecnológica y modelos universitarios',
      'Docente de "De la idea al negocio: diseño y validación con Business Model Canvas e ISO 9001"',
      'Especialista en parques científicos, incubación y modelos de negocio sostenibles',
    ],
    ejesTematicos: [
      'Transformación organizacional de empresas en crecimiento',
      'Formación en Liderazgo y desarrollo directivo',
      'Diseño e innovación de modelos de negocio (Business Model Canvas e ISO 9001)',
      'Desarrollo de Marca Personal y Comunicación Estratégica',
      'Políticas de Transferencia Tecnológica y Parques Científico-Tecnológicos',
    ],
    premios: [
      'Premio a la Mejor Tesis Doctoral en Ciencias Económicas de Cuba (MES, 2023)',
      'Premio Nacional de Innovación en Salud Pública (2021)',
      'Premio de la Academia de Ciencias de Cuba (ACC)',
    ],
    publications: [
      'Technology Transfer Policy Framework at Cuban Universities. Springer Chapter, 2021',
      'Changing Times at Cuban Universities: Looking into the Transition towards a Social and Entrepreneurial Organization. Sustainability, 2020',
      'Marketing social y universidad: Reflexiones para su aplicación. Ingeniería Industrial, 2007',
      'Ciencia e Innovación en Parques Científicos y Tecnológicos: Marco conceptual para su desarrollo',
    ],
    docencia: [
      'Curso: De la idea al negocio: diseño y validación con Business Model Canvas e ISO 9001',
      'Curso en Liderazgo y Competencias Directivas',
    ],
  },
  {
    id: 'fac-antonio-iglesias',
    name: 'Dr. C. Antonio de Jesús Iglesias Morell',
    role: 'Profesor Titular y Fundador del CETED | Miembro Comisión Nacional COPEP',
    degree: 'Doctor en Ciencias Económicas (Inst. Administración Moscú, 1988) | Lic. Ciencias Sociales (Academia Moscú, 1976) | Especialista en Administración Pública (IIAP París, 1998)',
    specialty: 'Administración Empresarial y Pública, Gobernanza, Políticas Universitarias y Posgrado',
    bio: 'Profesor Titular y fundador del Centro de Estudios de Técnicas de Dirección (CETED) de la Universidad de La Habana. Docente de pregrado y posgrado, particularmente en formación de directivos en temas de Administración Empresarial y Pública. Miembro del Comité Doctoral y Comité Académico de varios programas de formación académica de posgrado en la Universidad de La Habana en el campo de las Ciencias Económicas o Administrativas. Ha sido profesor invitado o ha realizado estancias de intercambio académico en prestigiosas universidades extranjeras como Harvard University y St. Thomas University (EE.UU.), Carleton University, Dalhousie University, McGill University y Escuela Nacional de Administración Pública de Quebec (Canadá), Instituto Internacional de Administración Pública (Francia), Universidad de Oviedo (España), Universidad de Tacna (Perú) y UNEG de Venezuela. Miembro fundador de la Comisión Nacional Asesora de Educación de Posgrado del MES (COPEP) y de su Secretariado desde su fundación, así como presidente de la subcomisión de Ciencias Económicas y Administrativas. Asesor de la Dirección de Posgrado del MES (1993-98) y de la Vicerrectoría de Posgrado de la UH (1997-2009). Colaborador y fundador del Centro de Estudios de Administración Pública (CEAP) y coordinador de varias ediciones de la Maestría en Administración Pública en la UH. Miembro fundador de la Cátedra de Calidad de la UH y de su Comité Académico. Ha participado en más de 90 eventos científicos nacionales e internacionales y ha publicado numerosos ensayos, capítulos de libros y artículos científicos. Domina los idiomas francés, ruso e inglés.',
    image: '/assets/faculty/photo_antonio_iglesias.png',
    email: 'tonigles@ceted.uh.cu',
    experienceYears: 48,
    cvHighlights: [
      'Profesor Titular y fundador del CETED en la Universidad de La Habana',
      'Estancias académicas y profesor invitado en Harvard University, McGill University, ENAP Quebec e IIAP París',
      'Miembro fundador de la Comisión Nacional Asesora de Educación de Posgrado del MES (COPEP)',
      'Medalla Frank País de 1er. Grado y Medalla José Tey del Consejo de Estado',
      'Premio de la Rectora de la Universidad de La Habana "Por el conjunto de la obra científica" (2024)',
      'Coordinador de varias ediciones de la Maestría en Administración Pública de la UH',
    ],
    ejesTematicos: [
      'Administración Empresarial y Administración Pública',
      'Formación de Cuadros y Desarrollo del Potencial Directivo',
      'Políticas Universitarias y Gestión de la Educación de Posgrado',
      'Gobernanza Institucional y Gestión de la Calidad',
    ],
    premios: [
      'Premio de la Rectora de la UH "Por el conjunto de la obra científica" (2024)',
      'Reconocimiento con Sello Conmemorativo 295 Aniv. de la UH por más de 40 años de entrega (2023)',
      'Medalla Frank País de 1er. Grado del Consejo de Estado (2018)',
      'Medalla Frank País de 2do. Grado del Consejo de Estado (2009)',
      'Medalla José Tey del Consejo de Estado (2003)',
      'Distinción Especial del Ministro de Educación Superior en Posgrado (2015)',
      'Distinción por la Educación Cubana del MES (1997)',
      'Medalla Rafael María Mendive en dos ocasiones (2002, 2020)',
      'Orden Caballero del Mérito de la República Popular del Congo (1969)',
      'Medalla de la Alfabetización del Consejo de Estado (1986)',
      'Premio Anual del Rector en Superación Profesional (1999, 2012, 2014)',
      'Cuadro Destacado de la Universidad de La Habana en dos ediciones (2000, 2001)',
      'Reconocimiento 20 Años Revista Folletos Gerenciales como fundador y comité editorial (2017)',
      'Reconocimiento 20 Aniversario del CEAP y del Congreso GESEMAP (MES)',
    ],
    publications: [
      'Más de 90 ponencias, ensayos, capítulos de libros y artículos científicos en Cuba y el extranjero en temas económicos y de administración pública y empresarial',
      'Fundador y miembro activo del Comité Editorial de la Revista Folletos Gerenciales durante 20 años',
    ],
    docencia: [
      'Docente de pregrado y posgrado en Administración Empresarial y Pública en el CETED y la UH',
      'Coordinador de varias ediciones de la Maestría en Administración Pública en la UH',
      'Miembro del Comité Doctoral y Comité Académico de programas de posgrado en Ciencias Económicas y Administrativas',
    ],
  },
  {
    id: 'fac-angela-palacios',
    name: 'Dra. C. Angela Palacios Hidalgo',
    role: 'Profesora Titular | Investigadora en Dirección Estratégica y Organización',
    degree: 'Doctora en Ciencias Económicas (UH, 1999) | Experta Universitaria en Dirección de IES (Univ. de Sevilla, 2000)',
    specialty: 'Dirección Estratégica, Organización, Estructuras Organizativas Flexibles y Sistemas de Información',
    bio: 'Doctora en Ciencias Económicas (UH, 1999) y Experta Universitaria en Dirección de Instituciones de Educación Superior por la Universidad de Sevilla (2000). Profesora Titular con amplia trayectoria en dirección estratégica, diseño de estructuras organizativas flexibles y sistemas de información. Imparte docencia en la carrera de Contabilidad (Fundamentos de Administración), el Diplomado de Gestión para directivos de la Fiscalía General de la República (Organización), el Diplomado en Gestión de Proyectos de Colaboración Internacional (Riesgos y sostenibilidad en la gestión de proyectos), la Maestría de Dirección (Dirección Estratégica), la Maestría de Marketing (Sistemas de información de marketing y dirección de marketing), el Doctorado en Ciencias de la Administración de la Universidad de La Habana y el Doctorado en Ciencias Económicas de la Universidad de Camagüey. Es autora del libro "Dirección Empresarial III: Sistemas de Gestión e Innovación" (2023) y ha sido distinguida con el Premio Provincial de la Academia de Ciencias CITMA Camagüey (2024).',
    image: '/assets/faculty/photo_angela.png',
    email: 'angela.palacios@ceted.uh.cu',
    orcid: 'https://orcid.org/0000-0001-7250-3625',
    experienceYears: 27,
    cvHighlights: [
      'Autora del libro "Dirección Empresarial III: Sistemas de Gestión e Innovación" (REDUNIV, 2023)',
      'Premio Provincial de la Academia de Ciencias CITMA Camagüey (2024)',
      'Experta Universitaria en Dirección de Instituciones de Educación Superior (Univ. de Sevilla)',
      'Docente de Dirección Estratégica y Sistemas de Información en Maestrías de Dirección y Marketing',
      'Claustro de Doctorados en la Universidad de La Habana y Universidad de Camagüey',
    ],
    ejesTematicos: [
      'Dirección Estratégica y Alineación de Objetivos',
      'Organización y Diseño de Estructuras Organizativas Flexibles',
      'Sistemas de Información de Marketing y Gestión Comercial',
      'Riesgos y Sostenibilidad en Proyectos de Colaboración Internacional',
      'Cadenas de valor y modelos sostenibles en educación superior',
    ],
    premios: [
      'Premio Provincial de la Academia de Ciencias de Cuba CITMA Camagüey (2024)',
      'Título de Experta Universitaria otorgado por la Universidad de Sevilla (España, 2000)',
    ],
    publications: [
      'Libro: "Dirección Empresarial III: Sistemas de Gestión e Innovación" (Editorial Félix Varela / REDUNIV, 2023)',
      'Artículos en revistas de alto impacto sobre dirección estratégica y modelos organizacionales',
    ],
    docencia: [
      'Maestría de Dirección: Dirección Estratégica',
      'Maestría de Marketing: Sistemas de Información de Marketing y Dirección de Marketing',
      'Diplomado para la Fiscalía General de la República (FGR): Organización',
      'Diplomado en Gestión de Proyectos: Riesgos y Sostenibilidad',
    ],
  },
  {
    id: 'fac-francisco-rodriguez',
    name: 'M.Sc. Francisco Rodríguez González',
    role: 'Profesor Auxiliar | Coordinador General Diplomado para la FGR | Consultor Organizacional',
    degree: 'Máster en Dirección | Licenciado en Ciencias Económicas (Docente universitario desde 1985)',
    specialty: 'Gestión de Recursos Humanos, Liderazgo, Dirección Participativa y Consultoría Directiva',
    bio: 'Profesor universitario en el ámbito de las ciencias económicas, políticas y la dirección desde 1985. Inició su labor en la Universidad de Ciego de Ávila (antes ISACA) como profesor de Economía Política hasta 1996. Se desempeñó como Secretario General del Comité de la UJC (1990-1992) y Secretario General del Partido a nivel universitario (1992-1996), destacándose por su labor en pleno Período Especial. Ocupó el cargo de Director de Cuadros y Recursos Humanos de la Universidad (1996-1999), implementando el Sistema de Gestión de Recursos Humanos, perfeccionamiento de plantilla y sistema de reconocimiento. Entre 1999 y 2006 fue Secretario General de la Universidad y Secretario de la Comisión Provincial de Ingreso a la Educación Superior. Docente del CETED desde 2008. Es Coordinador General del Diplomado en Dirección para la Fiscalía General de la República (FGR) por más de tres años consecutivos. Es consultor organizacional acreditado por el Centro Internacional de La Habana (CIH) y la Fundación UH, miembro del Consejo Técnico Asesor del Ministerio de Trabajo y Seguridad Social (MTSS) y ha sido profesor invitado en la Universidad de Córdoba (Colombia).',
    image: '/assets/faculty/photo_francisco.png',
    email: 'francisco.rodriguez@ceted.uh.cu',
    orcid: 'https://orcid.org/0000-0003-4842-6468',
    experienceYears: 39,
    cvHighlights: [
      'Profesor universitario en ciencias económicas y dirección desde 1985',
      'Coordinador General del Diplomado en Dirección para la Fiscalía General de la República',
      'Consultor organizacional acreditado por el Centro Internacional de La Habana (CIH) y la Fundación UH',
      'Miembro del Consejo Técnico Asesor del Ministerio de Trabajo y Seguridad Social (MTSS)',
      'Profesor invitado en la Universidad de Córdoba (Colombia)',
      'Ex-Director de Recursos Humanos y Ex-Secretario General de la Universidad de Ciego de Ávila',
    ],
    ejesTematicos: [
      'Gestión Estratégica de los Recursos Humanos y del Talento',
      'Liderazgo y Habilidades Directivas en la Administración Pública',
      'Dirección Participativa y Clima Organizacional',
      'Perfeccionamiento de Estructuras y Plantillas Institucionales',
    ],
    premios: [
      'Consultor Organizacional Certificado por el Centro Internacional de La Habana (CIH) y Fundación UH',
      'Miembro del Consejo Técnico Asesor del Ministerio de Trabajo y Seguridad Social (MTSS)',
      'Reconocimiento institucional por 39 años de servicio ininterrumpido a la docencia universitaria',
    ],
    docencia: [
      'Coordinador general y docente del Diplomado en Dirección para la Fiscalía General de la República',
      'Cursos de posgrado en Gestión de Recursos Humanos en el CETED y en la Univ. de Córdoba (Colombia)',
    ],
  },
  {
    id: 'fac-leidis-rodriguez',
    name: 'M.Sc. Leidis Rodríguez Linares',
    role: 'Profesora-Investigadora | Contadora y Analista Financiera del CETED',
    degree: 'Máster en Gestión de Proyectos de Desarrollo | Licenciada en Contabilidad y Finanzas',
    specialty: 'Gestión Financiera, Finanzas Corporativas, Auditorías, ODS y Economía Circular',
    bio: 'Contadora y analista financiera que desempeña una labor fundamental como profesora-investigadora en el Centro de Estudios de Técnicas de Dirección (CETED) de la Universidad de La Habana. Con una sólida formación que incluye la Licenciatura en Contabilidad y Finanzas y el Máster en Gestión de Proyectos de Desarrollo, ha consolidado un perfil que integra el rigor técnico financiero con una visión estratégica orientada al impacto social. Desde su incorporación al CETED en 2020 ha impartido cátedras en Gestión Estratégica, Administración General y Finanzas Corporativas con metodologías innovadoras y mentoría directa a estudiantes en análisis financiero. En su faceta investigativa aborda temáticas de alta relevancia: igualdad de género, empoderamiento femenino en el sector agrícola y economía circular. Ha participado en auditorías internas a gran escala y colaborado en proyectos financiados por la Cooperación Española y el Grupo Azucarero AZCUBA, reflejado en ponencias y artículos científicos. Es miembro activo de la Asociación Nacional de Economistas de Cuba (ANEC) y del grupo de investigación del CETED.',
    image: '/assets/faculty/photo_leidis.png',
    email: 'leidis.rodriguez@ceted.uh.cu',
    experienceYears: 10,
    cvHighlights: [
      'Máster en Gestión de Proyectos de Desarrollo y Licenciada en Contabilidad y Finanzas',
      'Docente en Finanzas Corporativas, Gestión Estratégica y Administración General',
      'Participación en auditorías internas a gran escala en entidades nacionales',
      'Investigadora en proyectos con la Cooperación Española y el Grupo AZCUBA',
      'Miembro activa de la Asociación Nacional de Economistas y Contadores de Cuba (ANEC)',
    ],
    ejesTematicos: [
      'Gestión Financiera y Finanzas Corporativas',
      'Análisis Financiero y Evaluación Económica de Proyectos',
      'Auditorías Internas y Control de Gestión Financiero',
      'Empoderamiento Femenino, Enfoque de Género y ODS en la Agroindustria',
      'Economía Circular aplicada a cadenas de valor productivas',
    ],
    premios: [
      'Miembro Activo de la Asociación Nacional de Economistas y Contadores de Cuba (ANEC)',
      'Investigadora destacada en proyectos de cooperación internacional',
    ],
    docencia: [
      'Cátedras de Gestión Estratégica y Administración General',
      'Finanzas Corporativas y Análisis Financiero para Directivos',
    ],
  },
  {
    id: 'fac-carlos-lazcano',
    name: 'Dr. C. Carlos Lazcano Herrera',
    role: 'Profesor Titular | Miembro Cátedra UNESCO | Consejo Científico del CETED',
    degree: 'Doctor en Ciencias | Más de 40 años de trayectoria científica en la Universidad de La Habana',
    specialty: 'Gestión del Conocimiento, Innovación Territorial, Producción Circular y Logística de Suministro',
    bio: 'En su destacada trayectoria académica y científica se desempeña como miembro de la Cátedra UNESCO en Gestión de la Información, integrante del claustro del Doctorado en Administración de Empresas y miembro del Consejo Científico del CETED de la Universidad de La Habana. Su labor académica se extiende a la dirección de seminarios de posgrado y la asesoría estratégica en proyectos de alto impacto, como la estrategia científica y tecnológica del grupo BioYaguajay. Su compromiso ha sido reconocido con la Orden "Frank País" de Segundo Grado, la Medalla "Pepito Tey", la distinción "Por la Educación Cubana" y diversos reconocimientos por más de 40 años de servicio a la Universidad de La Habana, además de haber sido nombrado Profesor Investigador del Año en instituciones de Ecuador y Colombia. Ha liderado y evaluado proyectos enfocados en la gestión del conocimiento, la innovación y el desarrollo territorial (municipio de Yaguajay con BioYaguajay). Sus líneas de trabajo abarcan la implementación de sistemas de producción circular, logística de cadenas de suministro y medición de capacidades innovadoras en los sectores empresarial y agrario, cristalizando en la creación de la Unidad de Entorno de Innovación Óptima (UAOI). Su producción científica abarca publicaciones en Scopus (Anales de Documentación) y Scielo.',
    image: '/assets/faculty/photo_lazcano.png',
    email: 'carlos.lazcano@ceted.uh.cu',
    orcid: 'https://orcid.org/0000-0001-7470-0569',
    experienceYears: 42,
    cvHighlights: [
      'Orden Frank País de Segundo Grado y Medalla Pepito Tey del Consejo de Estado',
      'Distinción "Por la Educación Cubana" por más de 40 años de docencia superior',
      'Miembro de la Cátedra UNESCO y del Consejo Científico del CETED',
      'Profesor Investigador del Año en universidades de Ecuador y Colombia',
      'Asesor estratégico del grupo BioYaguajay y creador de la Unidad de Entorno de Innovación Óptima (UAOI)',
      'Publicaciones indexadas en Scopus (Anales de Documentación) y Scielo',
    ],
    ejesTematicos: [
      'Gestión del Conocimiento e Innovación Territorial',
      'Sistemas de Producción Circular y Sostenibilidad Territorial',
      'Logística y Gestión de Cadenas de Suministro',
      'Medición de Capacidades de Innovación Empresarial y Agraria',
      'Creación y Operación de Unidades de Entorno de Innovación (UAOI)',
    ],
    premios: [
      'Orden Frank País de Segundo Grado otorgada por el Consejo de Estado',
      'Medalla Pepito Tey del Consejo de Estado',
      'Distinción Por la Educación Cubana (más de cuatro décadas en la UH)',
      'Profesor Investigador del Año en universidades de Ecuador y Colombia',
    ],
    publications: [
      'Publicaciones en revistas indexadas en Scopus (Anales de Documentación) y Scielo sobre innovación y desarrollo territorial',
    ],
    docencia: [
      'Seminarios de posgrado en Gestión del Conocimiento e Innovación',
      'Claustro del Doctorado en Administración de Empresas (UH)',
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'El Liderazgo Participativo: Competencia Clave para la Empresa Cubana',
    author: 'Dr. C. Rey Felipe González Meriño',
    authorId: 'fac-rey-felipe',
    role: 'Profesor Titular e Investigador del CETED',
    date: 'Junio 2025',
    readTime: '6 min de lectura',
    category: 'Dirección Participativa',
    summary:
      'Resultados del Proyecto Nacional sobre el modelo de dirección participativa y los procedimientos para determinar el perfil por competencias laborales de los directivos.',
    content: [
      'A través de las investigaciones desarrolladas en el marco del Proyecto Nacional PN223LH011-040, demostramos que la dirección participativa no es solo un principio humanista, sino una palanca determinante para la productividad y la retención del talento.',
      'El modelo formulado en el CETED ofrece a las organizaciones cubanas herramientas metodológicas para evaluar competencias de liderazgo, comunicación y toma de decisiones colaborativas.',
    ],
  },
  {
    id: 'blog-2',
    title: 'Modelos de Gestión Circular: Desafíos y Oportunidades Universitarias',
    author: 'Dra. C. Katy C. Herrera Lemus',
    authorId: 'fac-katy-herrera',
    role: 'Copresidenta Cátedra UNESCO - CETED',
    date: 'Febrero 2026',
    readTime: '5 min de lectura',
    category: 'Economía Circular',
    summary:
      'Reflexiones en torno a la articulación entre la Redec y la Cátedra UNESCO en la Universidad de La Habana para transformar los sistemas de gestión de recursos.',
    content: [
      'La adopción de modelos de economía circular requiere una profunda transformación cultural y formativa en nuestros directivos. Desde la Cátedra UNESCO en Educación y Desarrollo de Economías Circulares, conectamos la investigación científica con soluciones territoriales concretas.',
      'El rediseño de procesos, el aprovechamiento de residuos y las cadenas de valor sostenibles representan el futuro de la gestión responsable.',
    ],
  },
  {
    id: 'blog-3',
    title: 'Sistemas Normalizados de Gestión y Calidad en Organizaciones Educativas',
    author: 'Dra. C. Marlene Martínez Navarro',
    authorId: 'fac-marlene-martinez',
    role: 'Profesora Titular y Líder de Proyectos',
    date: 'Enero 2025',
    readTime: '5 min de lectura',
    category: 'Gestión de Calidad',
    summary:
      'Experiencias prácticas en el diagnóstico e implementación de sistemas normalizados de gestión en la Universidad de La Habana.',
    content: [
      'Garantizar la excelencia en los centros de posgrado exige estructurar sistemas de gestión de la calidad auditables, orientados a la mejora continua y a la satisfacción de las partes interesadas.',
      'El proyecto NAP223LH001-117 marca una pauta de buenas prácticas para las casas de altos estudios del país.',
    ],
  },
];
