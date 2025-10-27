import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortalLogin.css';
import axios from 'axios';

const PortalLogin = () => {
  const [email, setEmail] = useState('');
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
      // Try admin login first
      try {
        const res = await axios.post('/api/admin/login', { 
          username: email, 
          password 
        }, {
          timeout: 10000
        });
        
        const { token, admin } = res.data;
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminUser', JSON.stringify(admin));
        navigate('/admin');
        return;
      } catch (adminError) {
        // If admin login fails, try student login
        try {
          const res = await axios.post('/api/student/login', { 
            username: email, 
            password 
          }, {
            timeout: 10000
          });
          
          const { token, student } = res.data;
          localStorage.setItem('studentToken', token);
          localStorage.setItem('studentUser', JSON.stringify(student));
          navigate('/student');
          return;
        } catch (studentError) {
          // If student login fails, try franchise login
          try {
            const res = await axios.post('/api/franchise/login', { 
              username: email, 
              password 
            }, {
              timeout: 10000
            });
            
            const { token, franchise } = res.data;
            localStorage.setItem('franchiseToken', token);
            localStorage.setItem('franchiseUser', JSON.stringify(franchise));
            navigate('/franchise');
            return;
          } catch (franchiseError) {
            throw new Error('Invalid credentials');
          }
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      
      if (err.code === 'ECONNABORTED') {
        setError('Login request timed out. Please try again.');
      } else if (err.response?.status === 401 || err.message === 'Invalid credentials') {
        setError('Invalid email or password.');
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
    <div className="portal-login-page">
      <div className="portal-login-container">
        <div className="portal-logo">
          <img src={process.env.PUBLIC_URL + '/savvy-logo.png'} alt="Savvy Logo" />
        </div>
        
        <div className="portal-login-card">
          <h1 className="portal-login-title">Login</h1>
          <p className="portal-login-subtitle">Welcome to Savvy Admin Portal</p>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="portal-login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
              className={`portal-login-btn ${isLoading ? 'loading' : ''}`}
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

export default PortalLogin;
