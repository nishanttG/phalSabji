import React, { useState } from 'react';

const LoginPage = ({ setCustomerId }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create the request payload
    const payload = {
      email: email,
      password: password,
    };
  
    // Send a POST request to the backend API
    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        // Assuming the response contains a success flag and customer data
        if (data.success) {
          setLoginError(false);
          // Clear input fields
          setEmail('');
          setPassword('');
          // Call the parent component's function to handle customer data
          setCustomerId(data.customerId);
          console.log(data)
        } else {
          setLoginError(true);
        }
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error('Error:', error);
        // Set the login error state accordingly
        setLoginError(true);
      });
  };
  

  return (
    <div className="container">
      <div className="app-wrapper">
        <h2 className="title">Login</h2>
        {loginError && <p className="error">Login failed. Please try again.</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="label">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
            />
          </div>
          <div>
            <label htmlFor="password" className="label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
            />
          </div>
          <button type="submit" className="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
