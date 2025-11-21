import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import CoffeeShopApp from './coffee-shop/CoffeeShopApp';
import { coffeeTheme } from './config';
import { LanguageProvider } from './i18n/LanguageContext';

/**
 * Coffee Shop Application Entry Point
 *
 * This component sets up the Material-UI theme based on the coffee shop
 * configuration and renders the main CoffeeShopApp component.
 */
const CoffeeApp = () => {
  // Create MUI theme from coffee shop configuration
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: coffeeTheme.colors.primary.main,
        light: coffeeTheme.colors.primary.light,
        dark: coffeeTheme.colors.primary.dark,
        contrastText: coffeeTheme.colors.primary.contrastText,
      },
      secondary: {
        main: coffeeTheme.colors.secondary.main,
        light: coffeeTheme.colors.secondary.light,
        dark: coffeeTheme.colors.secondary.dark,
        contrastText: coffeeTheme.colors.secondary.contrastText,
      },
      background: {
        default: coffeeTheme.colors.background.default,
        paper: coffeeTheme.colors.background.paper,
      },
      text: {
        primary: coffeeTheme.colors.text.primary,
        secondary: coffeeTheme.colors.text.secondary,
        disabled: coffeeTheme.colors.text.disabled,
      },
      success: {
        main: coffeeTheme.colors.success,
      },
      warning: {
        main: coffeeTheme.colors.warning,
      },
      error: {
        main: coffeeTheme.colors.error,
      },
      info: {
        main: coffeeTheme.colors.info,
      },
    },
    typography: {
      fontFamily: coffeeTheme.typography.fontFamily.primary,
      h1: {
        fontFamily: coffeeTheme.typography.fontFamily.heading,
      },
      h2: {
        fontFamily: coffeeTheme.typography.fontFamily.heading,
      },
      h3: {
        fontFamily: coffeeTheme.typography.fontFamily.heading,
      },
      h4: {
        fontFamily: coffeeTheme.typography.fontFamily.heading,
      },
      h5: {
        fontFamily: coffeeTheme.typography.fontFamily.heading,
      },
      h6: {
        fontFamily: coffeeTheme.typography.fontFamily.heading,
      },
    },
    shape: {
      borderRadius: parseInt(coffeeTheme.borderRadius.base),
    },
    shadows: [
      'none',
      coffeeTheme.shadows.sm,
      coffeeTheme.shadows.base,
      coffeeTheme.shadows.md,
      coffeeTheme.shadows.lg,
      coffeeTheme.shadows.xl,
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
      coffeeTheme.shadows['2xl'],
    ],
    breakpoints: {
      values: {
        xs: parseInt(coffeeTheme.breakpoints.xs),
        sm: parseInt(coffeeTheme.breakpoints.sm),
        md: parseInt(coffeeTheme.breakpoints.md),
        lg: parseInt(coffeeTheme.breakpoints.lg),
        xl: parseInt(coffeeTheme.breakpoints.xl),
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
