import React, { useState } from 'react';
import './ContactUs.css';
import { validateContactForm } from './validation';

const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateContactForm(formValues);
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formValues);
      setIsSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <h2 className="title">Contact Us</h2>
        {!isSubmitted ? (
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="success-message">
            <p>Thank you for contacting us!</p>
            <p>We will get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;