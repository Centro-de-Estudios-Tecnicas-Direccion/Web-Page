import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { CETED_INFO, FACULTY_MEMBERS_FULL } from '../data/cetedFullData';
import { HERO_SLIDES, MAESTRIAS } from '../data/cetedData';
import { UniversityAlliances } from '../components/UniversityAlliances';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Briefcase,
  Layers,
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
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* 01. HERO SECTION (SOLID #0D5DD7 - NO GRADIENT, NO DUPLICATE LOGO BADGE) */}
      <section
        aria-label="Presentación institucional del CETED"
        className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#0D5DD7] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Slogan, Propósito, Botones en Blanco y Azul (Sin Logo Duplicado) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-100 block">
                  Educación de Posgrado y Consultoría Estratégica
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2] text-balance">
                  Un centro de excelencia{' '}
                  <span className="text-blue-100 font-semibold block sm:inline">
                    que piensa con usted.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-white/95 leading-[1.8] max-w-xl">
                  Formamos directivos, consultores y líderes de organizaciones. 
                  Combinamos el rigor analítico de las principales escuelas de negocios del mundo 
                  con una pedagogía cercana, humana y orientada al desarrollo real de la sociedad.
                </p>
              </div>

              {/* Botones de acción: Exclusivamente Blanco y Azul (Cero botones negros/oscuros) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#0D5DD7] bg-white hover:bg-slate-100 active:bg-slate-200 rounded-lg shadow-sm transition-colors min-h-[48px] focus-visible:ring-2 focus-visible:ring-white"
                >
                  <BookOpen className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />
                  <span>Nuestras Maestrías</span>
                  <ArrowRight className="w-4 h-4 text-[#0D5DD7]" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('nosotros')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-transparent hover:bg-white/10 active:bg-white/20 border-2 border-white rounded-lg transition-colors min-h-[48px] focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Sobre el Centro</span>
                </button>
              </div>

              {/* Contacto directo y Redes Oficiales */}
              <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs text-white">
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${CETED_INFO.emails.admisiones}`}
                    className="flex items-center gap-1.5 hover:underline py-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    <span>{CETED_INFO.emails.admisiones}</span>
                  </a>
                  <span aria-hidden="true" className="text-white/40">·</span>
                  <span className="flex items-center gap-1.5 py-1">
                    <Phone className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    <span>{CETED_INFO.phones[0]}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-white/80">Canales:</span>
                  {CETED_INFO.social.slice(0, 3).map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded border border-white/30 hover:bg-white text-white hover:text-[#0D5DD7] font-semibold transition-colors"
                      aria-label={soc.name}
                    >
                      {soc.name}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Carrusel de fotos pasando de clases y profesores */}
            <div className="lg:col-span-6 flex flex-col">
              <div
                className="relative w-full rounded-2xl overflow-hidden bg-white border-2 border-white shadow-xl aspect-[4/3] group"
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
                        isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                      aria-hidden={!isActive}
                    >
                      <img
                        src={slide.image}
                        alt={slide.caption}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Caption box */}
                      <div
                        className="absolute bottom-0 inset-x-0 bg-black/75 p-5 text-white text-left"
                        aria-hidden="true"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                          Vida Académica en CETED
                        </span>
                        <p className="font-serif text-lg font-bold text-white mt-0.5">
                          {slide.caption}
                        </p>
                        <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                          {slide.subcaption}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Slideshow Controls */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/30"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/30"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Slide indicator */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/30 text-xs font-medium text-white">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-blue-200"
                    aria-label={isPlaying ? 'Pausar fotos' : 'Reanudar fotos'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <span className="font-mono tabular-nums">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>
              </div>

              <div className="mt-2.5 flex items-center justify-between text-xs text-white/90 px-1">
                <span>Intercambio activo en auditorios ejecutivos</span>
                <span>Análisis de casos de dirección</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02. NUESTRAS MAESTRÍAS (AMPLIADO, MÁS GENEROSO Y LEGIBLE) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                Programas Oficiales de Posgrado
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D5DD7] mt-1">
                Nuestras Maestrías
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-700 max-w-2xl leading-[1.8]">
                Formación académica rigurosa orientada a la toma de decisiones estratégicas, 
                la dirección comercial y la ejecución de proyectos de alto impacto.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('servicios', 'posgrado')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors shrink-0 min-h-[46px]"
            >
              <span>Ver Planes de Estudio y Módulos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Maestrías Showcase con Tipografía y Espacios Amplios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MAESTRIAS.map((m) => (
              <div
                key={m.id}
                className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl p-8 transition-all shadow-xs flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0D5DD7]">
                    <span className="uppercase tracking-wider">{m.shortTitle}</span>
                    <span className="font-mono text-slate-700 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                      {m.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0D5DD7] transition-colors leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-[15px] sm:text-base text-slate-700 leading-[1.75]">
                    {m.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D5DD7] shrink-0" />
                      <span className="font-medium">{m.modality}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#0D5DD7] shrink-0" />
                      <span className="font-medium">{m.credits}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onNavigate('servicios', 'posgrado')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors min-h-[44px]"
                  >
                    <span>Información y Asignaturas</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Áreas Complementarias */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              onClick={() => onNavigate('servicios', 'pregrado')}
              className="p-5 bg-white border border-slate-200 rounded-xl hover:border-[#0D5DD7] cursor-pointer transition-colors shadow-2xs"
            >
              <h4 className="text-xs font-bold uppercase text-[#0D5DD7]">Formación de Pregrado</h4>
              <p className="text-xs text-slate-600 mt-1">Docencia curricular y talleres de liderazgo para estudiantes universitarios.</p>
            </div>
            <div
              onClick={() => onNavigate('servicios', 'gabinete')}
              className="p-5 bg-white border border-slate-200 rounded-xl hover:border-[#0D5DD7] cursor-pointer transition-colors shadow-2xs"
            >
              <h4 className="text-xs font-bold uppercase text-[#0D5DD7]">Gabinete Metodológico</h4>
              <p className="text-xs text-slate-600 mt-1">Diseño curricular especializado y banco de casos de estudio propios.</p>
            </div>
            <div
              onClick={() => onNavigate('servicios', 'consultora')}
              className="p-5 bg-white border border-slate-200 rounded-xl hover:border-[#0D5DD7] cursor-pointer transition-colors shadow-2xs"
            >
              <h4 className="text-xs font-bold uppercase text-[#0D5DD7]">Marca Consultora en Gestión</h4>
              <p className="text-xs text-slate-600 mt-1">Diagnóstico estratégico, rediseño de procesos y consultoría empresarial.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 03. NUESTRO CLAUSTRO (PREVIEW EN INICIO CON REDIRECCIÓN DIRECTA A SUS FICHAS) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                Excelencia Docente
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D5DD7] mt-1">
                Nuestro Claustro de Profesores
              </h2>
              <p className="mt-3 text-base text-slate-700 max-w-2xl leading-relaxed">
                Cuerpo académico integrado por doctores en ciencias e investigadores titulares 
                con amplia trayectoria directiva. Haga clic en cualquiera de ellos para consultar su trayectoria y CV.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('claustro')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors shrink-0 min-h-[44px]"
            >
              <UserCheck className="w-4 h-4" />
              <span>Ver Claustro Completo y Currículums</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tarjetas de profesores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_MEMBERS_FULL.map((prof) => (
              <div
                key={prof.id}
                className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl overflow-hidden shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square w-full bg-slate-100 overflow-hidden relative">
                    <img
                      src={prof.image}
                      alt={prof.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-white text-[#0D5DD7] text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">
                      PhD / Doctor
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                      {prof.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0D5DD7]">
                      {prof.role}
                    </p>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {prof.specialty}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => onNavigate('claustro', undefined, prof.id)}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-[#0D5DD7] hover:bg-blue-50 border border-[#0D5DD7] rounded-lg transition-colors min-h-[40px]"
                  >
                    Consultar Ficha y CV
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 04. COOPERACIÓN ACADÉMICA (UNIVERSIDADES ALIADAS) */}
      <UniversityAlliances />

      {/* 05. INVESTIGACIÓN Y CÁTEDRA (SOLID BLUE BOX) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="bg-[#0D5DD7] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-100">
                Extensión Universitaria e Investigación
              </span>
              <h3 className="font-serif text-3xl font-bold">
                Líneas de Investigación y Cátedra UNESCO
              </h3>
              <p className="text-sm text-white/95 leading-relaxed">
                Explore nuestros proyectos de I+D aplicados a la administración pública, pymes 
                y desarrollo territorial, así como las actividades conjuntas de la Cátedra UNESCO.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('investigacion')}
                className="px-6 py-3.5 text-sm font-semibold text-[#0D5DD7] bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors text-center min-h-[44px]"
              >
                Ver Líneas y Proyectos I+D
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contacto')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-transparent hover:bg-white/10 border-2 border-white rounded-lg transition-colors text-center min-h-[44px]"
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
