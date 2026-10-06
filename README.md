# Portfolio de guion

Web estática hecha con [Astro](https://astro.build) y publicada en GitHub Pages. Disponible en castellano, catalán e inglés.

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:4321/Portfolio/
npm run build      # genera /dist
npm run preview    # sirve /dist como en producción
```

## Añadir o editar contenido (sin tocar código)

### Un guion o proyecto nuevo

1. Sube el PDF a `public/files/scripts/mi-guion.pdf` y la portada a `public/images/covers/mi-guion.jpg`. La portada debe ser vertical, en proporción 3:4. Si el proyecto sale en la portada de la web (`featured: true`), puedes añadir también un fotograma horizontal 16:9 en `public/images/stills/mi-guion.jpg`: es la imagen de la cuadrícula de destacados. Sin fotograma, la cuadrícula muestra la portada vertical entera sobre un panel azul.
2. Crea `src/content/scripts/es/mi-guion.md`. El nombre del fichero es la URL del proyecto:

```md
---
title: Mi guion
logline: Una frase que resume la historia.
format: feature          # feature | short | series | pilot | theatre | other
genres: [Drama, Thriller]
year: 2026
status: finished         # in-development | finished | produced
pages: 95                # opcional
duration: 90 min         # opcional
cover: images/covers/mi-guion.jpg
still: images/stills/mi-guion.jpg   # opcional, fotograma horizontal 16:9 para destacados
pdf: files/scripts/mi-guion.pdf
download: public         # public = descarga directa · on-request = botón "Solicitar guion" por email
featured: true           # sale en la portada
order: 1                 # opcional, orden manual
awards:
  - Mejor guion — Festival X 2026
---

Aquí va la sinopsis, en Markdown.
```

3. Para traducirlo, crea un fichero con el **mismo nombre** en `src/content/scripts/ca/` o `src/content/scripts/en/`. Si falta una traducción, la web muestra la versión en castellano.

### Perfil, bio y CV

- Bio, formación, experiencia, premios y redes: `src/content/profile/{es,ca,en}.md`.
- CV en PDF: `public/files/cv/cv-{es,ca,en}.pdf`.
- Foto: `public/images/profile.svg`. Puedes sustituirla por un `.jpg` y actualizar el campo `photo`.

Si algún campo es incorrecto, `npm run build` falla y dice qué fichero y qué campo hay que corregir.

## Publicación

Cada `push` a `main` publica la web automáticamente mediante [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

La primera vez hay que activarlo en GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

URL: `https://saara243.github.io/Portfolio/`

### Pasar a dominio propio

1. En **Settings → Secrets and variables → Actions → Variables**, crea `SITE_URL=https://tudominio.com` y `BASE_PATH=/`.
2. Crea `public/CNAME` con el dominio (`tudominio.com`) y configura el DNS según la [guía de GitHub](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

No hace falta cambiar código: todas las rutas pasan por `withBase()` y `localizedPath()` ([src/i18n/utils.ts](src/i18n/utils.ts)).

### Formulario de contacto (opcional)

Crea un formulario en [Formspree](https://formspree.io) y guarda su ID en la variable `PUBLIC_FORMSPREE_ID`. Si no lo defines, la página de contacto muestra solo el email y las redes.

## Estructura

```
src/
├─ content/            # contenido editable (Markdown)
├─ modules/            # lógica de dominio (DDD): scripts, profile, shared
│  └─ {módulo}/{domain,application,infrastructure,test}
├─ components/         # componentes de presentación, sin lógica de negocio
├─ layouts/  pages/    # páginas bajo /[lang]/
├─ i18n/               # textos de interfaz y helpers de rutas
└─ styles/tokens.css   # colores, tipografías y espaciados (identidad visual)
```

## Tests

```bash
npm test           # unitarios (Jest) de src/modules/**/test
npm run test:e2e   # end-to-end (Playwright) de tests-e2e/
```
