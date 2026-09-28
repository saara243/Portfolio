import { Locale } from '../../shared/domain/Locale';
import { SocialLink, type SocialLinkPrimitive } from './SocialLink';
import { TimelineEntry, type TimelineEntryPrimitive } from './TimelineEntry';

export interface ProfilePrimitive {
  locale: string;
  name: string;
  role: string;
  tagline: string;
  bioHtml: string;
  photo?: string;
  email: string;
  location?: string;
  cv?: string;
  socials: SocialLinkPrimitive[];
  education: TimelineEntryPrimitive[];
  experience: TimelineEntryPrimitive[];
  awards: TimelineEntryPrimitive[];
  skills: string[];
  languages: string[];
}

/** Perfil de la guionista en un idioma. Identidad: idioma. */
export class Profile {
  private constructor(
    private readonly locale: Locale,
    private readonly name: string,
    private readonly role: string,
    private readonly tagline: string,
    private readonly bioHtml: string,
    private readonly photo: string | undefined,
    private readonly email: string,
    private readonly location: string | undefined,
    private readonly cv: string | undefined,
    private readonly socials: SocialLink[],
    private readonly education: TimelineEntry[],
    private readonly experience: TimelineEntry[],
    private readonly awards: TimelineEntry[],
    private readonly skills: string[],
    private readonly languages: string[],
  ) {}

  static create(data: ProfilePrimitive): Profile {
    Profile.ensureProfileIsValid(data);
    return new Profile(
      Locale.create(data.locale),
      data.name.trim(),
      data.role.trim(),
      data.tagline.trim(),
      data.bioHtml,
      data.photo,
      data.email,
      data.location,
      data.cv,
      data.socials.map((link) => SocialLink.create(link)),
      data.education.map((entry) => TimelineEntry.create(entry)),
      data.experience.map((entry) => TimelineEntry.create(entry)),
      data.awards.map((entry) => TimelineEntry.create(entry)),
      [...data.skills],
      [...data.languages],
    );
  }

  static fromPrimitive(data: ProfilePrimitive): Profile {
    return Profile.create(data);
  }

  static ensureProfileIsValid(data: ProfilePrimitive): void {
    if (!data.name?.trim()) throw new Error('[Profile] El perfil necesita nombre');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error(`[Profile] Email no válido: "${data.email}"`);
    }
  }

  getId(): string { return this.locale.getValue(); }
  getLocale(): Locale { return this.locale; }
  getName(): string { return this.name; }
  getRole(): string { return this.role; }
  getTagline(): string { return this.tagline; }
  getBioHtml(): string { return this.bioHtml; }
  getPhoto(): string | undefined { return this.photo; }
  getEmail(): string { return this.email; }
  getLocation(): string | undefined { return this.location; }
  getCv(): string | undefined { return this.cv; }
  getSocials(): SocialLink[] { return [...this.socials]; }
  getEducation(): TimelineEntry[] { return [...this.education]; }
  getExperience(): TimelineEntry[] { return [...this.experience]; }
  getAwards(): TimelineEntry[] { return [...this.awards]; }
  getSkills(): string[] { return [...this.skills]; }
  getLanguages(): string[] { return [...this.languages]; }

  hasCv(): boolean {
    return Boolean(this.cv);
  }

  equals(other: Profile): boolean {
    return this.getId() === other.getId();
  }

  toPrimitive(): ProfilePrimitive {
    return {
      locale: this.locale.toPrimitive(),
      name: this.name,
      role: this.role,
      tagline: this.tagline,
      bioHtml: this.bioHtml,
      photo: this.photo,
      email: this.email,
      location: this.location,
      cv: this.cv,
      socials: this.socials.map((link) => link.toPrimitive()),
      education: this.education.map((entry) => entry.toPrimitive()),
      experience: this.experience.map((entry) => entry.toPrimitive()),
      awards: this.awards.map((entry) => entry.toPrimitive()),
      skills: [...this.skills],
      languages: [...this.languages],
    };
  }
}
