import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, CETED_INFO } from '../data/cetedFullData';
import {
  GraduationCap,
  BookOpen,
  Layers,
  Briefcase,
  Check,
  ArrowRight,
  Clock,
  Award,
  BookCheck,
} from 'lucide-react';

interface ServicesPageProps {
  initialSubcategory?: 'pregrado' | 'posgrado' | 'gabinete' | 'consultora';
  onNavigate: (page: PageId, subTab?: string) => void;
  onOpenApply: (programName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialSubcategory = 'posgrado',
  onNavigate,
  onOpenApply,
}) => {
  const [activeTab, setActiveTab] = useState<'pregrado' | 'posgrado' | 'gabinete' | 'consultora'>(
    initialSubcategory
  );

  const subcategories: { id: 'pregrado' | 'posgrado' | 'gabinete' | 'consultora'; title: string; icon: any }[] = [
    { id: 'pregrado', title: 'Pregrado', icon: GraduationCap },
    { id: 'posgrado', title: 'Posgrado y Maestrías', icon: BookOpen },
    { id: 'gabinete', title: 'Gabinete Metodológico', icon: Layers },
    { id: 'consultora', title: 'Marca Consultora', icon: Briefcase },
  ];

  return (
    <div className="pt-24 pb-20 text-slate-800 text-left">
      
      {/* Header (SOLID #0D5DD7) */}
      <section className="bg-[#0D5DD7] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-100">
            Oferta Integral Académica y de Consultoría
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-white">
            Servicios y Maestrías
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/95 max-w-3xl leading-relaxed">
            Formación curricular de pregrado, maestrías oficiales de posgrado, asesoría metodológica 
            curricular y consultoría estratégica de gestión a empresas.
          </p>

          {/* Subcategory Switcher */}
          <div
            role="tablist"
            aria-label="Subcategorías de servicios"
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-white rounded-xl max-w-3xl border border-white"
          >
            {subcategories.map((sub) => {
              const Icon = sub.icon;
              const isSelected = activeTab === sub.id;
              return (
                <button
                  key={sub.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(sub.id)}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-sm font-bold transition-all min-h-[44px] ${
                    isSelected
                      ? 'bg-[#0D5DD7] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#0D5DD7] hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{sub.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content (Enlarged and Generous Sizing) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* PREGRADO */}
        {activeTab === 'pregrado' && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                Formación Curricular Inicial
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D5DD7] mt-1">
                {SERVICES_DATA.pregrado.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-800 font-medium mt-1">
                "{SERVICES_DATA.pregrado.subtitle}"
              </p>
              <p className="mt-4 text-slate-700 leading-[1.8] text-[16px] sm:text-[17px]">
                {SERVICES_DATA.pregrado.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-xl p-8 space-y-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Asignaturas y Prácticas de Dirección
                </h3>
                <div className="space-y-3.5">
                  {SERVICES_DATA.pregrado.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <Check className="w-5 h-5 text-[#0D5DD7] shrink-0 mt-0.5" />
                      <span className="text-[15px] sm:text-base text-slate-800 leading-[1.7]">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-xl bg-blue-50/70 border-2 border-blue-100 text-sm sm:text-[15px] text-slate-800 space-y-1.5">
                  <strong className="block text-[#0D5DD7] font-bold text-base">Público Destinatario:</strong>
                  <p className="leading-[1.7] text-slate-700">{SERVICES_DATA.pregrado.audience}</p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border-2 border-slate-200 rounded-xl p-8 space-y-5">
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Seminarios y Talleres Prácticos
                </h3>
                <p className="text-[15px] sm:text-base text-slate-700 leading-[1.75]">
                  Los estudiantes universitarios acceden a talleres prácticos de resolución de conflictos, 
                  negociación y comunicación directiva impartidos por el claustro de CETED, preparándolos para la gestión real.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contacto')}
                    className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors min-h-[48px]"
                  >
                    Consultar Asignaturas de Pregrado
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* POSGRADO */}
        {activeTab === 'posgrado' && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                Programas de Posgrado Académico
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D5DD7] mt-1">
                {SERVICES_DATA.posgrado.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-800 font-medium mt-1">
                "{SERVICES_DATA.posgrado.subtitle}"
              </p>
              <p className="mt-4 text-slate-700 leading-[1.8] text-[16px] sm:text-[17px]">
                {SERVICES_DATA.posgrado.description}
              </p>
            </div>

            {/* Las 3 Maestrías con Tamaño Generoso */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES_DATA.posgrado.maestrias.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl p-8 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-[#0D5DD7] uppercase tracking-wider">
                      Maestría Oficial Acreditada
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug">
                      {prog.name}
                    </h3>
                    <div>
                      <span className="text-xs font-semibold text-[#0D5DD7] bg-blue-50/80 px-3 py-1.5 rounded-md border border-blue-100 inline-block">
                        Duración: {prog.duration}
                      </span>
                    </div>

                    <div className="space-y-4 pt-3 border-t border-slate-200">
                      <div>
                        <strong className="block text-slate-900 font-bold mb-1.5 text-xs uppercase tracking-wider">
                          Enfoque Formativo:
                        </strong>
                        <p className="leading-[1.75] text-[15px] sm:text-base text-slate-700">
                          {prog.focus}
                        </p>
                      </div>
                      <div className="pt-2">
                        <strong className="block text-slate-900 font-bold mb-1.5 text-xs uppercase tracking-wider">
                          Requisitos de Ingreso:
                        </strong>
                        <p className="leading-[1.75] text-[15px] sm:text-base text-slate-700">
                          {prog.requirements}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => onOpenApply(prog.name)}
                      className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[46px]"
                    >
                      <span>Postular a esta Maestría</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Diplomados */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0D5DD7] mb-2">
                Diplomados y Cursos de Posgrado Continuo
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 leading-[1.75] mb-6">
                Cursos de actualización ejecutiva en habilidades directivas, gestión de recursos y gobierno organizacional.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SERVICES_DATA.posgrado.diplomados.map((dip, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-[15px] text-slate-800 font-medium flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-[#0D5DD7] shrink-0" />
                    <span>{dip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GABINETE METODOLÓGICO */}
        {activeTab === 'gabinete' && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                Ingeniería y Actualización Pedagógica
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D5DD7] mt-1">
                {SERVICES_DATA.gabinete.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-800 font-medium mt-1">
                "{SERVICES_DATA.gabinete.subtitle}"
              </p>
              <p className="mt-4 text-slate-700 leading-[1.8] text-[16px] sm:text-[17px]">
                {SERVICES_DATA.gabinete.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 bg-white border-2 border-slate-200 rounded-xl p-8 space-y-5">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Funciones del Gabinete
                </h3>
                <div className="space-y-3.5">
                  {SERVICES_DATA.gabinete.functions.map((func, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-mono text-sm font-bold text-[#0D5DD7] mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="text-[15px] sm:text-base text-slate-800 leading-[1.7]">{func}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-50 border-2 border-slate-200 rounded-xl p-6 space-y-4 text-sm text-slate-700">
                <h4 className="font-serif text-lg font-bold text-slate-900">
                  Asesoría Curricular
                </h4>
                <p className="text-[15px] text-slate-700 leading-[1.7]">
                  Diseño de programas y banco de casos de dirección para facultades e instituciones:
                </p>
                <div className="p-3.5 bg-white border border-slate-200 rounded-lg">
                  <span className="block font-bold text-slate-900">Correo directo:</span>
                  <span className="text-[#0D5DD7] font-mono font-semibold">{CETED_INFO.emails.gabinete}</span>
                </div>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors min-h-[44px]"
                >
                  Solicitar Asesoría Metodológica
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CONSULTORA EN GESTIÓN */}
        {activeTab === 'consultora' && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                Brazo de Consultoría Organizacional
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D5DD7] mt-1">
                {SERVICES_DATA.consultora.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-800 font-medium mt-1">
                "{SERVICES_DATA.consultora.subtitle}"
              </p>
              <p className="mt-4 text-slate-700 leading-[1.8] text-[16px] sm:text-[17px]">
                {SERVICES_DATA.consultora.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-xl p-8 space-y-5">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Cartera de Consultoría Empresarial
                </h3>
                <div className="space-y-3.5">
                  {SERVICES_DATA.consultora.servicesList.map((serv, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <Check className="w-5 h-5 text-[#0D5DD7] shrink-0 mt-0.5" />
                      <span className="text-[15px] sm:text-base text-slate-800 leading-[1.7]">{serv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0D5DD7] text-white rounded-xl p-8 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
                    Trayectoria en Empresas
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    Alianzas Estratégicas
                  </h3>
                  <p className="text-[15px] text-white/95 leading-[1.75]">
                    {SERVICES_DATA.consultora.clients}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <button
                    onClick={() => onNavigate('contacto')}
                    className="w-full py-3.5 px-5 text-sm font-semibold text-[#0D5DD7] bg-white hover:bg-slate-100 rounded-lg transition-colors min-h-[48px]"
                  >
                    Solicitar Diagnóstico Organizacional
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
};
