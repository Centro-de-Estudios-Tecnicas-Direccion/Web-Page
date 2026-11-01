import React from 'react';
import { UNIVERSITY_PARTNERS } from '../data/cetedData';
import { ExternalLink, Award, GraduationCap, Globe, BookOpen, ShieldCheck } from 'lucide-react';

export const UniversityAlliances: React.FC = () => {
  const getPartnerBadgeIcon = (shortName: string) => {
    if (shortName.includes('Harvard')) {
      return <BookOpen className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />;
    }
    if (shortName.includes('UNESCO')) {
      return <Globe className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />;
    }
    if (shortName.includes('CLADEA')) {
      return <Award className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />;
    }
    return <GraduationCap className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />;
  };

  return (
    <section
      aria-labelledby="alliances-title"
      className="py-16 bg-white border-t border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D5DD7] mb-2">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Respaldo y Convenios Académicos</span>
          </div>
          <h2
            id="alliances-title"
            className="font-serif text-3xl sm:text-4xl font-bold text-[#0D5DD7] tracking-tight"
          >
            Cooperación Académica y Redes Universitarias
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-[1.8]">
            El CETED fortalece su claustro, planes de estudio y metodología de enseñanza mediante 
            convenios formales con las principales instituciones de educación gerencial del mundo.
          </p>
        </div>

        {/* Prestigious University Alliances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIVERSITY_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl p-6 transition-all shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    {getPartnerBadgeIcon(partner.shortName)}
                  </div>
                  <span className="text-xs font-mono text-slate-600 uppercase tracking-wider text-right">
                    {partner.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#0D5DD7] transition-colors leading-snug">
                    {partner.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#0D5DD7] block mt-1">
                    {partner.role}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-1">
                    Impacto directo para el estudiante:
                  </span>
                  <p className="text-sm text-slate-700 leading-[1.7]">
                    {partner.impactForStudents}
                  </p>
                </div>
              </div>

              {/* External Link */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  Convenio Institucional Vigente
                </span>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D5DD7] hover:underline min-h-[36px] py-1"
                  aria-label={`Sitio oficial de ${partner.name}`}
                >
                  <span>Portal oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Trust Note */}
        <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D5DD7]" />
            <span>
              La metodología de casos de Harvard Business Publishing y el marco UNESCO están integrados en las 3 maestrías oficiales de CETED.
            </span>
          </div>
          <span className="font-semibold text-slate-800 shrink-0">
            Acreditación de Excelencia Académica
          </span>
        </div>

      </div>
    </section>
  );
};
