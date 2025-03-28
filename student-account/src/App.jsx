import React from 'react';
import { Routes, Route } from 'react-router-dom';


import { ThemeProvider } from './contexts/themeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginPage from './pages/loginPage.jsx';

function App() {

  return (
    <>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App
