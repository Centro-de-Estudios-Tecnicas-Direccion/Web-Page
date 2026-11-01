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

  return (
    <footer className="bg-[#06182C] text-slate-300 border-t border-slate-800 text-sm text-left">
      
      {/* Main Footer Sitemap & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Identity & Slogan */}
          <div className="md:col-span-5 space-y-4">
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

            <div className="pt-2 text-xs space-y-1 text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0D5DD7] shrink-0" />
                <span>{CETED_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0D5DD7] shrink-0" />
                <span>{CETED_INFO.emails.general}</span>
              </p>
            </div>
          </div>

          {/* Páginas Principales (Clean, No "y", No Intranet) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación del Centro
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors py-0.5"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors py-0.5"
                >
                  Nosotros (Misión, Visión, Historia)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('claustro')}
                  className="hover:text-white transition-colors py-0.5"
                >
                  Claustro Docente y CVs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors py-0.5"
                >
                  Servicios y Maestrías
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('investigacion')}
                  className="hover:text-white transition-colors py-0.5"
                >
                  Investigación
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors py-0.5"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Servicios y Posgrados */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Programas de Dirección
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Maestría en Dirección
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Maestría en Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios', 'posgrado')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Maestría en Gestión de Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios', 'pregrado')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Formación de Pregrado
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios', 'consultora')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Marca Consultora en Gestión
                </button>
              </li>
            </ul>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors min-h-[44px]"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Volver arriba</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CETED. Centro de Estudios de Técnicas de Dirección.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#0D5DD7]" />
            <span>Diseño Académico Accesible</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
