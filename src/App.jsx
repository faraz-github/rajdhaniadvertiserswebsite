import { ThemeProvider } from "@mui/material";

import { theme } from "./MUI/theme";
import "./App.css";

import HomePage from "./pages/HomePage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
