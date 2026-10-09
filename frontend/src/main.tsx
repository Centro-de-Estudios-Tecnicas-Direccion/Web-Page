import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app/App'
import { Providers } from '@/app/providers'

/* Orden de importacion de estilos:
     1. tipografias auto-alojadas (sin dependencia de Google Fonts)
     2. el sistema de diseno
   La tipografia se declara antes para que el primer pintado use la fuente
   correcta y no produzca un salto de maquetacion. */
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource-variable/figtree'
import '@/styles/index.css'

const contenedor = document.getElementById('root')

if (!contenedor) {
  throw new Error('No se encontro el nodo #root en index.html')
}

createRoot(contenedor).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
