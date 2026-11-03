import React from 'react';
import { INSTITUTIONAL_AFFILIATIONS } from '../data/cetedData';
import { ExternalLink, ShieldCheck, Building2, Globe, Sparkles, BookOpen } from 'lucide-react';

export const UniversityAlliances: React.FC = () => {
  const getAffiliationIcon = (id: string) => {
    switch (id) {
      case 'uh':
        return <Building2 className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />;
      case 'unesco':
        return <Globe className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />;
      case 'gti':
        return <Sparkles className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#0D5DD7]" aria-hidden="true" />;
    }
  };

  return (
    <section
      aria-labelledby="affiliations-title"
      className="py-16 bg-white border-t border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D5DD7] mb-2">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Marco Institucional y Redes Académicas</span>
          </div>
          <h2
            id="affiliations-title"
            className="font-serif text-3xl sm:text-4xl font-bold text-[#0D5DD7] tracking-tight"
          >
            Respaldo Académico y Vínculos Institucionales
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-[1.8]">
            El CETED desarrolla su docencia de posgrado, consultoría e investigación con el aval 
            de la Universidad de La Habana y la articulación con la Cátedra UNESCO.
          </p>
        </div>

        {/* Real Institutional Affiliations Grid from PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTITUTIONAL_AFFILIATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-slate-200 hover:border-[#0D5DD7] rounded-xl p-6 transition-all shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    {getAffiliationIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-600 uppercase tracking-wider text-right">
                    {item.roleBadge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#0D5DD7] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#0D5DD7] block mt-1">
                    {item.role}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-sm text-slate-700 leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Link / Action */}
              {item.url && (
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    Portal Institucional
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D5DD7] hover:underline min-h-[36px] py-1"
                    aria-label={`Sitio oficial de ${item.name}`}
                  >
                    <span>{item.urlText || 'Ver portal'}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
