import { createTheme } from "@mui/material";

export const theme = createTheme({
  shape: {
    borderRadius: 2,
  },
  palette: {
    primary: {
      main: "#2B2A4C",
      light: "#55546f",
      dark: "#1e1d35",
    },
    secondary: {
      main: "#EEE2DE",
      light: "#f1e7e4",
      dark: "#a69e9b",
    },
    brandRed: "#B31312",
    brandOrange: "#EA906C",
  },
  typography: {
    fontFamily: '"Jost", sans-serif',
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
    },
    button: {
      fontSize: 20,
      fontWeight: 700,
      textTransform: "none",
    },
  },
});
