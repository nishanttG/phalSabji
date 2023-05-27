
import React, { useState } from 'react';
import './Signup.css';



const Signup = ({ handleCustomerData }) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [accountCreated, setAccountCreated] = useState(false);
  const [customerId, setCustomerId] = useState(null);


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));

    if (Object.keys(errors).length === 0) {
      const requestData = {
        first_name: values.firstName,
        last_name: values.lastName,
        phone: values.phoneNumber,
        email: values.email,
        password: values.password,
      };

      fetch('http://127.0.0.1:8000/api/customer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCustomerId(data.customerId)
          setAccountCreated(true);
          handleCustomerData(customerId);

          setValues({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const validation = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 5) {
      errors.password = 'Password must be at least 5 characters';
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form action="" className="form-wrapper">
          <div className="firstName">
            <label htmlFor="" className="label">
              First Name
            </label>
            <input
              className="input"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="lastName">
            <label htmlFor="" className="label">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="phoneNumber">
            <label htmlFor="" className="label">
              Phone Number
            </label>
            <input
              className="input"
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
          <div className="email">
            <label htmlFor="" className="label">
              Email
            </label>
            <input
              className="input"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label htmlFor="" className="label">
              Password
            </label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button className="submit" onClick={handleFormSubmit} disabled={accountCreated}>
            {accountCreated ? 'Account Created' : 'Sign Up'}
          </button>
        </form>
        {accountCreated && (
          <div className="success-message">
            <p>Account created successfully!</p>
            {/* <Cart customerId={customerId} phoneNumber={values.phoneNumber} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;

