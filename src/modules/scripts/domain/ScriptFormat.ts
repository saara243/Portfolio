export const SCRIPT_FORMATS = ['feature', 'short', 'series', 'pilot', 'theatre', 'other'] as const;
export type ScriptFormatPrimitive = (typeof SCRIPT_FORMATS)[number];

export class ScriptFormat {
  private constructor(private readonly value: ScriptFormatPrimitive) {}

  static create(value: string): ScriptFormat {
    ScriptFormat.ensureFormatIsValid(value);
    return new ScriptFormat(value);
  }

  static fromPrimitive(value: string): ScriptFormat {
    return ScriptFormat.create(value);
  }

  static ensureFormatIsValid(value: string): asserts value is ScriptFormatPrimitive {
    if (!(SCRIPT_FORMATS as readonly string[]).includes(value)) {
      throw new Error(`[ScriptFormat] Formato no válido: "${value}". Válidos: ${SCRIPT_FORMATS.join(', ')}`);
    }
  }

  getValue(): ScriptFormatPrimitive {
    return this.value;
  }

  equals(other: ScriptFormat): boolean {
    return this.value === other.value;
  }

  toPrimitive(): ScriptFormatPrimitive {
    return this.value;
  }
}
