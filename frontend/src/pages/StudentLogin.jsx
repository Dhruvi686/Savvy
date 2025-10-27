import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css';
import axios from 'axios';

const StudentLogin = () => {
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
      const res = await axios.post('/api/student/login', { 
        username, 
        password 
      }, {
        timeout: 10000 // 10 second timeout
      });
      
      const { token, student } = res.data;
      localStorage.setItem('studentToken', token);
      localStorage.setItem('studentUser', JSON.stringify(student));
      navigate('/student'); 

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
    <div className="student-login-page">
      <div className="student-login-container">
        <div className="student-logo">
          <img src={process.env.PUBLIC_URL + '/savvy-logo.png'} alt="Savvy Logo" />
        </div>
        
        <div className="student-login-card">
          <h1 className="student-login-title">Student Login</h1>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="student-login-form">
            <div className="form-group">
              <label className="form-label">Enter Username</label>
              <input
                type="text"
                className="form-input"
                placeholder="Username or Mobile Number"
                value={username}
                onChange={e => setUsername(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Enter Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="Enter Password"
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
              Forgot Password ?
            </button>

            <button 
              type="submit" 
              className={`student-login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Signing in...
                </>
              ) : (
                '🔒 Sign in'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;