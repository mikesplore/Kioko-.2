import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  // Get auth context
  const { login } = useAuth();
  
  // State management
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Register form state
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  // Success message
  const [success, setSuccess] = useState('');

  // Handle login form submission
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // Use auth context login function
      const success = await login(username, password);
      
      if (success) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          console.log('Redirecting to dashboard...');
          // Add your redirect logic here - could navigate back to shop page
        }, 1500);
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      setLoginError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle register form submission
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError('');
    setSuccess('');
    setIsRegisterLoading(true);

    // Client-side validation
    if (!registerUsername || !registerEmail || !registerPassword) {
      setRegisterError('Please fill in all fields');
      setIsRegisterLoading(false);
      return;
    }

    if (registerPassword.length < 6) {
      setRegisterError('Password must be at least 6 characters');
      setIsRegisterLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Replace with actual registration logic
      setSuccess('Registration successful! You can now login.');
      setRegisterUsername('');
      setRegisterEmail('');
      setRegisterPassword('');

      // Auto-switch to login form after successful registration
      setTimeout(() => {
        setIsActive(false);
        setSuccess('');
      }, 2000);
    } catch (error) {
      setRegisterError('Registration failed. Please try again.');
    } finally {
      setIsRegisterLoading(false);
    }
  };

  // Handle social login (placeholder)
  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  // Styles object
  const styles = {
    loginPage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(90deg, #e2e2e2, #c9d6ff)',
      fontFamily: '"Inter", sans-serif',
      margin: 0,
      padding: 0,
    } as React.CSSProperties,

    container: {
      position: 'relative',
      width: '850px',
      height: '550px',
      background: '#fff',
      margin: '20px',
      borderRadius: '30px',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
    } as React.CSSProperties,

    formBox: {
      position: 'absolute',
      right: isActive ? '50%' : '0',
      width: '50%',
      height: '100%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      color: '#333',
      textAlign: 'center',
      padding: '40px',
      zIndex: 1,
      transition: '0.6s ease-in-out 1.2s, visibility 0s 1s',
    } as React.CSSProperties,

    registerBox: {
      position: 'absolute',
      left: isActive ? '50%' : '100%',
      width: '50%',
      height: '100%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      color: '#333',
      textAlign: 'center',
      padding: '40px',
      zIndex: 1,
      visibility: isActive ? 'visible' : 'hidden',
      transition: '0.6s ease-in-out 1.2s, visibility 0s 1s',
    } as React.CSSProperties,

    form: {
      width: '100%',
    } as React.CSSProperties,

    title: {
      fontSize: '36px',
      margin: '-10px 0 20px 0',
      color: '#333',
      fontWeight: '600',
    } as React.CSSProperties,

    inputBox: {
      position: 'relative',
      margin: '30px 0',
    } as React.CSSProperties,

    input: {
      width: '100%',
      padding: '13px 50px 13px 20px',
      background: '#eee',
      borderRadius: '8px',
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      color: '#333',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
    } as React.CSSProperties,

    inputDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed',
    } as React.CSSProperties,

    icon: {
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '20px',
      color: '#7494ec',
    } as React.CSSProperties,

    forgotLink: {
      margin: '-15px 0 15px',
      textAlign: 'left',
    } as React.CSSProperties,

    forgotLinkA: {
      fontSize: '14.5px',
      color: '#333',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    } as React.CSSProperties,

    btn: {
      width: '100%',
      height: '48px',
      background: '#7494ec',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      color: '#fff',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    } as React.CSSProperties,

    btnDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed',
    } as React.CSSProperties,

    socialText: {
      fontSize: '14.5px',
      margin: '15px 0',
      color: '#333',
    } as React.CSSProperties,

    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '20px',
    } as React.CSSProperties,

    socialIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      fontSize: '20px',
      color: '#333',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    } as React.CSSProperties,

    toggleBox: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    } as React.CSSProperties,

    toggleBoxBefore: {
      content: '""',
      position: 'absolute',
      left: isActive ? '50%' : '-250%',
      width: '300%',
      height: '100%',
      background: '#7494ec',
      borderRadius: '150px',
      zIndex: 2,
      transition: '1.8s ease-in-out',
    } as React.CSSProperties,

    togglePanel: {
      position: 'absolute',
      width: '50%',
      height: '100%',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      transition: '0.6s ease-in-out',
    } as React.CSSProperties,

    toggleLeft: {
      left: isActive ? '-50%' : '0',
      transitionDelay: isActive ? '0.6s' : '1.2s',
    } as React.CSSProperties,

    toggleRight: {
      right: isActive ? '0' : '-50%',
      transitionDelay: isActive ? '1.2s' : '0.6s',
    } as React.CSSProperties,

    toggleBtn: {
      width: '160px',
      height: '46px',
      background: 'transparent',
      border: '2px solid #fff',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    } as React.CSSProperties,

    toggleText: {
      marginBottom: '20px',
      fontSize: '14.5px',
    } as React.CSSProperties,

    errorMessage: {
      color: '#ff4444',
      background: 'rgba(255, 68, 68, 0.1)',
      border: '1px solid rgba(255, 68, 68, 0.3)',
      padding: '10px',
      borderRadius: '6px',
      marginBottom: '20px',
      fontSize: '14px',
      textAlign: 'center',
    } as React.CSSProperties,

    successMessage: {
      color: '#00aa44',
      background: 'rgba(0, 170, 68, 0.1)',
      border: '1px solid rgba(0, 170, 68, 0.3)',
      padding: '10px',
      borderRadius: '6px',
      marginBottom: '20px',
      fontSize: '14px',
      textAlign: 'center',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.loginPage}>
      <div style={styles.container}>
        {/* Login Form */}
        <div style={styles.formBox}>
          <div style={styles.form}>
            <h1 style={styles.title}>Login</h1>

            {loginError && <div style={styles.errorMessage}>{loginError}</div>}
            {success && <div style={styles.successMessage}>{success}</div>}

            <div style={styles.inputBox}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={isLoading}
                style={{
                  ...styles.input,
                  ...(isLoading ? styles.inputDisabled : {})
                }}
                onFocus={(e) => {
                  e.target.style.background = '#f5f5f5';
                  e.target.style.boxShadow = '0 0 5px rgba(116, 148, 236, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.background = '#eee';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <span style={styles.icon}>👤</span>
            </div>

            <div style={styles.inputBox}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                style={{
                  ...styles.input,
                  ...(isLoading ? styles.inputDisabled : {})
                }}
                onFocus={(e) => {
                  e.target.style.background = '#f5f5f5';
                  e.target.style.boxShadow = '0 0 5px rgba(116, 148, 236, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.background = '#eee';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <span style={styles.icon}>🔒</span>
            </div>

            <div style={styles.forgotLink}>
              <span
                style={styles.forgotLinkA}
                onClick={() => {
                  console.log('Forgot password clicked');
                  // Implement forgot password logic
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#7494ec';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#333';
                }}
              >
                Forgot Password?
              </span>
            </div>

            <button
              type="button"
              style={{
                ...styles.btn,
                ...(isLoading ? styles.btnDisabled : {})
              }}
              disabled={isLoading}
              onClick={handleLoginSubmit}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = '#5c7cfa';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(116, 148, 236, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = '#7494ec';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <p style={styles.socialText}>or login with social platforms</p>

            <div style={styles.socialIcons}>
              <span
                style={styles.socialIcon}
                onClick={() => handleSocialLogin('google')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7494ec';
                  e.currentTarget.style.color = '#7494ec';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                G
              </span>
              <span
                style={styles.socialIcon}
                onClick={() => handleSocialLogin('facebook')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7494ec';
                  e.currentTarget.style.color = '#7494ec';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                f
              </span>
              <span
                style={styles.socialIcon}
                onClick={() => handleSocialLogin('github')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7494ec';
                  e.currentTarget.style.color = '#7494ec';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                ⚡
              </span>
              <span
                style={styles.socialIcon}
                onClick={() => handleSocialLogin('linkedin')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7494ec';
                  e.currentTarget.style.color = '#7494ec';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                in
              </span>
            </div>
          </div>
        </div>

        {/* Register Form */}
        <div style={styles.registerBox}>
          <div style={styles.form}>
            <h1 style={styles.title}>Registration</h1>

            {registerError && <div style={styles.errorMessage}>{registerError}</div>}
            {success && <div style={styles.successMessage}>{success}</div>}

            <div style={styles.inputBox}>
              <input
                type="text"
                placeholder="Username"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
                required
                disabled={isRegisterLoading}
                style={{
                  ...styles.input,
                  ...(isRegisterLoading ? styles.inputDisabled : {})
                }}
                onFocus={(e) => {
                  e.target.style.background = '#f5f5f5';
                  e.target.style.boxShadow = '0 0 5px rgba(116, 148, 236, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.background = '#eee';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <span style={styles.icon}>👤</span>
            </div>

            <div style={styles.inputBox}>
              <input
                type="email"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
                disabled={isRegisterLoading}
                style={{
                  ...styles.input,
                  ...(isRegisterLoading ? styles.inputDisabled : {})
                }}
                onFocus={(e) => {
                  e.target.style.background = '#f5f5f5';
                  e.target.style.boxShadow = '0 0 5px rgba(116, 148, 236, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.background = '#eee';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <span style={styles.icon}>✉️</span>
            </div>

            <div style={styles.inputBox}>
              <input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
                disabled={isRegisterLoading}
                style={{
                  ...styles.input,
                  ...(isRegisterLoading ? styles.inputDisabled : {})
                }}
                onFocus={(e) => {
                  e.target.style.background = '#f5f5f5';
                  e.target.style.boxShadow = '0 0 5px rgba(116, 148, 236, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.background = '#eee';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <span style={styles.icon}>🔒</span>
            </div>

            <button
              type="button"
              style={{
                ...styles.btn,
                ...(isRegisterLoading ? styles.btnDisabled : {})
              }}
              disabled={isRegisterLoading}
              onClick={handleRegisterSubmit}
              onMouseEnter={(e) => {
                if (!isRegisterLoading) {
                  e.currentTarget.style.background = '#5c7cfa';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(116, 148, 236, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isRegisterLoading) {
                  e.currentTarget.style.background = '#7494ec';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {isRegisterLoading ? 'Registering...' : 'Register'}
            </button>

            <p style={styles.socialText}>or register with social platforms</p>

            <div style={styles.socialIcons}>
              <span
                style={styles.socialIcon}
                onClick={() => handleSocialLogin('google')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7494ec';
                  e.currentTarget.style.color = '#7494ec';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                G
              </span>
              <span
                style={styles.socialIcon}
                onClick={() => handleSocialLogin('facebook')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7494ec';
                  e.currentTarget.style.color = '#7494ec';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                f
              </span>
              <span
                style={styles.socialIcon}
                onClick={() => handleSocialLogin('github')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7494ec';
                  e.currentTarget.style.color = '#7494ec';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                ⚡
              </span>
              <span
                style={styles.socialIcon}
                onClick={() => handleSocialLogin('linkedin')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7494ec';
                  e.currentTarget.style.color = '#7494ec';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                in
              </span>
            </div>
          </div>
        </div>

        {/* Toggle Box */}
        <div style={styles.toggleBox}>
          <div style={styles.toggleBoxBefore}></div>

          {/* Toggle Panels */}
          <div style={{ ...styles.togglePanel, ...styles.toggleLeft }}>
            <h1 style={styles.title}>Hello, Welcome!</h1>
            <p style={styles.toggleText}>Don't have an account?</p>
            <button
              style={styles.toggleBtn}
              onClick={() => setIsActive(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Register
            </button>
          </div>

          <div style={{ ...styles.togglePanel, ...styles.toggleRight }}>
            <h1 style={styles.title}>Welcome Back!</h1>
            <p style={styles.toggleText}>Already have an account?</p>
            <button
              style={styles.toggleBtn}
              onClick={() => setIsActive(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;