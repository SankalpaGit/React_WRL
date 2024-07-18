// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log('Logging out...');
    await googleLogout();
    console.log('Logout complete, navigating...');
    navigate('/');
  };
  
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>You are successfully logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
