// theme.js
import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED', // Modern purple
      light: '#9F67FF',
      dark: '#5B21B6',
    },
    secondary: {
      main: '#EC4899', // Modern pink
      light: '#F472B6',
      dark: '#BE185D',
    },
    background: {
      default: '#0F172A', // Dark blue-gray
      paper: '#1E293B',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(148, 163, 184, 0.12)',
    custom: {
      gradientText: 'linear-gradient(to right, #7C3AED, #EC4899)',
      cardGradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1))',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
  },
});