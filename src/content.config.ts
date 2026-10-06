import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SCRIPT_FORMATS } from './modules/scripts/domain/ScriptFormat';
import { SCRIPT_STATUSES } from './modules/scripts/domain/ScriptStatus';
import { DOWNLOAD_ACCESS } from './modules/scripts/domain/Script';

// Rutas de ficheros (pdf, cover, photo, cv) relativas a /public, p.ej. "files/scripts/mi-guion.pdf"
const publicFile = z.string().regex(/^[^/].*/, 'Sin barra inicial: "files/..." o "images/..."');

const timelineEntry = z.object({
  title: z.string(),
  place: z.string().optional(),
  // Admite `2025` o `"2022 – 2026"` en el frontmatter
  period: z.union([z.string(), z.number()]).transform(String).optional(),
  description: z.string().optional(),
});

/** Un fichero por guion e idioma: src/content/scripts/{es|ca|en}/{slug}.md (el cuerpo es la sinopsis). */
const scripts = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/scripts' }),
  schema: z.object({
    title: z.string(),
    logline: z.string(),
    format: z.enum(SCRIPT_FORMATS),
    genres: z.array(z.string()).default([]),
    year: z.number().int(),
    status: z.enum(SCRIPT_STATUSES).default('finished'),
    pages: z.number().int().positive().optional(),
    duration: z.string().optional(),
    cover: publicFile.optional(),
    // Fotograma horizontal (16:9) para la cuadrícula de destacados de la home; opcional
    still: publicFile.optional(),
    pdf: publicFile.optional(),
    download: z.enum(DOWNLOAD_ACCESS).default('public'),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    awards: z.array(z.string()).default([]),
  }),
});

/** Un fichero por idioma: src/content/profile/{es|ca|en}.md (el cuerpo es la biografía). */
const profile = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    tagline: z.string(),
    // Frase-manifiesto que se destaca en una banda propia
    statement: z.string().optional(),
    photo: publicFile.optional(),
    email: z.string(),
    location: z.string().optional(),
    cv: publicFile.optional(),
    socials: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    education: z.array(timelineEntry).default([]),
    experience: z.array(timelineEntry).default([]),
    learnings: z.array(z.string()).default([]),
    awards: z.array(timelineEntry).default([]),
    interests: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    skills: z.array(z.object({ title: z.string(), items: z.array(z.string()).min(1) })).default([]),
    skillsNote: z.string().optional(),
    motivation: z
      .object({ title: z.string(), paragraphs: z.array(z.string()).min(1), closing: z.string().optional() })
      .optional(),
    languages: z.array(z.string()).default([]),
  }),
});

export const collections = { scripts, profile };
