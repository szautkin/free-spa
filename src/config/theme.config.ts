/**
 * COFFEE SHOP THEME CONFIGURATION
 *
 * This file contains all UI/UX settings for the coffee shop application.
 * Modify these values to customize the entire look and feel of the site.
 *
 * All colors support hex, rgb, rgba, hsl formats
 * Spacing values are in pixels or rem units
 * Font sizes are in rem units
 */

export interface ThemeColors {
  // Primary brand colors
  primary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };

  // Secondary accent colors
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };

  // Background colors
  background: {
    default: string;
    paper: string;
    dark: string;
    light: string;
  };

  // Text colors
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };

  // Semantic colors
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ThemeTypography {
  // Font families
  fontFamily: {
    primary: string;    // Main text font
    heading: string;    // Headings font
    accent: string;     // Special accent font
    mono: string;       // Monospace font
  };

  // Font sizes (in rem)
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

  // Font weights
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };

  // Line heights
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };

  // Letter spacing
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
  };
}

export interface ThemeSpacing {
  // Base spacing unit (in pixels)
  unit: number;

  // Predefined spacing values (multipliers of unit)
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;

  // Section spacing
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

  // Container max widths
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
  // Transition durations (in milliseconds)
  duration: {
    fastest: number;
    fast: number;
    normal: number;
    slow: number;
    slowest: number;
  };

  // Easing functions
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
// MECHANIC SHOP THEME CONFIGURATION
// ========================================

export const mechanicShopTheme: ThemeConfig = {
  // COLORS
  colors: {
    primary: {
      main: '#1E40AF',        // Bold professional blue
      light: '#3B82F6',       // Light blue
      dark: '#1E3A8A',        // Dark navy blue
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F97316',        // Safety orange (like warning lights)
      light: '#FB923C',       // Light orange
      dark: '#EA580C',        // Deep orange
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',     // Clean light gray
      paper: '#FFFFFF',       // Pure white
      dark: '#1E293B',        // Dark slate
      light: '#F1F5F9',       // Very light slate
    },
    text: {
      primary: '#0F172A',     // Dark slate
      secondary: '#475569',   // Medium slate
      disabled: '#94A3B8',    // Light slate
      hint: '#CBD5E1',        // Very light slate
    },
    success: '#10B981',       // Green (service complete)
    warning: '#F59E0B',       // Amber (maintenance due)
    error: '#EF4444',         // Red (critical issue)
    info: '#3B82F6',          // Blue (information)
  },

  // TYPOGRAPHY
  typography: {
    fontFamily: {
      primary: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
      heading: "'Montserrat', 'Arial Black', sans-serif",
      accent: "'Oswald', 'Impact', sans-serif",
      mono: "'Roboto Mono', 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
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
    unit: 8,  // Base unit: 8px
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
    '3xl': '6rem',  // 96px
    '4xl': '8rem',  // 128px
    '5xl': '12rem', // 192px
    section: {
      padding: {
        mobile: '3rem 1.5rem',      // 48px 24px
        tablet: '5rem 3rem',        // 80px 48px
        desktop: '6rem 4rem',       // 96px 64px
      },
      margin: {
        mobile: '2rem 0',           // 32px 0
        tablet: '4rem 0',           // 64px 0
        desktop: '6rem 0',          // 96px 0
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

  // BORDER RADIUS
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
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

  // ANIMATIONS
  animations: {
    duration: {
      fastest: 150,   // 150ms
      fast: 250,      // 250ms
      normal: 350,    // 350ms
      slow: 500,      // 500ms
      slowest: 700,   // 700ms
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

export default mechanicShopTheme;
