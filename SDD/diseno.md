# Diseño de la sección «Formación de pregrado»

## 1. Objetivo visual

Diseñar la parte de **Pregrado** dentro de la sección **Servicios** con una apariencia institucional, limpia y moderna. La referencia visual es una página de fondo blanco, con una identidad basada principalmente en azul intenso, azul marino y tonos azul claro. La información debe sentirse ordenada y fácil de consultar, sin que los controles de búsqueda ocupen demasiado espacio.

La composición debe conservar la estética de la imagen de referencia, pero con estos cambios obligatorios:

- En la parte superior solo deben aparecer el buscador y un único control de filtro con icono y texto **«Filtrar»**.
- Los filtros por institución, año universitario, período y modalidad deben estar dentro del control «Filtrar», no visibles como botones independientes.
- Las asignaturas deben estar agrupadas en **tres instituciones**, cada una dentro de su propio bloque.
- Se debe eliminar por completo la fila de encabezados que, en una tabla tradicional, diría «Asignatura», «Horas clase», «Período», «Año universitario» y «Modalidad».
- Las filas de datos deben conservar ese orden de información, pero el nombre de la asignatura debe ser el elemento visualmente más destacado de cada fila.

## 2. Fondo, colores y estilo general

- **Fondo principal:** blanco puro o casi blanco (`#FFFFFF`). No utilizar fondos oscuros para esta sección.
- **Azul principal:** azul intenso cercano a `#0D5DD7`. Utilizarlo en iconos, pequeños acentos, botones, enlaces y elementos activos.
- **Azul marino:** azul muy oscuro, cercano a `#0B2D68` o `#102F69`. Utilizarlo en el título principal y en los nombres de las instituciones.
- **Azul claro:** tono muy suave, cercano a `#E4EEFF` o `#EAF2FF`. Utilizarlo como fondo de las cabeceras de las instituciones y para destacar sutilmente información.
- **Bordes:** azul grisáceo muy claro, por ejemplo `#D7E2F3`. Deben ser finos y discretos.
- **Texto secundario:** azul marino o gris azulado, con contraste suficiente sobre el fondo blanco.

La interfaz debe tener bastante espacio en blanco. Evitar sombras fuertes, degradados llamativos, bordes gruesos, colores adicionales o adornos que compitan con el contenido. Las esquinas de los campos y los bloques pueden ser suavemente redondeadas, aproximadamente entre 8 y 12 píxeles.

## 3. Encabezado de la sección

El encabezado se sitúa en la parte superior izquierda del contenido y mantiene la jerarquía tipográfica de la referencia.

1. En primer lugar aparece una pequeña línea horizontal azul, seguida del texto **«SERVICIOS»** en mayúsculas, azul principal, con tipografía sans serif, negrita y tamaño pequeño.
2. Debajo aparece el título **«Formación de pregrado»**, grande, en azul marino y con una tipografía serif elegante. Debe ser el texto de mayor tamaño de toda la sección.
3. Bajo el título aparece una descripción breve en tipografía sans serif, de tamaño mediano y color azul marino:

   > Consulta las asignaturas que se imparten, su organización académica y las instituciones participantes.

El título debe destacar claramente, mientras que la descripción debe ser legible sin competir con él. Mantener una alineación a la izquierda.

## 4. Buscador y filtro

Debajo del encabezado y antes de los bloques de instituciones se encuentra una única fila de controles. Esta fila debe ser sencilla y visualmente equilibrada.

### 4.1. Buscador

- Situado a la izquierda y ocupando la mayor parte del espacio disponible.
- Campo horizontal de fondo blanco, borde fino azul claro y esquinas ligeramente redondeadas.
- A la izquierda del campo debe aparecer un icono de lupa azul.
- Texto de ayuda: **«Buscar asignatura…»**.
- El texto escrito debe mostrarse en azul marino o gris azulado.
- El campo debe tener una altura cómoda y alinearse verticalmente con el botón de filtro.

La búsqueda debe permitir localizar asignaturas por su nombre. No añadir un botón de búsqueda separado: el icono de lupa forma parte del propio campo.

### 4.2. Control «Filtrar»

- Situado a la derecha del buscador, en la misma fila.
- Debe ser un único botón con fondo blanco, borde fino azul claro y esquinas ligeramente redondeadas.
- Debe incluir un icono de embudo o filtro en azul principal y, a su lado, el texto **«Filtrar»**.
- No mostrar por separado botones para institución, año universitario, período, diurno o por encuentro.
- Al activarlo, debe desplegar un pequeño panel flotante debajo del botón, con fondo blanco, borde fino y una sombra muy suave.

### 4.3. Contenido del panel de filtros

El panel desplegable debe organizar las opciones por categorías, con títulos pequeños y claros. Debe permitir filtrar por:

- **Institución:** las tres instituciones disponibles.
- **Año universitario:** los años en que se imparten las asignaturas.
- **Período:** primer período, segundo período u otros períodos que existan en los datos.
- **Modalidad:** diurno o por encuentro.

Las opciones pueden presentarse como listas de selección o controles compactos, sin convertir el panel en un formulario visualmente pesado. El panel debe tener un botón principal **«Aplicar filtros»** y una acción secundaria discreta **«Limpiar filtros»**. Cuando haya filtros activos, el control «Filtrar» puede mostrar un pequeño indicador azul con la cantidad de filtros aplicados. También puede mostrarse debajo de los controles una línea de etiquetas pequeñas con los filtros activos y una opción para quitarlos.

El panel debe cerrarse visualmente al aplicar los filtros o al volver a pulsar el control. No debe ocupar permanentemente el espacio superior de la sección.

## 5. Organización por instituciones

Después de la fila del buscador y el filtro aparecen **tres bloques de instituciones**, uno debajo del otro. Los tres deben mostrarse expandidos y con sus asignaturas visibles. No utilizar un único bloque abierto y dejar los otros como barras contraídas: las tres instituciones deben tener presencia visual equivalente.

Cada institución utiliza un contenedor independiente con estas características:

- Fondo blanco para el área de las asignaturas.
- Borde exterior fino azul claro.
- Esquinas suavemente redondeadas.
- Separación vertical suficiente respecto al bloque anterior y al siguiente.
- La cabecera ocupa todo el ancho del contenedor y tiene un fondo azul claro suave.

### 5.1. Cabecera de cada institución

La cabecera debe mantener la composición de la referencia:

- A la izquierda, un icono lineal azul que represente una institución académica o edificio universitario. El icono debe ser sencillo, sin rellenos pesados.
- A continuación, una línea vertical fina azul que separe el icono del texto.
- Junto a la línea, una etiqueta pequeña en mayúsculas: **«INSTITUCIÓN»**, en azul principal y negrita.
- Debajo de esa etiqueta, el nombre de la institución en tipografía serif, grande y azul marino.
- En el extremo derecho puede aparecer la cantidad de asignaturas incluidas en ese bloque, por ejemplo, «12 asignaturas», en tipografía sans serif de tamaño normal. Este dato debe ser discreto y no competir con el nombre.

Los nombres concretos de las tres instituciones deben tomarse de la información real del proyecto. No inventar nombres ni sustituirlos por instituciones ficticias.

## 6. Presentación de las asignaturas

Las asignaturas aparecen inmediatamente debajo de la cabecera de su institución. Deben organizarse en filas horizontales, con una separación fina entre filas. **No debe existir una fila superior con nombres de columnas o descripciones de los datos.**

Cada fila contiene cinco datos, siempre en este orden y alineados de forma consistente:

1. Nombre de la asignatura.
2. Cantidad de horas clase.
3. Período en que se imparte.
4. Año universitario.
5. Modalidad: diurno o por encuentro.

La distribución debe recordar a una tabla, pero sin encabezados. Los datos de cada fila deben quedar alineados entre sí para que sea sencillo comparar las asignaturas de una misma institución.

### 6.1. Énfasis en el nombre de la asignatura

La primera columna es la única que debe recibir un énfasis visual claro:

- El nombre de la asignatura debe aparecer en negrita o con un peso tipográfico seminegrita.
- Debe utilizar azul marino, con un tamaño ligeramente superior o igual al de los demás datos.
- Puede incluir una marca vertical azul muy fina o un fondo azul extremadamente suave en el área de esa primera columna, siempre de manera sutil.
- El nombre debe ser fácil de localizar al recorrer la lista.

Las otras cuatro columnas deben tener un tratamiento más neutral: tipografía sans serif normal, color azul marino o gris azulado y sin negritas innecesarias. No resaltar todas las columnas con colores diferentes ni convertir cada dato en una tarjeta independiente.

### 6.2. Horas, período y año universitario

- Las horas deben mostrarse de forma compacta, por ejemplo: **«64 h»**.
- El período debe escribirse de forma breve y uniforme, por ejemplo: **«1.er período»** o **«2.º período»**.
- El año universitario debe mostrarse como **«1.er año»**, **«2.º año»**, etc.
- Mantener una alineación constante para que los valores correspondientes queden visualmente en la misma posición en todas las filas.

No añadir títulos de columna encima de estos datos. La información debe aparecer directamente en cada fila.

### 6.3. Modalidad

La modalidad puede distinguirse mediante una etiqueta compacta con forma de píldora:

- **Diurno:** fondo blanco, borde azul principal y texto azul principal.
- **Por encuentro:** fondo azul claro suave, sin borde marcado o con un borde muy discreto, y texto azul más oscuro.

Ambas etiquetas deben tener dimensiones y peso visual similares. No utilizar colores de alerta ni tonos que no pertenezcan a la paleta de la sección.

### 6.4. Separación de las filas

- Usar líneas horizontales finas en azul grisáceo claro.
- Mantener una altura suficiente para que los datos respiren.
- Evitar líneas verticales entre todas las columnas; la alineación y el espacio deben ser suficientes para distinguir los datos.
- No alternar fondos muy contrastados entre filas. Si se necesita diferenciar filas, utilizar un cambio casi imperceptible de blanco a azul muy claro.
- El contenido debe conservar un aspecto limpio y ligero, sin exceso de bordes.

## 7. Proporciones y alineación

En pantallas grandes, el contenido debe ocupar prácticamente todo el ancho disponible, dejando márgenes laterales generosos y equilibrados. La referencia utiliza una composición horizontal amplia.

- El encabezado, los controles y los bloques de instituciones deben compartir el mismo eje izquierdo y derecho.
- El buscador y el filtro deben quedar alineados en una sola fila.
- Las cabeceras de las instituciones deben ocupar todo el ancho de sus respectivos bloques.
- Las cinco posiciones de datos de cada asignatura deben conservar la misma distribución en todos los bloques.
- La primera posición, correspondiente al nombre de la asignatura, debe disponer de más espacio que las demás para admitir nombres largos.
- Evitar que los nombres largos se monten sobre los valores de horas, período, año o modalidad.

La jerarquía debe ser clara: primero se identifica que se está en Servicios, después se lee «Formación de pregrado», luego se utiliza el buscador o el filtro y finalmente se consultan las asignaturas agrupadas por institución.

## 8. Adaptación a pantallas pequeñas

En tabletas y móviles, la sección debe reorganizarse sin perder su identidad visual ni provocar desplazamiento horizontal de toda la página.

- El título debe reducir su tamaño de manera proporcional y mantenerse alineado a la izquierda.
- El buscador debe ocupar todo el ancho disponible.
- El botón «Filtrar» debe aparecer junto al buscador si hay espacio; cuando no lo haya, puede situarse debajo, alineado a la izquierda o a la derecha.
- El panel de filtros debe adaptarse al ancho de la pantalla y no quedar cortado fuera de ella.
- Las cabeceras de las instituciones deben conservar el icono, la etiqueta y el nombre, permitiendo que el nombre ocupe dos líneas si es necesario.
- Las filas de asignaturas pueden pasar a una disposición vertical compacta: nombre destacado en la parte superior y, debajo, los otros cuatro datos distribuidos en una o dos líneas.
- En móvil, los datos secundarios pueden llevar etiquetas pequeñas como «Horas», «Período», «Año» y «Modalidad» para evitar confusiones, pero no debe reaparecer una fila general de encabezados.
- Las etiquetas de modalidad deben conservar su aspecto de píldora y no desbordar el contenedor.

## 9. Estados visuales

La apariencia debe contemplar estos estados:

- **Normal:** buscador y botón «Filtrar» blancos, con bordes azul claro.
- **Filtro abierto:** panel blanco visible debajo del botón, con separación y sombra muy suaves.
- **Filtro activo:** pequeño indicador azul en el botón o etiquetas discretas que muestren los filtros seleccionados.
- **Búsqueda sin resultados:** mostrar un mensaje centrado y sencillo, por ejemplo, «No se encontraron asignaturas con esos criterios», acompañado de una opción discreta para limpiar la búsqueda o los filtros.
- **Sin asignaturas para una institución:** no mostrar una tabla vacía; ocultar el bloque mientras haya filtros activos que no devuelvan resultados, o mostrar un mensaje breve dentro del bloque si corresponde.

## 10. Elementos que deben evitarse

- No añadir botones independientes para institución, año, período o modalidad en la parte superior.
- No mostrar una barra de pestañas «Todas / Diurno / Por encuentro».
- No mostrar la fila de encabezados de la tabla.
- No destacar todas las columnas por igual: el nombre de la asignatura debe sobresalir sobre los demás datos.
- No contraer dos de las tres instituciones dejando visible solo una.
- No utilizar tarjetas separadas para cada valor de horas, período o año.
- No introducir colores ajenos a la identidad azul y blanca.
- No utilizar sombras fuertes, fondos oscuros, botones grandes innecesarios ni elementos decorativos que resten espacio a la información.
- No inventar nombres de instituciones, asignaturas, horas o períodos: los datos visibles deben proceder de la información real disponible.

## 11. Resultado esperado

La sección debe parecer un catálogo académico institucional. En la parte superior se ve únicamente el buscador y el botón «Filtrar». Debajo aparecen tres bloques equivalentes, uno por institución, cada uno con su cabecera azul clara y la lista completa de asignaturas. Las filas conservan las cinco posiciones de información, pero no tienen encabezados; el nombre de cada asignatura se distingue claramente y los demás datos se presentan de forma sobria. El resultado debe ser visualmente muy cercano a la imagen de referencia, con una interfaz más sencilla en la zona de búsqueda y filtros y con las tres instituciones plenamente desarrolladas.
