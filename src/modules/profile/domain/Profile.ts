import { Locale } from '../../shared/domain/Locale';
import { Interest, type InterestPrimitive } from './Interest';
import { Motivation, type MotivationPrimitive } from './Motivation';
import { Resume, type ResumePrimitive } from './Resume';
import { SkillGroup, type SkillGroupPrimitive } from './SkillGroup';
import { SocialLink, type SocialLinkPrimitive } from './SocialLink';
import { TimelineEntry, type TimelineEntryPrimitive } from './TimelineEntry';

export interface ProfilePrimitive {
  locale: string;
  name: string;
  role: string;
  tagline: string;
  statement?: string;
  bioHtml: string;
  photo?: string;
  email: string;
  location?: string;
  cv?: string;
  socials: SocialLinkPrimitive[];
  education: TimelineEntryPrimitive[];
  experience: TimelineEntryPrimitive[];
  learnings: string[];
  awards: TimelineEntryPrimitive[];
  interests: InterestPrimitive[];
  skills: SkillGroupPrimitive[];
  skillsNote?: string;
  pathNote?: string;
  motivation?: MotivationPrimitive;
  languages: string[];
  resume?: ResumePrimitive;
}

/** Perfil de la guionista en un idioma. Identidad: idioma. */
export class Profile {
  private constructor(
    private readonly locale: Locale,
    private readonly name: string,
    private readonly role: string,
    private readonly tagline: string,
    private readonly statement: string | undefined,
    private readonly bioHtml: string,
    private readonly photo: string | undefined,
    private readonly email: string,
    private readonly location: string | undefined,
    private readonly cv: string | undefined,
    private readonly socials: SocialLink[],
    private readonly education: TimelineEntry[],
    private readonly experience: TimelineEntry[],
    private readonly learnings: string[],
    private readonly awards: TimelineEntry[],
    private readonly interests: Interest[],
    private readonly skills: SkillGroup[],
    private readonly skillsNote: string | undefined,
    private readonly pathNote: string | undefined,
    private readonly motivation: Motivation | undefined,
    private readonly languages: string[],
    private readonly resume: Resume | undefined,
  ) {}

  static create(data: ProfilePrimitive): Profile {
    Profile.ensureProfileIsValid(data);
    return new Profile(
      Locale.create(data.locale),
      data.name.trim(),
      data.role.trim(),
      data.tagline.trim(),
      data.statement?.trim() || undefined,
      data.bioHtml,
      data.photo,
      data.email,
      data.location,
      data.cv,
      data.socials.map((link) => SocialLink.create(link)),
      data.education.map((entry) => TimelineEntry.create(entry)),
      data.experience.map((entry) => TimelineEntry.create(entry)),
      [...data.learnings],
      data.awards.map((entry) => TimelineEntry.create(entry)),
      data.interests.map((interest) => Interest.create(interest)),
      data.skills.map((group) => SkillGroup.create(group)),
      data.skillsNote?.trim() || undefined,
      data.pathNote?.trim() || undefined,
      data.motivation ? Motivation.create(data.motivation) : undefined,
      [...data.languages],
      data.resume ? Resume.create(data.resume) : undefined,
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
  getStatement(): string | undefined { return this.statement; }
  getBioHtml(): string { return this.bioHtml; }
  getPhoto(): string | undefined { return this.photo; }
  getEmail(): string { return this.email; }
  getLocation(): string | undefined { return this.location; }
  getCv(): string | undefined { return this.cv; }
  getSocials(): SocialLink[] { return [...this.socials]; }
  getEducation(): TimelineEntry[] { return [...this.education]; }
  getExperience(): TimelineEntry[] { return [...this.experience]; }
  getLearnings(): string[] { return [...this.learnings]; }
  getAwards(): TimelineEntry[] { return [...this.awards]; }
  getInterests(): Interest[] { return [...this.interests]; }
  getSkills(): SkillGroup[] { return [...this.skills]; }
  getSkillsNote(): string | undefined { return this.skillsNote; }
  getPathNote(): string | undefined { return this.pathNote; }
  getMotivation(): Motivation | undefined { return this.motivation; }
  getLanguages(): string[] { return [...this.languages]; }
  getResume(): Resume | undefined { return this.resume; }

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
      statement: this.statement,
      bioHtml: this.bioHtml,
      photo: this.photo,
      email: this.email,
      location: this.location,
      cv: this.cv,
      socials: this.socials.map((link) => link.toPrimitive()),
      education: this.education.map((entry) => entry.toPrimitive()),
      experience: this.experience.map((entry) => entry.toPrimitive()),
      learnings: [...this.learnings],
      awards: this.awards.map((entry) => entry.toPrimitive()),
      interests: this.interests.map((interest) => interest.toPrimitive()),
      skills: this.skills.map((group) => group.toPrimitive()),
      skillsNote: this.skillsNote,
      pathNote: this.pathNote,
      motivation: this.motivation?.toPrimitive(),
      languages: [...this.languages],
      resume: this.resume?.toPrimitive(),
    };
  }
}
