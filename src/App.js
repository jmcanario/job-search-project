import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { createTheme, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import Menu from './components/Menu/Menu';
import Dashboard from './components/Dashboard';


const themeColor = createTheme({
  palette: {
    backgroundImage: {
      default: 'white'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={themeColor}>
       <CssBaseline />
       
       <Dashboard />       
    </ThemeProvider>
>>>>>>> ebf5df3 (trying to solve)
  );
}

export default App;
