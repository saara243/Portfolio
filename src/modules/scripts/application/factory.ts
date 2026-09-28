import { AstroContentScriptRepository } from '../infrastructure/AstroContentScriptRepository';
import { GetScriptBySlug } from './GetScriptBySlug';
import { ListFeaturedScripts } from './ListFeaturedScripts';
import { ListScripts } from './ListScripts';

const repository = new AstroContentScriptRepository();
const listScripts = new ListScripts(repository);

export const scriptsModule = {
  listScripts,
  listFeaturedScripts: new ListFeaturedScripts(listScripts),
  getScriptBySlug: new GetScriptBySlug(listScripts),
};
