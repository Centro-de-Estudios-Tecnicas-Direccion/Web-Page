import React, { useState, useEffect } from 'react';
import { PageId, BlogPost, ResearchLine, ResearchProject } from '../types';
import {
  RESEARCH_LINES,
  RESEARCH_PROJECTS,
  EXTENSION_REDEC,
  BLOG_POSTS,
} from '../data/cetedFullData';
import {
  CheckCircle2,
  ArrowRight,
  Globe2,
  ExternalLink,
  User,
  X,
  UserCheck,
  FileText,
} from 'lucide-react';

interface ResearchPageProps {
  onNavigate: (page: PageId, subTab?: string, facultyId?: string) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate }) => {
  const [selectedLineId, setSelectedLineId] = useState<string>('all');
  const [selectedLine, setSelectedLine] = useState<ResearchLine | null>(null);
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Bloquea el scroll con cualquier modal abierto y maneja ESC
  useEffect(() => {
    const hasModal = Boolean(selectedLine || selectedProject || selectedPost);
    if (hasModal) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedLine(null);
          setSelectedProject(null);
          setSelectedPost(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedLine, selectedProject, selectedPost]);

  const filteredProjects =
    selectedLineId === 'all'
      ? RESEARCH_PROJECTS
      : RESEARCH_PROJECTS.filter((p) => p.lineId === selectedLineId);

  const eyebrow =
    'text-xs font-semibold uppercase tracking-[0.14em] text-ceted-blue dark:text-blue-300';
  const h2 =
    'mt-2 font-serif text-3xl font-semibold tracking-tight text-ceted-dark dark:text-white sm:text-4xl';
  const card =
    'rounded-xl border border-slate-200 bg-white shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-ceted-blue hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-ceted-line dark:bg-ceted-dark dark:hover:border-blue-400';
  const linkBtn =
    'flex items-center gap-1.5 rounded-sm font-semibold text-ceted-blue underline-offset-4 hover:underline dark:text-blue-300';
  const chipBlue =
    'rounded border border-blue-100 bg-blue-50 text-ceted-blue dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300';
  const tag =
    'rounded border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-ceted-line dark:bg-ceted-navy dark:text-slate-300';
  const primaryBtn =
    'inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-ceted-blue px-5 py-2.5 text-sm font-semibold text-white transition duration-150 hover:bg-ceted-hover active:scale-[0.98] motion-reduce:active:scale-100 dark:hover:bg-[#1567E3]';
  const closeIconBtn =
    'absolute right-4 top-4 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-ceted-deep dark:hover:text-white';
  const overlay =
    'fixed inset-0 z-50 flex animate-fade-in items-center justify-center overscroll-contain bg-black/60 p-4 backdrop-blur-xs motion-reduce:animate-none sm:p-6';
  const modalBase =
    'relative max-h-[90vh] w-full animate-pop-in overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-2xl motion-reduce:animate-none dark:border-ceted-line dark:bg-ceted-dark sm:p-8';
  const modalLabel =
    'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white';

  return (
    <div className="pb-20 pt-24 text-left text-slate-800 dark:text-slate-200">
      {/* Encabezado */}
      <section className="bg-ceted-blue px-4 py-14 text-white dark:border-b dark:border-ceted-line dark:bg-ceted-dark sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 dark:text-blue-300">
            Producción Científica y Extensión
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Investigación y Cátedra UNESCO
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-blue-50 dark:text-slate-300 sm:text-lg">
            Ejes de investigación aplicada, cartera de proyectos territoriales, la Cátedra UNESCO
            en educación directiva y los artículos científicos de nuestro claustro.
          </p>
        </div>
      </section>

      {/* 01. LÍNEAS DE INVESTIGACIÓN */}
      <section className="mx-auto max-w-7xl border-b border-slate-200 px-4 py-16 dark:border-ceted-line sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className={eyebrow}>Ejes Temáticos</span>
          <h2 className={h2}>Líneas de Investigación del CETED</h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Haga clic en el nombre del profesor líder para consultar su currículum y trayectoria en el Claustro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {RESEARCH_LINES.map((line) => (
            <div key={line.id} className={`flex flex-col justify-between p-8 ${card}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className={`${chipBlue} px-2.5 py-1 font-mono font-bold`}>
                    LÍNEA CIENTÍFICA
                  </span>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {line.activeProjects} proyectos activos
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold leading-snug text-slate-900 dark:text-white">
                  {line.title}
                </h3>

                <p className="text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 sm:text-base">
                  {line.description}
                </p>

                <div className="border-t border-slate-100 pt-3 dark:border-ceted-line">
                  <span className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Descriptores Temáticos:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {line.keyTopics.map((topic, i) => (
                      <span key={i} className={tag}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 dark:border-ceted-line">
                <button
                  type="button"
                  onClick={() => setSelectedLine(line)}
                  className={`${linkBtn} min-h-[40px] text-sm`}
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  <span>Ver Ficha Metodológica</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Líder:
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('claustro', undefined, line.leaderId)}
                    className={`${linkBtn} min-h-[40px] text-sm font-bold`}
                    title={`Ver ficha completa de ${line.leader} en el Claustro`}
                  >
                    <UserCheck className="h-4 w-4" aria-hidden="true" />
                    <span>{line.leader}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02. PROYECTOS */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 dark:border-ceted-line dark:bg-ceted-mid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className={eyebrow}>Cartera de I+D</span>
              <h2 className={h2}>Proyectos de Investigación Aplicada</h2>
            </div>

            <div className="flex items-center gap-2">
              <label
                htmlFor="filtro-eje"
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Filtrar por eje:
              </label>
              <select
                id="filtro-eje"
                value={selectedLineId}
                onChange={(e) => setSelectedLineId(e.target.value)}
                className="min-h-[44px] rounded-lg border border-slate-500 bg-white px-3 py-2 text-sm text-slate-800 transition-colors hover:border-slate-700 focus:border-ceted-blue dark:border-slate-500 dark:bg-ceted-navy dark:text-slate-100 dark:hover:border-slate-300 dark:focus:border-blue-400"
              >
                <option value="all">Todos los proyectos</option>
                {RESEARCH_LINES.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.title.slice(0, 32)}...
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className={`flex flex-col justify-between p-6 ${card}`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono font-medium text-slate-600 dark:text-slate-400">
                      {proj.duration}
                    </span>
                    <span className={`${chipBlue} px-2.5 py-0.5 text-xs font-bold`}>
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                    {proj.title}
                  </h3>

                  <p className="text-sm leading-[1.7] text-slate-700 dark:text-slate-300">
                    {proj.abstract}
                  </p>
                </div>

                <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm dark:border-ceted-line">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-slate-600 dark:text-slate-400">Coordinador:</span>
                    <button
                      type="button"
                      onClick={() => onNavigate('claustro', undefined, proj.coordinatorId)}
                      className={`${linkBtn} min-h-[36px] text-left font-bold`}
                      title="Ver perfil del docente en el Claustro"
                    >
                      <User className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{proj.coordinator}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-1 border-t border-slate-100 pt-1 dark:border-ceted-line">
                    <span className="text-slate-600 dark:text-slate-400">
                      Alcance:{' '}
                      <strong className="font-medium text-slate-800 dark:text-slate-100">
                        {proj.scope}
                      </strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                      className={`${linkBtn} min-h-[36px]`}
                    >
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Ficha técnica</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. REDEC - CÁTEDRA UNESCO */}
      <section className="mx-auto max-w-7xl border-b border-slate-200 px-4 py-16 dark:border-ceted-line sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-xs dark:border-ceted-line dark:bg-ceted-dark sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <span className={eyebrow}>Cooperación Académica Internacional</span>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-ceted-dark dark:text-white">
                {EXTENSION_REDEC.title}
              </h2>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {EXTENSION_REDEC.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                  Objetivos Principales de la Cátedra:
                </span>
                {EXTENSION_REDEC.objectives.slice(0, 3).map((obj, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-ceted-blue dark:text-blue-300"
                      aria-hidden="true"
                    />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 rounded-xl bg-ceted-blue p-8 text-center text-white dark:border dark:border-ceted-line dark:bg-ceted-navy lg:col-span-4">
              <Globe2 className="mx-auto h-12 w-12 text-white" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold">Cátedra UNESCO & Redec</h3>
              <p className="text-sm text-blue-50 dark:text-slate-300">
                Espacio digital oficial, canales de difusión y vinculación internacional en economías circulares:
              </p>

              <div className="space-y-2 pt-2">
                <a
                  href={EXTENSION_REDEC.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-ceted-blue transition duration-150 hover:bg-slate-100 active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-white"
                >
                  <span>Portal Web Linktree Oficial</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1 text-sm">
                  <a
                    href={EXTENSION_REDEC.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center justify-center gap-1 rounded-lg border border-white/40 p-2.5 font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-white"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
                  </a>
                  <a
                    href={EXTENSION_REDEC.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center justify-center gap-1 rounded-lg border border-white/40 p-2.5 font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-white"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
                  </a>
                </div>

                <div className="border-t border-white/20 pt-2 font-mono text-xs text-blue-100 dark:text-slate-300">
                  <span>{EXTENSION_REDEC.email}</span> · <span>{EXTENSION_REDEC.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. BLOG CIENTÍFICO */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className={eyebrow}>Divulgación Científica</span>
          <h2 className={h2}>Blog Científico de Dirección</h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Artículos metodológicos y de gestión redactados por los profesores de CETED.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className={`group flex flex-col justify-between p-6 ${card}`}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-ceted-blue dark:text-blue-300">
                    {post.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-ceted-blue dark:text-white dark:group-hover:text-blue-300">
                  {post.title}
                </h3>

                <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {post.summary}
                </p>

                <div className="flex items-center gap-1.5 pt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <User className="h-4 w-4 text-ceted-blue dark:text-blue-300" aria-hidden="true" />
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-ceted-line">
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400">
                  {post.date}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className={`${linkBtn} min-h-[36px] text-sm font-bold`}
                >
                  <span>Leer artículo</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal 1: Ficha de la línea */}
      {selectedLine && (
        <div
          className={overlay}
          onClick={() => setSelectedLine(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-line-title"
        >
          <div className={`${modalBase} max-w-2xl`} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              autoFocus
              onClick={() => setSelectedLine(null)}
              className={closeIconBtn}
              aria-label="Cerrar ficha de línea de investigación"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2 text-xs">
                <span className={`${chipBlue} px-2.5 py-1 font-mono font-bold`}>
                  LÍNEA CIENTÍFICA
                </span>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {selectedLine.activeProjects} proyectos activos
                </span>
              </div>
              <h2
                id="modal-line-title"
                className="font-serif text-2xl font-semibold leading-snug text-slate-900 dark:text-white"
              >
                {selectedLine.title}
              </h2>
            </div>

            <div className="mt-5 space-y-5 border-t border-slate-100 pt-4 text-sm text-slate-700 dark:border-ceted-line dark:text-slate-300">
              <div>
                <strong className={modalLabel}>Fundamentación y Eje Metodológico:</strong>
                <p className="text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 sm:text-base">
                  {selectedLine.description}
                </p>
              </div>

              <div>
                <strong className={modalLabel}>Descriptores y Áreas Temáticas:</strong>
                <div className="flex flex-wrap gap-2">
                  {selectedLine.keyTopics.map((topic, i) => (
                    <span key={i} className={`${tag} py-1.5`}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                  Proyectos Asociados a Esta Línea:
                </strong>
                <div className="space-y-2.5">
                  {RESEARCH_PROJECTS.filter((p) => p.lineId === selectedLine.id).map((p) => (
                    <div
                      key={p.id}
                      className="flex flex-col justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3.5 dark:border-ceted-line dark:bg-ceted-navy sm:flex-row sm:items-center"
                    >
                      <div>
                        <span className="block font-serif text-sm font-semibold text-slate-900 dark:text-white">
                          {p.title}
                        </span>
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          Coordinador: {p.coordinator} · Estado: {p.status}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLine(null);
                          setSelectedProject(p);
                        }}
                        className={`${linkBtn} min-h-[36px] shrink-0 text-sm`}
                      >
                        Ver proyecto
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/20 dark:bg-blue-400/10 sm:flex-row sm:items-center">
                <div>
                  <span className="block text-xs text-slate-600 dark:text-slate-400">
                    Líder Científico Responsable:
                  </span>
                  <span className="font-serif text-base font-semibold text-slate-900 dark:text-white">
                    {selectedLine.leader}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLine(null);
                    onNavigate('claustro', undefined, selectedLine.leaderId);
                  }}
                  className={primaryBtn}
                >
                  <UserCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Ver Currículum (CV)</span>
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t border-slate-100 pt-4 dark:border-ceted-line">
              <button type="button" onClick={() => setSelectedLine(null)} className={primaryBtn}>
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Ficha del proyecto */}
      {selectedProject && (
        <div
          className={overlay}
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className={`${modalBase} max-w-xl`} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              autoFocus
              onClick={() => setSelectedProject(null)}
              className={closeIconBtn}
              aria-label="Cerrar ficha del proyecto"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono font-medium text-slate-600 dark:text-slate-400">
                  {selectedProject.duration}
                </span>
                <span className={`${chipBlue} px-2.5 py-0.5 text-xs font-bold`}>
                  {selectedProject.status}
                </span>
              </div>
              <h2
                id="modal-project-title"
                className="font-serif text-2xl font-semibold leading-snug text-slate-900 dark:text-white"
              >
                {selectedProject.title}
              </h2>
            </div>

            <div className="mt-5 space-y-4 border-t border-slate-100 pt-4 text-sm text-slate-700 dark:border-ceted-line dark:text-slate-300">
              <div>
                <strong className={modalLabel}>Alcance Territorial y Sectorial:</strong>
                <p className="font-medium text-slate-800 dark:text-slate-100">
                  {selectedProject.scope}
                </p>
              </div>

              <div>
                <strong className={modalLabel}>Resumen Ejecutivo del Proyecto:</strong>
                <p className="text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 sm:text-base">
                  {selectedProject.abstract}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-ceted-line dark:bg-ceted-navy">
                <div>
                  <span className="block text-xs text-slate-600 dark:text-slate-400">
                    Coordinador Principal:
                  </span>
                  <span className="font-serif text-sm font-semibold text-slate-900 dark:text-white">
                    {selectedProject.coordinator}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigate('claustro', undefined, selectedProject.coordinatorId);
                  }}
                  className={`${primaryBtn} shrink-0`}
                >
                  <User className="h-4 w-4" aria-hidden="true" />
                  <span>Ver Perfil Docente</span>
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t border-slate-100 pt-4 dark:border-ceted-line">
              <button type="button" onClick={() => setSelectedProject(null)} className={primaryBtn}>
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: Lector de artículo */}
      {selectedPost && (
        <div
          className={overlay}
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-post-title"
        >
          <div className={`${modalBase} max-w-2xl`} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              autoFocus
              onClick={() => setSelectedPost(null)}
              className={closeIconBtn}
              aria-label="Cerrar artículo"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="space-y-2 pr-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-bold text-ceted-blue dark:text-blue-300">
                  {selectedPost.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h2
                id="modal-post-title"
                className="font-serif text-2xl font-semibold text-slate-900 dark:text-white"
              >
                {selectedPost.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Por {selectedPost.author} ({selectedPost.role})
              </p>
            </div>

            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm leading-[1.75] text-slate-700 dark:border-ceted-line dark:text-slate-300 sm:text-base">
              <p className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-sm font-medium text-slate-900 dark:border-ceted-line dark:bg-ceted-navy dark:text-slate-100">
                {selectedPost.summary}
              </p>
              {selectedPost.content.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </div>

            <div className="mt-6 flex justify-end border-t border-slate-100 pt-4 dark:border-ceted-line">
              <button type="button" onClick={() => setSelectedPost(null)} className={primaryBtn}>
                Cerrar Lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};