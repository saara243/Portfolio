import { Locale } from '../../shared/domain/Locale';
import type { ScriptList } from '../domain/ScriptList';
import type { ScriptRepository } from '../domain/ScriptRepository';

export interface ListScriptsProps {
  locale: string;
  format?: string;
  genreKey?: string;
}

/** Guiones de un idioma (con respaldo al idioma por defecto), filtrados y ordenados. */
export class ListScripts {
  constructor(private readonly repository: ScriptRepository) {}

  async execute({ locale, format, genreKey }: ListScriptsProps): Promise<ScriptList> {
    if (!Locale.isValid(locale)) {
      throw new Error(`[listScripts] Idioma no soportado: "${locale}"`);
    }
    const scripts = await this.repository.findAll();
    return scripts
      .localizedFor(Locale.create(locale), Locale.default())
      .filter({ format, genreKey })
      .sorted();
  }
}
