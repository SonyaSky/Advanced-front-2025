import { useState } from 'react';

import LoginForm from './components/loginForm/loginForm.jsx';
import { ThemeProvider } from './contexts/themeContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {

  return (
    <>
    <ThemeProvider>
      <LoginForm>
      </LoginForm>
    </ThemeProvider>
    </>
  )
}

export default App
