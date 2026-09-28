export interface InterestPrimitive {
  title: string;
  description: string;
}

/** Tema que a la autora le interesa contar (personajes, relaciones, comedia…). */
export class Interest {
  private constructor(
    private readonly title: string,
    private readonly description: string,
  ) {}

  static create(data: InterestPrimitive): Interest {
    Interest.ensureInterestIsValid(data);
    return new Interest(data.title.trim(), data.description.trim());
  }

  static fromPrimitive(data: InterestPrimitive): Interest {
    return Interest.create(data);
  }

  static ensureInterestIsValid(data: InterestPrimitive): void {
    if (!data.title?.trim()) throw new Error('[Interest] El interés necesita título');
    if (!data.description?.trim()) {
      throw new Error(`[Interest] "${data.title}" necesita descripción`);
    }
  }

  getTitle(): string { return this.title; }
  getDescription(): string { return this.description; }

  equals(other: Interest): boolean {
    return this.title === other.title;
  }

  toPrimitive(): InterestPrimitive {
    return { title: this.title, description: this.description };
  }
}
