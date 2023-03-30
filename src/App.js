import logo from "./logo.svg";
import "./App.css";

import { createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import Menu from "./components/Menu/Menu";
import Dashboard from "./components/Dashboard";

const themeColor = createTheme({
  palette: {
    backgroundImage: {
      default: "white",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeColor}>
      <CssBaseline />

      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
