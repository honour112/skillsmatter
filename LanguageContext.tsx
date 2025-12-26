
import React, { createContext } from 'react';
import { translations } from './translations';

export type Language = 'en' | 'fr';

export interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.en;
  openRegistration: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
  openRegistration: () => {}
});
