import React, { useState, useCallback, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Login from './pages/Login';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import AuthContext from './components/AuthContext';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(null);

  const login = useCallback((_id) => {
    setIsLoggedIn(true);
    setId(_id);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('id');
    setIsLoggedIn(false);
    setId(null);
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });


  useEffect(() => {
    if (localStorage.getItem('id')) {
      setId(localStorage.getItem('id'));
      setIsLoggedIn(true);
      console.log("inside effect");
      
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, id: id, login: login, logout: logout }}
    >
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          {isLoggedIn ? <Home /> : <Login />}
        </div>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
