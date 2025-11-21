/**
 * useContent Hook
 * Returns content in the current language
 */

import { useMemo } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { localStoreContentEN } from './content.config.en';
import { localStoreContentFR } from './content.config.fr';
import type { ContentConfig } from './content.config';

/**
 * Hook to get content in the current language
 * Automatically switches content when language changes
 */
export const useContent = (): ContentConfig => {
  const { language } = useTranslation();

  const content = useMemo(() => {
    return language === 'fr' ? localStoreContentFR : localStoreContentEN;
  }, [language]);

  return content;
};
