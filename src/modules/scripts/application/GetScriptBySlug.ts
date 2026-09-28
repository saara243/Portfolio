import type { Script } from '../domain/Script';
import type { ListScripts } from './ListScripts';

export interface GetScriptBySlugProps {
  locale: string;
  slug: string;
}

export class GetScriptBySlug {
  constructor(private readonly listScripts: ListScripts) {}

  async execute({ locale, slug }: GetScriptBySlugProps): Promise<Script> {
    if (!slug?.trim()) {
      throw new Error('[getScriptBySlug] El slug es obligatorio');
    }
    const scripts = await this.listScripts.execute({ locale });
    const script = scripts.findBySlug(slug);
    if (!script) {
      throw new Error(`[getScriptBySlug] No existe el guion "${slug}"`);
    }
    return script;
  }
}
