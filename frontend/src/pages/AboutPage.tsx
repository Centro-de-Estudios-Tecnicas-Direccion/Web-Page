import React from 'react';
import { PageId } from '../types';
import { ABOUT_CETED } from '../data/cetedFullData';
import { Compass, Eye, Users, Search, Mail } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const eyebrow =
    'text-xs font-semibold uppercase tracking-[0.14em] text-ceted-blue dark:text-blue-300';
  const h2 =
    'mt-2 font-serif text-3xl font-semibold tracking-tight text-ceted-dark dark:text-white sm:text-4xl';
  const card =
    'rounded-xl border border-slate-200 bg-white shadow-xs transition duration-200 hover:border-ceted-blue/60 hover:shadow-md dark:border-ceted-line dark:bg-ceted-dark dark:hover:border-blue-400/60';
  const iconBox =
    'flex items-center justify-center bg-blue-50 text-ceted-blue dark:bg-blue-400/10 dark:text-blue-300';
  const headerLink =
    'flex min-h-[40px] items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition duration-150 active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-white';

  return (
    <div className="pb-20 pt-24 text-left text-slate-800 dark:text-slate-200">
      {/* Encabezado */}
      <section className="bg-ceted-blue px-4 py-14 text-white dark:border-b dark:border-ceted-line dark:bg-ceted-dark sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 dark:text-blue-300">
            Identidad y Misión Institucional
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Sobre Nosotros
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-blue-50 dark:text-slate-300 sm:text-lg">
            Centro de Estudios de Técnicas de Dirección (CETED): excelencia académica, rigor científico
            y compromiso constante con el perfeccionamiento de las organizaciones.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/20 pt-6">
            <span className="text-sm font-medium text-blue-100 dark:text-slate-300">
              Enlaces directos:
            </span>
            <button
              type="button"
              onClick={() => onNavigate('claustro')}
              className={`${headerLink} bg-white text-ceted-blue hover:bg-slate-100`}
            >
              <Users className="h-4 w-4" aria-hidden="true" />
              <span>Ver Claustro de Profesores</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('investigacion')}
              className={`${headerLink} border-2 border-white text-white hover:bg-white/10`}
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <span>Líneas de Investigación</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contacto')}
              className={`${headerLink} border-2 border-white text-white hover:bg-white/10`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Contacto y Ubicación</span>
            </button>
          </div>
        </div>
      </section>

      {/* 01. MISIÓN Y VISIÓN */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className={`p-8 ${card}`}>
            <div className={`mb-4 h-12 w-12 rounded-xl ${iconBox}`}>
              <Compass className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className={eyebrow}>Misión Institucional</span>
            <h2 className="mb-3 mt-1 font-serif text-2xl font-semibold text-ceted-dark dark:text-white">
              Nuestro Propósito
            </h2>
            <p className="text-base leading-[1.8] text-slate-700 dark:text-slate-300 sm:text-[17px]">
              {ABOUT_CETED.mision}
            </p>
          </div>

          <div className={`p-8 ${card}`}>
            <div className={`mb-4 h-12 w-12 rounded-xl ${iconBox}`}>
              <Eye className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className={eyebrow}>Visión de Futuro</span>
            <h2 className="mb-3 mt-1 font-serif text-2xl font-semibold text-ceted-dark dark:text-white">
              Nuestro Horizonte
            </h2>
            <p className="text-base leading-[1.8] text-slate-700 dark:text-slate-300 sm:text-[17px]">
              {ABOUT_CETED.vision}
            </p>
          </div>
        </div>
      </section>

      {/* 02. VALORES */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 dark:border-ceted-line dark:bg-ceted-mid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <span className={eyebrow}>Principios Rectores</span>
            <h2 className={h2}>Valores que Guían al CETED</h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Seis pilares institucionales que orientan el quehacer pedagógico, científico y consultor del centro.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ABOUT_CETED.valores.map((val, idx) => (
              <div key={idx} className={`flex flex-col justify-between p-6 ${card}`}>
                <div>
                  <div
                    className={`mb-3 h-9 w-9 rounded-lg font-serif text-sm font-bold ${iconBox}`}
                    aria-hidden="true"
                  >
                    0{idx + 1}
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-slate-900 dark:text-white">
                    {val.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-slate-700 dark:text-slate-300">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. HISTORIA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className={eyebrow}>Trayectoria Académica Institucional</span>
          <h2 className={h2}>Nuestra Historia desde 1988</h2>
          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-6 text-base leading-[1.8] text-slate-700 dark:border-ceted-line dark:bg-ceted-dark dark:text-slate-300">
            <p>{ABOUT_CETED.historiaNarrativa}</p>
          </div>
        </div>

        <div className="relative ml-4 space-y-8 border-l-2 border-ceted-blue pl-6 dark:border-blue-400 sm:ml-6 sm:pl-8">
          {ABOUT_CETED.historia.map((m, idx) => (
            <div key={idx} className="relative">
              <div
                className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-ceted-blue shadow-xs dark:border-ceted-navy dark:bg-blue-400 sm:-left-[39px]"
                aria-hidden="true"
              />

              <div className={`p-6 sm:p-7 ${card}`}>
                <span className="mb-1 block font-mono text-sm font-bold text-ceted-blue dark:text-blue-300">
                  {m.year}
                </span>
                <h3 className="mb-2 font-serif text-lg font-semibold text-slate-900 dark:text-white">
                  {m.title}
                </h3>
                <p className="text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 sm:text-base">
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