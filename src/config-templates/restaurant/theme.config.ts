/**
 * FINE DINING RESTAURANT THEME CONFIGURATION
 *
 * This file contains all UI/UX settings for the restaurant application.
 * Customize these values to match your restaurant's elegant atmosphere.
 *
 * Theme notes:
 * - Warm, sophisticated color palette with deep reds and golds
 * - Elegant serif fonts for refined dining experience
 * - Subtle animations for polished feel
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
// FINE DINING RESTAURANT THEME
// ========================================

export const restaurantTheme: ThemeConfig = {
  // COLORS - Sophisticated wine reds and golds
  colors: {
    primary: {
      main: '#8B1538',        // Deep burgundy wine
      light: '#A84259',       // Rose wine
      dark: '#5C0E24',        // Dark wine
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C9A961',        // Elegant gold
      light: '#E0C488',       // Champagne gold
      dark: '#A68B4A',        // Bronze
      contrastText: '#1A1614',
    },
    background: {
      default: '#FDFBF7',     // Warm cream
      paper: '#FFFFFF',       // Pure white
      dark: '#1A1614',        // Rich black
      light: '#F5F1EA',       // Light beige
    },
    text: {
      primary: '#1A1614',     // Deep charcoal
      secondary: '#4A4542',   // Warm gray
      disabled: '#9B9390',    // Light gray
      hint: '#C7C3BF',        // Very light gray
    },
    success: '#3A7D44',       // Deep green
    warning: '#D4832F',       // Warm amber
    error: '#B91C1C',         // Deep red
    info: '#4A5568',          // Slate gray
  },

  // TYPOGRAPHY - Elegant serif fonts
  typography: {
    fontFamily: {
      primary: "'Cormorant Garamond', 'Georgia', serif",
      heading: "'Playfair Display', 'Times New Roman', serif",
      accent: "'Allura', cursive",
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

  // BORDER RADIUS - Subtle for elegant feel
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
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

  // ANIMATIONS - Slower for refined feel
  animations: {
    duration: {
      fastest: 200,
      fast: 300,
      normal: 400,
      slow: 600,
      slowest: 800,
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

export default restaurantTheme;
