import { useState } from 'react';
import { type ChangeEvent, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(false);

  // Registration form states
  const [regUsername, setRegUsername] = useState<string>('');
  const [regEmail, setRegEmail] = useState<string>('');
  const [regPassword, setRegPassword] = useState<string>('');

  // Mock auth functions (replace with your actual implementation)
  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return username === 'admin' && password === 'password';
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(username, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration:', { regUsername, regEmail, regPassword });
  };

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(90deg, #e2e2e2, #c9d6ff)',
      fontFamily: "'Poppins', sans-serif",
      margin: 0,
      padding: 0,
    },
    container: {
      position: 'relative' as const,
      width: '850px',
      height: '550px',
      background: '#fff',
      margin: '20px',
      borderRadius: '30px',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
    },
    formBox: {
      position: 'absolute' as const,
      right: isRegisterMode ? '50%' : '0',
      width: '50%',
      height: '100%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      color: '#333',
      textAlign: 'center' as const,
      padding: '40px',
      zIndex: 1,
      transition: '0.6s ease-in-out 1.2s, visibility 0s 1s',
    },
    registerBox: {
      position: 'absolute' as const,
      right: '0',
      width: '50%',
      height: '100%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      color: '#333',
      textAlign: 'center' as const,
      padding: '40px',
      zIndex: 1,
      visibility: isRegisterMode ? 'visible' as const : 'hidden' as const,
      transition: '0.6s ease-in-out 1.2s, visibility 0s 1s',
    },
    form: {
      width: '100%',
    },
    h1: {
      fontSize: '36px',
      margin: '-10px 0',
    },
    p: {
      fontSize: '14.5px',
      margin: '15px 0',
    },
    inputBox: {
      position: 'relative' as const,
      margin: '30px 0',
    },
    input: {
      width: '100%',
      padding: '13px 50px 13px 20px',
      background: '#eee',
      borderRadius: '8px',
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      color: '#333',
      fontWeight: 500,
      boxSizing: 'border-box' as const,
    },
    icon: {
      position: 'absolute' as const,
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '20px',
      color: '#888',
    },
    forgotLink: {
      margin: '-15px 0 15px',
    },
    forgotLinkA: {
      fontSize: '14.5px',
      color: '#333',
      textDecoration: 'none',
      cursor: 'pointer',
    },
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
      fontWeight: 600,
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15px',
    },
    socialIcon: {
      display: 'inline-flex',
      padding: '10px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      fontSize: '24px',
      color: '#333',
      margin: '0 8px',
      textDecoration: 'none',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44px',
      height: '44px',
    },
    toggleBox: {
      position: 'absolute' as const,
      width: '100%',
      height: '100%',
    },
    toggleBoxBefore: {
      content: '""',
      position: 'absolute' as const,
      left: isRegisterMode ? '50%' : '-250%',
      width: '300%',
      height: '100%',
      background: '#7494ec',
      borderRadius: '150px',
      zIndex: 2,
      transition: '1.8s ease-in-out',
    },
    togglePanel: {
      position: 'absolute' as const,
      width: '50%',
      height: '100%',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      transition: '0.6s ease-in-out',
    },
    toggleLeft: {
      left: isRegisterMode ? '-50%' : '0',
      transitionDelay: isRegisterMode ? '0.6s' : '1.2s',
    },
    toggleRight: {
      right: isRegisterMode ? '0' : '-50%',
      transitionDelay: isRegisterMode ? '1.2s' : '0.6s',
    },
    toggleBtn: {
      width: '160px',
      height: '46px',
      background: 'transparent',
      border: '2px solid #fff',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      color: '#fff',
      fontWeight: 600,
      boxShadow: 'none',
    },
    error: {
      color: '#ff4d4d',
      marginBottom: '1rem',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Login Form */}
        <div style={styles.formBox}>
          <div style={styles.form}>
            <h1 style={styles.h1}>Login</h1>
            {error && <p style={styles.error}>{error}</p>}
            <div style={styles.inputBox}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                style={styles.input}
                required
              />
              <i style={styles.icon}>👤</i>
            </div>
            <div style={styles.inputBox}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <i style={styles.icon}>🔒</i>
            </div>
            <div style={styles.forgotLink}>
              <span style={styles.forgotLinkA}>Forgot Password?</span>
            </div>
            <button 
              type="button" 
              style={styles.btn}
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <p style={styles.p}>or login with social platforms</p>
            <div style={styles.socialIcons}>
              <div style={styles.socialIcon}>G</div>
              <div style={styles.socialIcon}>f</div>
              <div style={styles.socialIcon}>📧</div>
              <div style={styles.socialIcon}>💼</div>
            </div>
          </div>
        </div>

        {/* Register Form */}
        <div style={styles.registerBox}>
          <div style={styles.form}>
            <h1 style={styles.h1}>Registration</h1>
            <div style={styles.inputBox}>
              <input
                type="text"
                placeholder="Username"
                value={regUsername}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setRegUsername(e.target.value)}
                style={styles.input}
                required
              />
              <i style={styles.icon}>👤</i>
            </div>
            <div style={styles.inputBox}>
              <input
                type="email"
                placeholder="Email"
                value={regEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setRegEmail(e.target.value)}
                style={styles.input}
                required
              />
              <i style={styles.icon}>✉️</i>
            </div>
            <div style={styles.inputBox}>
              <input
                type="password"
                placeholder="Password"
                value={regPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setRegPassword(e.target.value)}
                style={styles.input}
                required
              />
              <i style={styles.icon}>🔒</i>
            </div>
            <button 
              type="button" 
              style={styles.btn}
              onClick={handleRegisterSubmit}
            >
              Register
            </button>
            <p style={styles.p}>or register with social platforms</p>
            <div style={styles.socialIcons}>
              <div style={styles.socialIcon}>G</div>
              <div style={styles.socialIcon}>f</div>
              <div style={styles.socialIcon}>📧</div>
              <div style={styles.socialIcon}>💼</div>
            </div>
          </div>
        </div>

        {/* Toggle Box */}
        <div style={styles.toggleBox}>
          <div style={styles.toggleBoxBefore}></div>
          
          {/* Toggle Left Panel */}
          <div style={{...styles.togglePanel, ...styles.toggleLeft}}>
            <h1 style={styles.h1}>Hello, Welcome!</h1>
            <p style={{...styles.p, marginBottom: '20px'}}>Don't have an account?</p>
            <button 
              style={styles.toggleBtn}
              onClick={() => setIsRegisterMode(true)}
            >
              Register
            </button>
          </div>

          {/* Toggle Right Panel */}
          <div style={{...styles.togglePanel, ...styles.toggleRight}}>
            <h1 style={styles.h1}>Welcome Back!</h1>
            <p style={{...styles.p, marginBottom: '20px'}}>Already have an account?</p>
            <button 
              style={styles.toggleBtn}
              onClick={() => setIsRegisterMode(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;