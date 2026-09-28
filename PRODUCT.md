# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Productoras y showrunners** que buscan guionistas junior o ayudantes de guion para salas y proyectos. Llegan con poco tiempo, normalmente desde un enlace en un email, una candidatura o LinkedIn, y necesitan decidir rápido si la voz y el oficio encajan.
- **Festivales, laboratorios y residencias de guion** cuyos comités evalúan convocatorias. Leen con más calma, comparan candidaturas y buscan trayectoria, loglines sólidas y material verificable (guiones, selecciones, formación).

Ambas audiencias tienen el mismo peso. La autora es una guionista emergente con base en Barcelona.

## Product Purpose

Portfolio profesional de una guionista: presenta su voz, sus proyectos (largometraje, cortometraje, serie, piloto, teatro) y su trayectoria para abrir puertas a trabajo y a selecciones.

El éxito es una mezcla equilibrada, sin una acción dominante: que pidan o descarguen un guion, que contacten para trabajo o colaboración, o que descarguen el CV. La web funciona como tarjeta de presentación completa; cualquiera de esas tres acciones cuenta.

## Positioning

La web habla el idioma del guion: cada página se abre con un encabezado de escena (`INT. PORTFOLIO — DÍA`, `EXT. ARCHIVO DE GUIONES — DÍA`…) y la transición `CORTE A:`. Es el portfolio de alguien que escribe para la pantalla, no una web de autor genérica. Los proyectos se presentan con la ficha que un lector profesional espera: logline, formato, género, año, páginas/duración, estado y premios o selecciones.

## Operating Context

- Se comparte como enlace en candidaturas, emails a productoras y formularios de festivales/laboratorios.
- El lector profesional escanea loglines y ficha antes de decidir leer un guion completo.
- Los guiones se entregan de dos formas por proyecto: **descarga pública** del PDF o **"Solicitar guion"** por email (bajo petición), según el campo `download`.
- La autora edita el contenido ella misma en Markdown (`src/content/`) sin tocar código; el build valida los campos y falla con un mensaje claro si algo es incorrecto.

## Capabilities and Constraints

- **Stack existente:** Astro estático, desplegado en GitHub Pages vía GitHub Actions en cada push a `main`. Paso a dominio propio solo con variables de entorno (`SITE_URL`, `BASE_PATH`); todas las rutas pasan por `withBase()` / `localizedPath()`.
- **Idiomas:** castellano (por defecto), catalán e inglés. Si falta una traducción de un guion, se muestra la versión en castellano. Textos de interfaz en `src/i18n/ui.ts`.
- **Páginas:** inicio (hero + proyectos destacados), sobre mí, proyectos (listado con filtros por formato y género), ficha de proyecto, CV, contacto, 404.
- **Contacto:** email y redes; formulario Formspree opcional si se define `PUBLIC_FORMSPREE_ID`.
- **Tema claro/oscuro** con conmutador.
- **Arquitectura:** DDD en `src/modules/{scripts,profile,shared}`; componentes de presentación sin lógica de negocio en `src/components/`. Tests unitarios (Jest) y e2e (Playwright).
- **Terminología de estados:** en desarrollo, terminado, producido. **Formatos:** largometraje, cortometraje, serie, piloto, teatro, otro.
- **Portadas:** verticales, proporción 3:4.

## Brand Commitments

- La metáfora de guion (encabezados de escena, `CORTE A:`) es parte de la identidad del producto.
- Voz en primera persona, cercana y sobria; el tagline actual de ejemplo ("Escribo historias pequeñas que ocurren en lugares enormes") marca el registro, pero es placeholder.

## Evidence on Hand

**Todo el contenido actual es placeholder** y será sustituido por la autora:

- Nombre ("Nombre Apellido"), bio, email, redes, formación, experiencia y premios en `src/content/profile/{es,ca,en}.md`.
- Tres proyectos de ejemplo (*El último faro*, *Domingo de lluvia*, *Ruido blanco*) en `src/content/scripts/`, con PDFs de muestra en `public/files/scripts/`.
- CVs de muestra en `public/files/cv/`, foto `public/images/profile.svg`, portada `public/images/covers/placeholder.svg`.

No inventar nunca créditos, premios, selecciones, testimonios, productoras, cifras ni citas de prensa. El diseño debe funcionar con portadas ausentes o genéricas y con pocos proyectos.

## Product Principles

1. **El guion es el protagonista.** Loglines y fichas se leen antes que cualquier adorno; llegar a leer o pedir un guion debe costar un clic.
2. **Oficio visible.** La forma de la web demuestra que la autora conoce el lenguaje y el formato profesional del guion.
3. **Dos ritmos de lectura.** Escaneable en 30 segundos para una productora, con profundidad suficiente para un comité de festival.
4. **Editable sin código.** Cualquier cambio de diseño debe seguir funcionando con el contenido que la autora añada en Markdown, en los tres idiomas y con textos de longitud variable.
5. **Solo verdad verificable.** Ningún mérito que no esté en el contenido.

## Accessibility & Inclusion

Enlace "Saltar al contenido", tema claro/oscuro y contenido trilingüe ya forman parte del producto; se mantienen. No se ha fijado un estándar formal más allá de eso.
