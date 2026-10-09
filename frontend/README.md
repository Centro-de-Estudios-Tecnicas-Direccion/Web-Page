# Frontend · Plataforma web del CETED

Centro de Estudios de Técnicas de Dirección — Universidad de La Habana.

Aplicación de una sola página construida con **React 19 + TypeScript + Vite**.
El sistema de diseño vive en tokens CSS y la capa de datos ya está preparada
para hablar con la API de **FastAPI** + **PostgreSQL**, que aún no existe.

---

## Requisitos

- Node.js ≥ 20.19
- npm ≥ 10

## Puesta en marcha

```bash
npm install
cp .env.example .env      # opcional: ajusta VITE_API_URL
npm run dev
```

El sitio queda en `http://localhost:5173`.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Comprobación de tipos + compilación a `dist/` |
| `npm run preview` | Sirve la compilación de producción |
| `npm run typecheck` | Solo TypeScript |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

---

## Stack

| Capa | Elección | Por qué |
|---|---|---|
| Framework | React 19 + TypeScript | El modelo de dominio de la especificación (roles, cursos, inscripciones) se verifica en tiempo de compilación. |
| Compilador | Vite 6 | Arranque inmediato y `manualChunks` para separar el núcleo de React. |
| Estilos | Tailwind CSS 4 | Los tokens de `@theme` son la fuente de verdad; no hay configuración paralela que se desincronice. |
| Enrutado | React Router 7 (modo datos) | Permite carga diferida por página y anclas de sección. |
| Datos | TanStack Query 5 | En caché, reintento selectivo y mutaciones. Es la pieza que conecta con FastAPI. |
| Iconos | lucide-react | Un solo grosor, sin SVG sueltos en el código. |
| Tipografías | `@fontsource-variable` | Auto-alojadas: sin dependencia de Google Fonts. |

---

## Arquitectura

```
src/
├─ app/              composición de la aplicación
│  ├─ router.tsx        tabla de rutas (solo exporta el router)
│  ├─ providers.tsx     contexto global
│  ├─ RouteLoading.tsx  estado de carga de las rutas diferidas
│  └─ App.tsx
├─ assets/brand/     trazado vectorial del logotipo
├─ components/
│  ├─ brand/           recursos de identidad (Logo, MallaDecision, Vector)
│  ├─ layout/          cabecera, pie y envoltorio
│  └─ ui/              kit de componentes
├─ config/            datos institucionales y navegación
├─ features/home/     secciones de la portada y sus datos
├─ lib/               cliente HTTP, caché de consultas, utilidades
├─ pages/             una página por ruta
├─ styles/            sistema de diseño (tokens + base)
├─ types/domain.ts    contrato con la API
└─ main.tsx
```

### Reglas de la estructura

1. **`pages/` no importa de `features/` de otra página.** Cada página compone
   sus secciones; lo reutilizable sube a `components/`.
2. **`components/ui/` no sabe nada del negocio.** Solo recibe props.
3. **Los datos de la portada viven en `features/home/` y están tipados con el
   modelo de dominio.** Cuando la API esté lista, sustituir el `import` por un
   `useQuery` es el único cambio necesario: el compilador ya validó el contrato.
4. **`config/` no se edita desde un componente.** Nombre, contacto y
   navegación son datos institucionales.

---

## Sistema de diseño

La identidad visual no está descrita en un PDF: está implementada.

- `src/styles/tokens.css` — paleta, escala tipográfica, ritmo y formas.
- `src/styles/base.css` — reinicio y recursos de marca (antetítulo, trama,
  vector, tratamiento fotográfico).

La guía completa está en [`../docs/IDENTIDAD.md`](../docs/IDENTIDAD.md).

Regla práctica: **no se escribe un valor de color ni de tamaño suelto en un
componente.** Si hace falta uno nuevo, se añade al token.

---

## Contrato con la API

`src/types/domain.ts` define los tipos que vendrán de FastAPI:

`Usuario` · `Sesion` · `Noticia` · `Profesor` · `LineaInvestigacion` ·
`Programa` · `Curso` · `Inscripcion` · `Notificacion`

Convenciones ya fijadas:

- Los identificadores son cadenas (UUID de PostgreSQL).
- Las fechas viajan en ISO-8601 UTC y se formatean en el cliente.
- Las duraciones viajan en horas o minutos, nunca formateadas.
- Los campos derivados no se modelan: se calculan al presentar.

`src/lib/api.ts` centraliza las llamadas: normaliza los errores en `ApiError`
y adjunta el token de sesión si existe. `src/lib/query-client.ts` centraliza
las claves de caché.

### Endpoint previstos

| Método | Ruta | Devuelve |
|---|---|---|
| `POST` | `/api/auth/token` | `Sesion` |
| `GET` | `/api/noticias` | `Noticia[]` |
| `GET` | `/api/claustro` | `Profesor[]` |
| `GET` | `/api/lineas-investigacion` | `LineaInvestigacion[]` |
| `GET` | `/api/programas` | `Programa[]` |
| `GET` | `/api/cursos` | `Curso[]` |
| `POST` | `/api/inscripciones` | `Inscripcion` |

En desarrollo, Vite hace proxy de `/api` hacia `http://localhost:8000`
(configurable con `VITE_PROXY_TARGET`), de modo que no hay CORS que configurar.

---

## Estado de la aplicación

| Página | Ruta | Estado |
|---|---|---|
| Portada | `/` | Completa |
| Servicios | `/servicios` | Completa |
| Proyectos | `/proyectos` | Completa |
| Contacto | `/contacto` | Completa; formulario sin envío |
| Noticias | `/noticias` | Completa; contenido de ejemplo |
| Claustro | `/claustro` | Maquetada; espera la API |
| Acceso | `/acceso` | Maquetada; espera la API |
| No encontrada | `*` | Completa |

Donde falta información por parte de la API, la pantalla lo dice explícitamente
con `AvisoPendiente`: el hueco es técnico, no de contenido.

---

## Pendiente

- [ ] Autenticación (`features/auth`) y protección de rutas por rol.
- [ ] Módulos de profesor y administrador: cursos, aprobaciones y noticias.
- [ ] Formularios con validación (React Hook Form + Zod).
- [ ] Pruebas: Vitest, Testing Library y MSW.
- [ ] Optimización de imágenes y `manifest` de aplicación web.
