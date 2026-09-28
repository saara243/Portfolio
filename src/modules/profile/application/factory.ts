import { AstroContentProfileRepository } from '../infrastructure/AstroContentProfileRepository';
import { GetProfile } from './GetProfile';

const repository = new AstroContentProfileRepository();

export const profileModule = {
  getProfile: new GetProfile(repository),
};
