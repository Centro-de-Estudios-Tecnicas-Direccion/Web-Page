import { Link } from 'react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

import { Logo } from '@/components/brand/Logo'
import { MallaDecision } from '@/components/brand/MallaDecision'
import { Container } from '@/components/ui/Container'
import { Vector } from '@/components/brand/MallaDecision'
import { footerNav } from '@/config/navigation'
import { contactInfo, siteConfig } from '@/config/site'

/**
 * Pie de pagina.
 *
 * Cierra con un bloque de color institucional —el mismo recurso que usa la
 * cabecera en la portada— para que la pagina termine con un remate solido en
 * lugar de disolverse.
 */
export function SiteFooter() {
  const anio = new Date().getFullYear()

  return (
    <footer className="sobre-ceted-900 bg-ceted-900 relative overflow-hidden text-white">
      <MallaDecision intensidad={0.14} className="absolute inset-0 text-white" />

      <Container className="relative">
        <div className="py-seccion-sm grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Identidad */}
          <div className="lg:col-span-4">
            <Logo height={44} className="text-white" />
            <p className="mt-6 max-w-xs text-sm text-white/70">{siteConfig.description}</p>
            <p className="font-display text-display-3 mt-8 font-semibold leading-tight text-white/95">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navegacion secundaria */}
          <nav aria-label="Formacion e investigacion" className="lg:col-span-4">
            <h2 className="antetitulo mb-6 text-white/60">Formación e investigación</h2>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <Vector className="opacity-45 transition-transform group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h2 className="antetitulo mb-6 text-white/60">Contacto</h2>
            <address className="not-italic">
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 opacity-60" />
                  <span>
                    {contactInfo.address}
                    <br />
                    {contactInfo.city}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 opacity-60" />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="transition-colors hover:text-white"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 opacity-60" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </address>

            <ul className="mt-6 flex gap-5">
              {contactInfo.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="enlace-marca text-sm text-white/80 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pie legal */}
        <div className="border-white/12 text-nota flex flex-col gap-4 border-t py-8 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {anio} CETED — {siteConfig.fullName}. {siteConfig.affiliation},{' '}
            {siteConfig.country}.
          </p>
          <p className="cifras">Fundado en {siteConfig.foundedYear}</p>
        </div>
      </Container>
    </footer>
  )
}
