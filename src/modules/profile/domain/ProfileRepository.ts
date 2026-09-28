import type { Locale } from '../../shared/domain/Locale';
import type { Profile } from './Profile';

export interface ProfileRepository {
  findByLocale(locale: Locale): Promise<Profile | undefined>;
}
