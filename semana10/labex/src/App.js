import React from 'react';
import Router from './router/Router'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './App.css'

const font = createMuiTheme({
  typography: {
   "fontFamily": `'Ubuntu'`,
  }
});

function App() {
  return (<MuiThemeProvider theme={font}>
    <div className="general">
    <Router />
    </div>
  </MuiThemeProvider>)
}

export default App
