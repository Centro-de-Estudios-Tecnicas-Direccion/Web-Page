import React from 'react';
import { PageId } from '../types';
import { CETED_INFO } from '../data/cetedFullData';
import { ExternalLink, ArrowUp, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, subTab?: string, facultyId?: string) => void;
}

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
    <footer className="bg-[#06182C] text-slate-300 border-t border-slate-800 text-sm text-left">
      
      {/* Main Footer Sitemap & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Identity & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center">
                <img
                  src={CETED_INFO.logo}
                  alt="CETED"
                  className="h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block leading-tight">
                  CETED
                </span>
                <span className="text-xs text-slate-400">
                  {CETED_INFO.fullName}
                </span>
              </div>
            </div>

            <p className="font-serif text-base text-blue-200 font-medium">
              "{CETED_INFO.slogan}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Centro académico de posgrado dedicado al rigor, la toma de decisiones estratégicas 
              y la consultoría aplicada para el desarrollo social y organizacional.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0D5DD7] shrink-0 mt-0.5" />
                <span>{CETED_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0D5DD7] shrink-0" />
                <span>{CETED_INFO.emails.general}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0D5DD7] shrink-0" />
                <span>{CETED_INFO.phones[0]}</span>
              </p>
            </div>
          </div>

          {/* Navegación del Centro */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors py-0.5 text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors py-0.5 text-left"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('claustro')}
                  className="hover:text-white transition-colors py-0.5 text-left"
                >
                  Claustro Docente
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors py-0.5 text-left"
                >
                  Servicios y Maestrías
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('investigacion')}
                  className="hover:text-white transition-colors py-0.5 text-left"
                >
                  Investigación y Cátedra
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors py-0.5 text-left"
                >
                  Contacto y Ubicación
                </button>
              </li>
            </ul>
          </div>

          {/* Programas y Servicios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Servicios Académicos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Maestría en Dirección
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Maestría en Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Maestría en Gestión de Proyectos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'pregrado')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Formación de Pregrado UH
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'consultora')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Consultora GTI UH
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicios', 'gabinete')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Gabinete Metodológico
                </button>
              </li>
            </ul>
          </div>

          {/* Enlaces a Universidades y Redes Académicas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Enlaces Universitarios
            </h4>
            <ul className="space-y-2.5 text-xs">
              {universityLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-slate-200 group-hover:text-white font-medium">
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 text-[#0D5DD7] shrink-0" />
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      {link.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors min-h-[40px]"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver arriba</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CETED. Centro de Estudios de Técnicas de Dirección — Universidad de La Habana.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#0D5DD7]" />
            <span>Información Institucional Oficial Verificada</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
