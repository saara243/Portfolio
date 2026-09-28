import type { ScriptList } from '../domain/ScriptList';
import type { ListScripts } from './ListScripts';

export interface ListFeaturedScriptsProps {
  locale: string;
  limit?: number;
}

const DEFAULT_LIMIT = 3;

/** Proyectos destacados para la portada. Si no hay ninguno marcado, los más recientes. */
export class ListFeaturedScripts {
  constructor(private readonly listScripts: ListScripts) {}

  async execute({ locale, limit = DEFAULT_LIMIT }: ListFeaturedScriptsProps): Promise<ScriptList> {
    if (!Number.isInteger(limit) || limit <= 0) {
      throw new Error(`[listFeaturedScripts] Límite no válido: ${limit}`);
    }
    const scripts = await this.listScripts.execute({ locale });
    const featured = scripts.featured();
    return (featured.isEmpty() ? scripts : featured).take(limit);
  }
}
