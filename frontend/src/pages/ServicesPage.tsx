import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, CETED_INFO } from '../data/cetedFullData';
import { GraduationCap, BookOpen, Layers, Briefcase, Check, ArrowRight } from 'lucide-react';

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
  /* Datos de pregrado extraídos de "Solicitudes de servicios.xlsx" — solo CETED */
  const CETED_PROGRAMAS: {
    id: string;
    nombre: string;
    materias: { asignatura: string; año: string; periodo: string; horas: number }[];
  }[] = [
    {
      id: 'licenciatura-contabilidad',
      nombre: 'Licenciatura en Contabilidad y Finanzas',
      materias: [
        { asignatura: 'Administración General', año: '3ro', periodo: '1er PERIODO', horas: 48 },
        { asignatura: 'Administración Estratégica', año: '3ro', periodo: '1er PERIODO', horas: 48 },
        { asignatura: 'Metodología de la Investigación Científica', año: '3ro', periodo: '1er PERIODO', horas: 30 },
        { asignatura: 'Optativa III', año: '4to', periodo: '1er PERIODO', horas: 42 },
        { asignatura: 'Optativa IV', año: '4to', periodo: '1er PERIODO', horas: 32 },
      ],
    },
    {
      id: 'ciclo-corto',
      nombre: 'Ciclo Corto',
      materias: [
        { asignatura: 'Marketing I', año: '1ro', periodo: '1er PERIODO', horas: 90 },
        { asignatura: 'Negociación', año: '1ro', periodo: '1er PERIODO', horas: 60 },
        { asignatura: 'Administración de Empresas I', año: '2do', periodo: '1er PERIODO', horas: 50 },
        { asignatura: 'Comunicación Comercial II', año: '2do', periodo: '1er PERIODO', horas: 30 },
      ],
    },
    {
      id: 'mercadeo-comunicacion',
      nombre: 'Mercadeo y Comunicación',
      materias: [
        { asignatura: 'Marketing II', año: '1ro', periodo: '1er PERIODO', horas: 90 },
        { asignatura: 'Comunicación Comercial I', año: '1ro', periodo: '1er PERIODO', horas: 60 },
        { asignatura: 'Metodología de la Investigación Científica', año: '1ro', periodo: '1er PERIODO', horas: 60 },
        { asignatura: 'Elementos de Dirección', año: '2do', periodo: '1er PERIODO', horas: 50 },
      ],
    },
    {
      id: 'gestion-empresarial',
      nombre: 'Gestión Empresarial',
      materias: [
        { asignatura: 'Administración de Empresas II', año: '2do', periodo: '1er PERIODO', horas: 40 },
        { asignatura: 'Calidad y Protección al Consumidor', año: '2do', periodo: '1er PERIODO', horas: 30 },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<'pregrado' | 'posgrado' | 'gabinete' | 'consultora'>(
    initialSubcategory
  );
  const [activeCetedProgram, setActiveCetedProgram] = useState(CETED_PROGRAMAS[0].id);
  const [filtroAño, setFiltroAño] = useState('todos');
  const [filtroPeriodo, setFiltroPeriodo] = useState('todos');

  const años = Array.from(new Set(CETED_PROGRAMAS.flatMap((p) => p.materias.map((m) => m.año))));
  const periodos = Array.from(
    new Set(CETED_PROGRAMAS.flatMap((p) => p.materias.map((m) => m.periodo)))
  );
  const programa = CETED_PROGRAMAS.find((p) => p.id === activeCetedProgram);
  const materias = programa
    ? programa.materias.filter(
        (m) =>
          (filtroAño === 'todos' || m.año === filtroAño) &&
          (filtroPeriodo === 'todos' || m.periodo === filtroPeriodo)
      )
    : [];

  const subcategories: {
    id: 'pregrado' | 'posgrado' | 'gabinete' | 'consultora';
    title: string;
    icon: any;
  }[] = [
    { id: 'pregrado', title: 'Pregrado', icon: GraduationCap },
    { id: 'posgrado', title: 'Posgrado y Maestrías', icon: BookOpen },
    { id: 'gabinete', title: 'Gabinete Metodológico', icon: Layers },
    { id: 'consultora', title: 'Marca Consultora', icon: Briefcase },
  ];

  const eyebrow =
    'text-xs font-semibold uppercase tracking-[0.14em] text-ceted-blue dark:text-blue-300';
  const h2 =
    'mt-2 font-serif text-3xl font-semibold tracking-tight text-ceted-dark dark:text-white sm:text-4xl';
  const subtitle =
    'mt-2 text-base font-medium text-slate-800 dark:text-slate-100 sm:text-lg';
  const lead =
    'mt-4 text-base leading-[1.8] text-slate-700 dark:text-slate-300 sm:text-[17px]';
  const panel =
    'rounded-xl border border-slate-200 bg-white shadow-xs dark:border-ceted-line dark:bg-ceted-dark';
  const card = `${panel} transition duration-200 hover:-translate-y-0.5 hover:border-ceted-blue hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:hover:border-blue-400`;
  const row =
    'flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-ceted-line dark:bg-ceted-navy';
  const rowText =
    'text-[15px] leading-[1.7] text-slate-800 dark:text-slate-200 sm:text-base';
  const checkIcon = 'mt-0.5 h-5 w-5 shrink-0 text-ceted-blue dark:text-blue-300';
  const primaryBtn =
    'group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ceted-blue px-4 py-3.5 text-sm font-semibold text-white transition duration-150 hover:bg-ceted-hover active:scale-[0.98] motion-reduce:active:scale-100 dark:hover:bg-[#1567E3]';
  const fieldLabel =
    'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white';

  return (
    <div className="pb-20 pt-24 text-left text-slate-800 dark:text-slate-200">
      {/* Encabezado */}
      <section className="bg-ceted-blue px-4 py-14 text-white dark:border-b dark:border-ceted-line dark:bg-ceted-dark sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 dark:text-blue-300">
            Oferta Integral Académica y de Consultoría
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Servicios y Maestrías
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-blue-50 dark:text-slate-300 sm:text-lg">
            Formación curricular de pregrado, maestrías oficiales de posgrado, asesoría metodológica
            curricular y consultoría estratégica de gestión a empresas.
          </p>

          {/* Selector de subcategorías */}
          <div
            role="tablist"
            aria-label="Subcategorías de servicios"
            className="mt-8 grid max-w-3xl grid-cols-2 gap-2 rounded-xl border border-white bg-white p-1.5 dark:border-ceted-line dark:bg-ceted-navy sm:grid-cols-4"
          >
            {subcategories.map((sub) => {
              const Icon = sub.icon;
              const isSelected = activeTab === sub.id;
              return (
                <button
                  key={sub.id}
                  id={`tab-${sub.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${sub.id}`}
                  onClick={() => setActiveTab(sub.id)}
                  className={`flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition-all duration-150 active:scale-[0.98] motion-reduce:active:scale-100 ${
                    isSelected
                      ? 'bg-ceted-blue text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-ceted-blue dark:text-slate-200 dark:hover:bg-ceted-deep dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{sub.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* PREGRADO */}
        {activeTab === 'pregrado' && (
          <div
            role="tabpanel"
            id="panel-pregrado"
            aria-labelledby="tab-pregrado"
            className="animate-fade-in space-y-10 motion-reduce:animate-none"
          >
            <div className="max-w-3xl">
              <span className={eyebrow}>Formación Curricular Inicial</span>
              <h2 className={h2}>Asignaturas de Pregrado</h2>
              <p className={subtitle}>
                Consulta las asignaturas impartidas por el CETED en las carreras de pregrado, con su
                año, período y horas de clase.
              </p>
            </div>

            {/* Selector horizontal de programas CETED */}
            <div
              role="tablist"
              aria-label="Programas CETED"
              className="mt-6 flex max-w-3xl gap-2 rounded-xl border border-slate-200 bg-white p-1 dark:border-ceted-line dark:bg-ceted-navy overflow-x-auto"
            >
              {CETED_PROGRAMAS.map((p) => {
                const isSelected = activeCetedProgram === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCetedProgram(p.id)}
                    className={`flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-150 active:scale-[0.98] motion-reduce:active:scale-100 ${
                      isSelected
                        ? 'bg-ceted-blue text-white shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-ceted-deep dark:hover:text-white'
                    }`}
                  >
                    {p.nombre}
                  </button>
                );
              })}
            </div>

            {/* Filtro por año o período */}
            <div className="mt-8 flex max-w-3xl items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-ceted-line dark:bg-ceted-navy">
              <img
                src={CETED_INFO.logo}
                alt="CETED"
                className="h-8 w-8 shrink-0 rounded"
                aria-hidden="true"
              />
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Año
              </label>
              <select
                value={filtroAño}
                onChange={(e) => setFiltroAño(e.target.value)}
                className="rounded border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ceted-blue dark:border-ceted-line dark:bg-ceted-deep dark:text-slate-200"
              >
                <option value="todos">Todos</option>
                {años.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Período
              </label>
              <select
                value={filtroPeriodo}
                onChange={(e) => setFiltroPeriodo(e.target.value)}
                className="rounded border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ceted-blue dark:border-ceted-line dark:bg-ceted-deep dark:text-slate-200"
              >
                <option value="todos">Todos</option>
                {periodos.map((per) => (
                  <option key={per} value={per}>
                    {per}
                  </option>
                ))}
              </select>
            </div>

            {/* Listado de asignaturas */}
            <div className="mt-6 space-y-2">
              {materias.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-ceted-line dark:bg-ceted-navy"
                >
                  <span className="text-[15px] font-medium text-slate-800 dark:text-slate-200">
                    {m.asignatura}
                  </span>
                  <span className="text-[13px] text-slate-500 dark:text-slate-400">· {m.año}</span>
                  <span className="text-[13px] text-slate-500 dark:text-slate-400">
                    · {m.periodo}
                  </span>
                  <span className="ml-auto text-[13px] font-semibold text-slate-500 dark:text-slate-400">
                    {m.horas} h
                  </span>
                </div>
              ))}
              {materias.length === 0 && (
                <p className="text-slate-500 dark:text-slate-400">
                  No hay asignaturas con esos filtros.
                </p>
              )}
            </div>

            {/* Contacto */}
            <div className="mt-10 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-ceted-line dark:bg-ceted-navy">
              <p className="text-slate-700 dark:text-slate-300">
                Si requiere más información, póngase en contacto con nosotros.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('contacto')}
                className={primaryBtn}
              >
                Contáctenos
              </button>
            </div>
          </div>
        )}

        {/* POSGRADO */}
        {activeTab === 'posgrado' && (
          <div
            role="tabpanel"
            id="panel-posgrado"
            aria-labelledby="tab-posgrado"
            className="animate-fade-in space-y-12 motion-reduce:animate-none"
          >
            <div className="max-w-3xl">
              <span className={eyebrow}>Programas de Posgrado Académico</span>
              <h2 className={h2}>{SERVICES_DATA.posgrado.title}</h2>
              <p className={subtitle}>"{SERVICES_DATA.posgrado.subtitle}"</p>
              <p className={lead}>{SERVICES_DATA.posgrado.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {SERVICES_DATA.posgrado.maestrias.map((prog) => (
                <div key={prog.id} className={`flex flex-col justify-between p-8 ${card}`}>
                  <div className="space-y-4">
                    <span className={eyebrow}>Maestría Oficial Acreditada</span>
                    <h3 className="font-serif text-2xl font-semibold leading-snug text-slate-900 dark:text-white">
                      {prog.name}
                    </h3>
                    <div>
                      <span className="inline-block rounded-md border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-xs font-semibold text-ceted-blue dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                        Duración: {prog.duration}
                      </span>
                    </div>

                    <div className="space-y-4 border-t border-slate-200 pt-3 dark:border-ceted-line">
                      <div>
                        <strong className={fieldLabel}>Enfoque Formativo:</strong>
                        <p className="text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 sm:text-base">
                          {prog.focus}
                        </p>
                      </div>
                      <div className="pt-2">
                        <strong className={fieldLabel}>Requisitos de Ingreso:</strong>
                        <p className="text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 sm:text-base">
                          {prog.requirements}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-6 dark:border-ceted-line">
                    <button
                      type="button"
                      onClick={() => onOpenApply(prog.name)}
                      className={`${primaryBtn} min-h-[46px]`}
                    >
                      <span>Postular a esta Maestría</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Diplomados */}
            <div className={`p-8 ${panel}`}>
              <h3 className="mb-2 font-serif text-2xl font-semibold text-ceted-dark dark:text-white">
                Diplomados y Cursos de Posgrado Continuo
              </h3>
              <p className="mb-6 text-base leading-[1.75] text-slate-700 dark:text-slate-300 sm:text-[17px]">
                Cursos de actualización ejecutiva en habilidades directivas, gestión de recursos y gobierno organizacional.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {SERVICES_DATA.posgrado.diplomados.map((dip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-[15px] font-medium text-slate-800 dark:border-ceted-line dark:bg-ceted-navy dark:text-slate-200"
                  >
                    <Check
                      className="h-5 w-5 shrink-0 text-ceted-blue dark:text-blue-300"
                      aria-hidden="true"
                    />
                    <span>{dip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GABINETE METODOLÓGICO */}
        {activeTab === 'gabinete' && (
          <div
            role="tabpanel"
            id="panel-gabinete"
            aria-labelledby="tab-gabinete"
            className="animate-fade-in space-y-12 motion-reduce:animate-none"
          >
            <div className="max-w-3xl">
              <span className={eyebrow}>Ingeniería y Actualización Pedagógica</span>
              <h2 className={h2}>{SERVICES_DATA.gabinete.title}</h2>
              <p className={subtitle}>"{SERVICES_DATA.gabinete.subtitle}"</p>
              <p className={lead}>{SERVICES_DATA.gabinete.description}</p>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className={`space-y-5 p-8 lg:col-span-8 ${panel}`}>
                <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white">
                  Funciones del Gabinete
                </h3>
                <div className="space-y-3.5">
                  {SERVICES_DATA.gabinete.functions.map((func, idx) => (
                    <div key={idx} className={row}>
                      <span
                        className="mt-0.5 font-mono text-sm font-bold text-ceted-blue dark:text-blue-300"
                        aria-hidden="true"
                      >
                        0{idx + 1}
                      </span>
                      <span className={rowText}>{func}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 dark:border-ceted-line dark:bg-ceted-dark dark:text-slate-300 lg:col-span-4">
                <h4 className="font-serif text-lg font-semibold text-slate-900 dark:text-white">
                  Asesoría Curricular
                </h4>
                <p className="text-[15px] leading-[1.7] text-slate-700 dark:text-slate-300">
                  Diseño de programas y banco de casos de dirección para facultades e instituciones:
                </p>
                <div className="rounded-lg border border-slate-200 bg-white p-3.5 dark:border-ceted-line dark:bg-ceted-navy">
                  <span className="block font-semibold text-slate-900 dark:text-white">
                    Correo directo:
                  </span>
                  <span className="break-all font-mono font-semibold text-ceted-blue dark:text-blue-300">
                    {CETED_INFO.emails.general}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('contacto')}
                  className={`${primaryBtn} min-h-[44px]`}
                >
                  Solicitar Asesoría Metodológica
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CONSULTORA EN GESTIÓN (GTI) */}
        {activeTab === 'consultora' && (
          <div
            role="tabpanel"
            id="panel-consultora"
            aria-labelledby="tab-consultora"
            className="animate-fade-in space-y-12 motion-reduce:animate-none"
          >
            <div className="max-w-3xl">
              <span className={eyebrow}>
                Marca de Servicios de Consultoría Universidad de La Habana
              </span>
              <h2 className={h2}>{SERVICES_DATA.consultora.title}</h2>
              <p className={subtitle}>"{SERVICES_DATA.consultora.subtitle}"</p>
              <p className={lead}>{SERVICES_DATA.consultora.description}</p>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className={`space-y-5 p-8 lg:col-span-7 ${panel}`}>
                <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white">
                  Cartera de Consultoría Empresarial
                </h3>
                <div className="space-y-3.5">
                  {SERVICES_DATA.consultora.servicesList.map((serv, idx) => (
                    <div key={idx} className={row}>
                      <Check className={checkIcon} aria-hidden="true" />
                      <span className={rowText}>{serv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 rounded-xl bg-ceted-blue p-8 text-white dark:border dark:border-ceted-line dark:bg-ceted-dark lg:col-span-5">
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100 dark:text-blue-300">
                    Visión 2026 y Alianzas
                  </span>
                  <h3 className="font-serif text-2xl font-semibold">
                    Aliado Estratégico Organizacional
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-blue-50 dark:text-slate-300">
                    {SERVICES_DATA.consultora.manifesto}
                  </p>
                  <p className="border-t border-white/20 pt-3 text-sm text-blue-100 dark:text-slate-300">
                    <strong className="text-white">Alcance: </strong>
                    {SERVICES_DATA.consultora.clients}
                  </p>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('contacto')}
                    className="min-h-[48px] w-full rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-ceted-blue transition duration-150 hover:bg-slate-100 active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-white"
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