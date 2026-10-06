import { getCollection } from 'astro:content';
import { Script } from '../domain/Script';
import { ScriptList } from '../domain/ScriptList';
import type { ScriptRepository } from '../domain/ScriptRepository';

/** Lee los guiones de `src/content/scripts/{idioma}/{slug}.md`. */
export class AstroContentScriptRepository implements ScriptRepository {
  async findAll(): Promise<ScriptList> {
    const entries = await getCollection('scripts');
    return ScriptList.create(
      entries.map((entry) => {
        const [locale, slug] = entry.id.split('/');
        return Script.fromPrimitive({
          slug,
          locale,
          title: entry.data.title,
          logline: entry.data.logline,
          synopsisHtml: entry.rendered?.html ?? '',
          format: entry.data.format,
          genres: entry.data.genres,
          year: entry.data.year,
          date: entry.data.date,
          status: entry.data.status,
          pages: entry.data.pages,
          duration: entry.data.duration,
          cover: entry.data.cover,
          coverArt: entry.data.coverArt,
          still: entry.data.still,
          pdf: entry.data.pdf,
          download: entry.data.download,
          featured: entry.data.featured,
          order: entry.data.order,
          awards: entry.data.awards,
        });
      }),
    );
  }
}
