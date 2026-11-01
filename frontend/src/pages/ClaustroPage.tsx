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
} from 'lucide-react';

interface ClaustroPageProps {
  initialFacultyId?: string;
  onNavigate: (page: PageId) => void;
}

export const ClaustroPage: React.FC<ClaustroPageProps> = ({ initialFacultyId, onNavigate }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  // Auto-open modal if initialFacultyId is passed (from Investigación or Inicio)
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

  return (
    <div className="pt-24 pb-20 text-slate-800 text-left">
      
      {/* Page Header (SOLID #0D5DD7) */}
      <section className="bg-[#0D5DD7] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-100">
            Cuerpo Académico y Científico
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-white">
            Claustro Docente
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed">
            Profesores doctores y másteres con amplia trayectoria en docencia de posgrado, 
            investigación científica y consultoría de alta dirección.
          </p>
        </div>
      </section>

      {/* Faculty List (SOLID WHITE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACULTY_MEMBERS_FULL.map((prof) => (
            <div
              key={prof.id}
              id={prof.id}
              className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl overflow-hidden shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Photo */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-100 border-2 border-slate-200 shrink-0">
                  <img
                    src={prof.image}
                    alt={`Foto de ${prof.name}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info */}
                <div className="space-y-2 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7] block">
                    {prof.role}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {prof.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {prof.degree}
                  </p>
                  <p className="text-xs text-slate-700 pt-1">
                    <strong className="text-slate-900">Especialidad: </strong>
                    {prof.specialty}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#0D5DD7]" />
                      <strong>{prof.experienceYears}</strong> años exp.
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#0D5DD7]" />
                      <strong>{prof.publicationsCount}</strong> publicaciones
                    </span>
                  </div>
                </div>

              </div>

              {/* Action bar */}
              <div className="px-6 py-4 sm:px-8 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
                <a
                  href={`mailto:${prof.email}`}
                  className="text-xs text-slate-700 hover:text-[#0D5DD7] flex items-center gap-1.5 transition-colors font-mono"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0D5DD7]" />
                  <span>{prof.email}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedFaculty(prof)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors flex items-center gap-1.5 min-h-[38px]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Currículum (CV)</span>
                </button>
              </div>

            </div>
          ))}
        </div>
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
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto overscroll-contain text-left"
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

            <div className="flex items-center gap-4 mb-6 pr-10">
              <img
                src={selectedFaculty.image}
                alt={selectedFaculty.name}
                className="w-16 h-16 rounded-xl object-cover border-2 border-[#0D5DD7]"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7] block">
                  Ficha de Claustro
                </span>
                <h3 id="modal-cv-name" className="font-serif text-2xl font-bold text-slate-900">
                  {selectedFaculty.name}
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  {selectedFaculty.role}
                </p>
              </div>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-5">
              <div>
                <span className="font-bold text-slate-900 block mb-1">
                  Grado Científico y Académico:
                </span>
                <p className="text-slate-600">{selectedFaculty.degree}</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-1">
                  Perfil de Experiencia y Trayectoria:
                </span>
                <p className="leading-relaxed text-slate-600">{selectedFaculty.bio}</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-2">
                  Hitos Principales del Currículum Vitae (CV):
                </span>
                <ul className="space-y-2">
                  {selectedFaculty.cvHighlights?.map((hi, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0D5DD7] shrink-0 mt-0.5" />
                      <span>{hi}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between font-mono text-xs text-slate-700">
                <span>Contacto Académico:</span>
                <span className="text-[#0D5DD7] font-semibold">{selectedFaculty.email}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedFaculty(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg min-h-[44px]"
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
