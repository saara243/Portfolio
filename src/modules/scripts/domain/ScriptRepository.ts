import type { ScriptList } from './ScriptList';

export interface ScriptRepository {
  /** Todos los guiones, en todos los idiomas. */
  findAll(): Promise<ScriptList>;
}
