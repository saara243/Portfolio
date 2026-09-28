import { DEFAULT_LOCALE, LOCALES, Locale, type LocalePrimitive } from '../modules/shared/domain/Locale';
import { ui, type UiKey } from './ui';

export type Lang = LocalePrimitive;

export const languages: Record<Lang, { label: string; short: string; htmlLang: string; ogLocale: string }> = {
  es: { label: 'Español', short: 'ES', htmlLang: 'es', ogLocale: 'es_ES' },
  ca: { label: 'Català', short: 'CA', htmlLang: 'ca', ogLocale: 'ca_ES' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_GB' },
};

/** Rutas internas (sin idioma). Único sitio donde se definen los slugs de las páginas. */
export const routes = {
  home: '',
  about: 'sobre-mi/',
  projects: 'proyectos/',
  project: (slug: string) => `proyectos/${slug}/`,
  cv: 'cv/',
  contact: 'contacto/',
} as const;

export function toLang(value: string | undefined): Lang {
  return value && Locale.isValid(value) ? value : DEFAULT_LOCALE;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[DEFAULT_LOCALE][key];
}

/** Antepone el `base` de Astro (p.ej. /Portfolio/) a una ruta o fichero de /public. */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${path.replace(/^\//, '')}`;
}

export function localizedPath(lang: Lang, path = ''): string {
  return withBase(`${lang}/${path}`);
}

/** Para `getStaticPaths` de las páginas bajo src/pages/[lang]/. */
export function getLangStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

export { LOCALES, DEFAULT_LOCALE };
