// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaFacebook } from 'react-icons/fa';
import api from '../api/api';//api import

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //handleLogin function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('login/', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  const handleGoogleLogin = () => {
    console.log('Login with Google clicked');
    // Add Google OAuth logic here
  };
  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    // Implement Facebook OAuth here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to StayFinder</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <div className="or-separator"><span>or</span></div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <FcGoogle style={{ marginRight: '8px', fontSize: '1.2rem' }} />
          Login with Google
        </button>
        <button className="facebook-btn" onClick={handleFacebookLogin}>
          <FaFacebook style={{ marginRight: '8px', fontSize: '1.2rem' }} />
          Login with Facebook
        </button>

        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
