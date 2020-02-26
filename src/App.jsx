import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Login from './pages/Login';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Login />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
