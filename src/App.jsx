import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Login from './pages/Login'
import './App.css';

function App() {
   const theme = createMuiTheme({
      palette: {
         type: 'dark',
      },
   });


   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            <Login />
         </div>
      </ThemeProvider>
   );
}

export default App;
