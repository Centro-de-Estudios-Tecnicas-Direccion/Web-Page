import React, { useState, useEffect } from 'react';
import { PageId, FacultyMember } from '../types';
import { FACULTY_MEMBERS_FULL } from '../data/cetedFullData';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Mail,
  Award,
  X,
  FileText,
  CheckCircle2,
  Search,
} from 'lucide-react';

interface ClaustroPageProps {
  initialFacultyId?: string;
  onNavigate: (page: PageId) => void;
}

export const ClaustroPage: React.FC<ClaustroPageProps> = ({ initialFacultyId, onNavigate }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'doctores' | 'titulares' | 'merito'>('all');

  // Abre el modal si llega un initialFacultyId (desde Investigación o Inicio)
  useEffect(() => {
    if (initialFacultyId) {
      const match = FACULTY_MEMBERS_FULL.find((f) => f.id === initialFacultyId);
      if (match) {
        setSelectedFaculty(match);
      }
    }
  }, [initialFacultyId]);

  // Bloquea el scroll de fondo con el modal abierto y maneja ESC
  useEffect(() => {
    if (selectedFaculty) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedFaculty(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedFaculty]);

  const filteredFaculty = FACULTY_MEMBERS_FULL.filter((prof) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      prof.name.toLowerCase().includes(q) ||
      prof.specialty.toLowerCase().includes(q) ||
      prof.degree.toLowerCase().includes(q) ||
      prof.role.toLowerCase().includes(q);

    if (!matchesSearch) return false;

    if (activeFilter === 'doctores') {
      return prof.degree.toLowerCase().includes('doctor');
    }
    if (activeFilter === 'titulares') {
      return prof.role.toLowerCase().includes('titular');
    }
    if (activeFilter === 'merito') {
      return (
        prof.role.toLowerCase().includes('mérito') ||
        prof.role.toLowerCase().includes('fundador')
      );
    }
    return true;
  });

  const filterBtn = (active: boolean) =>
    `min-h-[40px] rounded-lg border px-3 py-2 text-sm font-semibold transition duration-150 active:scale-[0.98] motion-reduce:active:scale-100 ${
      active
        ? 'border-ceted-blue bg-ceted-blue text-white dark:border-ceted-blue'
        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-ceted-line dark:bg-ceted-navy dark:text-slate-200 dark:hover:bg-ceted-deep'
    }`;

  const chip =
    'rounded border border-blue-100 bg-blue-50 text-ceted-blue dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300';

  const closeIconBtn =
    'absolute right-4 top-4 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-ceted-deep dark:hover:text-white';

  const sectionTitle =
    'mb-2.5 flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-white';

  return (
    <div className="pb-20 pt-24 text-left text-slate-800 dark:text-slate-200">
      {/* Encabezado */}
      <section className="bg-ceted-blue px-4 py-14 text-white dark:border-b dark:border-ceted-line dark:bg-ceted-dark sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 dark:text-blue-300">
            Cuerpo Académico y Científico · CETED
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Claustro Docente
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-50 dark:text-slate-300 sm:text-lg">
            12 profesores, investigadores titulares y especialistas con amplia trayectoria directiva,
            doctorados internacionales y liderazgo en la ciencia de la dirección en Cuba.
          </p>
        </div>
      </section>

      {/* Barra de búsqueda y filtros */}
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-xs dark:border-ceted-line dark:bg-ceted-dark md:flex-row md:items-center sm:p-5">
          <div className="relative max-w-md flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar profesor, especialidad, grado..."
              aria-label="Buscar profesor, especialidad o grado"
              className="min-h-[44px] w-full rounded-lg border border-slate-500 bg-slate-50 py-2.5 pl-10 pr-20 text-sm text-slate-900 transition-colors placeholder:text-slate-500 hover:border-slate-700 focus:border-ceted-blue focus:bg-white dark:border-slate-500 dark:bg-ceted-navy dark:text-slate-100 dark:placeholder:text-slate-400 dark:hover:border-slate-300 dark:focus:border-blue-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Limpiar
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtros del claustro">
            <button
              type="button"
              aria-pressed={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={filterBtn(activeFilter === 'all')}
            >
              Todos ({FACULTY_MEMBERS_FULL.length})
            </button>
            <button
              type="button"
              aria-pressed={activeFilter === 'doctores'}
              onClick={() => setActiveFilter('doctores')}
              className={filterBtn(activeFilter === 'doctores')}
            >
              Doctores en Ciencias
            </button>
            <button
              type="button"
              aria-pressed={activeFilter === 'titulares'}
              onClick={() => setActiveFilter('titulares')}
              className={filterBtn(activeFilter === 'titulares')}
            >
              Profesores Titulares
            </button>
            <button
              type="button"
              aria-pressed={activeFilter === 'merito'}
              onClick={() => setActiveFilter('merito')}
              className={filterBtn(activeFilter === 'merito')}
            >
              Mérito y Fundadores
            </button>
          </div>
        </div>

        <div
          className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-sm text-slate-600 dark:text-slate-400"
          aria-live="polite"
        >
          <span>
            Mostrando <strong className="text-slate-900 dark:text-white">{filteredFaculty.length}</strong> de{' '}
            {FACULTY_MEMBERS_FULL.length} profesores
          </span>
          <span className="text-xs">
            Haga clic en cualquier tarjeta para abrir el currículum completo
          </span>
        </div>
      </section>

      {/* Listado */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {filteredFaculty.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-8 py-16 text-center dark:border-ceted-line dark:bg-ceted-dark">
            <GraduationCap
              className="mx-auto mb-3 h-12 w-12 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            />
            <h3 className="font-serif text-lg font-semibold text-slate-900 dark:text-white">
              No se encontraron profesores
            </h3>
            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-600 dark:text-slate-400">
              Intente con otro término de búsqueda o restablezca los filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="mt-4 min-h-[40px] rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-ceted-blue transition-colors hover:bg-blue-100 dark:bg-blue-400/10 dark:text-blue-300 dark:hover:bg-blue-400/20"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredFaculty.map((prof) => (
              <div
                key={prof.id}
                id={prof.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 text-left shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-ceted-blue hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-ceted-line dark:bg-ceted-dark dark:hover:border-blue-400"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className={`${chip} px-2 py-0.5 text-xs font-semibold uppercase tracking-wider`}>
                      {prof.role.includes('Mérito')
                        ? 'Prof. de Mérito'
                        : prof.degree.includes('Doctor')
                        ? 'Dr. en Ciencias'
                        : prof.degree.includes('Máster')
                        ? 'M.Sc.'
                        : 'Prof. Titular'}
                    </span>
                    {prof.experienceYears && (
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {prof.experienceYears}a exp.
                      </span>
                    )}
                  </div>

                  <div className="mb-3 flex items-center gap-3.5">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-slate-200 bg-slate-100 shadow-xs transition-colors group-hover:border-ceted-blue dark:border-ceted-line dark:bg-ceted-navy dark:group-hover:border-blue-400">
                      <img
                        src={prof.image}
                        alt={`Foto de ${prof.name}`}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-ceted-blue dark:text-white dark:group-hover:text-blue-300">
                        {prof.name}
                      </h3>
                      <p className="mt-0.5 truncate text-xs font-semibold text-ceted-blue dark:text-blue-300">
                        {prof.role.split('|')[0].trim()}
                      </p>
                      <p className="truncate text-xs text-slate-600 dark:text-slate-400">
                        {prof.degree.split('|')[0].trim()}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 dark:border-ceted-line">
                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      <strong className="font-semibold text-slate-800 dark:text-slate-100">
                        Especialidad:{' '}
                      </strong>
                      {prof.specialty}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 dark:border-ceted-line">
                  <div className="flex items-center gap-2 text-xs">
                    {prof.email && (
                      <a
                        href={`mailto:${prof.email}`}
                        title={prof.email}
                        className="flex min-h-[36px] min-w-[36px] items-center justify-center rounded bg-slate-50 text-slate-600 transition-colors hover:bg-blue-50 hover:text-ceted-blue dark:bg-ceted-navy dark:text-slate-300 dark:hover:bg-ceted-deep dark:hover:text-white"
                        aria-label={`Escribir a ${prof.name}`}
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                    {prof.orcid && (
                      <a
                        href={prof.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Perfil ORCID"
                        className="flex min-h-[36px] items-center rounded border border-slate-200 bg-slate-50 px-2 font-mono text-xs font-bold text-ceted-blue transition-colors hover:bg-blue-50 dark:border-ceted-line dark:bg-ceted-navy dark:text-blue-300 dark:hover:bg-ceted-deep"
                      >
                        ORCID
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedFaculty(prof)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-ceted-blue px-3 py-1.5 text-sm font-semibold text-ceted-blue transition duration-150 hover:bg-ceted-blue hover:text-white active:scale-[0.98] motion-reduce:active:scale-100 group-hover:bg-ceted-blue group-hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:bg-ceted-blue dark:hover:text-white dark:group-hover:bg-ceted-blue dark:group-hover:text-white"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    <span>Ver CV</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal con el CV completo */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center overscroll-contain bg-black/60 p-4 backdrop-blur-xs motion-reduce:animate-none sm:p-6"
          onClick={() => setSelectedFaculty(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cv-name"
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl animate-pop-in overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-2xl motion-reduce:animate-none dark:border-ceted-line dark:bg-ceted-dark sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setSelectedFaculty(null)}
              className={closeIconBtn}
              aria-label="Cerrar currículum"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="mb-6 flex items-start gap-4 pr-10">
              <img
                src={selectedFaculty.image}
                alt={selectedFaculty.name}
                className="h-20 w-20 shrink-0 rounded-xl border-2 border-ceted-blue object-cover dark:border-blue-400 sm:h-24 sm:w-24"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ceted-blue dark:text-blue-300">
                  Ficha Oficial del Claustro CETED
                </span>
                <h3
                  id="modal-cv-name"
                  className="font-serif text-2xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-3xl"
                >
                  {selectedFaculty.name}
                </h3>
                <p className="text-sm font-semibold text-ceted-blue dark:text-blue-300">
                  {selectedFaculty.role}
                </p>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {selectedFaculty.degree}
                </p>
              </div>
            </div>

            <div className="space-y-6 border-t border-slate-200 pt-5 text-sm text-slate-700 dark:border-ceted-line dark:text-slate-300">
              {/* Trayectoria */}
              <div>
                <div className={sectionTitle}>
                  <Briefcase className="h-4 w-4 text-ceted-blue dark:text-blue-300" aria-hidden="true" />
                  <span>Perfil y Trayectoria Académica</span>
                </div>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedFaculty.bio}
                </p>
              </div>

              {/* Ejes temáticos */}
              {selectedFaculty.ejesTematicos && selectedFaculty.ejesTematicos.length > 0 && (
                <div>
                  <div className={sectionTitle}>
                    <GraduationCap
                      className="h-4 w-4 text-ceted-blue dark:text-blue-300"
                      aria-hidden="true"
                    />
                    <span>Ejes Temáticos de Especialización</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selectedFaculty.ejesTematicos.map((eje, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-lg border border-blue-100 bg-blue-50/70 p-2.5 text-sm text-slate-800 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-slate-200"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-ceted-blue dark:text-blue-300"
                          aria-hidden="true"
                        />
                        <span>{eje}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Premios */}
              {selectedFaculty.premios && selectedFaculty.premios.length > 0 && (
                <div>
                  <div className={sectionTitle}>
                    <Award className="h-4 w-4 text-ceted-blue dark:text-blue-300" aria-hidden="true" />
                    <span>Reconocimientos, Premios y Condecoraciones</span>
                  </div>
                  <ul className="space-y-1.5">
                    {selectedFaculty.premios.map((premio, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="font-bold text-ceted-blue dark:text-blue-300" aria-hidden="true">
                          🎖
                        </span>
                        <span>{premio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publicaciones */}
              {selectedFaculty.publications && selectedFaculty.publications.length > 0 && (
                <div>
                  <div className={sectionTitle}>
                    <BookOpen className="h-4 w-4 text-ceted-blue dark:text-blue-300" aria-hidden="true" />
                    <span>Producción Científica y Libros</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedFaculty.publications.map((pub, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs text-slate-700 dark:border-ceted-line dark:bg-ceted-navy dark:text-slate-300"
                      >
                        <FileText
                          className="mt-0.5 h-4 w-4 shrink-0 text-ceted-blue dark:text-blue-300"
                          aria-hidden="true"
                        />
                        <span className="font-mono text-slate-800 dark:text-slate-200">{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Docencia */}
              {selectedFaculty.docencia && selectedFaculty.docencia.length > 0 && (
                <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Docencia en Posgrado y Pregrado:
                  </span>
                  <ul className="space-y-1.5">
                    {selectedFaculty.docencia.map((doc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="font-bold text-ceted-blue dark:text-blue-300" aria-hidden="true">
                          ·
                        </span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hitos */}
              <div>
                <span className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                  Hitos Principales del Currículum Vitae (CV):
                </span>
                <ul className="space-y-2">
                  {selectedFaculty.cvHighlights?.map((hi, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-ceted-blue dark:text-blue-300"
                        aria-hidden="true"
                      />
                      <span>{hi}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacto */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs text-slate-700 dark:border-ceted-line dark:bg-ceted-navy dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-ceted-blue dark:text-blue-300" aria-hidden="true" />
                  <span>Correo:</span>
                  <a
                    href={`mailto:${selectedFaculty.email || 'ceted@rect.uh.cu'}`}
                    className="font-semibold text-ceted-blue underline-offset-4 hover:underline dark:text-blue-300"
                  >
                    {selectedFaculty.email || 'ceted@rect.uh.cu'}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  {selectedFaculty.orcid && (
                    <a
                      href={selectedFaculty.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-slate-200 bg-white px-2.5 py-1 font-bold text-ceted-blue underline-offset-4 hover:underline dark:border-ceted-line dark:bg-ceted-dark dark:text-blue-300"
                    >
                      Perfil ORCID ↗
                    </a>
                  )}
                  {selectedFaculty.linkedIn && (
                    <a
                      href={selectedFaculty.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-slate-200 bg-white px-2.5 py-1 font-bold text-ceted-blue underline-offset-4 hover:underline dark:border-ceted-line dark:bg-ceted-dark dark:text-blue-300"
                    >
                      LinkedIn ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t border-slate-100 pt-4 dark:border-ceted-line">
              <button
                type="button"
                onClick={() => setSelectedFaculty(null)}
                className="min-h-[44px] rounded-lg bg-ceted-blue px-6 py-2.5 text-sm font-semibold text-white transition duration-150 hover:bg-ceted-hover active:scale-[0.98] motion-reduce:active:scale-100 dark:hover:bg-[#1567E3]"
              >
                Cerrar CV
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};