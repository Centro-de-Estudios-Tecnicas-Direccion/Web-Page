import React, { useState } from 'react';
import { PageId } from '../types';
import { CETED_INFO } from '../data/cetedFullData';
import {
  MapPin,
  Phone,
  Mail,
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

  return (
    <div className="pt-24 pb-20 text-slate-800 text-left">
      
      {/* Header (SOLID #0D5DD7) */}
      <section className="bg-[#0D5DD7] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-100">
            Atención al Estudiante y Contacto Institucional
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-white">
            Contacto
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed">
            Visite nuestra sede en el Vedado o comuníquese a través de nuestras líneas de secretaría, 
            correos académicos y redes oficiales.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-xl p-8 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4" role="status">
                <div className="w-16 h-16 bg-blue-50 text-[#0D5DD7] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">
                  Mensaje Enviado con Éxito
                </h2>
                <p className="text-base text-slate-600 max-w-md mx-auto">
                  Gracias por comunicarse con el CETED, <strong className="text-slate-900">{formData.nombre}</strong>. 
                  Un asesor académico le responderá a <strong className="text-slate-900">{formData.email}</strong> a 
                  la brevedad.
                </p>
                <div className="pt-4">
                  <button
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
                    className="px-6 py-3 text-xs font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg transition-colors min-h-[44px]"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">
                    Formulario de Contacto
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Complete los siguientes campos y le enviaremos la información requerida.
                  </p>
                </div>

                <div>
                  <label htmlFor="c-nombre" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="c-nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Lic. Roberto Gómez Rodríguez"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D5DD7] focus:outline-none min-h-[44px]"
                  />
                  {errors.nombre && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@ejemplo.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D5DD7] focus:outline-none min-h-[44px]"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="c-tel" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Teléfono / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="c-tel"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="+53 5 123 4567"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D5DD7] focus:outline-none min-h-[44px]"
                    />
                    {errors.telefono && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-asunto" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Área de Consulta
                    </label>
                    <select
                      id="c-asunto"
                      value={formData.asunto}
                      onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D5DD7] min-h-[44px]"
                    >
                      <option value="Admisión Posgrado">Maestrías y Posgrado</option>
                      <option value="Formación Pregrado">Pregrado y Asignaturas</option>
                      <option value="Consultoría Empresarial">Consultoría para Empresas</option>
                      <option value="Gabinete Metodológico">Gabinete Metodológico</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-prog" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Programa Específico
                    </label>
                    <select
                      id="c-prog"
                      value={formData.programa}
                      onChange={(e) => setFormData({ ...formData, programa: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D5DD7] min-h-[44px]"
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
                  <label htmlFor="c-msg" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Consulta o Mensaje (Opcional)
                  </label>
                  <textarea
                    id="c-msg"
                    rows={3}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Escriba aquí sus dudas sobre convalidaciones, fechas de inicio o modalidad..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D5DD7] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg shadow-sm transition-colors min-h-[48px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Consulta al CETED</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Directions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border-2 border-slate-200 rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D5DD7]">
                <Navigation className="w-4 h-4" />
                <span>Cómo Llegar a la Sede</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-slate-900">
                Ubicación en el Vedado
              </h3>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0D5DD7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Dirección:</strong>
                    <span>{CETED_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#0D5DD7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Indicaciones de Acceso:</strong>
                    <span>{CETED_INFO.directions}</span>
                  </div>
                </div>
              </div>

              {/* Reference Points */}
              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2">
                <span className="font-bold text-slate-900 block">Puntos de Referencia:</span>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div className="p-2 bg-white rounded border border-slate-200">
                    • Hotel Habana Libre (150 m)
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200">
                    • La Rampa / Calle 23 (100 m)
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200">
                    • Colina Universitaria (350 m)
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200">
                    • Cine Yara (200 m)
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Emails */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7] block">
                Correos Institucionales
              </span>
              <div className="space-y-2 text-xs font-mono text-slate-700">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>CETED Dirección:</span>
                  <a href={`mailto:${CETED_INFO.emails.general}`} className="text-[#0D5DD7] font-semibold hover:underline">
                    {CETED_INFO.emails.general}
                  </a>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>Cátedra UNESCO:</span>
                  <a href={`mailto:${CETED_INFO.emails.unesco}`} className="text-[#0D5DD7] font-semibold hover:underline">
                    {CETED_INFO.emails.unesco}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5DD7] block">
                Redes Sociales Oficiales
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {CETED_INFO.social.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#0D5DD7] transition-all flex items-center justify-between group"
                  >
                    <span className="font-semibold text-slate-800 group-hover:text-[#0D5DD7]">{soc.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D5DD7]" />
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
