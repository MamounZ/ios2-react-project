import React, { useState } from 'react';

const register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordAgainChange = (e) => {
    setPasswordAgain(e.target.value);
  };

  const handleSubmit = () => {
    // Perform registration logic
    // You can use the values of `name`, `email`, `password`, and `passwordAgain` here
    // Example: Call an API or perform an action
  };

  return (
    <div>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: "url('assets/b.png')",
          backgroundSize: 'cover',
        }}
      >
        {/* Registration Form */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh',
            width: '85vw',
            backgroundColor: 'rgba(0, 0, 255, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.75)',
          }}
        >
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{ color: 'white', cursor: 'text' }}
              placeholder="User Name"
            />
            <br />
            <br />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{ color: 'white', cursor: 'text' }}
              placeholder="E-Mail"
            />
            <br />
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ color: 'white', cursor: 'text' }}
              placeholder="Password"
            />
            <br />
            <br />
            <input
              type="password"
              value={passwordAgain}
              onChange={handlePasswordAgainChange}
              style={{ color: 'white', cursor: 'text' }}
              placeholder="Repeat Password"
            />
            <br />
            <br />
            <button
              onClick={handleSubmit}
              style={{
                border: '2px solid white',
                borderRadius: '30px',
                padding: '5px',
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Save
            </button>
          </div>
        </div>

        {/* Sign Up Label */}
        <div
          style={{
            position: 'absolute',
            top: '6vh',
            left: '2vw',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => {
              // Navigate back logic
              // Example: Go back to previous page
            }}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              color: 'rgba(0, 0, 255, 0.3)',
              fontSize: '26px',
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <div
            style={{
              marginLeft: '30%',
              fontSize: '20px',
              color: 'rgba(0, 0, 255, 0.3)',
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
