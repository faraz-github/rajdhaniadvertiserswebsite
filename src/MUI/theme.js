import { createTheme } from "@mui/material";

export const theme = createTheme({
  shape: {
    borderRadius: 4,
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
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
    },
  },
});
