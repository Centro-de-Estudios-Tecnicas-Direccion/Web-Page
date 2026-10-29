import { Link } from 'react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/ui/Container'
import { footerNav } from '@/config/navigation'
import { contactInfo, siteConfig } from '@/config/site'

export function SiteFooter() {
  const anio = new Date().getFullYear()

  return (
    <footer className="bg-tinta-50 border-t-2 border-ceted-600 font-sans text-tinta-700">
      <Container ancho="proceso">
        <div className="py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Identidad institucional */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-ceted-600">
              <Logo height={38} />
              <div className="border-l border-tinta-300 pl-3">
                <span className="font-display text-base font-semibold text-tinta-900 block leading-tight">
                  CETED
                </span>
                <span className="text-[0.68rem] uppercase tracking-wider text-tinta-500 block">
                  Universidad de La Habana
                </span>
              </div>
            </div>

            <p className="text-xs text-tinta-600 mt-4 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <span className="font-display text-sm italic text-tinta-800 mt-4 block">
              «{siteConfig.tagline}»
            </span>
          </div>

          {/* Enlaces académicos */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-tinta-900 mb-4">
              Oferta Académica
            </h3>
            <ul className="space-y-2 text-xs">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-ceted-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto institucional */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-tinta-900 mb-4">
              Sede y Secretaría
            </h3>
            <address className="not-italic space-y-2.5 text-xs text-tinta-600">
              <div className="flex gap-2.5 items-start">
                <MapPin className="size-4 shrink-0 text-ceted-600 mt-0.5" />
                <span>{contactInfo.address}, {contactInfo.city}</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="size-4 shrink-0 text-ceted-600" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-ceted-600">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="size-4 shrink-0 text-ceted-600" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-ceted-600">
                  {contactInfo.email}
                </a>
              </div>
            </address>

            <div className="mt-4 pt-3 border-t border-tinta-200 flex gap-4 text-xs">
              {contactInfo.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ceted-600 hover:text-ceted-800 font-medium"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Fila legal inferior */}
        <div className="border-t border-tinta-200 py-5 text-[0.75rem] text-tinta-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>
            &copy; {anio} {siteConfig.fullName} — {siteConfig.affiliation}.
          </span>
          <span>La Habana, Cuba</span>
        </div>
      </Container>
    </footer>
  )
}