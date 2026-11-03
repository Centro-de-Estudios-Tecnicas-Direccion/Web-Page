import React from 'react';
import { PageId } from '../types';
import { CETED_INFO } from '../data/cetedFullData';
import { ExternalLink, ArrowUp, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, subTab?: string, facultyId?: string) => void;
}

const linkClass =
  'min-h-[32px] rounded-sm py-1 text-left text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-white';

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const universityLinks = [
    {
      name: 'Universidad de La Habana',
      url: 'https://www.uh.cu',
      desc: 'Casa de altos estudios fundada en 1728',
    },
    {
      name: 'Cátedra UNESCO / Redec',
      url: 'https://linktr.ee/CatedraUNESCORedec.Cuba',
      desc: 'Educación y Desarrollo de Economías Circulares',
    },
    {
      name: 'Portal UNESCO Educación Superior',
      url: 'https://www.unesco.org',
      desc: 'Red Internacional de Cátedras UNESCO',
    },
    {
      name: 'Biblioteca Central Universidad de La Habana',
      url: 'https://www.uh.cu',
      desc: 'Articulación científica y repositorio institucional',
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-ceted-navy text-left text-sm text-slate-300 dark:border-ceted-line dark:bg-ceted-abyss">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Identidad */}
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-lg bg-white p-1.5">
                <img
                  src={CETED_INFO.logo}
                  alt="CETED"
                  className="h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold leading-tight text-white">
                  CETED
                </span>
                <span className="text-xs text-slate-400">{CETED_INFO.fullName}</span>
              </div>
            </div>

            <p className="font-serif text-base font-medium text-blue-200">"{CETED_INFO.slogan}"</p>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Centro académico de posgrado dedicado al rigor, la toma de decisiones estratégicas
              y la consultoría aplicada para el desarrollo social y organizacional.
            </p>

            <div className="space-y-2 pt-2 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>{CETED_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>{CETED_INFO.emails.general}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>{CETED_INFO.phones[0]}</span>
              </p>
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-3 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Navegación
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <button type="button" onClick={() => onNavigate('inicio')} className={linkClass}>
                  Inicio
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('nosotros')} className={linkClass}>
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('claustro')} className={linkClass}>
                  Claustro Docente
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('servicios')} className={linkClass}>
                  Servicios y Maestrías
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('investigacion')}
                  className={linkClass}
                >
                  Investigación y Cátedra
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contacto')} className={linkClass}>
                  Contacto y Ubicación
                </button>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Servicios Académicos
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className={linkClass}
                >
                  • Maestría en Dirección
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className={linkClass}
                >
                  • Maestría en Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className={linkClass}
                >
                  • Maestría en Gestión de Proyectos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'pregrado')}
                  className={linkClass}
                >
                  • Formación de Pregrado UH
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'consultora')}
                  className={linkClass}
                >
                  • Consultora GTI UH
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'gabinete')}
                  className={linkClass}
                >
                  • Gabinete Metodológico
                </button>
              </li>
            </ul>
          </div>

          {/* Enlaces universitarios */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Enlaces Universitarios
            </h3>
            <ul className="space-y-3 text-sm">
              {universityLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-sm transition-colors focus-visible:outline-white"
                  >
                    <div className="flex items-center gap-1.5 font-medium text-slate-200 group-hover:text-white">
                      <span className="underline-offset-4 group-hover:underline">{link.name}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-blue-400" aria-hidden="true" />
                    </div>
                    <span className="block text-xs text-slate-400">{link.desc}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-sm text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-white"
              >
                <ArrowUp
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  aria-hidden="true"
                />
                <span>Volver arriba</span>
              </button>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400 dark:border-ceted-line sm:flex-row">
          <div>
            © {new Date().getFullYear()} CETED. Centro de Estudios de Técnicas de Dirección —
            Universidad de La Habana.
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="h-4 w-4 text-blue-400" aria-hidden="true" />
            <span>Información Institucional Oficial Verificada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};