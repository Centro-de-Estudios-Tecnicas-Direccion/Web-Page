import { Mail, MapPin, Phone } from 'lucide-react'

import { Boton } from '@/components/ui/Boton'
import { PageHeader } from '@/components/ui/PageHeader'
import { EncabezadoSeccion, Seccion } from '@/components/ui/Seccion'
import { ListaDatos } from '@/components/ui/Tarjeta'
import { contactInfo, siteConfig } from '@/config/site'

type CampoProps = {
  etiqueta: string
  tipo?: 'text' | 'email' | 'tel' | 'textarea'
  requerido?: boolean
  marcador?: string
}

/**
 * Campos del formulario.
 *
 * Construidos a mano en lugar de con una libreria: son cuatro, el markup es
 * identico para todos y asi el componente no anade dependencias antes de que
 * exista un formulario real que lo justifique.
 */
function Campo({ etiqueta, tipo = 'text', requerido, marcador }: CampoProps) {
  const clases =
    'w-full rounded-xs border border-tinta-300 bg-white px-4 py-3 text-body text-tinta-900 ' +
    'placeholder:text-tinta-400 transition-colors focus:border-ceted-600 focus:outline-none ' +
    'aria-invalid:border-error'

  return (
    <label className="block">
      <span className="font-display text-etiqueta tracking-etiqueta text-tinta-600 font-semibold uppercase">
        {etiqueta}
        {requerido && <span className="text-ceted-600"> *</span>}
      </span>

      {tipo === 'textarea' ? (
        <textarea
          name={etiqueta.toLowerCase().replace(/\s+/g, '-')}
          rows={5}
          required={requerido}
          placeholder={marcador}
          className={`${clases} mt-2 resize-y`}
        />
      ) : (
        <input
          type={tipo}
          name={etiqueta.toLowerCase().replace(/\s+/g, '-')}
          required={requerido}
          placeholder={marcador}
          className={`${clases} mt-2 h-12`}
        />
      )}
    </label>
  )
}

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        antetitulo="Contacto"
        titulo="Escríbanos"
        descripcion="Le orientamos sobre el programa que mejor se ajusta a su caso, al momento de su organización y a la Modalidad que mejor le convenga."
      />

      <Seccion tono="tinta" compacta>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Formulario */}
          <div className="lg:col-span-7">
            <EncabezadoSeccion
              antetitulo="Formulario"
              titulo="Cuéntenos qué necesita"
              className="max-w-prose"
            />

            <form className="grid gap-6 sm:grid-cols-2" noValidate>
              <Campo etiqueta="Nombre" requerido marcador="Nombre y apellidos" />
              <Campo etiqueta="Correo" tipo="email" requerido marcador="nombre@organizacion.cu" />
              <Campo etiqueta="Teléfono" tipo="tel" marcador="+53 7 ..." />
              <Campo etiqueta="Organización" marcador="Entidad o empresa" />

              <label className="block sm:col-span-2">
                <span className="font-display text-etiqueta tracking-etiqueta text-tinta-600 font-semibold uppercase">
                  Motivo
                </span>
                <select
                  name="motivo"
                  className="rounded-xs border-tinta-300 text-body text-tinta-900 focus:border-ceted-600 mt-2 h-12 w-full border bg-white px-4 transition-colors focus:outline-none"
                >
                  <option>Información sobre la oferta académica</option>
                  <option>Solicitud de inscripción</option>
                  <option>Visita al Laboratorio</option>
                  <option>Propuesta de colaboración</option>
                  <option>Otro asunto</option>
                </select>
              </label>

              <div className="sm:col-span-2">
                <Campo
                  etiqueta="Mensaje"
                  tipo="textarea"
                  requerido
                  marcador="Describa brevemente su consulta."
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
                <Boton variante="solido" tamano="lg" conVector type="submit">
                  Enviar mensaje
                </Boton>
                <p className="text-nota text-tinta-500 max-w-xs">
                  Los campos marcados con asterisco son obligatorios. Usaremos sus datos solo para
                  responder esta consulta.
                </p>
              </div>
            </form>
          </div>

          {/* Datos institucionales */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="antetitulo text-tinta-500 mb-8">Datos del centro</h2>

            <address className="not-italic">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <MapPin aria-hidden="true" className="text-ceted-600 mt-1 size-5 shrink-0" />
                  <div>
                    <p className="font-display text-sm font-semibold">Dirección</p>
                    <p className="text-tinta-600 mt-1 text-sm">
                      {contactInfo.address}
                      <br />
                      {contactInfo.city}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone aria-hidden="true" className="text-ceted-600 mt-1 size-5 shrink-0" />
                  <div>
                    <p className="font-display text-sm font-semibold">Teléfono</p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="enlace-marca text-tinta-600 mt-1 block text-sm"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail aria-hidden="true" className="text-ceted-600 mt-1 size-5 shrink-0" />
                  <div>
                    <p className="font-display text-sm font-semibold">Correo</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="enlace-marca text-tinta-600 mt-1 block text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
              </ul>
            </address>

            <div className="border-tinta-200 mt-12 border-t pt-8">
              <ListaDatos
                items={[
                  { dato: 'Adscripción', valor: siteConfig.affiliation },
                  { dato: 'Fundación', valor: siteConfig.foundedYear },
                  { dato: 'Sede', valor: 'Edificio Julio Antonio Mella' },
                ]}
              />
            </div>

            <div className="mt-8">
              <h3 className="font-display text-sm font-semibold">Redes</h3>
              <ul className="mt-3 space-y-2">
                {contactInfo.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="enlace-marca text-ceted-700 text-sm"
                    >
                      {item.label} · {item.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Seccion>
    </>
  )
}
