import React, { useState } from 'react';

const LoginPage = ({ handleCustomerData }) => {
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

    // Perform login logic here (e.g., API request)
    // For now, let's assume the login is successful
    if (email === 'admin@example.com' && password === 'admin') {
      setLoginError(false);
      // Clear input fields
      setEmail('');
      setPassword('');
      // Call the parent component's function to handle customer data
      handleCustomerData('123'); // Pass the customerId as an example
    } else {
      setLoginError(true);
    }
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
