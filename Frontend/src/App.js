// import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Routes from './components/front/Routes/Routes';
// import Cart from './components/front/Cart/Cart';
// import Signup from './components/front/Signup/Signup';
// import './App.css';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddProduct = (product) => {
//     const productExists = cartItems.find((item) => item.id === product.id);
//     if (productExists) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id
//             ? { ...productExists, quantity: productExists.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleRemoveProduct = (product) => {
//     const productExists = cartItems.find((item) => item.id === product.id);
//     if (productExists && productExists.quantity === 1) {
//       setCartItems(cartItems.filter((item) => item.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id
//             ? { ...productExists, quantity: productExists.quantity - 1 }
//             : item
//         )
//       );
//     }
//   };

//   const handleCartClearance = () => {
//     setCartItems([]);
//   };

//   const handleSubmitCart = () => {
//     const handleSubmitCart = () => {
//       // Convert cartItems to the desired format for the server
//       const formattedCartItems = cartItems.map((item) => ({
//         id: item.id,
//         quantity: item.quantity,
//       }));
    
//       // Make an API call to save cartItems
//       fetch('YOUR_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formattedCartItems),
//       })
//         .then((response) => {
//           // Handle the response from the server
//           if (response.ok) {
//             // Cart items saved successfully
//             console.log('Cart items saved to the server');
//             // Perform any additional actions after saving cart items
//           } else {
//             // Error occurred while saving cart items
//             console.error('Failed to save cart items to the server');
//           }
//         })
//         .catch((error) => {
//           // Handle any network or API call errors
//           console.error('An error occurred while saving cart items', error);
//         });
//     };
    
//   };

//   return (
//     <div className="app">
//       <Router>
//         <Routes
//           cartItems={cartItems}
//           handleAddProduct={handleAddProduct}
//           handleRemoveProduct={handleRemoveProduct}
//           handleCartClearance={handleCartClearance}
//         />
//       </Router>
//       <Cart
//         cartItems={cartItems}
//         handleAddProduct={handleAddProduct}
//         handleRemoveProduct={handleRemoveProduct}
//         handleCartClearance={handleCartClearance}
//         handleSubmitCart={handleSubmitCart}
//       />
//     </div>
//   );
// };

// export default App;




// app.js
// import React, { useState } from 'react';
// import data from './components/back/Data';
// import Header from './components/front/Header/Header';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Routes from './components/front/Routes/Routes';
// import Cart from './components/front/Cart/Cart';
// import './App.css';

// const App = () => {
//   const { productItems } = data;
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddProduct = (product) => {
//     const productExist = cartItems.find((item) => item.id === product.id);
//     if (productExist) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id
//             ? { ...productExist, quantity: productExist.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleRemoveProduct = (product) => {
//     const productExist = cartItems.find((item) => item.id === product.id);
//     if (productExist.quantity === 1) {
//       setCartItems(cartItems.filter((item) => item.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id
//             ? { ...productExist, quantity: productExist.quantity - 1 }
//             : item
//         )
//       );
//     }
//   };

//   const handleCartClearance = () => {
//     setCartItems([]);
//   };

//   return (
//     <div className="app">
//       <Router>
//         <Header cartItems={cartItems} />
//         <Routes
//           productItems={productItems}
//           cartItems={cartItems}
//           handleAddProduct={handleAddProduct}
//           handleRemoveProduct={handleRemoveProduct}
//           handleCartClearance={handleCartClearance}
//         />
//       </Router>
//       <Cart
//         cartItems={cartItems}
//         handleAddProduct={handleAddProduct}
//         handleRemoveProduct={handleRemoveProduct}
//         handleCartClearance={handleCartClearance}
//       />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import data from './components/back/Data';
import Header from './components/front/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/front/Routes/Routes';
import './App.css';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const [customerId, setCustomerId] = useState('');

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };
  const handleCustomerIdChange = (id) => {
    setCustomerId(id);
  };

  return (
    <div className="app">
      <Router>
        <Header cartItems={cartItems} />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
          customerId={customerId} // Pass the customerId prop
        />
      </Router>
    </div>
  );
};

export default App;
