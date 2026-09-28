import { getEntry } from 'astro:content';
import type { Locale } from '../../shared/domain/Locale';
import { Profile } from '../domain/Profile';
import type { ProfileRepository } from '../domain/ProfileRepository';

/** Lee el perfil de `src/content/profile/{idioma}.md`. */
export class AstroContentProfileRepository implements ProfileRepository {
  async findByLocale(locale: Locale): Promise<Profile | undefined> {
    const entry = await getEntry('profile', locale.getValue());
    if (!entry) return undefined;
    return Profile.fromPrimitive({
      locale: entry.id,
      name: entry.data.name,
      role: entry.data.role,
      tagline: entry.data.tagline,
      bioHtml: entry.rendered?.html ?? '',
      photo: entry.data.photo,
      email: entry.data.email,
      location: entry.data.location,
      cv: entry.data.cv,
      socials: entry.data.socials,
      education: entry.data.education,
      experience: entry.data.experience,
      awards: entry.data.awards,
      skills: entry.data.skills,
      languages: entry.data.languages,
    });
  }
}
