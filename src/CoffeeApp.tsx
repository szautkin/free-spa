import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import CoffeeShopApp from './coffee-shop/CoffeeShopApp';
import { electricianContent } from './config';
import appTheme from './config';
import { LanguageProvider } from './i18n/LanguageContext';

/**
 * Application Entry Point
 *
 * This component sets up the Material-UI theme based on the
 * configuration and renders the main app component.
 */
const CoffeeApp = () => {
  // Create MUI theme from configuration
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: appTheme.colors.primary.main,
        light: appTheme.colors.primary.light,
        dark: appTheme.colors.primary.dark,
        contrastText: appTheme.colors.primary.contrastText,
      },
      secondary: {
        main: appTheme.colors.secondary.main,
        light: appTheme.colors.secondary.light,
        dark: appTheme.colors.secondary.dark,
        contrastText: appTheme.colors.secondary.contrastText,
      },
      background: {
        default: appTheme.colors.background.default,
        paper: appTheme.colors.background.paper,
      },
      text: {
        primary: appTheme.colors.text.primary,
        secondary: appTheme.colors.text.secondary,
        disabled: appTheme.colors.text.disabled,
      },
      success: {
        main: appTheme.colors.success,
      },
      warning: {
        main: appTheme.colors.warning,
      },
      error: {
        main: appTheme.colors.error,
      },
      info: {
        main: appTheme.colors.info,
      },
    },
    typography: {
      fontFamily: appTheme.typography.fontFamily.primary,
      h1: {
        fontFamily: appTheme.typography.fontFamily.heading,
      },
      h2: {
        fontFamily: appTheme.typography.fontFamily.heading,
      },
      h3: {
        fontFamily: appTheme.typography.fontFamily.heading,
      },
      h4: {
        fontFamily: appTheme.typography.fontFamily.heading,
      },
      h5: {
        fontFamily: appTheme.typography.fontFamily.heading,
      },
      h6: {
        fontFamily: appTheme.typography.fontFamily.heading,
      },
    },
    shape: {
      borderRadius: parseInt(appTheme.borderRadius.base),
    },
    shadows: [
      'none',
      appTheme.shadows.sm,
      appTheme.shadows.base,
      appTheme.shadows.md,
      appTheme.shadows.lg,
      appTheme.shadows.xl,
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
      appTheme.shadows['2xl'],
    ],
    breakpoints: {
      values: {
        xs: parseInt(appTheme.breakpoints.xs),
        sm: parseInt(appTheme.breakpoints.sm),
        md: parseInt(appTheme.breakpoints.md),
        lg: parseInt(appTheme.breakpoints.lg),
        xl: parseInt(appTheme.breakpoints.xl),
      },
    },
  });

  return (
    <LanguageProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <CoffeeShopApp />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default CoffeeApp;
