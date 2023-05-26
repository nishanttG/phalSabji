// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Signup.css';
// import validation from './validation';

// const Signup = () => {
//   const [formValues, setFormValues] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//   });
//   const [formIsSubmitted, setFormIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validation(formValues));
//     setFormIsSubmitted(true);
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && formIsSubmitted) {
//       // Perform any additional actions on successful form submission
//       console.log('Form submitted successfully!');
//     }
//   }, [errors, formIsSubmitted]);

//   return (
//     <div className="container">
//       <div className="app-wrapper">
//         <div>
//           <h2 className="title">Create Account</h2>
//         </div>
//         <form className="form-wrapper">
//           <div className="name">
//             <label htmlFor="firstName" className="label">
//               First Name
//             </label>
//             <input
//               className="input"
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formValues.firstName}
//               onChange={handleChange}
//             />
//             {errors.firstName && <p className="error">{errors.firstName}</p>}
//           </div>
//           <div className="name">
//             <label htmlFor="lastName" className="label">
//               Last Name
//             </label>
//             <input
//               className="input"
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formValues.lastName}
//               onChange={handleChange}
//             />
//             {errors.lastName && <p className="error">{errors.lastName}</p>}
//           </div>
//           <div className="phone">
//             <label htmlFor="phoneNumber" className="label">
//               Phone Number
//             </label>
//             <input
//               className="input"
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formValues.phoneNumber}
//               onChange={handleChange}
//             />
//             {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
//           </div>
//           <div className="email">
//             <label htmlFor="email" className="label">
//               Email
//             </label>
//             <input
//               className="input"
//               type="email"
//               id="email"
//               name="email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//           </div>
//           <div className="password">
//             <label htmlFor="password" className="label">
//               Password
//             </label>
//             <input
//               className="input"
//               type="password"
//               id="password"
//               name="password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//             {errors.password && <p className="error">{errors.password}</p>}
//           </div>
//           <button className="submit" onClick={handleFormSubmit}>
//             Sign Up
//           </button>
//           <p className="login-link">
//             Already signed up? <Link to="/login">Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;



// import React, { useState } from 'react';
// import './Signup.css';

// const Signup = () => {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
    
//   });

//   const [errors, setErrors] = useState({});
//   const [customerId, setCustomerId] = useState(null);
//   const [accountCreated, setAccountCreated] = useState(false); // Add new state for account created

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validation(values));

//     if (Object.keys(errors).length === 0) {
//       const requestData = {
//         first_name: values.firstName,
//         last_name: values.lastName,
//         phone: values.phoneNumber,
//         email: values.email,
//         password: values.password,
        
//         }
//       };

//       fetch('http://127.0.0.1:8000/api/customer/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           const customerId = data.customerId;
//           setCustomerId(customerId);
//           setAccountCreated(true); // Set account created state to true
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   const validation = (values) => {
//     let errors = {};

//     if (!values.firstName) {
//       errors.firstName = "First Name is required";
//     }
//     if (!values.lastName) {
//       errors.lastName = "Last Name is required";
//     }
//     if (!values.phoneNumber) {
//       errors.phoneNumber = "Phone Number is required";
//     }
//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 5) {
//       errors.password = "Password must be at least 5 characters";
//     }
//     if (!values.city) {
//       errors.city = "City is required";
//     }

//     return errors;
//   };

//   return (
//     <div className="container">
//       <div className="app-wrapper">
//         <div>
//           <h2 className="title">Create Account</h2>
//         </div>
//         {!customerId ? (
//           <form action="" className="form-wrapper">
//             <div className="firstName">
//               <label htmlFor="" className="label">First Name</label>
//               <input className="input" type="text" name="firstName" value={values.firstName} onChange={handleChange} />
//               {errors.firstName && <p className="error">{errors.firstName}</p>}
//             </div>
//             <div className="lastName">
//               <label htmlFor="" className="label">Last Name</label>
//               <input className="input" type="text" name="lastName" value={values.lastName} onChange={handleChange} />
//               {errors.lastName && <p className="error">{errors.lastName}</p>}
//             </div>
//             <div className="phoneNumber">
//               <label htmlFor="" className="label">Phone Number</label>
//               <input className="input" type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
//               {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
//             </div>
//             <div className="email">
//               <label htmlFor="" className="label">Email</label>
//               <input className="input" type="text" name="email" value={values.email} onChange={handleChange} />
//               {errors.email && <p className="error">{errors.email}</p>}
//             </div>
//             <div className="password">
//               <label htmlFor="" className="label">Password</label>
//               <input className="input" type="password" name="password" value={values.password} onChange={handleChange} />
//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>
//             <div className="city">
//               <label htmlFor="" className="label">City</label>
//               <input className="input" type="text" name="city" value={values.city} onChange={handleChange} />
//               {errors.city && <p className="error">{errors.city}</p>}
//             </div>
//             <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
//           </form>
//         ) : (
//           <div className="success-message">
//             <p>Account created successfully!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );

// // export default Signup;
// import React, { useState } from 'react';
// import './Signup.css';

// const Signup = () => {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [customerId, setCustomerId] = useState(null);
//   const [accountCreated, setAccountCreated] = useState(false); // Add new state for account created

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validation(values));

//     if (Object.keys(errors).length === 0) {
//       const requestData = {
//         first_name: values.firstName,
//         last_name: values.lastName,
//         phone: values.phoneNumber,
//         email: values.email,
//         password: values.password,
//       };

//       fetch('http://127.0.0.1:8000/api/customer/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           const customerId = data.customerId;
//           setCustomerId(customerId);
//           setAccountCreated(true); // Set account created state to true
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   const validation = (values) => {
//     let errors = {};

//     if (!values.firstName) {
//       errors.firstName = "First Name is required";
//     }
//     if (!values.lastName) {
//       errors.lastName = "Last Name is required";
//     }
//     if (!values.phoneNumber) {
//       errors.phoneNumber = "Phone Number is required";
//     }
//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 5) {
//       errors.password = "Password must be at least 5 characters";
//     }

//     return errors;
//   };

//   return (
//     <div className="container">
//       <div className="app-wrapper">
//         <div>
//           <h2 className="title">Create Account</h2>
//         </div>
//         {!customerId ? (
//           <form action="" className="form-wrapper">
//             <div className="firstName">
//               <label htmlFor="" className="label">First Name</label>
//               <input className="input" type="text" name="firstName" value={values.firstName} onChange={handleChange} />
//               {errors.firstName && <p className="error">{errors.firstName}</p>}
//             </div>
//             <div className="lastName">
//               <label htmlFor="" className="label">Last Name</label>
//               <input className="input" type="text" name="lastName" value={values.lastName} onChange={handleChange} />
//               {errors.lastName && <p className="error">{errors.lastName}</p>}
//             </div>
//             <div className="phoneNumber">
//               <label htmlFor="" className="label">Phone Number</label>
//               <input className="input" type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
//               {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
//             </div>
//             <div className="email">
//               <label htmlFor="" className="label">Email</label>
//               <input className="input" type="text" name="email" value={values.email} onChange={handleChange} />
//               {errors.email && <p className="error">{errors.email}</p>}
//             </div>
//             <div className="password">
//               <label htmlFor="" className="label">Password</label>
//               <input className="input" type="password" name="password" value={values.password} onChange={handleChange} />
//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>
//             <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
//           </form>
//         ) : (
//           <div className="success-message">
//             <p>Account created successfully!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Signup;
// import React, { useState } from 'react';
// import './Signup.css';

// const Signup = () => {
//   const [values, setValues] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [customerId, setCustomerId] = useState(null);
//   const [accountCreated, setAccountCreated] = useState(false);

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validation(values));

//     if (Object.keys(errors).length === 0) {
//       const requestData = {
//         first_name: values.firstName,
//         last_name: values.lastName,
//         phone: values.phoneNumber,
//         email: values.email,
//         password: values.password,
//       };

//       fetch('http://127.0.0.1:8000/api/customer/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           const customerId = data.customerId;
//           setCustomerId(customerId);
//           setAccountCreated(true);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   const validation = (values) => {
//     let errors = {};

//     if (!values.firstName) {
//       errors.firstName = 'First Name is required';
//     }
//     if (!values.lastName) {
//       errors.lastName = 'Last Name is required';
//     }
//     if (!values.phoneNumber) {
//       errors.phoneNumber = 'Phone Number is required';
//     }
//     if (!values.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password.length < 5) {
//       errors.password = 'Password must be at least 5 characters';
//     }

//     return errors;
//   };

//   return (
//     <div className="container">
//       <div className="app-wrapper">
//         <div>
//           <h2 className="title">Create Account</h2>
//         </div>
//         {!customerId ? (
//           <form action="" className="form-wrapper">
//             {/* ... */}
//             <div className="email">
//               <label htmlFor="" className="label">
//                 Email
//               </label>
//               <input
//                 className="input"
//                 type="text"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="error">{errors.email}</p>}
//             </div>
//             <div className="password">
//               <label htmlFor="" className="label">
//                 Password
//               </label>
//               <input
//                 className="input"
//                 type="password"
//                 name="password"
//                 value={values.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>
//             <button className="submit" onClick={handleFormSubmit}>
//               Sign Up
//             </button>
//           </form>
//         ) : (
//           <div className="success-message">
//             <p>Account created successfully!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Signup;
// import React, { useState } from 'react';
// import './Signup.css';

// const Signup = () => {
//   const [values, setValues] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [customerId, setCustomerId] = useState(null);
//   const [accountCreated, setAccountCreated] = useState(false);

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validation(values));

//     if (Object.keys(errors).length === 0) {
//       const requestData = {
//         first_name: values.firstName,
//         last_name: values.lastName,
//         phone: values.phoneNumber,
//         email: values.email,
//         password: values.password,
//       };

//       fetch('http://127.0.0.1:8000/api/customer/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           const customerId = data.customerId;
//           setCustomerId(customerId);
//           setAccountCreated(true);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   const validation = (values) => {
//     let errors = {};

//     if (!values.firstName) {
//       errors.firstName = 'First Name is required';
//     }
//     if (!values.lastName) {
//       errors.lastName = 'Last Name is required';
//     }
//     if (!values.phoneNumber) {
//       errors.phoneNumber = 'Phone Number is required';
//     }
//     if (!values.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password.length < 5) {
//       errors.password = 'Password must be at least 5 characters';
//     }

//     return errors;
//   };

//   return (
//     <div className="container">
//       <div className="app-wrapper">
//         <div>
//           <h2 className="title">Create Account</h2>
//         </div>
//         {!customerId ? (
//           <form action="" className="form-wrapper">
//             <div className="firstName">
//               <label htmlFor="" className="label">
//                 First Name
//               </label>
//               <input
//                 className="input"
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//               />
//               {errors.firstName && <p className="error">{errors.firstName}</p>}
//             </div>
//             <div className="lastName">
//               <label htmlFor="" className="label">
//                 Last Name
//               </label>
//               <input
//                 className="input"
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//               />
//               {errors.lastName && <p className="error">{errors.lastName}</p>}
//             </div>
//             <div className="phoneNumber">
//               <label htmlFor="" className="label">
//                 Phone Number
//               </label>
//               <input
//                 className="input"
//                 type="text"
//                 name="phoneNumber"
//                 value={values.phoneNumber}
//                 onChange={handleChange}
//               />
//               {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
//             </div>
//             <div className="email">
//               <label htmlFor="" className="label">
//                 Email
//               </label>
//               <input
//                 className="input"
//                 type="text"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="error">{errors.email}</p>}
//             </div>
//             <div className="password">
//               <label htmlFor="" className="label">
//                 Password
//               </label>
//               <input
//                 className="input"
//                 type="password"
//                 name="password"
//                 value={values.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>
//             <button className="submit" onClick={handleFormSubmit}>
//               Sign Up
//             </button>
//           </form>
//         ) : (
//           <div className="success-message">
//             <p>Account created successfully!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Signup;

// import React, { useState } from 'react';
// import './Signup.css';
// import Cart from '../Cart/Cart';

// const Signup = () => {
//   const [values, setValues] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});
 
//   const [accountCreated, setAccountCreated] = useState(false);
//   const [customerId, setCustomerId] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validation(values));

//     if (Object.keys(errors).length === 0) {
//       const requestData = {
//         first_name: values.firstName,
//         last_name: values.lastName,
//         phone: values.phoneNumber,
//         email: values.email,
//         password: values.password,
//       };

//       fetch('http://127.0.0.1:8000/api/customer/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           const customerId = data.customerId;
//           setCustomerId(customerId);
//           setAccountCreated(true);

//           setValues({
//             firstName: '',
//             lastName: '',
//             email: '',
//             phoneNumber: '',
//             password: '',
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   const validation = (values) => {
//     let errors = {};

//     if (!values.firstName) {
//       errors.firstName = 'First Name is required';
//     }
//     if (!values.lastName) {
//       errors.lastName = 'Last Name is required';
//     }
//     if (!values.phoneNumber) {
//       errors.phoneNumber = 'Phone Number is required';
//     }
//     if (!values.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password.length < 5) {
//       errors.password = 'Password must be at least 5 characters';
//     }

//     return errors;
//   };

//   return (
//     <div className="container">
//       <div className="app-wrapper">
//         <div>
//           <h2 className="title">Create Account</h2>
//         </div>
//         <form action="" className="form-wrapper">
//           <div className="firstName">
//             <label htmlFor="" className="label">
//               First Name
//             </label>
//             <input
//               className="input"
//               type="text"
//               name="firstName"
//               value={values.firstName}
//               onChange={handleChange}
//             />
//             {errors.firstName && <p className="error">{errors.firstName}</p>}
//           </div>
//           <div className="lastName">
//             <label htmlFor="" className="label">
//               Last Name
//             </label>
//             <input
//               className="input"
//               type="text"
//               name="lastName"
//               value={values.lastName}
//               onChange={handleChange}
//             />
//             {errors.lastName && <p className="error">{errors.lastName}</p>}
//           </div>
//           <div className="phoneNumber">
//             <label htmlFor="" className="label">
//               Phone Number
//             </label>
//             <input
//               className="input"
//               type="text"
//               name="phoneNumber"
//               value={values.phoneNumber}
//               onChange={handleChange}
//             />
//             {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
//           </div>
//           <div className="email">
//             <label htmlFor="" className="label">
//               Email
//             </label>
//             <input
//               className="input"
//               type="text"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//           </div>
//           <div className="password">
//             <label htmlFor="" className="label">
//               Password
//             </label>
//             <input
//               className="input"
//               type="password"
//               name="password"
//               value={values.password}
//               onChange={handleChange}
//             />
//             {errors.password && <p className="error">{errors.password}</p>}
//           </div>
//           <button className="submit" onClick={handleFormSubmit} disabled={accountCreated}>
//             {accountCreated ? 'Account Created' : 'Sign Up'}
//           </button>
//         </form>
//         {accountCreated && (
//           <div className="success-message">
//             <p>Account created successfully!</p>
//             <Cart customerId={customerId} phoneNumber={phoneNumber} />
//           </div>
//         )}
//       </div>
//     </div>
    
//   );
  
// };

// export default Signup;


import React, { useState } from 'react';
import './Signup.css';
import Cart from '../Cart/Cart';


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
          const customerId = data.customerId;
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
