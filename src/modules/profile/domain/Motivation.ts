export interface MotivationPrimitive {
  title: string;
  paragraphs: string[];
  closing?: string;
}

/** Carta de motivación breve dirigida a una productora o convocatoria concreta. */
export class Motivation {
  private constructor(
    private readonly title: string,
    private readonly paragraphs: string[],
    private readonly closing: string | undefined,
  ) {}

  static create(data: MotivationPrimitive): Motivation {
    Motivation.ensureMotivationIsValid(data);
    return new Motivation(
      data.title.trim(),
      data.paragraphs.map((paragraph) => paragraph.trim()).filter(Boolean),
      data.closing?.trim() || undefined,
    );
  }

  static fromPrimitive(data: MotivationPrimitive): Motivation {
    return Motivation.create(data);
  }

  static ensureMotivationIsValid(data: MotivationPrimitive): void {
    if (!data.title?.trim()) throw new Error('[Motivation] La motivación necesita título');
    if (!data.paragraphs?.some((paragraph) => paragraph.trim())) {
      throw new Error('[Motivation] La motivación necesita al menos un párrafo');
    }
  }

  getTitle(): string { return this.title; }
  getParagraphs(): string[] { return [...this.paragraphs]; }
  getClosing(): string | undefined { return this.closing; }

  equals(other: Motivation): boolean {
    return this.title === other.title;
  }

  toPrimitive(): MotivationPrimitive {
    return { title: this.title, paragraphs: [...this.paragraphs], closing: this.closing };
  }
}
