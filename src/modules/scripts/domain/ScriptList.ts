import type { Locale } from '../../shared/domain/Locale';
import type { Genre } from './Genre';
import { Script, type ScriptPrimitive } from './Script';
import type { ScriptFormat } from './ScriptFormat';

export interface ScriptFilters {
  format?: string;
  genreKey?: string;
}

export class ScriptList {
  private constructor(private readonly items: Script[]) {}

  static create(items: Script[]): ScriptList {
    return new ScriptList([...items]);
  }

  static empty(): ScriptList {
    return new ScriptList([]);
  }

  static fromPrimitive(data: ScriptPrimitive[]): ScriptList {
    return new ScriptList(data.map((item) => Script.fromPrimitive(item)));
  }

  /**
   * Una versión por slug en el idioma pedido; si no existe traducción,
   * se usa la del idioma de respaldo para que ningún proyecto desaparezca.
   */
  localizedFor(locale: Locale, fallback: Locale): ScriptList {
    const bySlug = new Map<string, Script>();
    for (const script of this.items) {
      const isRequested = script.getLocale().equals(locale);
      const isFallback = script.getLocale().equals(fallback);
      if (isRequested || (isFallback && !bySlug.has(script.getSlug()))) {
        bySlug.set(script.getSlug(), script);
      }
    }
    return new ScriptList([...bySlug.values()]);
  }

  filter({ format, genreKey }: ScriptFilters): ScriptList {
    return new ScriptList(
      this.items.filter(
        (script) =>
          (!format || script.getFormat().getValue() === format) &&
          (!genreKey || script.hasGenre(genreKey)),
      ),
    );
  }

  featured(): ScriptList {
    return new ScriptList(this.items.filter((script) => script.isFeatured()));
  }

  /** Orden manual (`order`) primero; después, los más recientes. */
  sorted(): ScriptList {
    return new ScriptList(
      [...this.items].sort((a, b) => {
        const orderA = a.getOrder() ?? Number.POSITIVE_INFINITY;
        const orderB = b.getOrder() ?? Number.POSITIVE_INFINITY;
        if (orderA !== orderB) return orderA - orderB;
        if (a.getYear() !== b.getYear()) return b.getYear() - a.getYear();
        return a.getTitle().localeCompare(b.getTitle());
      }),
    );
  }

  take(limit: number): ScriptList {
    return new ScriptList(this.items.slice(0, Math.max(0, limit)));
  }

  findBySlug(slug: string): Script | undefined {
    return this.items.find((script) => script.getSlug() === slug);
  }

  formats(): ScriptFormat[] {
    const unique = new Map<string, ScriptFormat>();
    this.items.forEach((script) => unique.set(script.getFormat().getValue(), script.getFormat()));
    return [...unique.values()];
  }

  /** Géneros en el orden en que aparecen en la lista (que ya va ordenada por `order`). */
  genres(): Genre[] {
    const unique = new Map<string, Genre>();
    this.items.forEach((script) => script.getGenres().forEach((genre) => unique.set(genre.getKey(), genre)));
    return [...unique.values()];
  }

  count(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  toArray(): Script[] {
    return [...this.items];
  }

  equals(other: ScriptList): boolean {
    const otherItems = other.toArray();
    return this.items.length === otherItems.length && this.items.every((script, i) => script.equals(otherItems[i]));
  }

  toPrimitive(): ScriptPrimitive[] {
    return this.items.map((script) => script.toPrimitive());
  }
}
