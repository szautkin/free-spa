/**
 * LanguageContext
 * React Context for managing language state with localStorage persistence
 */

/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from 'react';
import type { Language, Translations } from './types';
import { en } from './translations/en';
import { fr } from './translations/fr';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const STORAGE_KEY = 'business-spa-language';

// Default to English
const getInitialLanguage = (): Language => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') {
      return stored;
    }
  } catch (error) {
    console.warn('Failed to read language from localStorage:', error);
  }
  return 'en';
};

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
  t: en,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Persist language changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
      // Update HTML lang attribute for accessibility
      document.documentElement.lang = language;
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error);
    }
  }, [language]);

  // Memoized setter to prevent unnecessary re-renders
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  // Get the current translations based on language
  const translations = useMemo(() => {
    if (language === 'fr') return fr;
    return en;
  }, [language]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations,
    }),
    [language, setLanguage, translations]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
