import React from 'react';
import { INSTITUTIONAL_AFFILIATIONS } from '../data/cetedData';
import { ExternalLink, ShieldCheck, Building2, Globe, Sparkles, BookOpen } from 'lucide-react';

export const UniversityAlliances: React.FC = () => {
  const iconClass = 'h-5 w-5 text-ceted-blue dark:text-blue-300';

  const getAffiliationIcon = (id: string) => {
    switch (id) {
      case 'uh':
        return <Building2 className={iconClass} aria-hidden="true" />;
      case 'unesco':
        return <Globe className={iconClass} aria-hidden="true" />;
      case 'gti':
        return <Sparkles className={iconClass} aria-hidden="true" />;
      default:
        return <BookOpen className={iconClass} aria-hidden="true" />;
    }
  };

  return (
    <section
      aria-labelledby="affiliations-title"
      className="border-y border-slate-200 bg-white py-20 dark:border-ceted-line dark:bg-ceted-navy"
    >
      <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ceted-blue dark:text-blue-300">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>Marco Institucional y Redes Académicas</span>
          </div>
          <h2
            id="affiliations-title"
            className="font-serif text-3xl font-semibold tracking-tight text-ceted-dark dark:text-white sm:text-4xl"
          >
            Respaldo Académico y Vínculos Institucionales
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            El CETED desarrolla su docencia de posgrado, consultoría e investigación con el aval
            de la Universidad de La Habana y la articulación con la Cátedra UNESCO.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INSTITUTIONAL_AFFILIATIONS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-ceted-blue hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-ceted-line dark:bg-ceted-dark dark:hover:border-blue-400"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 dark:border-blue-400/20 dark:bg-blue-400/10">
                    {getAffiliationIcon(item.id)}
                  </div>
                  <span className="text-right text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    {item.roleBadge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-ceted-blue dark:text-white dark:group-hover:text-blue-300">
                    {item.name}
                  </h3>
                  <span className="mt-1 block text-sm font-semibold text-ceted-blue dark:text-blue-300">
                    {item.role}
                  </span>
                </div>

                <div className="border-t border-slate-100 pt-3 dark:border-ceted-line">
                  <p className="text-sm leading-[1.7] text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.url && (
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-ceted-line">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Portal Institucional
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-1.5 py-1 text-sm font-semibold text-ceted-blue underline-offset-4 hover:underline dark:text-blue-300"
                    aria-label={`Sitio oficial de ${item.name}`}
                  >
                    <span>{item.urlText || 'Ver portal'}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
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