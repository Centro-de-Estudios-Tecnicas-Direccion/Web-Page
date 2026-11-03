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
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface ClaustroPageProps {
  initialFacultyId?: string;
  onNavigate: (page: PageId) => void;
}

export const ClaustroPage: React.FC<ClaustroPageProps> = ({ initialFacultyId, onNavigate }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'doctores' | 'titulares' | 'merito'>('all');

  // Auto-open modal if initialFacultyId is passed (from Investigación o Inicio)
  useEffect(() => {
    if (initialFacultyId) {
      const match = FACULTY_MEMBERS_FULL.find((f) => f.id === initialFacultyId);
      if (match) {
        setSelectedFaculty(match);
      }
    }
  }, [initialFacultyId]);

  // Lock background scroll when CV modal is open and handle ESC key
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

  // Filter faculty members
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

  return (
    <div className="pt-24 pb-20 text-slate-800 text-left">
      
      {/* Page Header (SOLID #0D5DD7) */}
      <section className="bg-[#0D5DD7] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-100">
            Cuerpo Académico y Científico · CETED
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-white">
            Claustro Docente
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed">
            12 profesores, investigadores titulares y especialistas con amplia trayectoria directiva, 
            doctorados internacionales y liderazgo en la ciencia de la dirección en Cuba.
          </p>
        </div>
      </section>

      {/* Faculty Directory Toolbar & Filter (UI/UX Optimizado) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar profesor, especialidad, grado..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D5DD7] focus:bg-white text-slate-800 placeholder-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#0D5DD7] text-white border-[#0D5DD7]'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              Todos ({FACULTY_MEMBERS_FULL.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('doctores')}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                activeFilter === 'doctores'
                  ? 'bg-[#0D5DD7] text-white border-[#0D5DD7]'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              Doctores en Ciencias
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('titulares')}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                activeFilter === 'titulares'
                  ? 'bg-[#0D5DD7] text-white border-[#0D5DD7]'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              Profesores Titulares
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('merito')}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                activeFilter === 'merito'
                  ? 'bg-[#0D5DD7] text-white border-[#0D5DD7]'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              Mérito y Fundadores
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Mostrando <strong>{filteredFaculty.length}</strong> de {FACULTY_MEMBERS_FULL.length} profesores
          </span>
          <span className="font-mono text-[11px]">
            Haga clic en cualquier tarjeta para abrir el currículum completo
          </span>
        </div>
      </section>

      {/* Faculty List (3-Column Responsive Grid, Compact & Pleasant) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-xl p-8">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-slate-800">
              No se encontraron profesores
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Intente con otro término de búsqueda o restablezca los filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#0D5DD7] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFaculty.map((prof) => (
              <div
                key={prof.id}
                id={prof.id}
                className="bg-white border border-slate-200 hover:border-[#0D5DD7] rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Top Bar: Category Pill & Exp */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-blue-50 text-[#0D5DD7] border border-blue-100 font-semibold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                      {prof.role.includes('Mérito')
                        ? 'Prof. de Mérito'
                        : prof.degree.includes('Doctor')
                        ? 'Dr. en Ciencias'
                        : prof.degree.includes('Máster')
                        ? 'M.Sc.'
                        : 'Prof. Titular'}
                    </span>
                    {prof.experienceYears && (
                      <span className="text-[11px] text-slate-500 font-medium">
                        {prof.experienceYears}a exp.
                      </span>
                    )}
                  </div>

                  {/* Header: Compact Avatar + Identity */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 group-hover:border-[#0D5DD7] shrink-0 transition-colors shadow-xs">
                      <img
                        src={prof.image}
                        alt={`Foto de ${prof.name}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#0D5DD7] transition-colors leading-snug">
                        {prof.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#0D5DD7] truncate mt-0.5">
                        {prof.role.split('|')[0].trim()}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {prof.degree.split('|')[0].trim()}
                      </p>
                    </div>
                  </div>

                  {/* Specialty Snippet */}
                  <div className="border-t border-slate-100 pt-2.5">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      <strong className="text-slate-800">Especialidad: </strong>
                      {prof.specialty}
                    </p>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs">
                    {prof.email && (
                      <a
                        href={`mailto:${prof.email}`}
                        title={prof.email}
                        className="p-1.5 rounded bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-[#0D5DD7] transition-colors"
                        aria-label={`Escribir a ${prof.name}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {prof.orcid && (
                      <a
                        href={prof.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Perfil ORCID"
                        className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-blue-50 text-[#0D5DD7] font-mono text-[10px] font-bold border border-slate-200 transition-colors"
                      >
                        ORCID
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedFaculty(prof)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0D5DD7] group-hover:bg-[#0D5DD7] group-hover:text-white border border-[#0D5DD7] rounded-lg transition-colors min-h-[34px]"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ver CV</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal with Full CV Details */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overscroll-contain"
          onClick={() => setSelectedFaculty(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cv-name"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[92vh] overflow-y-auto overscroll-contain text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#0D5DD7]"
              aria-label="Cerrar currículum"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Header info */}
            <div className="flex items-start gap-4 mb-6 pr-10">
              <img
                src={selectedFaculty.image}
                alt={selectedFaculty.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border-2 border-[#0D5DD7] shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7] block">
                  Ficha Oficial del Claustro CETED
                </span>
                <h3 id="modal-cv-name" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {selectedFaculty.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0D5DD7]">
                  {selectedFaculty.role}
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  {selectedFaculty.degree}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 border-t border-slate-200 pt-5">
              
              {/* Trayectoria Profesional Integral */}
              <div>
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-2 text-sm sm:text-base">
                  <Briefcase className="w-4 h-4 text-[#0D5DD7]" />
                  <span>Perfil y Trayectoria Académica</span>
                </div>
                <p className="leading-relaxed text-slate-600 whitespace-pre-line text-xs sm:text-sm">
                  {selectedFaculty.bio}
                </p>
              </div>

              {/* Ejes Temáticos de Especialización */}
              {selectedFaculty.ejesTematicos && selectedFaculty.ejesTematicos.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2.5 text-sm sm:text-base">
                    <GraduationCap className="w-4 h-4 text-[#0D5DD7]" />
                    <span>Ejes Temáticos de Especialización</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedFaculty.ejesTematicos.map((eje, i) => (
                      <li key={i} className="flex items-start gap-2 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100 text-slate-800 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5DD7] shrink-0 mt-0.5" />
                        <span>{eje}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Distinciones y Premios */}
              {selectedFaculty.premios && selectedFaculty.premios.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2 text-sm sm:text-base">
                    <Award className="w-4 h-4 text-[#0D5DD7]" />
                    <span>Reconocimientos, Premios y Condecoraciones</span>
                  </div>
                  <ul className="space-y-1.5">
                    {selectedFaculty.premios.map((premio, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm">
                        <span className="text-[#0D5DD7] font-bold">🎖</span>
                        <span>{premio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publicaciones y Libros */}
              {selectedFaculty.publications && selectedFaculty.publications.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2 text-sm sm:text-base">
                    <BookOpen className="w-4 h-4 text-[#0D5DD7]" />
                    <span>Producción Científica y Libros</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedFaculty.publications.map((pub, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs">
                        <FileText className="w-3.5 h-3.5 text-[#0D5DD7] shrink-0 mt-0.5" />
                        <span className="font-mono text-slate-800">{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Docencia Impartida */}
              {selectedFaculty.docencia && selectedFaculty.docencia.length > 0 && (
                <div>
                  <span className="font-bold text-slate-900 block mb-2 text-sm">
                    Docencia en Posgrado y Pregrado:
                  </span>
                  <ul className="space-y-1.5">
                    {selectedFaculty.docencia.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-xs">
                        <span className="text-[#0D5DD7] font-bold">·</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hitos Principales del CV */}
              <div>
                <span className="font-bold text-slate-900 block mb-2 text-sm">
                  Hitos Principales del Currículum Vitae (CV):
                </span>
                <ul className="space-y-2">
                  {selectedFaculty.cvHighlights?.map((hi, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#0D5DD7] shrink-0 mt-0.5" />
                      <span>{hi}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacto institucional y enlaces científicos */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0D5DD7]" />
                  <span>Correo:</span>
                  <a
                    href={`mailto:${selectedFaculty.email || 'ceted@rect.uh.cu'}`}
                    className="text-[#0D5DD7] font-semibold hover:underline"
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
                      className="text-[#0D5DD7] hover:underline font-bold bg-white px-2.5 py-1 rounded border border-slate-200"
                    >
                      Perfil ORCID ↗
                    </a>
                  )}
                  {selectedFaculty.linkedIn && (
                    <a
                      href={selectedFaculty.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0D5DD7] hover:underline font-bold bg-white px-2.5 py-1 rounded border border-slate-200"
                    >
                      LinkedIn ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedFaculty(null)}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg min-h-[44px] transition-colors"
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
