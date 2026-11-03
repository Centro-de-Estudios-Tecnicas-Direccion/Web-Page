import React, { useState, useEffect } from 'react';
import { PageId, BlogPost, ResearchLine, ResearchProject } from '../types';
import {
  RESEARCH_LINES,
  RESEARCH_PROJECTS,
  EXTENSION_REDEC,
  BLOG_POSTS,
} from '../data/cetedFullData';
import {
  Search,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Globe2,
  ExternalLink,
  User,
  X,
  UserCheck,
  Layers,
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

  // Lock background scroll when ANY modal is open and handle ESC key
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

  return (
    <div className="pt-24 pb-20 text-slate-800 text-left">
      
      {/* Header (SOLID #0D5DD7) */}
      <section className="bg-[#0D5DD7] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-100">
            Producción Científica y Extensión
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-white">
            Investigación y Cátedra UNESCO
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/95 max-w-3xl leading-relaxed">
            Ejes de investigación aplicada, cartera de proyectos territoriales, la Cátedra UNESCO 
            en educación directiva y los artículos científicos de nuestro claustro.
          </p>
        </div>
      </section>

      {/* 01. LÍNEAS DE INVESTIGACIÓN (CLIC EN COORDINADOR LLEVA A SU PÁGINA EN CLAUSTRO) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
            Ejes Temáticos
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0D5DD7] mt-1">
            Líneas de Investigación del CETED
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Haga clic en el nombre del profesor líder para consultar su currículum y trayectoria en el Claustro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESEARCH_LINES.map((line) => (
            <div
              key={line.id}
              className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl p-8 transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#0D5DD7] bg-blue-50 px-2.5 py-1 rounded">
                    LÍNEA CIENTÍFICA
                  </span>
                  <span className="text-slate-600 font-semibold">{line.activeProjects} proyectos activos</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug">
                  {line.title}
                </h3>

                <p className="text-[15px] sm:text-base text-slate-700 leading-[1.75]">
                  {line.description}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 block mb-1.5">
                    Descriptores Temáticos:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {line.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-xs text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botones interactivos para abrir la ficha de la línea y consultar al líder */}
              <div className="pt-5 mt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedLine(line)}
                  className="text-xs font-semibold text-[#0D5DD7] hover:underline flex items-center gap-1.5 min-h-[36px]"
                >
                  <FileText className="w-3.5 h-3.5 text-[#0D5DD7]" />
                  <span>Ver Ficha Metodológica</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-500 font-medium">Líder:</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('claustro', undefined, line.leaderId)}
                    className="text-xs sm:text-sm font-bold text-[#0D5DD7] hover:underline flex items-center gap-1 min-h-[36px]"
                    title={`Ver ficha completa de ${line.leader} en el Claustro`}
                  >
                    <UserCheck className="w-4 h-4 text-[#0D5DD7]" />
                    <span>{line.leader}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0D5DD7]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02. PROYECTOS DE INVESTIGACIÓN (CLIC EN COORDINADOR LLEVA A SU PÁGINA EN CLAUSTRO) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                Cartera de I+D
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0D5DD7] mt-1">
                Proyectos de Investigación Aplicada
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-700 font-semibold">Filtrar por eje:</span>
              <select
                value={selectedLineId}
                onChange={(e) => setSelectedLineId(e.target.value)}
                className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0D5DD7]"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-600 font-medium">{proj.duration}</span>
                    <span className="text-xs font-bold text-[#0D5DD7] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-[1.7]">
                    {proj.abstract}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Coordinador:</span>
                    <button
                      type="button"
                      onClick={() => onNavigate('claustro', undefined, proj.coordinatorId)}
                      className="font-bold text-[#0D5DD7] hover:underline flex items-center gap-1.5 min-h-[32px]"
                      title="Ver perfil del docente en el Claustro"
                    >
                      <User className="w-3.5 h-3.5 text-[#0D5DD7]" />
                      <span>{proj.coordinator}</span>
                      <ArrowRight className="w-3 h-3 text-[#0D5DD7]" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                    <span className="text-slate-500">Alcance: <strong className="text-slate-800 font-medium">{proj.scope}</strong></span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                      className="font-semibold text-[#0D5DD7] hover:underline flex items-center gap-1 min-h-[32px]"
                    >
                      <FileText className="w-3 h-3" />
                      <span>Ficha técnica</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03. REDEC - CÁTEDRA UNESCO (SOLID WHITE) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="bg-white border-2 border-slate-200 rounded-xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                Cooperación Académica Internacional
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0D5DD7]">
                {EXTENSION_REDEC.title}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {EXTENSION_REDEC.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Objetivos Principales de la Cátedra:
                </span>
                {EXTENSION_REDEC.objectives.slice(0, 3).map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5DD7] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0D5DD7] text-white p-8 rounded-xl space-y-4 text-center">
              <Globe2 className="w-12 h-12 mx-auto text-white" />
              <h3 className="font-serif text-xl font-bold">
                Cátedra UNESCO & Redec
              </h3>
              <p className="text-xs text-white/95">
                Espacio digital oficial, canales de difusión y vinculación internacional en economías circulares:
              </p>
              
              <div className="space-y-2 pt-2">
                <a
                  href={EXTENSION_REDEC.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-[#0D5DD7] bg-white hover:bg-slate-100 rounded-lg transition-colors min-h-[44px]"
                >
                  <span>Portal Web Linktree Oficial</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <a
                    href={EXTENSION_REDEC.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-white/40 hover:bg-white/10 text-white font-medium flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3 text-white/70" />
                  </a>
                  <a
                    href={EXTENSION_REDEC.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-white/40 hover:bg-white/10 text-white font-medium flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-white/70" />
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-blue-100 border-t border-white/20 font-mono">
                  <span>{EXTENSION_REDEC.email}</span> · <span>{EXTENSION_REDEC.phone}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04. BLOG CIENTÍFICO DE DIRECCIÓN */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
            Divulgación Científica
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0D5DD7] mt-1">
            Blog Científico de Dirección
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Artículos metodológicos y de gestión redactados por los profesores de CETED.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl p-6 shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-bold text-[#0D5DD7]">{post.category}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0D5DD7] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                <div className="pt-2 text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-[#0D5DD7]" />
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">{post.date}</span>
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-bold text-[#0D5DD7] hover:underline flex items-center gap-1"
                >
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal 1: Ficha Técnica de la Línea de Investigación */}
      {selectedLine && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overscroll-contain"
          onClick={() => setSelectedLine(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-line-title"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto overscroll-contain text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedLine(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#0D5DD7]"
              aria-label="Cerrar ficha de línea de investigación"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="pr-10 space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono font-bold text-[#0D5DD7] bg-blue-50 px-2.5 py-1 rounded">
                  LÍNEA CIENTÍFICA
                </span>
                <span className="text-slate-600 font-semibold">{selectedLine.activeProjects} proyectos activos</span>
              </div>
              <h2 id="modal-line-title" className="font-serif text-2xl font-bold text-slate-900 leading-snug">
                {selectedLine.title}
              </h2>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-5 text-sm text-slate-700">
              <div>
                <strong className="block text-slate-900 font-bold mb-1.5 text-xs uppercase tracking-wider">
                  Fundamentación y Eje Metodológico:
                </strong>
                <p className="leading-[1.75] text-[15px] sm:text-base text-slate-700">
                  {selectedLine.description}
                </p>
              </div>

              <div>
                <strong className="block text-slate-900 font-bold mb-1.5 text-xs uppercase tracking-wider">
                  Descriptores y Áreas Temáticas:
                </strong>
                <div className="flex flex-wrap gap-2">
                  {selectedLine.keyTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Proyectos vinculados a esta línea */}
              <div>
                <strong className="block text-slate-900 font-bold mb-2 text-xs uppercase tracking-wider">
                  Proyectos Asociados a Esta Línea:
                </strong>
                <div className="space-y-2.5">
                  {RESEARCH_PROJECTS.filter((p) => p.lineId === selectedLine.id).map((p) => (
                    <div
                      key={p.id}
                      className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <span className="font-serif font-bold text-slate-900 text-sm block">
                          {p.title}
                        </span>
                        <span className="text-xs text-slate-500">
                          Coordinador: {p.coordinator} · Estado: {p.status}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLine(null);
                          setSelectedProject(p);
                        }}
                        className="text-xs font-semibold text-[#0D5DD7] hover:underline shrink-0"
                      >
                        Ver proyecto
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordinador o líder */}
              <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-600 block">Líder Científico Responsable:</span>
                  <span className="font-serif text-base font-bold text-slate-900">{selectedLine.leader}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLine(null);
                    onNavigate('claustro', undefined, selectedLine.leaderId);
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors flex items-center gap-1.5 min-h-[38px]"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Ver Currículum (CV)</span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedLine(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg min-h-[44px]"
              >
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Ficha Técnica del Proyecto de Investigación */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overscroll-contain"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto overscroll-contain text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#0D5DD7]"
              aria-label="Cerrar ficha del proyecto"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="pr-10 space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono text-slate-600 font-medium">{selectedProject.duration}</span>
                <span className="text-xs font-bold text-[#0D5DD7] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                  {selectedProject.status}
                </span>
              </div>
              <h2 id="modal-project-title" className="font-serif text-2xl font-bold text-slate-900 leading-snug">
                {selectedProject.title}
              </h2>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-4 text-sm text-slate-700">
              <div>
                <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wider">
                  Alcance Territorial y Sectorial:
                </strong>
                <p className="text-slate-800 font-medium">{selectedProject.scope}</p>
              </div>

              <div>
                <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wider">
                  Resumen Ejecutivo del Proyecto:
                </strong>
                <p className="leading-[1.75] text-[15px] sm:text-base text-slate-700">
                  {selectedProject.abstract}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 block">Coordinador Principal:</span>
                  <span className="font-serif text-sm font-bold text-slate-900">{selectedProject.coordinator}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigate('claustro', undefined, selectedProject.coordinatorId);
                  }}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors flex items-center gap-1.5 min-h-[38px]"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Ver Perfil Docente</span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg min-h-[44px]"
              >
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: Lector de Artículo Científico */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overscroll-contain"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto overscroll-contain text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#0D5DD7]"
              aria-label="Cerrar artículo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-8 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-[#0D5DD7]">{selectedPost.category}</span>
                <span>·</span>
                <span>{selectedPost.date}</span>
                <span>·</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                {selectedPost.title}
              </h2>
              <p className="text-xs text-slate-600">Por {selectedPost.author} ({selectedPost.role})</p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-3 text-sm sm:text-base text-slate-700 leading-[1.75]">
              <p className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-900 text-sm">
                {selectedPost.summary}
              </p>
              {selectedPost.content.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg min-h-[44px]"
              >
                Cerrar Lectura
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
