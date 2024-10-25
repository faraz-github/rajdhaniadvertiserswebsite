import { ThemeProvider } from "@mui/material";

import { theme } from "./MUI/theme";
import "./App.css";

import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
