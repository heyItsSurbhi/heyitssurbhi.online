import { createTheme } from '@mui/material/styles';

const getTheme = (mode = 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: '#7c3aed',
      light: '#a78bfa',
      dark: '#5b21b6',
    },
    secondary: {
      main: '#06b6d4',
      light: '#67e8f9',
      dark: '#0891b2',
    },
    background: {
      default: mode === 'dark' ? '#0a0a0f' : '#ffffff',
      paper: mode === 'dark' ? '#12121a' : '#f5f5f7',
    },
    text: {
      primary: mode === 'dark' ? '#f0f0f0' : '#111118',
      secondary: mode === 'dark' ? '#a0a0b0' : '#4a4a5a',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
          padding: '10px 24px',
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
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
        },
      },
    },
  },
});

export default getTheme;
