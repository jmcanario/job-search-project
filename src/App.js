import logo from "./logo.svg";
import "./App.css";

import { createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import Menu from "./components/Menu/Menu";
import Dashboard from "./components/Dashboard";

const themeColor = createTheme({
  palette: {
    backgroundImage: {
      default: "blue",
    },
    direction:"column",
  alignItems:"center",
  justifyContent:"center",
    display: 'grid'
  },
});

function App() {
  return (
    <ThemeProvider theme={themeColor}>
      <CssBaseline />
      <Dashboard style={{ minHeight: '100vh'}} />
    </ThemeProvider>
  );
}

export default App;
