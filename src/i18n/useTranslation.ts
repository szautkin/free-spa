/**
 * useTranslation Hook
 * Simple hook to access translations in components
 */

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

/**
 * Access translations, current language, and language setter
 * @returns {object} - { t: translations, language, setLanguage }
 * @example
 * const { t, language, setLanguage } = useTranslation();
 * return <h1>{t.hero.title}</h1>;
 */
export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  return context;
};
