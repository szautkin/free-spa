/**
 * BOUTIQUE/RETAIL THEME CONFIGURATION
 *
 * This file contains all UI/UX settings for a boutique retail store.
 * Customize these values to match your boutique's elegant, modern aesthetic.
 *
 * Theme notes:
 * - Elegant pastels and neutrals for sophisticated retail feel
 * - Clean, modern fonts with fashion-forward style
 * - Minimalist design with attention to white space
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
// BOUTIQUE THEME
// ========================================

export const boutiqueTheme: ThemeConfig = {
  // COLORS - Elegant pastels and neutrals
  colors: {
    primary: {
      main: '#D4A5A5',        // Dusty rose
      light: '#E8CDD1',       // Blush pink
      dark: '#B88B8D',        // Mauve
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#9CA3AF',        // Cool gray
      light: '#D1D5DB',       // Light silver
      dark: '#6B7280',        // Charcoal gray
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAF9',     // Off white
      paper: '#FFFFFF',       // Pure white
      dark: '#1F2937',        // Deep charcoal
      light: '#F5F5F4',       // Warm gray
    },
    text: {
      primary: '#1F2937',     // Dark gray
      secondary: '#4B5563',   // Medium gray
      disabled: '#9CA3AF',    // Light gray
      hint: '#D1D5DB',        // Very light gray
    },
    success: '#10B981',       // Emerald green
    warning: '#F59E0B',       // Amber
    error: '#EF4444',         // Red
    info: '#3B82F6',          // Blue
  },

  // TYPOGRAPHY - Modern, fashion-forward fonts
  typography: {
    fontFamily: {
      primary: "'Montserrat', 'Helvetica Neue', sans-serif",
      heading: "'Bodoni Moda', 'Georgia', serif",
      accent: "'Great Vibes', cursive",
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
      wider: '0.1em',
    },
  },

  // SPACING - More white space for minimalist feel
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
        mobile: '4rem 1.5rem',
        tablet: '6rem 3rem',
        desktop: '8rem 4rem',
      },
      margin: {
        mobile: '3rem 0',
        tablet: '5rem 0',
        desktop: '7rem 0',
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

  // BORDER RADIUS - Minimal for clean lines
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

  // SHADOWS - Subtle for elegant feel
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
  },

  // ANIMATIONS - Smooth and refined
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

export default boutiqueTheme;
