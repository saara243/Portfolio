export const SCRIPT_STATUSES = ['in-development', 'finished', 'produced'] as const;
export type ScriptStatusPrimitive = (typeof SCRIPT_STATUSES)[number];

export class ScriptStatus {
  private constructor(private readonly value: ScriptStatusPrimitive) {}

  static create(value: string): ScriptStatus {
    ScriptStatus.ensureStatusIsValid(value);
    return new ScriptStatus(value);
  }

  static fromPrimitive(value: string): ScriptStatus {
    return ScriptStatus.create(value);
  }

  static ensureStatusIsValid(value: string): asserts value is ScriptStatusPrimitive {
    if (!(SCRIPT_STATUSES as readonly string[]).includes(value)) {
      throw new Error(`[ScriptStatus] Estado no válido: "${value}". Válidos: ${SCRIPT_STATUSES.join(', ')}`);
    }
  }

  getValue(): ScriptStatusPrimitive {
    return this.value;
  }

  equals(other: ScriptStatus): boolean {
    return this.value === other.value;
  }

  toPrimitive(): ScriptStatusPrimitive {
    return this.value;
  }
}
