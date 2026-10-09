import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { RutaPerezosa } from '@/app/RouteLoading'
import { AppLayout } from '@/components/layout/AppLayout'
import { InicioPage } from '@/pages/InicioPage'

/**
 * Tabla de rutas.
 *
 * Regla de carga: la portada entra en el paquete inicial porque es la primera
 * pantalla; el resto se divide en fragmentos que se descargan bajo demanda.
 */
const ServiciosPage = lazy(() => import('@/pages/ServiciosPage'))
const ClaustroPage = lazy(() => import('@/pages/ClaustroPage'))
const NoticiasPage = lazy(() => import('@/pages/NoticiasPage'))
const ProyectosPage = lazy(() => import('@/pages/ProyectosPage'))
const ContactoPage = lazy(() => import('@/pages/ContactoPage'))
const AccesoPage = lazy(() => import('@/pages/AccesoPage'))
const NoEncontradaPage = lazy(() => import('@/pages/NoEncontradaPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <InicioPage /> },
      {
        path: 'servicios',
        element: (
          <RutaPerezosa>
            <ServiciosPage />
          </RutaPerezosa>
        ),
      },
      {
        path: 'claustro',
        element: (
          <RutaPerezosa>
            <ClaustroPage />
          </RutaPerezosa>
        ),
      },
      {
        path: 'noticias',
        element: (
          <RutaPerezosa>
            <NoticiasPage />
          </RutaPerezosa>
        ),
      },
      {
        path: 'noticias/:slug',
        element: (
          <RutaPerezosa>
            <NoticiasPage />
          </RutaPerezosa>
        ),
      },
      {
        path: 'proyectos',
        element: (
          <RutaPerezosa>
            <ProyectosPage />
          </RutaPerezosa>
        ),
      },
      {
        path: 'contacto',
        element: (
          <RutaPerezosa>
            <ContactoPage />
          </RutaPerezosa>
        ),
      },
      {
        path: 'acceso',
        element: (
          <RutaPerezosa>
            <AccesoPage />
          </RutaPerezosa>
        ),
      },
      {
        path: '*',
        element: (
          <RutaPerezosa>
            <NoEncontradaPage />
          </RutaPerezosa>
        ),
      },
    ],
  },
])
