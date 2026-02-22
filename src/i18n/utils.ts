import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, targetLang?: keyof typeof ui) {
    return `/${targetLang || lang}${path}`
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const [, lang, ...rest] = url.pathname.split('/');
  if (lang in ui) return `/${rest.join('/')}`;
  return undefined;
}
