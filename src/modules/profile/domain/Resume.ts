/** Viñetas animadas disponibles para cada entrada del CV (campo `icon` en el Markdown). */
export const RESUME_ICONS = [
  'guion',
  'maquina',
  'rodaje',
  'rodaje-noche',
  'casting',
  'megafono',
  'walkie',
  'tenis',
  'libro',
  'idioma',
  'ordenador',
  'estrella',
] as const;
export type ResumeIcon = (typeof RESUME_ICONS)[number];

export interface ResumeEntryPrimitive {
  title: string;
  place?: string;
  period?: string;
  description?: string;
  icon?: string;
}

export interface ResumeLanguagePrimitive {
  name: string;
  level: string;
  /** Nivel de 1 (principiante) a 4 (nativo). */
  value: number;
}

export interface ResumePrimitive {
  fullName?: string;
  about?: string;
  experience: ResumeEntryPrimitive[];
  education: ResumeEntryPrimitive[];
  certificates: ResumeEntryPrimitive[];
  itSkills: string[];
  languages: ResumeLanguagePrimitive[];
  competencies: string[];
}

/** Entrada del CV con su viñeta: un trabajo, unos estudios o un certificado. */
export class ResumeEntry {
  private constructor(
    private readonly title: string,
    private readonly place: string | undefined,
    private readonly period: string | undefined,
    private readonly description: string | undefined,
    private readonly icon: ResumeIcon,
  ) {}

  static create(data: ResumeEntryPrimitive): ResumeEntry {
    if (!data.title?.trim()) throw new Error('[ResumeEntry] La entrada necesita título');
    const icon = (data.icon ?? 'estrella') as ResumeIcon;
    if (!(RESUME_ICONS as readonly string[]).includes(icon)) {
      throw new Error(`[ResumeEntry] "${data.title}" tiene un icono no válido: "${data.icon}". Usa uno de: ${RESUME_ICONS.join(', ')}`);
    }
    return new ResumeEntry(data.title.trim(), data.place?.trim(), data.period?.trim(), data.description?.trim(), icon);
  }

  getTitle(): string { return this.title; }
  getPlace(): string | undefined { return this.place; }
  getPeriod(): string | undefined { return this.period; }
  getDescription(): string | undefined { return this.description; }
  getIcon(): ResumeIcon { return this.icon; }

  toPrimitive(): ResumeEntryPrimitive {
    return { title: this.title, place: this.place, period: this.period, description: this.description, icon: this.icon };
  }
}

/** Idioma con su nivel en palabras y en escala 1–4. */
export class ResumeLanguage {
  private constructor(
    private readonly name: string,
    private readonly level: string,
    private readonly value: number,
  ) {}

  static create(data: ResumeLanguagePrimitive): ResumeLanguage {
    if (!data.name?.trim()) throw new Error('[ResumeLanguage] El idioma necesita nombre');
    if (!Number.isInteger(data.value) || data.value < 1 || data.value > 4) {
      throw new Error(`[ResumeLanguage] "${data.name}" necesita un valor de 1 a 4, no ${data.value}`);
    }
    return new ResumeLanguage(data.name.trim(), data.level.trim(), data.value);
  }

  getName(): string { return this.name; }
  getLevel(): string { return this.level; }
  getValue(): number { return this.value; }

  toPrimitive(): ResumeLanguagePrimitive {
    return { name: this.name, level: this.level, value: this.value };
  }
}

/** Currículum completo de la pestaña CV. */
export class Resume {
  private constructor(
    private readonly fullName: string | undefined,
    private readonly about: string | undefined,
    private readonly experience: ResumeEntry[],
    private readonly education: ResumeEntry[],
    private readonly certificates: ResumeEntry[],
    private readonly itSkills: string[],
    private readonly languages: ResumeLanguage[],
    private readonly competencies: string[],
  ) {}

  static create(data: ResumePrimitive): Resume {
    return new Resume(
      data.fullName?.trim() || undefined,
      data.about?.trim() || undefined,
      data.experience.map((entry) => ResumeEntry.create(entry)),
      data.education.map((entry) => ResumeEntry.create(entry)),
      data.certificates.map((entry) => ResumeEntry.create(entry)),
      data.itSkills.map((skill) => skill.trim()).filter(Boolean),
      data.languages.map((language) => ResumeLanguage.create(language)),
      data.competencies.map((item) => item.trim()).filter(Boolean),
    );
  }

  getFullName(): string | undefined { return this.fullName; }
  getAbout(): string | undefined { return this.about; }
  getExperience(): ResumeEntry[] { return [...this.experience]; }
  getEducation(): ResumeEntry[] { return [...this.education]; }
  getCertificates(): ResumeEntry[] { return [...this.certificates]; }
  getItSkills(): string[] { return [...this.itSkills]; }
  getLanguages(): ResumeLanguage[] { return [...this.languages]; }
  getCompetencies(): string[] { return [...this.competencies]; }

  toPrimitive(): ResumePrimitive {
    return {
      fullName: this.fullName,
      about: this.about,
      experience: this.experience.map((entry) => entry.toPrimitive()),
      education: this.education.map((entry) => entry.toPrimitive()),
      certificates: this.certificates.map((entry) => entry.toPrimitive()),
      itSkills: [...this.itSkills],
      languages: this.languages.map((language) => language.toPrimitive()),
      competencies: [...this.competencies],
    };
  }
}
