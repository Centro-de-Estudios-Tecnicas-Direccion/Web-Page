import { Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { Boton } from '@/components/ui/Boton'
import { Container } from '@/components/ui/Container'
import { Distintivo } from '@/components/ui/Tarjeta'

/**
 * Pantalla de acceso.
 *
 * Cubre el requisito no funcional de autenticacion por nombre de usuario y
 * contrasena para los tres roles (estudiante, profesor y administrador).
 *
 * El formulario esta cableado pero no envia nada: el endpoint `POST /api/auth/token`
 * aun no existe. Muestra el estado de error real en cuanto lo conecte, para que
 * la transicion sea sin cambios de codigo en el resto de la aplicacion.
 */
export default function AccesoPage() {
  const [enviando, setEnviando] = useState(false)

  return (
    <section className="grid lg:grid-cols-2">
      {/* Panel de contexto */}
      <div className="sobre-ceted-800 bg-ceted-900 relative isolate hidden overflow-hidden text-white lg:block">
        <div aria-hidden="true" className="absolute inset-0 text-white opacity-15">
          <svg viewBox="0 0 400 400" className="size-full" fill="none" stroke="currentColor">
            <g strokeWidth="1.5">
              <path d="M0 120 H140 V40 H400" />
              <path d="M0 260 H90 V330 H400" />
              <path d="M400 210 H250 V300 H150 V400" />
            </g>
            <g fill="currentColor" stroke="none">
              <rect x="134" y="114" width="12" height="12" />
              <rect x="84" y="324" width="12" height="12" />
              <rect x="244" y="204" width="12" height="12" />
            </g>
          </svg>
        </div>

        <div className="relative flex h-full flex-col justify-center px-14 pb-20 pt-32 lg:pb-28 lg:pt-40">
          <p className="antetitulo mb-8 text-white/60">Área privada</p>
          <h2 className="text-display-3 font-display font-estirado text-balance font-semibold">
            El mismo espacio de siempre, con un paso más cerca
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            Desde aquí los estudiantes ven sus cursos e inscripciones, los profesores gestionan los
            que imparten y el administrador controla el contenido del sitio.
          </p>

          <ul className="mt-12 space-y-4 border-t border-white/15 pt-8 text-sm text-white/65">
            <li>Control de acceso por roles.</li>
            <li>Solicitud de inscripción en línea.</li>
            <li>Notificaciones automáticas por correo.</li>
          </ul>
        </div>
      </div>

      {/* Formulario */}
      <div className="flex items-center bg-white pb-20 pt-32 lg:pb-28 lg:pt-40">
        <Container ancho="proceso" className="w-full">
          <div className="mx-auto max-w-md">
            <div className="text-ceted-600 flex items-center gap-3">
              <Lock aria-hidden="true" className="size-5" />
              <Distintivo>Acceso al sistema</Distintivo>
            </div>

            <h1 className="text-display-3 font-display mt-8 font-semibold">Iniciar sesión</h1>
            <p className="text-tinta-600 mt-4">
              Introduzca sus credenciales institucionales. Si no las recuerda, solicite un nuevo
              acceso escribiendo a{' '}
              <a
                href="mailto:soporte@ceted.uh.cu"
                className="enlace-marca text-ceted-700 inline-flex items-center gap-1.5"
              >
                <Mail aria-hidden="true" className="size-3.5" />
                soporte@ceted.uh.cu
              </a>
              .
            </p>

            <form
              className="mt-10 grid gap-6"
              noValidate
              onSubmit={(evento) => {
                evento.preventDefault()
                setEnviando(true)
                // TODO: sustituir por la mutación de TanStack Query
                // POST /api/auth/token  { usuario, contrasena } -> Sesion
                window.setTimeout(() => setEnviando(false), 600)
              }}
            >
              <label className="block">
                <span className="font-display text-etiqueta tracking-etiqueta text-tinta-600 font-semibold uppercase">
                  Nombre de usuario
                </span>
                <input
                  type="text"
                  name="usuario"
                  autoComplete="username"
                  required
                  className="rounded-xs border-tinta-300 text-body focus:border-ceted-600 mt-2 h-12 w-full border bg-white px-4 transition-colors focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="font-display text-etiqueta tracking-etiqueta text-tinta-600 font-semibold uppercase">
                  Contraseña
                </span>
                <input
                  type="password"
                  name="contrasena"
                  autoComplete="current-password"
                  required
                  className="rounded-xs border-tinta-300 text-body focus:border-ceted-600 mt-2 h-12 w-full border bg-white px-4 transition-colors focus:outline-none"
                />
              </label>

              <div className="flex items-center justify-between gap-4">
                <label className="text-tinta-600 flex items-center gap-2.5 text-sm">
                  <input
                    type="checkbox"
                    name="recordar"
                    className="rounded-xs accent-ceted-600 size-4"
                  />
                  Recordar sesión
                </label>
                <a
                  href="mailto:soporte@ceted.uh.cu"
                  className="enlace-marca text-ceted-700 text-sm"
                >
                  Recuperar acceso
                </a>
              </div>

              <Boton
                type="submit"
                variante="solido"
                tamano="lg"
                className="mt-2 w-full"
                disabled={enviando}
              >
                {enviando ? 'Verificando…' : 'Entrar'}
              </Boton>

              <p role="status" aria-live="polite" className="text-nota text-tinta-500">
                {enviando
                  ? 'Comprobando sus credenciales...'
                  : 'El acceso se habilita con las credenciales extendidas por el CETED.'}
              </p>
            </form>

            <p className="border-tinta-200 text-tinta-600 mt-12 border-t pt-8 text-sm">
              ¿Busca información pública sobre los programas?{' '}
              <Link to="/servicios" className="enlace-marca text-ceted-700 font-medium">
                Ver el catálogo académico
              </Link>
              .
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}
