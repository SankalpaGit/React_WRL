// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import HomePage from './HomePage'; // Assuming HomePage is the page to redirect to
import LoginPage from './LoginPage'; // Assuming LoginPage is the page with Google Login

function Login() {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    navigate('/home');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log('Login Failed')}
      useOneTap
    />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
