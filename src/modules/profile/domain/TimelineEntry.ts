export interface TimelineEntryPrimitive {
  title: string;
  place?: string;
  period?: string;
  description?: string;
}

/** Entrada de CV: formación, experiencia, premio o selección. */
export class TimelineEntry {
  private constructor(
    private readonly title: string,
    private readonly place: string | undefined,
    private readonly period: string | undefined,
    private readonly description: string | undefined,
  ) {}

  static create(data: TimelineEntryPrimitive): TimelineEntry {
    TimelineEntry.ensureEntryIsValid(data);
    return new TimelineEntry(data.title.trim(), data.place, data.period, data.description);
  }

  static fromPrimitive(data: TimelineEntryPrimitive): TimelineEntry {
    return TimelineEntry.create(data);
  }

  static ensureEntryIsValid(data: TimelineEntryPrimitive): void {
    if (!data.title?.trim()) {
      throw new Error('[TimelineEntry] La entrada necesita título');
    }
  }

  getTitle(): string { return this.title; }
  getPlace(): string | undefined { return this.place; }
  getPeriod(): string | undefined { return this.period; }
  getDescription(): string | undefined { return this.description; }

  equals(other: TimelineEntry): boolean {
    return this.title === other.title && this.place === other.place && this.period === other.period;
  }

  toPrimitive(): TimelineEntryPrimitive {
    return { title: this.title, place: this.place, period: this.period, description: this.description };
  }
}
