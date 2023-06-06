import React, { useState } from 'react';
import AuthService from './service/authService';
import BottomNavigationBar from './bottom_navigation_bar';
import RegisterPage from './register';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const authService = new AuthService();

  const handleLogin = () => {
    authService.signIn(email, password).then((value) => {
      setLoggedIn(true);
    });
  };

  const handleSignup = () => {
    let component;
    switch (this.props.modal) {
        case 'login':
            return component = <LoginFormContainer />;
            break;
        case 'signup':
            return component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    console.log('Navigate to signup page');
  };

  if (isLoggedIn) {
    return <BottomNavigationBar />;
  }

  return (
    <div
      style={{
        backgroundImage: 'url(assets/b.png)',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          width: '85%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          borderRadius: '20px',
          boxShadow: '0px 0px 10px 2px rgba(128, 128, 128, 0.75)',
        }}
      >
        <div style={{ padding: '10px' }}>
          <div style={{ marginBottom: '2%' }}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                color: 'white',
                cursor: 'text',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid white',
                outline: 'none',
                padding: '5px',
              }}
              placeholder="E-Mail"
            />
          </div>
          <div style={{ marginBottom: '2%' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                color: 'white',
                cursor: 'text',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid white',
                outline: 'none',
                padding: '5px',
              }}
              placeholder="Password"
            />
          </div>
          <div style={{ marginBottom: '8%' }}>
            <button
              onClick={handleLogin}
              style={{
                padding: '5px',
                border: '2px solid white',
                borderRadius: '30px',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Log In
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ width: '75px', height: '1px', backgroundColor: 'white' }} />
            <span style={{ color: 'white' }} onClick={handleSignup}>Sign Up</span>
            <div style={{ width: '75px', height: '1px', backgroundColor: 'white' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
