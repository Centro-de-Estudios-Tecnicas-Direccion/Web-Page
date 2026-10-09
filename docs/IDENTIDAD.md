# Sistema de identidad visual · CETED

> **Versión 1.0 · Octubre 2026**
> Centro de Estudios de Técnicas de Dirección — Universidad de La Habana

Este documento es la guía de uso de la identidad visual del CETED para el
entorno digital. Todo lo que aquí se establece está **implementado como código**
en `frontend/src/styles/tokens.css`: las reglas no se aplican a mano, se aplican
con variables CSS que alimentan las utilidades de Tailwind. Si una regla cambia,
cambia en un solo lugar y el sitio entero se actualiza.

---

## 1. Origen y método

El sistema toma su **método** del *Manual de identidad visual de la REDEC*
(`docs/Manual de identidad REDEC.pdf`): código cromático con dos protagonistas,
código tipográfico de dos familias, jerarquía de titulares por contraste,
código fotográfico, áreas de seguridad y una retícula editorial sobria.

**No toma sus signos.** Ni el verde, ni la trama orgánica, ni la flecha en
cuadrado, ni las tipografías Advaken Sans y Mazzard H. El CETED es otra
institución, con otro color y otra voz.

Del manual se conserva la idea que lo hace valioso: **el aire y la escala
construyen más marca que los adornos**. De ahí que aquí no haya sombras
decorativas, ni degradados de color, ni esquinas redondeadas excesivas.

---

## 2. Discurso visual

Cuatro atributos ordenan todo lo que se dice y todo lo que se muestra. Son la
adaptación de los tres pilares de la REDEC a lo que el centro realmente
comunica.

| Atributo | Qué significa | Cómo se ve |
|---|---|---|
| **Rigor** | Formación de posgrado con exigencia metodológica. | Retícula estricta, jerarquía marcada, poco adorno. |
| **Gestión** | Investigación aplicada que responde a problemas concretos. | Bloques de contenido ordenados, datos a la vista. |
| **Comunidad** | Una red de centros y una Cátedra UNESCO que conectan la universidad con el territorio. | Composición abierta, bloques amplios que se tocan. |
| **Laboratorio** | Entrenamiento de directivos en condiciones reales. | Fotografía institucional como banda, no como adorno. |

---

## 3. Código cromático

### 3.1 El protagonista

El azul institucional se extrajo del logotipo oficial (`docs/CETED.png`):

```
CETED-600   HEX #004CA5    HSL 212° · 100% · 32%    RGB 0, 76, 165
```

Es el único color de marca. Aparece en el logotipo, en los botones de acción
principal, en la barra de antihallazgo, en el bloque de la Cátedra UNESCO y en
los campos de foco.

### 3.2 La rampa completa

Derivados del tono 212°, con satuación y luminosidad decrecientes.

| Token | HEX | Uso |
|---|---|---|
| `ceted-50` | `#F0F7FF` | Fondo de secciones suaves, zonas de reposo |
| `ceted-100` | `#DFEDFE` | Estados hover sobre fondo claro |
| `ceted-200` | `#C3DCF9` | Bordes de apoyo, separadores sobre hielo |
| `ceted-300` | `#9CC1EC` | Antetítulos sobre superficie oscura |
| `ceted-400` | `#6C9FDA` | Subrayado activo de navegación |
| `ceted-500` | `#1C6CCA` | Estados de foco e interacción |
| **`ceted-600`** | **`#004CA5`** | **★ INSTITUCIONAL** |
| `ceted-700` | `#003B80` | Hover del botón principal |
| `ceted-800` | `#062B56` | Bloque de contraste medio (Laboratorio) |
| `ceted-900` | `#061D38` | Bloque de máxima autoridad (cabeceras, pie) |
| `ceted-950` | `#041324` | Fondo más profundo disponible |

### 3.3 Neutros

Los grises son **azulados**: nunca un gris puro recordaría a otra marca.

| Token | HEX | Uso |
|---|---|---|
| `tinta-0` | `#FFFFFF` | Superficie base |
| `tinta-50` | `#F9FAFB` | Fondo de avisos y placeholders |
| `hielo` | `#F4F8FD` | Superficie de sección alternativa |
| `tinta-200` | `#E0E5EB` | Filetes y bordes de tarjeta |
| `tinta-400` | `#A2ABB9` | Texto deshabilitado |
| `tinta-500` | `#7A8799` | Notas al pie y metadatos |
| `tinta-600` | `#5C697A` | Texto secundario y de apoyo |
| `tinta-900` | `#1D252F` | Texto principal |

### 3.4 Colores funcionales — fuera de la identidad

Los estados del sistema **no forman parte de la marca** y están documentados
aparte para que nadie los use como decoración.

| Estado | HEX | Tenue |
|---|---|---|
| Éxito | `#1D7C61` | `#E1F4EF` |
| Aviso | `#A3630A` | `#FCF0D9` |
| Error | `#C13425` | `#FAE7E5` |

### 3.5 Reglas de combinación

1. **Un solo bloque sólido azul por pantalla.** El bloque de la Cátedra, el
   titular del hero y el botón principal son suficientes.
2. **El azul institucional nunca se usa como texto sobre blanco** para más de
   una línea: se reserva a enlaces, botones y antetítulos.
3. **Los tres niveles de superficie son los únicos permitidos**:
   `tinta-0` (blanco), `hielo` (azul muy claro) y `ceted-800/900` (azul
   profundo). No se inventan intermedios.
4. **Ningún degradado de color.** El único degradado autorizado es
   `.velo-foto`, que vela una fotografía para garantizar el contraste del texto.

---

## 4. Código tipográfico

Dos familias, dos funciones. Nunca una tercera.

### 4.1 Display · Archivo Variable

Titulares y todo lo que necesita impacto. Tiene eje de ancho: en cuerpos
grandes se estira (`font-estirado`, 112 %) y por debajo de 34 px vuelve al
ancho natural, porque la versión estrecha no garantiza legibilidad.

### 4.2 Texto · Figtree Variable

Cuerpos, subtítulos, datos. Humanista geométrica, legible en tamaños pequeños,
con pesos suficientes para marcar resaltes dentro del párrafo.

### 4.3 Escala

Todos los tamaños son fluidos (`clamp`). El mínimo y el máximo respetan la
jerarquía por contraste que propone el manual.

| Token | Rango | Función |
|---|---|---|
| `display-1` | 44 → 88 px | Titular de portada y de cabecera de página |
| `display-2` | 34 → 60 px | Titular de sección |
| `display-3` | 24 → 34 px | Titular de tarjeta y de bloque |
| `lead` | 18 → 21 px | Texto complementario |
| `body` | 17 px | Cuerpo por defecto |
| `sm` | 15 px | Texto secundario |
| `nota` | 13 px | Notas al pie y metadatos |
| `etiqueta` | 12 px | Antetítulos en versalitas, `tracking: 0.16em` |

### 4.4 Reglas

- **Dos pesos por bloque.** El titular usa un solo peso (`semibold`): el
  contraste lo hace el tamaño, no la negrita.
- **El cuerpo no baja de 15 px.** Por debajo, la legibilidad deja de estar
  garantizada.
- **Los antetítulos siempre en versalitas** con `tracking-etiqueta`, precedidos
  de una línea corta (`.antetitulo`). Sustituyen al punto y al bullet.
- **El interlineado del titular es cerrado** (0.96–1.12 según tamaño) para que
  el bloque se lea como una masa; el del cuerpo es amplio (1.68).

### 4.5 Cómo se auto-alojan

Las tipografías se sirven desde el propio proyecto (`@fontsource-variable`), no
desde Google Fonts. Motivo: conectividad y trazabilidad. En producción se
recomienda añadir `font-display: swap` —ya activo— y precargar el subtipo
latino.

---

## 5. El logotipo

### 5.1 El archivo vectorial

`docs/CETED.png` es un mapa de bits de 1024 px con fondo blanco y bordes suaves:
inservible para una interfaz. Se generó un **trazado vectorial de una sola tinta**
por contorno, publicado como `src/assets/brand/logo-paths.ts` y montado como
componente React.

Ventajas que hizo decidirse por esta vía:

- escala sin pérdida a cualquier tamaño, incluido el favicon;
- **hereda `currentColor`**, de modo que el mismo componente sirve sobre fondo
  claro y oscuro sin generar variantes;
- 10 KB, frente a los 516 KB del PNG recortado.

Los 46 contornos se emiten en un **único atributo `d`**. La regla par-impar es
la que abre los huecos del logotipo; separados en varios `<path>`, esos huecos
se rellenarían y las letras desaparecerían.

### 5.2 Área de seguridad

El espacio libre alrededor del identificador equivale a la altura de su trazo.
En la práctica, el componente `Logo` ya entrega una altura y deriva el ancho de
la proporción real (925:388), de modo que **es imposible deformarlo**.

### 5.3 Usos incorrectos

| Prohibido | Motivo |
|---|---|
| Deformar o estirar | El ancho se deriva de la proporción real |
| Girar o inclinar | El logotipo tiene un ángulo propio |
| Sombrear, resplandar o degradar | Es una tinta plana |
| Aplicar transparencias | El logo no comparte plano con el fondo |
| Encerrarlo en un marco o campo de forma | El marco lo convierte en ilustración |
| Usarlo como máscara de un bloque de color | Compite con el contenido |
| Reconstruirlo con una tipografía | Es lettering exclusivo |

### 5.4 Tamaño mínimo

| Soporte | Altura mínima |
|---|---|
| Pantalla | 28 px |
| Impresión | 10 mm |

Por debajo de 28 px en pantalla los textos de las bandas dejan de leerse: se
omite el componente y se usa solo el texto del nombre en `font-display`.

### 5.5 Convivencia con otras marcas

Cuando el logotipo aparece junto a otro (UNESCO, Redec, Agence Française de Développement), los
tamaños se ajustan **ópticamente** para que ambos se perciban del mismo tamaño,
y se mantiene un espacio equivalente a la altura del trazo entre ellos.

---

## 6. Gráficas de apoyo

Dos recursos propios, construidos en código SVG/CSS. Se distinguishes del
logotipo y nunca se reproducen ni se recolorean de forma libre.

### 6.1 Malla de decisión

Red ortogonal de nodos cuadrados unidos en ángulo recto. Representa el método
del CETED —diagnosticar, decidir, ejecutar— y cumple tres funciones: textura de
fondo, ritmo que separa bloques y contenedor.

- **Opacidad:** 7–20 %. A partir de ahí compite con el texto.
- **Nunca** se coloca encima de un titular sin la capa de aislamiento (`z-10`).
- Escala con `background-size: 8rem` y se acompaña de un segundo nivel de
  retícula de 2 rem.

### 6.2 Vector

Chevron abierto en 45°. Es la **unidad mínima de navegación**: enlaces, viñetas
de lista y transiciones de sección. Se desplaza 1 unidad al interactuar con su
contenedor.

### 6.3 Antetítulo

Línea de 2.25 rem × 2 px en versalitas. Es el signo de entrada del sistema y
aparece en todas las secciones.

---

## 7. Código fotográfico

**Ninguna fotografía institucional se publica en color natural.**

- `.foto-marca` → sobre superficies claras. Se neutraliza el color y se
  multiplica, de modo que el azul del archivo tiñe el bloque.
- `.foto-oscuro` → sobre superficies profundas. Se invierte y se baja al 24 %:
  la imagen aparece como un fantasma de fondo y el texto manda siempre.

El ajuste se hace en CSS, no por archivo. Así el conjunto es coherente aunque
las fotos lleguen de fuentes distintas y de distintos lotes.

Los fondos fotográficos que llevan texto llevan además `.velo-foto`, el único
degradado autorizado, que garantiza el contraste desde abajo.

---

## 8. Retícula y ritmo

| Concepto | Valor |
|---|---|
| Contenedor de contenido | 1200 px (`--container-proceso`) |
| Contenedor a sangre | 1440 px (`--container-extenso`) |
| Rejilla | 12 columnas, paso de 8 px |
| Ritmo vertical de sección | 56 → 120 px (`--spacing-seccion`) |
| Base de espaciado | 4 px |
| Radios | 0 · 2 · 4 · 8 · 16 px |
| Sombras | Solo dos: `--shadow-filo` y `--shadow-flotante` |
| Curvas | `220ms cubic-bezier(0.22, 0.61, 0.36, 1)`, sin rebote |

El margen lateral es de 20 px en móvil, 32 px en tablet y 48 px en escritorio.

---

## 9. Rail lateral

Toda sección larga puede numerarse en el margen izquierdo: índice grande, línea
vertical y etiqueta en vertical (`writing-mode: vertical-rl`). Hereda la
estructura de los pliegos del manual de la REDEC y desaparece por debajo de
1024 px, donde competiría con el contenido.

---

## 10. Movimiento

Sobrio, corto y sin rebote. Un solo par de valores:

- `--transition-marca` para color y opacidad;
- `--animate-subir` (620 ms, desplazamiento de 1.25 rem) para la entrada de
  bloques.

Se respeta `prefers-reduced-motion: reduce`, que desactiva todas las
animaciones.

---

## 11. Accesibilidad

La identidad no puede impedir que el sitio se use.

- Contraste mínimo 4.5:1 en todo el texto sobre su superficie real.
- Foco visible de 2 px en azul institucional; sobre superficie oscura, en
  `ceted-200`.
- Enlace al salto de contenido en la primera pulsación de `Tab`.
- Foco movido al contenido en cada cambio de ruta.
- Iconos decorativos con `aria-hidden`; los informativos, con etiqueta.
- Botones de solo icono con texto para lectores de pantalla.
- Fechas con `<time dateTime>` legible por máquina.
- Objetivo táctil mínimo de 44 × 44 px en controles de la cabecera.

---

## 12. Lista de comprobación antes de publicar

```
[ ] El logotipo no está deformado, girado, sombreado ni enmarcado
[ ] Solo hay un bloque azul sólido por pantalla
[ ] Las fotografías están en duotono, nunca en color natural
[ ] Los titulares usan un solo peso y el cuerpo no baja de 15 px
[ ] Los antetítulos van en versalitas con la línea de entrada
[ ] No hay sombras decorativas ni degradados de color
[ ] El texto sobre fotografía conserva contraste de 4.5:1
[ ] El foco es visible en todos los controles
[ ] La página funciona sin animaciones (reduced motion)
[ ] Funciona a 390 px, 768 px, 1440 px y 1920 px
```

---

*Para cualquier ajuste sobre este sistema, modificar
`frontend/src/styles/tokens.css` y actualizar este documento en el mismo
commit.*
