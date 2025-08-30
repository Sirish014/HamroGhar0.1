import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Logging in with Google');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="welcome-header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div className="remember-forgot">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember">Remember Me?</label>
            </div>
          </div>
          
          <div className="button-group">
            <button type="submit" className="login-btn">Log In</button>
            <button type="button" className="signup-btn">Signup</button>
          </div>
        </form>
        
        <div className="divider">
          <span>or</span>
        </div>
        
        <button className="google-login-btn" onClick={handleGoogleLogin}>
          <span className="google-icon">G</span>
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;