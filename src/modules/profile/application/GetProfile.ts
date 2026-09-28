import { Locale } from '../../shared/domain/Locale';
import type { Profile } from '../domain/Profile';
import type { ProfileRepository } from '../domain/ProfileRepository';

export interface GetProfileProps {
  locale: string;
}

/** Perfil en el idioma pedido; si no está traducido, el del idioma por defecto. */
export class GetProfile {
  constructor(private readonly repository: ProfileRepository) {}

  async execute({ locale }: GetProfileProps): Promise<Profile> {
    if (!Locale.isValid(locale)) {
      throw new Error(`[getProfile] Idioma no soportado: "${locale}"`);
    }
    const requested = Locale.create(locale);
    const profile =
      (await this.repository.findByLocale(requested)) ??
      (requested.isDefault() ? undefined : await this.repository.findByLocale(Locale.default()));
    if (!profile) {
      throw new Error('[getProfile] No hay perfil en el idioma por defecto (src/content/profile/es.md)');
    }
    return profile;
  }
}
