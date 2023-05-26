// // import React, { useState } from 'react';
// // import Cart from './Cart';
// // import Signup from '../Signup/Signup';
// // const ParentComponent = () => {
// //   const [cartItems, setCartItems] = useState([]);
// //   const [customerId, setCustomerId] = useState(null);

// //   const handleAddProduct = (product) => {
// //     const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

// //     if (existingProductIndex !== -1) {
// //       const updatedCartItems = [...cartItems];
// //       updatedCartItems[existingProductIndex].quantity += 1;
// //       setCartItems(updatedCartItems);
// //     } else {
// //       setCartItems([...cartItems, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   const handleRemoveProduct = (product) => {
// //     const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

// //     if (existingProductIndex !== -1) {
// //       const updatedCartItems = [...cartItems];
// //       updatedCartItems[existingProductIndex].quantity -= 1;
// //       if (updatedCartItems[existingProductIndex].quantity === 0) {
// //         updatedCartItems.splice(existingProductIndex, 1);
// //       }
// //       setCartItems(updatedCartItems);
// //     }
// //   };

// //   const handleCartClearance = () => {
// //     setCartItems([]);
// //   };

// //   const handleSubmitCart = () => {
// //     if (customerId) {
// //       // Logic to save cartItems to the server using customerId
// //       console.log("Submitting cart:", customerId, cartItems);
// //     } else {
// //       console.log("No customer ID available");
// //     }
// //   };

// //   const handleSignupSuccess = (customerId) => {
// //     setCustomerId(customerId);
// //   };

// //   return (
// //     <div>
// //       {customerId ? (
// //         <Cart
// //           cartItems={cartItems}
// //           handleAddProduct={handleAddProduct}
// //           handleRemoveProduct={handleRemoveProduct}
// //           handleCartClearance={handleCartClearance}
// //           handleSubmitCart={handleSubmitCart}
// //           customerId={customerId}
// //         />
// //       ) : (
// //         <Signup handleSignupSuccess={handleSignupSuccess} />
// //       )}
// //     </div>
// //   );
// // };

// // export default ParentComponent;


// import React, { useState } from 'react';
// import Cart from './Cart';
// import Signup from './Signup';

// const ParentComponent = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddProduct = (product) => {
//     const existingProductIndex = cartItems.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingProductIndex].quantity += 1;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleRemoveProduct = (product) => {
//     const existingProductIndex = cartItems.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingProductIndex].quantity -= 1;
//       if (updatedCartItems[existingProductIndex].quantity === 0) {
//         updatedCartItems.splice(existingProductIndex, 1);
//       }
//       setCartItems(updatedCartItems);
//     }
//   };

//   const handleCartClearance = () => {
//     setCartItems([]);
//   };
 

//   const handleSubmitCart = () => {
//     if (customerId) {
//       // Logic to save cartItems to the server using customerId
//       console.log('Submitting cart:', customerId, cartItems);
//     } else {
//       console.log('No customer ID available');
//     }
//   };

 

//   return (
//     <div>
//       {customerId ? (
//         <Cart
//           cartItems={cartItems}
//           handleAddProduct={handleAddProduct}
//           handleRemoveProduct={handleRemoveProduct}
//           handleCartClearance={handleCartClearance}
//           handleSubmitCart={handleSubmitCart}
//         />
//       ) : (
//         <Signup handleSignupSuccess={handleSignupSuccess} />
//       )}
//     </div>
//   );
// };

// export default ParentComponent;

// import React, { useState } from 'react';
// import Cart from './Cart';
// import Signup from './Signup';

// const ParentComponent = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [customerId, setCustomerId] = useState(null);

//   const handleAddProduct = (product) => {
//     const existingProductIndex = cartItems.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingProductIndex].quantity += 1;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleRemoveProduct = (product) => {
//     const existingProductIndex = cartItems.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingProductIndex].quantity -= 1;
//       if (updatedCartItems[existingProductIndex].quantity === 0) {
//         updatedCartItems.splice(existingProductIndex, 1);
//       }
//       setCartItems(updatedCartItems);
//     }
//   };

//   const handleCartClearance = () => {
//     setCartItems([]);
//   };

//   const handleSubmitCart = () => {
//     if (customerId) {
//       // Logic to save cartItems to the server using customerId
//       console.log('Submitting cart:', customerId, cartItems);

//       // Example code to send cartItems to the server
//       fetch(`http://127.0.0.1:8000/api/customer/${customerId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(cartItems),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Cart submitted successfully:', data);
//           // Handle successful cart submission
//         })
//         .catch((error) => {
//           console.error('Error submitting cart:', error);
//           // Handle cart submission error
//         });
//     } else {
//       console.log('No customer ID available');
//     }
//   };

//   const handleSignupSuccess = (customerId) => {
//     setCustomerId(customerId);
//   };

//   return (
//     <div>
//       {customerId ? (
//         <Cart
//           cartItems={cartItems}
//           handleAddProduct={handleAddProduct}
//           handleRemoveProduct={handleRemoveProduct}
//           handleCartClearance={handleCartClearance}
//           handleSubmitCart={handleSubmitCart}
//         />
//       ) : (
//         <Signup handleSignupSuccess={handleSignupSuccess} />
//       )}
//     </div>
//   );
// };

// export default ParentComponent;
// // 
// import React, { useState } from 'react';
// import Cart from './Cart';
// import CustomerForm from './CustomerForm';

// const ParentComponent = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [customerId, setCustomerId] = useState(null);

//   const handleAddProduct = (product) => {
//     const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingProductIndex].quantity += 1;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleRemoveProduct = (product) => {
//     const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingProductIndex].quantity -= 1;
//       if (updatedCartItems[existingProductIndex].quantity === 0) {
//         updatedCartItems.splice(existingProductIndex, 1);
//       }
//       setCartItems(updatedCartItems);
//     }
//   };

//   const handleCartClearance = () => {
//     setCartItems([]);
//   };

//   const handleSubmitCart = () => {
//     if (customerId) {
//       // Logic to save cartItems to the server using customerId
//       console.log('Submitting cart:', customerId, cartItems);

//       // Example code to send cartItems to the server
//       fetch(`http://127.0.0.1:8000/api/customer/${customerId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(cartItems),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Cart submitted successfully:', data);
//           // Handle successful cart submission
//         })
//         .catch((error) => {
//           console.error('Error submitting cart:', error);
//           // Handle cart submission error
//         });
//     } else {
//       console.log('No customer ID available');
//     }
//   };

//   const handleSignupSuccess = (customerId) => {
//     setCustomerId(customerId);
//   };

//   return (
//     <div>
//       {customerId ? (
//         <Cart
//           cartItems={cartItems}
//           handleAddProduct={handleAddProduct}
//           handleRemoveProduct={handleRemoveProduct}
//           handleCartClearance={handleCartClearance}
//           handleSubmitCart={handleSubmitCart}
//         />
//       ) : (
//         <CustomerForm handleCustomerData={handleSignupSuccess} />
//       )}
//     </div>
//   );
// };

// export default ParentComponent;



import React, { useState } from 'react';
import Cart from './Cart';
import CustomerForm from './CustomerForm';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerId, setCustomerId] = useState(null);

  const handleAddProduct = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity -= 1;
      if (updatedCartItems[existingProductIndex].quantity === 0) {
        updatedCartItems.splice(existingProductIndex, 1);
      }
      setCartItems(updatedCartItems);
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  const handleSubmitCart = () => {
    if (customerId) {
      // Logic to save cartItems to the server using customerId
      console.log('Submitting cart:', customerId, cartItems);

      // Example code to send cartItems to the server
      fetch(`http://127.0.0.1:8000/api/customer/${customerId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Cart submitted successfully:', data);
          // Handle successful cart submission
        })
        .catch((error) => {
          console.error('Error submitting cart:', error);
          // Handle cart submission error
        });
    } else {
      console.log('No customer ID available');
    }
  };

  const handleSignupSuccess = (customerId) => {
    setCustomerId(customerId);
  };

  return (
    <div>
      {customerId ? (
        <Cart
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
          handleSubmitCart={handleSubmitCart}
        />
      ) : (
        <CustomerForm handleCustomerData={handleSignupSuccess} />
      )}
    </div>
  );
};

export default ParentComponent;
