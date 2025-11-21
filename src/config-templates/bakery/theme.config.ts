/**
 * BAKERY/PATISSERIE THEME CONFIGURATION
 *
 * This file contains all UI/UX settings for a bakery application.
 * Customize these values to match your bakery's warm, welcoming atmosphere.
 *
 * Theme notes:
 * - Warm browns and soft pastels for inviting feel
 * - Friendly, approachable fonts
 * - Light, airy color scheme
 */

export interface ThemeColors {
  primary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  background: {
    default: string;
    paper: string;
    dark: string;
    light: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ThemeTypography {
  fontFamily: {
    primary: string;
    heading: string;
    accent: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
  };
}

export interface ThemeSpacing {
  unit: number;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  section: {
    padding: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    margin: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  container: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

export interface ThemeShadows {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
}

export interface ThemeAnimations {
  duration: {
    fastest: number;
    fast: number;
    normal: number;
    slow: number;
    slowest: number;
  };
  easing: {
    linear: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    bounce: string;
    elastic: string;
  };
}

export interface ThemeBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  animations: ThemeAnimations;
  breakpoints: ThemeBreakpoints;
}

// ========================================
// BAKERY THEME
// ========================================

export const bakeryTheme: ThemeConfig = {
  // COLORS - Warm browns and soft pastels
  colors: {
    primary: {
      main: '#8B5A3C',        // Warm bread crust brown
      light: '#A6755F',       // Light wheat
      dark: '#6B3E28',        // Dark baked brown
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F4C2C2',        // Soft pink frosting
      light: '#FFDEDE',       // Light pastry pink
      dark: '#E8A5A5',        // Rose pink
      contrastText: '#3D2817',
    },
    background: {
      default: '#FFF8F3',     // Flour white
      paper: '#FFFFFF',       // Pure white
      dark: '#3D2817',        // Dark chocolate
      light: '#FFF0E5',       // Cream
    },
    text: {
      primary: '#3D2817',     // Dark cocoa
      secondary: '#6B4E3D',   // Medium brown
      disabled: '#B5A090',    // Light tan
      hint: '#D4C4B5',        // Very light beige
    },
    success: '#7CB342',       // Fresh herb green
    warning: '#FFB74D',       // Golden crust
    error: '#E53935',         // Berry red
    info: '#64B5F6',          // Sky blue
  },

  // TYPOGRAPHY - Friendly, approachable fonts
  typography: {
    fontFamily: {
      primary: "'Nunito', 'Arial', sans-serif",
      heading: "'Quicksand', 'Helvetica', sans-serif",
      accent: "'Pacifico', cursive",
      mono: "'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },

  // SPACING
  spacing: {
    unit: 8,
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
    '5xl': '12rem',
    section: {
      padding: {
        mobile: '3rem 1.5rem',
        tablet: '5rem 3rem',
        desktop: '6rem 4rem',
      },
      margin: {
        mobile: '2rem 0',
        tablet: '4rem 0',
        desktop: '6rem 0',
      },
    },
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },

  // BORDER RADIUS - Softer, rounder for friendly feel
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    base: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },

  // SHADOWS
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  // ANIMATIONS - Quick and friendly
  animations: {
    duration: {
      fastest: 150,
      fast: 250,
      normal: 350,
      slow: 500,
      slowest: 700,
    },
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  // BREAKPOINTS
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export default bakeryTheme;
