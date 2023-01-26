import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Votepage from './Components/Vote/Votepage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#52cfe3'
    }
  },
  typography: {
    fontFamily: 'Pridi, serif'
  }
})

root.render(
  <ThemeProvider theme={themeLight}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<App />} />
          <Route path='/vote' element={<Votepage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
