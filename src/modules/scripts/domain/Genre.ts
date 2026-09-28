export type GenrePrimitive = string;

/** Género narrativo (texto libre por idioma). `getKey()` es estable para filtrar. */
export class Genre {
  private constructor(private readonly label: string) {}

  static create(label: string): Genre {
    Genre.ensureGenreIsValid(label);
    return new Genre(label.trim());
  }

  static fromPrimitive(label: GenrePrimitive): Genre {
    return Genre.create(label);
  }

  static ensureGenreIsValid(label: string): void {
    if (!label || label.trim().length === 0) {
      throw new Error('[Genre] El género no puede estar vacío');
    }
  }

  getLabel(): string {
    return this.label;
  }

  getKey(): string {
    return this.label
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  equals(other: Genre): boolean {
    return this.getKey() === other.getKey();
  }

  toPrimitive(): GenrePrimitive {
    return this.label;
  }
}
