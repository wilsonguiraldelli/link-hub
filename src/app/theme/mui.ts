import { createTheme } from "@mui/material";

import colors from "./colors";

const materialTheme = createTheme({
  typography: {
    fontFamily: "Inter, Arial",
  },
  palette: {
    primary: {
      dark: colors.primary.dark,
      main: colors.primary.base,
      light: colors.primary.light,
      lighter: colors.primary.lightest,
    },
    secondary: {
      dark: colors.secondary.dark,
      main: colors.secondary.base,
      light: colors.secondary.light,
      lighter: colors.secondary.lightest,
    },
    success: {
      dark: colors.success.dark,
      main: colors.success.base,
      light: colors.success.light,
      lighter: colors.success.lightest,
    },
    error: {
      dark: colors.error.dark,
      main: colors.error.base,
      light: colors.error.light,
      lighter: colors.error.lightest,
    },
    warning: {
      dark: colors.warning.dark,
      main: colors.warning.base,
      light: colors.warning.light,
      lighter: colors.warning.lightest,
    },
    info: {
      dark: colors.info.dark,
      main: colors.info.base,
      light: colors.info.light,
      lighter: colors.info.lightest,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
        }
      `,
    },
    MuiLinearProgress: {
      styleOverrides: {
        determinate: {
          backgroundColor: colors.neutral[200],
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default materialTheme;
