export interface SkillGroupPrimitive {
  title: string;
  items: string[];
}

/** Bloque de capacidades con nombre (Guion, Redacción…) y sus habilidades concretas. */
export class SkillGroup {
  private constructor(
    private readonly title: string,
    private readonly items: string[],
  ) {}

  static create(data: SkillGroupPrimitive): SkillGroup {
    SkillGroup.ensureGroupIsValid(data);
    return new SkillGroup(
      data.title.trim(),
      data.items.map((item) => item.trim()).filter(Boolean),
    );
  }

  static fromPrimitive(data: SkillGroupPrimitive): SkillGroup {
    return SkillGroup.create(data);
  }

  static ensureGroupIsValid(data: SkillGroupPrimitive): void {
    if (!data.title?.trim()) throw new Error('[SkillGroup] El bloque necesita título');
    if (!data.items?.some((item) => item.trim())) {
      throw new Error(`[SkillGroup] "${data.title}" necesita al menos una habilidad`);
    }
  }

  getTitle(): string { return this.title; }
  getItems(): string[] { return [...this.items]; }

  equals(other: SkillGroup): boolean {
    return this.title === other.title;
  }

  toPrimitive(): SkillGroupPrimitive {
    return { title: this.title, items: [...this.items] };
  }
}
