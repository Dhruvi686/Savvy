import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FranchiseLogin.css';
import axios from 'axios';

const FranchiseLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await axios.post('/api/franchise/login', { 
        username, 
        password 
      }, {
        timeout: 10000 // 10 second timeout
      });
      
      const { token, franchise } = res.data;
      localStorage.setItem('franchiseToken', token);
      localStorage.setItem('franchiseUser', JSON.stringify(franchise));
      navigate('/franchise'); 

    } catch (err) {
      console.error('Login error:', err);
      
      if (err.code === 'ECONNABORTED') {
        setError('Login request timed out. Please try again.');
      } else if (err.response?.status === 401) {
        setError('Invalid username or password.');
      } else if (err.response?.status === 500) {
        setError('Server error. Please try again later.');
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Login failed. Please check your connection and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="franchise-login-page">
      <div className="franchise-login-container">
        <div className="franchise-logo">
          <img src={process.env.PUBLIC_URL + '/savvy-logo.png'} alt="Savvy Logo" />
        </div>
        
        <div className="franchise-login-card">
          <h1 className="franchise-login-title">Login</h1>
          <p className="franchise-login-subtitle">Welcome to Savvy Franchise Portal</p>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="franchise-login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={username}
                onChange={e => setUsername(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '👁️' : '🔒'}
                </button>
              </div>
            </div>

            <button type="button" className="forgot-password" disabled={isLoading}>
              Forgot password
            </button>

            <button 
              type="submit" 
              className={`franchise-login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Signing in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseLogin;
