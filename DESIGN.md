---
name: Portfolio de guionista (Sara Abreu)
description: Un cuaderno de guionista en melocotón y cobalto; bandas de color como cambios de capítulo, cada sección abierta por un encabezado de escena real.
colors:
  peach: "#ffe3d0"
  peach-soft: "#fff1e7"
  cobalt: "#0262de"
  cobalt-deep: "#0247a3"
  taupe: "#ccb6a6"
  ink: "#14110f"
  ink-soft: "#5e5048"
typography:
  display:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(2.75rem, 1.1rem + 6vw, 5.25rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "0.04em"
  headline:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3vw, 3.75rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "0.08em"
  title:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(1.625rem, 1.25rem + 1.6vw, 2.5rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "0.08em"
  subtitle:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.08em"
  body:
    fontFamily: "Barlow, DIN Next, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  lead:
    fontFamily: "Barlow, DIN Next, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 300
    lineHeight: 1.65
  label:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.18em"
  slugline:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.04em"
rounded:
  none: "0px"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-6: "1.5rem"
  space-8: "2rem"
  space-12: "3rem"
  space-16: "4rem"
  space-24: "6rem"
  space-32: "8rem"
  gutter: "16px"
  band-pad: "clamp(4rem, 3rem + 5vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.peach}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.cobalt}"
  button-secondary:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.peach}"
  filter-chip:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.cobalt}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "44px"
  filter-chip-selected:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.peach}"
  tag:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.75rem"
  input-underline:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0"
  input-underline-focus:
    backgroundColor: "{colors.peach-soft}"
  band-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.peach}"
    padding: "{spacing.band-pad} 0"
  band-taupe:
    backgroundColor: "{colors.taupe}"
    textColor: "{colors.ink}"
---

# Design System: Portfolio de guionista (Sara Abreu)

## Overview

**Creative North Star: "El cuaderno de guionista"**

El sitio es un cuaderno de trabajo en melocotón y cobalto, no una plantilla. Las páginas alternan bandas completas de papel melocotón y cobalto saturado, como cambios de capítulo, y cada sección se abre con un encabezado de escena de guion real (`INT. PORTFOLIO — DÍA`). El mundo lo fijó la autora a partir de su web anterior: la regla del rediseño es "mismo mundo, mejor oficio", no reinterpretarlo.

La densidad es baja y editorial: mucho aire vertical entre bandas, columnas de lectura estrechas, titulares en mayúsculas geométricas finas con tracking amplio. La profundidad no viene de sombras sino del cambio de tono de banda y de filetes finos. Los únicos ornamentos son motivos de trazo dibujados a mano (asterisco, estrella-sello, destello), heredando el color del texto. El sitio rechaza explícitamente el portfolio de "cine oscuro" con tira de película y fotogramas.

Solo hay tema claro: el melocotón y el cobalto son la identidad, no un modo.

**Key Characteristics:**
- Bandas de tono completo (melocotón / cobalto / taupe) que redefinen todos los colores semánticos a la vez.
- Encabezados de escena en Courier Prime abriendo cada banda; Courier solo para notación de guion.
- Titulares Jost 300 en mayúsculas con tracking; cuerpo Barlow 300/400.
- Esquinas rectas, sin sombras, filetes de 1px.
- Motivos de trazo (asterisco, estrella-sello, destello) como única ornamentación.
- Firma: la página de guion del hero cae y se teclea al cargar, y sigue al puntero y al scroll.

## Colors

Una paleta de dos voces (papel melocotón y cobalto eléctrico) sostenida por un taupe cálido y una tinta casi negra.

### Primary
- **Cobalto de tinta azul** (`cobalt`): color de marca. Titulares sobre melocotón, enlaces, botones, sluglines, motivos, y fondo de las bandas saturadas y del menú móvil a pantalla completa. También fondo de las portadas vacías de las tarjetas de proyecto.
- **Cobalto profundo** (`cobalt-deep`): acento sobre las bandas taupe, donde el cobalto normal pierde contraste.

### Secondary
- **Papel melocotón** (`peach`): fondo por defecto del sitio, de cabecera y pie, y color de texto/titulares dentro de las bandas cobalto. Es también `theme-color` del navegador.
- **Melocotón pálido** (`peach-soft`): solo estado de foco de los campos del formulario.

### Tertiary
- **Taupe cálido** (`taupe`): paneles y hojas secundarias (grupos de habilidades, hoja de guion en la ficha de proyecto) y bandas intermedias de la home. Nunca como color de texto.

### Neutral
- **Tinta** (`ink`): texto de cuerpo sobre melocotón y taupe; titulares sobre taupe.
- **Tinta suave** (`ink-soft`): texto atenuado (`--muted`) sobre melocotón: géneros, metadatos, legales.

### Tonos semánticos

Los componentes nunca usan la paleta base directamente para texto y acentos: usan las variables semánticas `--bg`, `--fg`, `--heading`, `--muted`, `--accent`, `--on-accent` y `--line`, que cada banda redefine con `data-tone`:

| Tono | bg | fg | heading | accent | on-accent | line |
|---|---|---|---|---|---|---|
| `peach` (defecto) | peach | ink | cobalt | cobalt | peach | cobalto al 35% |
| `cobalt` | cobalt | peach | peach | peach | cobalt | melocotón al 45% |
| `taupe` | taupe | ink | ink | cobalt-deep | peach | tinta al 25% |

### Named Rules

**The Band Tone Rule.** El color se cambia a nivel de banda, nunca de elemento suelto. Un bloque nuevo declara `data-tone="peach" | "cobalt" | "taupe"` y hereda todo; un componente que fija un hex propio para texto o acento rompe la inversión de tonos.

**The Two Voices Rule.** Melocotón y cobalto son las dos voces; el taupe es un panel, no una tercera voz. No se introducen acentos de otros tonos (ni rojos, ni verdes, ni gradientes).

## Typography

**Display Font:** Jost (con Futura, Century Gothic, sans-serif)
**Body Font:** Barlow (con DIN Next, Helvetica Neue, Arial, sans-serif)
**Label/Mono Font:** Courier Prime (con Courier New, monospace), solo para notación de guion

**Character:** Mayúsculas geométricas finas y espaciadas para la voz de autora, un grotesco técnico ligero para leer, y Courier como cita literal del formato de guion.

### Hierarchy
- **Display** (Jost 300, `display`, interlineado 0.95, tracking 0.04em, mayúsculas): el nombre en el hero (hasta 5.25rem). Solo uno por página.
- **Headline** (Jost 300, `headline`, 1.1, tracking 0.08em, mayúsculas): títulos de sección grandes (`SceneHeading size="lg"`), intereses, menú móvil, nombre en el pie.
- **Title** (Jost 300, `title`, 1.1, tracking 0.08em, mayúsculas): título por defecto de `SceneHeading`, cita destacada en cursiva.
- **Subtitle** (Jost 300–400, `subtitle`, mayúsculas): títulos de tarjeta, de grupo de habilidades y de línea de tiempo; eslogan del hero en cursiva y minúsculas de frase.
- **Body** (Barlow 400, `body`, 1.7): cuerpo; columna de lectura de 40rem (`--reading-width`), párrafos de carta a 60ch.
- **Lead** (Barlow 300, `lead`, 1.65): entradillas y textos de intereses.
- **Label** (Jost 400–500, 0.875rem, tracking 0.18em, mayúsculas): botones, navegación de escritorio, marca, "leer más", lugares de la línea de tiempo, etiquetas de formulario.
- **Slugline** (Courier Prime 700, 0.875rem, mayúsculas, color de acento): encabezados de escena, metadatos de formato·año de las tarjetas, periodos de la línea de tiempo, leyendas de filtros.

### Named Rules

**The Courier Is Quotation Rule.** Courier Prime aparece solo donde el contenido imita la notación de guion (slugline, formato, periodo). Nunca en cuerpo, botones ni navegación.

**The Real Slugline Rule.** Un encabezado de escena es una slugline de guion con forma real (`INT./EXT. LUGAR — DÍA/NOCHE`), no una etiqueta de categoría sobre el título. Si el texto no se lee como un encabezado de escena, no va en Courier ni encima del título.

**The Justified Prose Rule.** El texto corrido (bio, sinopsis, loglines, entradillas, intereses, carta, descripciones del CV, notas) va justificado con partición silábica automática (`hyphens: auto`, idioma de la página) y sin `text-wrap: pretty`; la lista vive en una sola regla de `global.css`. Titulares, etiquetas, botones, citas centradas, subtítulos y la página de guion del hero no se justifican. En columnas estrechas de móvil, el texto se ensancha (p. ej. la descripción del CV pasa bajo la viñeta) antes que dejar huecos.

**The Light Caps Rule.** Los titulares son Jost 300 en mayúsculas con tracking (0.08em o más). No se usan pesos de display por encima de 400.

## Layout

Modelo de bandas a ancho completo apiladas verticalmente, cada una con relleno `band-pad` arriba y abajo y un contenedor centrado de 76rem (`--content-width`) con márgenes laterales `gutter` (16px en móvil, 40px desde 768px). El texto largo se limita a 40rem (`--reading-width`) o a 30–60ch según el bloque.

El ritmo de espaciado usa la escala `space-*` (base 0.25rem). Entre título de sección y contenido hay `space-12`; entre ítems de listas con filete, `space-6` a `space-12`.

Responsive: una columna en móvil. Desde 900px, las composiciones de dos columnas asimétricas (hero con marca a la derecha, carta de motivación 5fr/7fr con cabecera fija, intereses 7fr/5fr, contacto 1fr/1fr) y la navegación en línea. Desde 768px, la línea de tiempo pasa a columna de fecha de 11rem y los grupos de habilidades a 2 columnas. Las tarjetas usan rejilla `auto-fill` con mínimo 17rem. Objetivos táctiles de 44–48px.

## Elevation & Depth

Sistema plano. No hay ninguna sombra en el código. La profundidad se transmite por cambio de tono (una hoja melocotón dentro de una banda cobalto, un panel taupe sobre melocotón) y por filetes de 1px en `--line`. La cabecera es fija (`sticky`) y se separa solo con un filete inferior.

### Named Rules

**The Paper Not Glass Rule.** Las superficies son papel: sin sombras, sin desenfoques, sin transparencias apiladas. Para separar, cambia el tono o traza un filete.

## Shapes

Esquinas rectas en todo (`rounded.none`, `border-radius: 0` explícito en botones e inputs). Bordes de 1px en color `--line` para etiquetas, chips y listas; los campos de formulario solo llevan filete inferior. Las portadas de proyecto son rectángulos 3:4 recortados.

La única curvatura del sistema está en los motivos gráficos (`Motif`), que heredan `currentColor`:
- **Asterisco:** rayos de trazo fino (1.6, extremos redondeados, trazo no escalable). Firma del hero y de contacto/404.
- **Estrella-sello:** estrella festoneada de 12 puntas, rellena.
- **Destello:** estrella de cuatro puntas curvas, rellena.

### Named Rules

**The Square Corner Rule.** Nada lleva esquinas redondeadas; el redondeo pertenece solo a los motivos dibujados.

## Components

### Buttons
Rectos, finos y en mayúsculas: una etiqueta de rodaje, no una píldora.
- **Shape:** esquinas rectas (0), borde de 1px en `--accent`, altura mínima 48px, relleno 0.75rem × 1.5rem.
- **Primary:** relleno `--accent` con texto `--on-accent` (cobalto con texto melocotón sobre papel; al revés en banda cobalto).
- **Secondary:** transparente con borde y texto `--accent`.
- **Hover / Focus:** primary y secondary intercambian relleno en 220ms `ease-out`; foco con contorno de 2px en `--accent` y separación de 3px.
- **Enlace de acción:** "Contacto →" en label de Jost, sin borde, a 48px de alto.

### Chips (filtros)
- **Style:** borde 1px `--line`, texto Jost en mayúsculas en `--accent`, 44px de alto.
- **State:** hover refuerza el borde a `--accent`; seleccionado se rellena de `--accent` con texto `--on-accent`. Radio nativo oculto; el foco se dibuja en la etiqueta.
- **Alcance:** los filtros solo actúan sobre la lista audiovisual (`[data-script-results]`). Las obras de teatro (`format: theatre`) van aparte, en la banda taupe `#dramaturgia` («INT. TEATRO — NOCHE» / Dramaturgia) con la misma tarjeta; si no hay obras, la banda y el subtítulo «Audiovisual» no se pintan.
- **Fecha:** un guion puede llevar `date` (texto libre, p. ej. «Junio 2026»); tarjetas y ficha la muestran en lugar del año (`getDisplayDate()`), y la ficha la rotula «Fecha».

### Tags
Etiquetas estáticas con borde de 1px `--line`, texto 0.875rem, relleno 0.25rem × 0.75rem.

### Cards / Containers
- **Cuadrícula de destacados (`FeaturedReel`, home):** planos 16:9 a sangre de borde a borde, separados por filetes de 2px del tono de la banda; 3 columnas desde 1000px, 2 desde 640px, 1 en móvil; un plano huérfano ocupa la fila en 21:9. Imagen: `still` a sangre; si falta, la portada 3:4 entera a la derecha sobre cobalto; si tampoco hay, el asterisco. Etiqueta de papel melocotón abajo a la izquierda (slugline formato · año + título), siempre visible. Hover/foco: una hoja cobalto al 92% sube desde abajo (700ms), la etiqueta se vuelve transparente con texto melocotón, la slugline cede el sitio a una flecha y aparecen géneros y logline (3 líneas). Sin ratón, la ficha cobalto va fija debajo del plano con "Leer más". Entrada: los planos se descubren de izquierda a derecha en cadena.
- **Del papel a la pantalla (`ScriptToScreen`, cabecera de proyectos):** marco cobalto 16:9 que en fase papel se recorta (`clip-path`) a una portadilla carta vertical girada −2°, con agujeros de encuadernación y título subrayado, «escrito por» y autora en Courier. Se abre de lado a lado hasta la pantalla completa (1.1 s, `cubic-bezier(0.65, 0, 0.35, 1)`): la portadilla se desenfoca y entra el cartel de título en Jost 300 cuyo tracking se cierra de 0.4em a 0.12em, con la logline como subtítulo, código de tiempo en Courier (24 fps) y barra de reproducción melocotón. Recorre hasta 5 proyectos reales en bucle; se pausa fuera de pantalla y con la pestaña oculta. Decorativo (`aria-hidden`). Sin JS o con movimiento reducido, se queda en la pantalla del primer proyecto.
- **Currículum (`cv`, `ResumeIcon`):** datos del bloque `resume` del perfil (independiente del resumen de Sobre mí). Cabecera con nombre completo en Jost, «Acerca de mí» y descarga. Cuerpo en dos columnas desde 1000px: línea de tiempo con filete vertical y, por entrada, una viñeta animada (baldosa cuadrada en `--accent` con ilustración de línea en `--on-accent`) más periodo en Courier, cargo en Jost mayúsculas, lugar y descripción; a la derecha, columna cobalto con certificados (viñeta pequeña), habilidades IT en etiquetas, idiomas con medidor de cuatro casillas, competencias y contacto. Viñetas (campo `icon`): guion (lápiz que escribe), maquina (máquina que teclea), rodaje (cámara con bobinas y REC), rodaje-noche (con luna y estrellas), casting (fotos que se barajan y una se marca), megafono (ondas), walkie (transmite), tenis (raqueta que golpea y pelota que bota), libro (página que pasa), idioma (bocadillos que se contestan), ordenador (cabezal de montaje), estrella. Se animan solo mientras están a la vista; con movimiento reducido quedan quietas y completas. No se publican teléfono ni fecha de nacimiento.
- **Contrato (`ContractArt`, contacto):** hoja melocotón girada −3° con el rol de la autora como cabecera y cláusulas en filete (sin la palabra «contrato»); firma la autora, una pluma firma en «Tu firma» (quien contrata) y cae la estrella-sello cobalto con un golpe que hace respingar la hoja. Bucle de 9 s pausado fuera de pantalla; sin movimiento se ve firmado y sellado. Sustituye al asterisco de contacto.
- **Tarjeta de proyecto:** sin marco. Portada 3:4 sobre fondo cobalto (o el título en melocotón si no hay portada), metadatos en slugline, título subtitle, géneros en `--muted`, logline Barlow 300 y "Leer →" subrayado con filete. Hover: la portada escala a 1.035 en 700ms y el título se subraya.
- **Sobres de "¿Qué puedo aportar?" (`SkillGroups`, sobre mí):** sobre cobalto 16:10 sobre banda taupe, solapa triangular `cobalt-deep`, pliegues en filete melocotón y estrella-sello melocotón con destello cobalto en la punta; título en Jost 300 mayúsculas y "Abrir +" en label. Al pulsar (botón con `aria-expanded`): el sello salta y se desvanece, la solapa gira 180° hacia arriba en 3D y una hoja melocotón pautada sube desde dentro con las habilidades en renglones que entran en cascada. Sin JavaScript las cartas se ven abiertas; con movimiento reducido se abren sin giro ni desplazamiento.
- **Paneles y hojas:** bloques con `data-tone` propio (taupe para habilidades y hoja de guion; melocotón dentro de bandas cobalto para carta y formulario), relleno fluido `clamp(1.5rem…3.5rem)`, sin borde ni sombra.

### Inputs / Fields
- **Style:** fondo transparente, solo filete inferior de 1px cobalto, esquinas rectas, texto Barlow en tinta, cursor cobalto. Etiqueta en label de Jost cobalto encima.
- **Focus:** el filete pasa a 2px y el fondo a `peach-soft`; sin contorno.

### Navigation
- **Escritorio (≥900px):** barra fija melocotón con filete inferior; marca a la izquierda y enlaces en label de Jost cobalto; la página actual se subraya.
- **Móvil:** hamburguesa de líneas de 1.5px que se convierte en aspa; abre un panel cobalto a pantalla completa con enlaces en headline melocotón. Escape cierra y devuelve el foco.

### Encabezado de escena (firma)
`SceneHeading`: slugline Courier en `--accent` sobre el título Jost. Abre cada banda.

### Banda de cita
Frase en Jost 300 cursiva a tamaño title (o subtitle en la variante media), centrada entre dos destellos, normalmente en banda cobalto.

### Página de guion del hero (firma)
Junto al nombre, una página de guion en formato carta (8.5:11): hoja cobalto girada −2.5° con texto Courier melocotón, tres agujeros de encuadernación que dejan ver el papel, número de página «1.» y una hoja taupe asomando detrás. El texto se monta con contenido real del perfil en formato profesional: transición de entrada, slugline de la home, el lema y los títulos de los intereses como acción, el nombre como personaje con la acotación «(a cámara)», la frase-manifiesto como diálogo y «CORTE A:» alineado a la derecha. Maqueta de página carta real en `cqw` (márgenes 1.5"/1", diálogo a 2.5", acotación a 3.1", personaje a 3.7"), interlineado sencillo dentro de cada bloque y una línea en blanco (`1lh`) entre bloques. Al cargar, la página cae a su sitio, la hoja de detrás se desliza y el guion se teclea como a máquina (unos 5 s: ritmo irregular determinista, pausas tras la puntuación y entre bloques) con un cursor que viaja con las letras y se queda parpadeando al final. Después la página se inclina en 3D hacia el puntero y se levanta y endereza con el scroll. Es decorativa (`aria-hidden`): su texto ya está en la página. En la misma apertura la slugline superior se teclea con cursor y SARA / ABREU sube letra a letra; con ratón, cada letra que se toca repite ese gesto (cae bajo la línea de corte y vuelve a subir girando, 1.1 s, sin reiniciarse a medias). Todo se anula con `prefers-reduced-motion`.

### Movimiento de la home
- **Cita:** la banda cobalto se abre como un telón al entrar y la frase se lee palabra a palabra con el scroll (de 22% a 100% de opacidad).
- **Intereses:** en reposo solo se ve la palabra, centrada en su fila. Al pasar con ratón (o enfocar con teclado), una hoja cobalto barre la fila, la palabra se desliza a la izquierda (650 ms) y después entra su descripción desde la derecha; al salir, vuelve al centro. En táctil, tocar la palabra (botón con `aria-expanded`) la desplaza y abre su texto debajo; sin JavaScript se ven todas las descripciones.
- **Acreditación (carta de motivación):** junto al título cuelga una acreditación de equipo melocotón (etiqueta en Courier, silueta de foto, nombre, rol y código de barras) de una cinta en V con pinza: representa empezar a trabajar en un plató. Al entrar en pantalla cae y se balancea como un péndulo amortiguado; después se mece suave (pausado fuera de pantalla) y con el ratón encima se balancea más. Sustituye a la estrella-sello. No nombra ninguna productora.
- **Carta:** la hoja melocotón se desenrolla de arriba abajo y los párrafos se asientan en cascada; el cierre entra con un cambio de foco.
- **Nota técnica:** las animaciones ligadas al scroll se escriben con propiedades sueltas (`animation-name`, `animation-timeline`…), nunca con el atajo `animation`: el minificador fusiona el timeline dentro del atajo y el navegador descarta la regla entera.

## Do's and Don'ts

### Do:
- **Do** abrir cada banda nueva con `data-tone` y un `SceneHeading` cuya slugline sea un encabezado de escena real.
- **Do** usar siempre las variables semánticas (`--fg`, `--heading`, `--accent`, `--on-accent`, `--line`) para que el componente funcione en los tres tonos.
- **Do** alternar bandas melocotón y cobalto como cambios de capítulo; el taupe para paneles y bandas puente.
- **Do** mantener titulares en Jost 300 mayúsculas con tracking 0.08em o más, y cuerpo en Barlow a 1.7 de interlineado.
- **Do** separar con filetes de 1px en `--line` y cambios de tono.
- **Do** usar los motivos de `Motif` (asterisco, estrella-sello, destello) en `currentColor` como única ornamentación, y respetar `prefers-reduced-motion` en toda animación.
- **Do** mantener objetivos táctiles de 44–48px.

### Don't:
- **Don't** añadir modo oscuro: el melocotón/cobalto es la identidad.
- **Don't** usar la estética de "cine oscuro": tiras de película, fotogramas, claquetas o fondos negros.
- **Don't** usar sombras, desenfoques ni esquinas redondeadas en superficies, botones o campos.
- **Don't** usar Courier Prime fuera de la notación de guion.
- **Don't** introducir colores fuera de la paleta ni gradientes.
- **Don't** fijar hex a mano en un componente para texto o acentos; cambia el tono de la banda.
