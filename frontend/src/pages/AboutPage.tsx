import React from 'react';
import { PageId } from '../types';
import { ABOUT_CETED, CETED_INFO } from '../data/cetedFullData';
import {
  Compass,
  Eye,
  CheckCircle2,
  Calendar,
  Users,
  Search,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 text-slate-800 text-left">
      
      {/* Page Header (SOLID #0D5DD7) */}
      <section className="bg-[#0D5DD7] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-100">
            Identidad y Misión Institucional
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-white">
            Sobre Nosotros
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/95 max-w-3xl leading-relaxed">
            Centro de Estudios de Técnicas de Dirección (CETED): excelencia académica, rigor científico 
            y compromiso constante con el perfeccionamiento de las organizaciones.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 pt-6 border-t border-white/20">
            <span className="text-xs text-blue-100 font-semibold">Enlaces directos:</span>
            <button
              onClick={() => onNavigate('claustro')}
              className="px-4 py-2 rounded-lg bg-white text-[#0D5DD7] hover:bg-slate-100 text-xs font-bold transition-colors flex items-center gap-1.5 min-h-[38px]"
            >
              <Users className="w-4 h-4" />
              <span>Ver Claustro de Profesores</span>
            </button>
            <button
              onClick={() => onNavigate('investigacion')}
              className="px-4 py-2 rounded-lg border-2 border-white text-white hover:bg-white/10 text-xs font-bold transition-colors flex items-center gap-1.5 min-h-[38px]"
            >
              <Search className="w-4 h-4" />
              <span>Líneas de Investigación</span>
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="px-4 py-2 rounded-lg border-2 border-white text-white hover:bg-white/10 text-xs font-bold transition-colors flex items-center gap-1.5 min-h-[38px]"
            >
              <Mail className="w-4 h-4" />
              <span>Contacto y Ubicación</span>
            </button>
          </div>
        </div>
      </section>

      {/* 01. MISIÓN Y VISIÓN (SOLID WHITE) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white border-2 border-slate-200 rounded-xl p-8 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D5DD7] flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
              Misión Institucional
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#0D5DD7] mt-1 mb-3">
              Nuestro Propósito
            </h2>
            <p className="text-[16px] sm:text-[17px] text-slate-700 leading-[1.8]">
              {ABOUT_CETED.mision}
            </p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-xl p-8 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D5DD7] flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
              Visión de Futuro
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#0D5DD7] mt-1 mb-3">
              Nuestro Horizonte
            </h2>
            <p className="text-[16px] sm:text-[17px] text-slate-700 leading-[1.8]">
              {ABOUT_CETED.vision}
            </p>
          </div>

        </div>
      </section>

      {/* 02. VALORES (SOLID LIGHT BLUE / SLATE) */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
              Principios Rectores
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0D5DD7] mt-1">
              Valores que Guían al CETED
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_CETED.valores.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0D5DD7] flex items-center justify-center font-serif font-bold text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-[15px] text-slate-700 leading-[1.7]">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03. HISTORIA DEL CETED (SOLID WHITE TIMELINE) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
            Trayectoria Académica
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0D5DD7] mt-1">
            Historia del Centro desde 1990
          </h2>
          <p className="text-base text-slate-700 mt-2 leading-[1.7]">
            Más de tres décadas dedicadas a la formación de directivos de excelencia e investigación de vanguardia.
          </p>
        </div>

        <div className="relative border-l-2 border-[#0D5DD7] ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          {ABOUT_CETED.historia.map((m, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0D5DD7] border-4 border-white shadow-xs" />
              
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#0D5DD7] block mb-1">
                  {m.year}
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                  {m.title}
                </h3>
                <p className="text-[15px] sm:text-base text-slate-700 leading-[1.75]">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
