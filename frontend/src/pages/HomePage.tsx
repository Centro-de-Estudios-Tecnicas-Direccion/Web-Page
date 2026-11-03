import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { CETED_INFO, FACULTY_MEMBERS_FULL } from '../data/cetedFullData';
import { HERO_SLIDES, MAESTRIAS } from '../data/cetedData';
import { UniversityAlliances } from '../components/UniversityAlliances';
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  Phone,
  Mail,
  Award,
  UserCheck,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, subTab?: string, facultyId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // TEMPORIZADOR BLINDADO: Evita que se dupliquen los intervalos al cambiar de página
  useEffect(() => {
    if (isPlaying && HERO_SLIDES.length > 0) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying]);

  const carouselBtn =
    'flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition duration-150 hover:bg-black active:scale-95 motion-reduce:active:scale-100 focus-visible:outline-white';

  const primaryBtn =
    'inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg bg-ceted-blue px-6 py-3 text-sm font-semibold text-white shadow-xs transition duration-150 hover:bg-ceted-hover active:scale-[0.98] motion-reduce:active:scale-100 dark:hover:bg-[#1567E3]';

  const card =
    'rounded-xl border border-slate-200 bg-white shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-ceted-blue hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-ceted-line dark:bg-ceted-dark dark:hover:border-blue-400';

  const eyebrow =
    'text-xs font-semibold uppercase tracking-[0.14em] text-ceted-blue dark:text-blue-300';

  const h2 =
    'mt-2 font-serif text-3xl font-semibold tracking-tight text-ceted-dark dark:text-white sm:text-4xl';

  return (
    <div className="space-y-0 text-slate-800 dark:text-slate-200">
      {/* 01. HERO */}
      <section
        aria-label="Presentación institucional del CETED"
        className="relative bg-ceted-blue pb-16 pt-28 text-white dark:border-b dark:border-ceted-line dark:bg-ceted-dark lg:pb-24 lg:pt-36"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Columna izquierda */}
            <div className="space-y-6 text-left lg:col-span-6">
              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 dark:text-blue-300">
                  Educación de Posgrado y Consultoría Estratégica
                </span>

                <h1 className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                  Un centro de excelencia{' '}
                  <span className="block font-semibold text-blue-100 sm:inline dark:text-blue-300">
                    que piensa con usted.
                  </span>
                </h1>

                <p className="max-w-xl text-base leading-[1.75] text-blue-50 sm:text-lg dark:text-slate-300">
                  Formamos directivos, consultores y líderes de organizaciones.
                  Combinamos el rigor analítico de las principales escuelas de negocios del mundo
                  con una pedagogía cercana, humana y orientada al desarrollo real de la sociedad.
                </p>
              </div>

              <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-ceted-blue shadow-sm transition duration-150 hover:bg-slate-100 active:scale-[0.98] active:bg-slate-200 motion-reduce:active:scale-100 focus-visible:outline-white"
                >
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                  <span>Nuestras Maestrías</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('nosotros')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition duration-150 hover:bg-white/10 active:scale-[0.98] active:bg-white/20 motion-reduce:active:scale-100 focus-visible:outline-white"
                >
                  <span>Sobre el Centro</span>
                </button>
              </div>

              {/* Contacto directo y redes */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 text-sm text-white">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a
                    href={`mailto:${CETED_INFO.emails.general}`}
                    className="flex items-center gap-1.5 py-1 underline-offset-4 hover:underline focus-visible:outline-white"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{CETED_INFO.emails.general}</span>
                  </a>
                  <span aria-hidden="true" className="text-white/40">
                    ·
                  </span>
                  <span className="flex items-center gap-1.5 py-1">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{CETED_INFO.phones[0]}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-blue-100 dark:text-slate-300">Canales:</span>
                  {CETED_INFO.social.slice(0, 3).map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-white/40 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-ceted-blue focus-visible:outline-white"
                      aria-label={soc.name}
                    >
                      {soc.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Carrusel */}
            <div className="flex flex-col lg:col-span-6">
              <div
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white bg-white shadow-xl dark:border-ceted-line dark:bg-ceted-navy"
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                aria-roledescription="carrusel"
                aria-label="Galería de profesores y estudiantes de CETED en clases"
              >
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive
                          ? 'pointer-events-auto z-10 opacity-100'
                          : 'pointer-events-none z-0 opacity-0'
                      }`}
                      aria-hidden={!isActive}
                    >
                      <img
                        src={slide.image}
                        alt={slide.caption}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />

                      <div
                        className="absolute inset-x-0 bottom-0 bg-black/75 p-5 text-left text-white"
                        aria-hidden="true"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                          Vida Académica en CETED
                        </span>
                        <p className="mt-0.5 font-serif text-lg font-semibold text-white">
                          {slide.caption}
                        </p>
                        <p className="mt-0.5 line-clamp-1 text-xs text-slate-200">
                          {slide.subcaption}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Controles */}
                <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className={carouselBtn}
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className={carouselBtn}
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Indicador (Mejorado para que no diga "010" si hay 10 fotos) */}
                <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex min-h-[24px] min-w-[24px] items-center justify-center rounded-full transition-colors hover:text-blue-200 focus-visible:outline-white"
                    aria-label={isPlaying ? 'Pausar fotos' : 'Reanudar fotos'}
                  >
                    {isPlaying ? (
                      <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </button>
                  <span className="font-mono tabular-nums">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between px-1 text-xs text-blue-100 dark:text-slate-400">
                <span>Intercambio activo en auditorios ejecutivos</span>
                <span>Análisis de casos de dirección</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. NUESTRAS MAESTRÍAS */}
      <section className="border-b border-slate-200 bg-white py-20 dark:border-ceted-line dark:bg-ceted-navy">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className={eyebrow}>Programas Oficiales de Posgrado</span>
              <h2 className={h2}>Nuestras Maestrías</h2>
              <p className="mt-4 max-w-2xl text-base leading-[1.75] text-slate-600 dark:text-slate-300 sm:text-lg">
                Formación académica rigurosa orientada a la toma de decisiones estratégicas,
                la dirección comercial y la ejecución de proyectos de alto impacto.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('servicios', 'posgrado')}
              className={`group ${primaryBtn}`}
            >
              <span>Ver Planes de Estudio y Módulos</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {MAESTRIAS.map((m) => (
              <div key={m.id} className={`group flex flex-col justify-between p-8 ${card}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-ceted-blue dark:text-blue-300">
                    <span className="uppercase tracking-wider">{m.shortTitle}</span>
                    <span className="rounded border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-ceted-line dark:bg-ceted-navy dark:text-slate-300">
                      {m.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-ceted-blue dark:text-white dark:group-hover:text-blue-300">
                    {m.title}
                  </h3>

                  <p className="text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 sm:text-base">
                    {m.description}
                  </p>

                  <div className="space-y-2.5 border-t border-slate-100 pt-4 text-sm text-slate-700 dark:border-ceted-line dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-ceted-blue dark:text-blue-300"
                        aria-hidden="true"
                      />
                      <span className="font-medium">{m.modality}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award
                        className="h-4 w-4 shrink-0 text-ceted-blue dark:text-blue-300"
                        aria-hidden="true"
                      />
                      <span className="font-medium">{m.credits}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6 dark:border-ceted-line">
                  <button
                    type="button"
                    onClick={() => onNavigate('servicios', 'posgrado')}
                    className={`group/btn w-full ${primaryBtn}`}
                  >
                    <span>Información y Asignaturas</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 motion-reduce:transform-none"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Áreas complementarias */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => onNavigate('servicios', 'pregrado')}
              className={`w-full p-5 text-left ${card}`}
            >
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ceted-blue dark:text-blue-300">
                Formación de Pregrado
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Docencia curricular y talleres de liderazgo para estudiantes universitarios.
              </p>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('servicios', 'gabinete')}
              className={`w-full p-5 text-left ${card}`}
            >
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ceted-blue dark:text-blue-300">
                Gabinete Metodológico
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Diseño curricular especializado y banco de casos de estudio propios.
              </p>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('servicios', 'consultora')}
              className={`w-full p-5 text-left ${card}`}
            >
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ceted-blue dark:text-blue-300">
                Marca Consultora en Gestión
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Diagnóstico estratégico, rediseño de procesos y consultoría empresarial.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* 03. NUESTRO CLAUSTRO */}
      <section className="border-b border-slate-200 bg-slate-50 py-20 dark:border-ceted-line dark:bg-ceted-mid">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className={eyebrow}>Excelencia Docente</span>
              <h2 className={h2}>Nuestro Claustro de Profesores</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Cuerpo académico integrado por doctores en ciencias e investigadores con amplia trayectoria directiva.
                A continuación presentamos 4 de nuestros profesores destacados. Para consultar el claustro completo y todos los currículums, acceda a la sección especializada.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('claustro')}
              className={`group ${primaryBtn}`}
            >
              <UserCheck className="h-4 w-4" aria-hidden="true" />
              <span>Ver Claustro Completo (13 Profesores)</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FACULTY_MEMBERS_FULL.slice(0, 4).map((prof) => (
              <div
                key={prof.id}
                className={`group flex flex-col justify-between p-5 text-left ${card}`}
              >
                <div>
                  <div className="mb-3.5 flex items-center justify-between gap-2">
                    <span className="rounded border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-ceted-blue dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                      {prof.role.includes('Mérito')
                        ? 'Prof. de Mérito'
                        : prof.degree.includes('Doctor')
                        ? 'Dr. en Ciencias'
                        : prof.degree.includes('Máster')
                        ? 'M.Sc.'
                        : 'Prof. Titular'}
                    </span>
                    {prof.experienceYears && (
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {prof.experienceYears} años exp.
                      </span>
                    )}
                  </div>

                  <div className="mb-3.5 flex items-center gap-3.5">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-slate-200 bg-slate-100 shadow-xs transition-colors group-hover:border-ceted-blue dark:border-ceted-line dark:bg-ceted-navy dark:group-hover:border-blue-400">
                      <img
                        src={prof.image}
                        alt={`Foto de ${prof.name}`}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-ceted-blue dark:text-white dark:group-hover:text-blue-300">
                        {prof.name}
                      </h3>
                      <p className="mt-0.5 truncate text-xs font-semibold text-ceted-blue dark:text-blue-300">
                        {prof.role.split('|')[0].trim()}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 border-t border-slate-100 pt-3 dark:border-ceted-line">
                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      <strong className="font-semibold text-slate-800 dark:text-slate-100">
                        Especialidad:{' '}
                      </strong>
                      {prof.specialty}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3 dark:border-ceted-line">
                  <button
                    type="button"
                    onClick={() => onNavigate('claustro', undefined, prof.id)}
                    className="flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-lg border border-ceted-blue px-3 py-2.5 text-sm font-semibold text-ceted-blue transition duration-150 hover:bg-ceted-blue hover:text-white active:scale-[0.98] motion-reduce:active:scale-100 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-ceted-blue dark:hover:text-white"
                  >
                    <span>Consultar Perfil y CV</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600 dark:border-ceted-line dark:text-slate-400 sm:flex-row">
            <p>
              Presentando 4 miembros destacados. El cuerpo docente oficial completo está compuesto por 12 especialistas, doctores e investigadores titulares.
            </p>
            <span className="shrink-0 font-semibold text-ceted-blue dark:text-blue-300">
              Universidad de La Habana · Edificio Julio Antonio Mella
            </span>
          </div>
        </div>
      </section>

      {/* 04. COOPERACIÓN ACADÉMICA */}
      <UniversityAlliances />

      {/* 05. INVESTIGACIÓN Y CÁTEDRA */}
      <section className="border-b border-slate-200 bg-white py-16 dark:border-ceted-line dark:bg-ceted-navy">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-ceted-blue p-8 text-white dark:border dark:border-ceted-line dark:bg-ceted-dark sm:p-12 md:flex-row">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 dark:text-blue-300">
                Extensión Universitaria e Investigación
              </span>
              <h3 className="font-serif text-3xl font-semibold tracking-tight">
                Líneas de Investigación y Cátedra UNESCO
              </h3>
              <p className="text-[15px] leading-relaxed text-blue-50 dark:text-slate-300">
                Explore nuestros proyectos de I+D aplicados a la administración pública, pymes
                y desarrollo territorial, así como las actividades conjuntas de la Cátedra UNESCO.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3.5 sm:w-auto sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate('investigacion')}
                className="min-h-[44px] rounded-lg bg-white px-6 py-3.5 text-center text-sm font-semibold text-ceted-blue shadow-sm transition duration-150 hover:bg-slate-100 active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-white"
              >
                Ver Líneas y Proyectos I+D
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contacto')}
                className="min-h-[44px] rounded-lg border-2 border-white bg-transparent px-6 py-3.5 text-center text-sm font-semibold text-white transition duration-150 hover:bg-white/10 active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-white"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};