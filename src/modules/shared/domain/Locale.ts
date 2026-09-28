export const LOCALES = ['es', 'ca', 'en'] as const;
export type LocalePrimitive = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: LocalePrimitive = 'es';

export class Locale {
  private constructor(private readonly value: LocalePrimitive) {}

  static create(value: string): Locale {
    Locale.ensureLocaleIsValid(value);
    return new Locale(value);
  }

  static fromPrimitive(value: string): Locale {
    return Locale.create(value);
  }

  static default(): Locale {
    return new Locale(DEFAULT_LOCALE);
  }

  static isValid(value: string): value is LocalePrimitive {
    return (LOCALES as readonly string[]).includes(value);
  }

  static ensureLocaleIsValid(value: string): asserts value is LocalePrimitive {
    if (!Locale.isValid(value)) {
      throw new Error(`[Locale] Idioma no soportado: "${value}". Válidos: ${LOCALES.join(', ')}`);
    }
  }

  getValue(): LocalePrimitive {
    return this.value;
  }

  isDefault(): boolean {
    return this.value === DEFAULT_LOCALE;
  }

  equals(other: Locale): boolean {
    return this.value === other.value;
  }

  toPrimitive(): LocalePrimitive {
    return this.value;
  }
}
