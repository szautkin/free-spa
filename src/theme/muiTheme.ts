import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#D87856', // primary-500
      light: '#E59C80', // primary-400
      dark: '#C05A3D', // primary-600
      contrastText: '#FDFCFB', // cream-50
    },
    secondary: {
      main: '#7FA76F', // sage-500
      light: '#A0BE94', // sage-400
      dark: '#658856', // sage-600
      contrastText: '#FDFCFB',
    },
    error: {
      main: '#D00000',
    },
    warning: {
      main: '#F77F00',
    },
    success: {
      main: '#52B788',
    },
    info: {
      main: '#6B89AF', // blue-500
    },
    background: {
      default: '#F5F1ED', // cream-200
      paper: '#FDFCFB', // cream-50
    },
    text: {
      primary: '#343A40', // neutral-800
      secondary: '#495057', // neutral-700
      disabled: '#ADB5BD', // neutral-500
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(0,0,0,0.05)',
    '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
    '0 4px 6px rgba(0,0,0,0.1)',
    '0 5px 15px rgba(0,0,0,0.08)',
    '0 10px 24px rgba(0,0,0,0.1)',
    '0 15px 35px rgba(0,0,0,0.1)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
    '0 20px 40px rgba(0,0,0,0.15)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 10px 24px rgba(0,0,0,0.1)',
            transform: 'translateY(-4px)',
            transition: 'all 0.3s ease',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
  },
});

export default muiTheme;
