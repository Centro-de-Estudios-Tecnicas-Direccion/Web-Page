import React, { useState } from 'react';
import { PageId } from '../types';
import { CETED_INFO } from '../data/cetedFullData';
import {
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Navigation,
  Compass,
} from 'lucide-react';

interface ContactPageProps {
  preselectedProgram?: string;
  onNavigate: (page: PageId) => void;
}

const fieldBase =
  'w-full min-h-[44px] rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-500 focus:border-ceted-blue dark:bg-ceted-navy dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-blue-400';

const fieldBorder = (hasError: boolean) =>
  hasError
    ? 'border-red-600 dark:border-red-400'
    : 'border-slate-500 hover:border-slate-700 dark:border-slate-500 dark:hover:border-slate-300';

const labelClass =
  'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300';

const errorClass =
  'mt-1.5 flex items-center gap-1 text-sm text-red-700 dark:text-red-300';

const asterisk = (
  <span className="text-red-700 dark:text-red-300" aria-hidden="true">
    *
  </span>
);

export const ContactPage: React.FC<ContactPageProps> = ({
  preselectedProgram = 'Maestría en Dirección',
  onNavigate,
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    programa: preselectedProgram,
    asunto: 'Admisión Posgrado',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.nombre.trim()) err.nombre = 'Ingrese su nombre y apellidos.';
    if (!formData.email.trim()) {
      err.email = 'Ingrese su correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Formato de correo inválido.';
    }
    if (!formData.telefono.trim()) err.telefono = 'Ingrese un número de contacto.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const infoCard =
    'rounded-xl border border-slate-200 bg-white shadow-xs dark:border-ceted-line dark:bg-ceted-dark';
  const eyebrow =
    'text-xs font-semibold uppercase tracking-[0.14em] text-ceted-blue dark:text-blue-300';

  return (
    <div className="pb-20 pt-24 text-left text-slate-800 dark:text-slate-200">
      {/* Encabezado */}
      <section className="bg-ceted-blue px-4 py-14 text-white dark:border-b dark:border-ceted-line dark:bg-ceted-dark sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 dark:text-blue-300">
            Atención al Estudiante y Contacto Institucional
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Contacto
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-50 dark:text-slate-300 sm:text-lg">
            Visite nuestra sede en el Vedado o comuníquese a través de nuestras líneas de secretaría,
            correos académicos y redes oficiales.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Formulario */}
          <div className={`p-8 sm:p-10 lg:col-span-7 ${infoCard}`}>
            {submitted ? (
              <div className="animate-pop-in space-y-4 py-12 text-center motion-reduce:animate-none" role="status">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-ceted-blue dark:bg-blue-400/10 dark:text-blue-300">
                  <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white">
                  Mensaje Enviado con Éxito
                </h2>
                <p className="mx-auto max-w-md text-base text-slate-600 dark:text-slate-300">
                  Gracias por comunicarse con el CETED,{' '}
                  <strong className="text-slate-900 dark:text-white">{formData.nombre}</strong>.
                  Un asesor académico le responderá a{' '}
                  <strong className="text-slate-900 dark:text-white">{formData.email}</strong> a
                  la brevedad.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        programa: 'Maestría en Dirección',
                        asunto: 'Admisión Posgrado',
                        mensaje: '',
                      });
                    }}
                    className="min-h-[44px] rounded-lg bg-ceted-blue px-6 py-3 text-sm font-semibold text-white transition duration-150 hover:bg-ceted-hover active:scale-[0.98] motion-reduce:active:scale-100 dark:hover:bg-[#1567E3]"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white">
                    Formulario de Contacto
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Complete los siguientes campos y le enviaremos la información requerida. Los campos
                    marcados con <span aria-hidden="true">*</span>
                    <span className="sr-only">asterisco</span> son obligatorios.
                  </p>
                </div>

                <div>
                  <label htmlFor="c-nombre" className={labelClass}>
                    Nombre completo {asterisk}
                  </label>
                  <input
                    id="c-nombre"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Lic. Roberto Gómez Rodríguez"
                    aria-invalid={Boolean(errors.nombre)}
                    aria-describedby={errors.nombre ? 'c-nombre-error' : undefined}
                    className={`${fieldBase} ${fieldBorder(Boolean(errors.nombre))}`}
                  />
                  {errors.nombre && (
                    <p id="c-nombre-error" role="alert" className={errorClass}>
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-email" className={labelClass}>
                      Correo electrónico {asterisk}
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@ejemplo.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'c-email-error' : undefined}
                      className={`${fieldBase} ${fieldBorder(Boolean(errors.email))}`}
                    />
                    {errors.email && (
                      <p id="c-email-error" role="alert" className={errorClass}>
                        <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="c-tel" className={labelClass}>
                      Teléfono / WhatsApp {asterisk}
                    </label>
                    <input
                      id="c-tel"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="+53 5 123 4567"
                      aria-invalid={Boolean(errors.telefono)}
                      aria-describedby={errors.telefono ? 'c-tel-error' : undefined}
                      className={`${fieldBase} ${fieldBorder(Boolean(errors.telefono))}`}
                    />
                    {errors.telefono && (
                      <p id="c-tel-error" role="alert" className={errorClass}>
                        <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {errors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-asunto" className={labelClass}>
                      Área de Consulta
                    </label>
                    <select
                      id="c-asunto"
                      value={formData.asunto}
                      onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                      className={`${fieldBase} ${fieldBorder(false)}`}
                    >
                      <option value="Admisión Posgrado">Maestrías y Posgrado</option>
                      <option value="Formación Pregrado">Pregrado y Asignaturas</option>
                      <option value="Consultoría Empresarial">Consultoría para Empresas</option>
                      <option value="Gabinete Metodológico">Gabinete Metodológico</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-prog" className={labelClass}>
                      Programa Específico
                    </label>
                    <select
                      id="c-prog"
                      value={formData.programa}
                      onChange={(e) => setFormData({ ...formData, programa: e.target.value })}
                      className={`${fieldBase} ${fieldBorder(false)}`}
                    >
                      <option value="Maestría en Dirección">Maestría en Dirección</option>
                      <option value="Maestría en Marketing">Maestría en Marketing</option>
                      <option value="Maestría en Gestión de Proyectos para el Desarrollo">
                        Maestría en Gestión de Proyectos
                      </option>
                      <option value="Diplomados Ejecutivos">Diplomados Ejecutivos</option>
                      <option value="General">Otro programa o servicio</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-msg" className={labelClass}>
                    Consulta o Mensaje (Opcional)
                  </label>
                  <textarea
                    id="c-msg"
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Escriba aquí sus dudas sobre convalidaciones, fechas de inicio o modalidad..."
                    className={`${fieldBase} ${fieldBorder(false)}`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-ceted-blue px-6 py-3.5 text-base font-semibold text-white shadow-sm transition duration-150 hover:bg-ceted-hover active:scale-[0.99] motion-reduce:active:scale-100 dark:hover:bg-[#1567E3]"
                  >
                    <Send
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                      aria-hidden="true"
                    />
                    <span>Enviar Consulta al CETED</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Ubicación */}
          <div className="space-y-6 lg:col-span-5">
            <div className={`space-y-4 p-8 ${infoCard}`}>
              <div className={`flex items-center gap-2 ${eyebrow}`}>
                <Navigation className="h-4 w-4" aria-hidden="true" />
                <span>Cómo Llegar a la Sede</span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">
                Ubicación en el Vedado
              </h3>

              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-ceted-blue dark:text-blue-300"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="block font-semibold text-slate-900 dark:text-white">
                      Dirección:
                    </strong>
                    <span>{CETED_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Compass
                    className="mt-0.5 h-4 w-4 shrink-0 text-ceted-blue dark:text-blue-300"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="block font-semibold text-slate-900 dark:text-white">
                      Indicaciones de Acceso:
                    </strong>
                    <span>{CETED_INFO.directions}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm dark:border-ceted-line dark:bg-ceted-navy">
                <span className="block font-semibold text-slate-900 dark:text-white">
                  Puntos de Referencia:
                </span>
                <div className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-ceted-line dark:bg-ceted-dark">
                    • Hotel Habana Libre (150 m)
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-ceted-line dark:bg-ceted-dark">
                    • La Rampa / Calle 23 (100 m)
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-ceted-line dark:bg-ceted-dark">
                    • Colina Universitaria (350 m)
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2 dark:border-ceted-line dark:bg-ceted-dark">
                    • Cine Yara (200 m)
                  </div>
                </div>
              </div>
            </div>

            {/* Correos */}
            <div className={`space-y-3 p-6 ${infoCard}`}>
              <span className={`block ${eyebrow}`}>Correos Institucionales</span>
              <div className="space-y-2 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex flex-wrap items-center justify-between gap-1 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-ceted-line dark:bg-ceted-navy">
                  <span>CETED Dirección:</span>
                  <a
                    href={`mailto:${CETED_INFO.emails.general}`}
                    className="font-semibold text-ceted-blue underline-offset-4 hover:underline dark:text-blue-300"
                  >
                    {CETED_INFO.emails.general}
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-1 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-ceted-line dark:bg-ceted-navy">
                  <span>Cátedra UNESCO:</span>
                  <a
                    href={`mailto:${CETED_INFO.emails.unesco}`}
                    className="font-semibold text-ceted-blue underline-offset-4 hover:underline dark:text-blue-300"
                  >
                    {CETED_INFO.emails.unesco}
                  </a>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className={`space-y-3 p-6 ${infoCard}`}>
              <span className={`block ${eyebrow}`}>Redes Sociales Oficiales</span>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {CETED_INFO.social.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[44px] items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all hover:border-ceted-blue hover:bg-white dark:border-ceted-line dark:bg-ceted-navy dark:hover:border-blue-400 dark:hover:bg-ceted-deep"
                  >
                    <span className="font-semibold text-slate-800 group-hover:text-ceted-blue dark:text-slate-100 dark:group-hover:text-blue-300">
                      {soc.name}
                    </span>
                    <ExternalLink
                      className="h-4 w-4 text-slate-500 group-hover:text-ceted-blue dark:text-slate-400 dark:group-hover:text-blue-300"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};