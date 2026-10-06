import { Locale } from '../../shared/domain/Locale';
import { Genre } from './Genre';
import { ScriptFormat } from './ScriptFormat';
import { ScriptStatus } from './ScriptStatus';

export const DOWNLOAD_ACCESS = ['public', 'on-request'] as const;
export type DownloadAccess = (typeof DOWNLOAD_ACCESS)[number];
export type CoverArtKind = 'revival' | 'set' | 'tube' | 'dentist' | 'closet' | 'faces';

export interface ScriptPrimitive {
  slug: string;
  locale: string;
  title: string;
  logline: string;
  synopsisHtml: string;
  format: string;
  genres: string[];
  year: number;
  date?: string;
  status: string;
  pages?: number;
  duration?: string;
  cover?: string;
  coverArt?: CoverArtKind;
  still?: string;
  pdf?: string;
  download: DownloadAccess;
  featured: boolean;
  order?: number;
  awards: string[];
}

/** Guion / proyecto del portfolio. Identidad: idioma + slug. */
export class Script {
  private constructor(
    private readonly slug: string,
    private readonly locale: Locale,
    private readonly title: string,
    private readonly logline: string,
    private readonly synopsisHtml: string,
    private readonly format: ScriptFormat,
    private readonly genres: Genre[],
    private readonly year: number,
    private readonly date: string | undefined,
    private readonly status: ScriptStatus,
    private readonly pages: number | undefined,
    private readonly duration: string | undefined,
    private readonly cover: string | undefined,
    private readonly coverArt: CoverArtKind | undefined,
    private readonly still: string | undefined,
    private readonly pdf: string | undefined,
    private readonly download: DownloadAccess,
    private readonly featured: boolean,
    private readonly order: number | undefined,
    private readonly awards: string[],
  ) {}

  static create(data: ScriptPrimitive): Script {
    Script.ensureScriptIsValid(data);
    return new Script(
      data.slug,
      Locale.create(data.locale),
      data.title.trim(),
      data.logline.trim(),
      data.synopsisHtml,
      ScriptFormat.create(data.format),
      data.genres.map((genre) => Genre.create(genre)),
      data.year,
      data.date?.trim() || undefined,
      ScriptStatus.create(data.status),
      data.pages,
      data.duration,
      data.cover,
      data.coverArt,
      data.still,
      data.pdf,
      data.download,
      data.featured,
      data.order,
      [...data.awards],
    );
  }

  static fromPrimitive(data: ScriptPrimitive): Script {
    return Script.create(data);
  }

  static ensureScriptIsValid(data: ScriptPrimitive): void {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) {
      throw new Error(`[Script] Slug no válido: "${data.slug}" (usa minúsculas, números y guiones)`);
    }
    if (!data.title?.trim()) throw new Error(`[Script] "${data.slug}" necesita título`);
    if (!data.logline?.trim()) throw new Error(`[Script] "${data.slug}" necesita logline`);
    if (!Number.isInteger(data.year) || data.year < 1900 || data.year > 2100) {
      throw new Error(`[Script] "${data.slug}" tiene un año no válido: ${data.year}`);
    }
    if (data.pages !== undefined && (!Number.isInteger(data.pages) || data.pages <= 0)) {
      throw new Error(`[Script] "${data.slug}" tiene un número de páginas no válido: ${data.pages}`);
    }
    if (!(DOWNLOAD_ACCESS as readonly string[]).includes(data.download)) {
      throw new Error(`[Script] "${data.slug}" tiene un tipo de descarga no válido: ${data.download}`);
    }
  }

  getId(): string {
    return `${this.locale.getValue()}/${this.slug}`;
  }

  getSlug(): string { return this.slug; }
  getLocale(): Locale { return this.locale; }
  getTitle(): string { return this.title; }
  getLogline(): string { return this.logline; }
  getSynopsisHtml(): string { return this.synopsisHtml; }
  getFormat(): ScriptFormat { return this.format; }
  getGenres(): Genre[] { return [...this.genres]; }
  getYear(): number { return this.year; }
  getDate(): string | undefined { return this.date; }
  /** Lo que se muestra como fecha: la fecha legible si existe, si no el año. */
  getDisplayDate(): string { return this.date ?? String(this.year); }
  getStatus(): ScriptStatus { return this.status; }
  getPages(): number | undefined { return this.pages; }
  getDuration(): string | undefined { return this.duration; }
  getCover(): string | undefined { return this.cover; }
  getCoverArt(): CoverArtKind | undefined { return this.coverArt; }
  getStill(): string | undefined { return this.still; }
  getPdf(): string | undefined { return this.pdf; }
  getOrder(): number | undefined { return this.order; }
  getAwards(): string[] { return [...this.awards]; }
  isFeatured(): boolean { return this.featured; }

  /** El PDF se puede descargar directamente desde la web. */
  isDownloadable(): boolean {
    return this.download === 'public' && Boolean(this.pdf);
  }

  /** El guion existe pero solo se envía bajo petición (protección de la obra). */
  isAvailableOnRequest(): boolean {
    return this.download === 'on-request';
  }

  hasGenre(genreKey: string): boolean {
    return this.genres.some((genre) => genre.getKey() === genreKey);
  }

  equals(other: Script): boolean {
    return this.getId() === other.getId();
  }

  toPrimitive(): ScriptPrimitive {
    return {
      slug: this.slug,
      locale: this.locale.toPrimitive(),
      title: this.title,
      logline: this.logline,
      synopsisHtml: this.synopsisHtml,
      format: this.format.toPrimitive(),
      genres: this.genres.map((genre) => genre.toPrimitive()),
      year: this.year,
      date: this.date,
      status: this.status.toPrimitive(),
      pages: this.pages,
      duration: this.duration,
      cover: this.cover,
      coverArt: this.coverArt,
      still: this.still,
      pdf: this.pdf,
      download: this.download,
      featured: this.featured,
      order: this.order,
      awards: [...this.awards],
    };
  }
}
