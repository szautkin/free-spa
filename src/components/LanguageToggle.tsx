/**
 * LanguageToggle Component
 * Beautiful language switcher with flags (EN / FR)
 */

import type React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useTranslation } from '../i18n/useTranslation';
import type { Language } from '../i18n/types';

interface LanguageToggleProps {
  scrolled?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ scrolled = false }) => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <Tooltip title={`Switch to ${language === 'en' ? 'French' : 'English'}`} arrow>
      <IconButton
        onClick={toggleLanguage}
        aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderRadius: '50px',
          px: 2,
          py: 1,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          color: scrolled ? '#6F4E37' : '#FFFFFF',
          fontWeight: 600,
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled
            ? '0 2px 8px rgba(0, 0, 0, 0.1)'
            : '0 4px 12px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.25)',
            transform: 'translateY(-2px)',
            boxShadow: scrolled
              ? '0 4px 12px rgba(0, 0, 0, 0.15)'
              : '0 6px 16px rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        {/* Flag Emoji */}
        <Box
          component="span"
          sx={{
            fontSize: '1.25rem',
            lineHeight: 1,
            transition: 'transform 300ms',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          {language === 'en' ? '🇨🇦' : '🇫🇷'}
        </Box>

        {/* Language Code */}
        <Box
          component="span"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
          }}
        >
          {language === 'en' ? 'EN' : 'FR'}
        </Box>
      </IconButton>
    </Tooltip>
  );
};

export default LanguageToggle;
