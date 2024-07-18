// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      navigate('/home');
    },
    onError: () => console.log('Google Login Failed'),
  });

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="input-container">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
      </div>
      <button className="submit-button">Sign Up</button>
      <div className="divider">or</div>
        <button className="google" onClick={login}>
          Continue 
        </button>
    </div>
  );
};

export default LoginPage;
