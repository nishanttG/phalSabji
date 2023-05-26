




// // // // import React from 'react';
// // // // import './Cart.css';

// // // // const Cart = ({
// // // //   cartItems,
// // // //   handleAddProduct,
// // // //   handleRemoveProduct,
// // // //   handleCartClearance,
// // // //   handleSubmitCart,
// // // // }) => {
// // // //   const totalPrice = cartItems.reduce(
// // // //     (price, item) => price + item.quantity * item.price,
// // // //     0
// // // //   );

// // // //   const handleFormSubmit = (event) => {
// // // //     event.preventDefault();
// // // //     handleSubmitCart();
// // // //   };

// // // //   return (
// // // //     <div className="cart-items">
// // // //       <h2 className="cart-items-header">Cart Items</h2>
// // // //       <div className="clear-cart">
// // // //         {cartItems.length >= 1 && (
// // // //           <button className="clear-cart-button" onClick={handleCartClearance}>
// // // //             Clear Cart
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       {cartItems.length === 0 && (
// // // //         <div className="cart-items-empty">No items are added</div>
// // // //       )}

// // // //       <div>
// // // //         {cartItems.map((item) => (
// // // //           <div key={item.id} className="cart-items-list">
// // // //             <img
// // // //               className="cart-items-image"
// // // //               src={item.image}
// // // //               alt={item.name}
// // // //             />
// // // //             <div className="cart-items-name">{item.name}</div>
// // // //             <div className="cart-items-function">
// // // //               <button
// // // //                 className="cart-items-add"
// // // //                 onClick={() => handleAddProduct(item)}
// // // //               >
// // // //                 +
// // // //               </button>
// // // //               <button
// // // //                 className="cart-items-remove"
// // // //                 onClick={() => handleRemoveProduct(item)}
// // // //               >
// // // //                 -
// // // //               </button>
// // // //             </div>
// // // //             <div className="cart-items-price">
// // // //               {item.quantity} * Rs.{item.price}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <div className="cart-items-total-price-name">
// // // //         Total price
// // // //         <div className="cart-items-total-price">Rs.{totalPrice}</div>
// // // //       </div>

// // // //       <form onSubmit={handleFormSubmit}>
// // // //         <button className="submit-cart-button" type="submit">
// // // //           Submit Cart
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Cart;


// // // // // import React from 'react';
// // // // // import CartItem from './CartItem/CartItem';
// // // // // import './Cart.css';
  
// // // // import React from 'react';
// // // // import CartItem from './CartItem';

// // // // const Cart = ({ cartItems, removeItem }) => {
// // // //   return (
// // // //     <div className="cart">
// // // //       <h2>Cart</h2>
// // // //       {cartItems.length === 0 ? (
// // // //         <p>Your cart is empty.</p>
// // // //       ) : (
// // // //         cartItems.map((item) => (
// // // //           <CartItem key={item.id} item={item} removeItem={removeItem} />
// // // //         ))
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Cart;
// // // // import React from 'react';
// // // // import './Cart.css';

// // // // const Cart = ({
// // // //   cartItems,
// // // //   handleAddProduct,
// // // //   handleRemoveProduct,
// // // //   handleCartClearance,
// // // //   handleSubmitCart,
// // // //   productData, // Include the product data as a prop
// // // // }) => {
// // // //   const totalPrice = cartItems.reduce(
// // // //     (price, item) => price + item.quantity * item.price,
// // // //     0
// // // //   );

// // // //   const handleFormSubmit = (event) => {
// // // //     event.preventDefault();

// // // //     const requestData = cartItems.map((item) => ({
// // // //       name: item.name,
// // // //       price: item.price,
// // // //       category: item.category,
// // // //     }));

// // // //     fetch('http://127.0.0.1:8000/api/product/', {
// // // //       method: 'POST',
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify(requestData),
// // // //     })
// // // //       .then((response) => response.json())
// // // //       .then((data) => {
// // // //         // Handle the response here
// // // //         console.log(data);
// // // //       })
// // // //       .catch((error) => {
// // // //         // Handle errors (e.g., show error message)
// // // //         console.error(error);
// // // //       });

// // // //     handleSubmitCart();
// // // //   };

// // // //   return (
// // // //     <div className="cart-items">
// // // //       <h2 className="cart-items-header">Cart Items</h2>
// // // //       <div className="clear-cart">
// // // //         {cartItems.length >= 1 && (
// // // //           <button className="clear-cart-button" onClick={handleCartClearance}>
// // // //             Clear Cart
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       {cartItems.length === 0 && (
// // // //         <div className="cart-items-empty">No items are added</div>
// // // //       )}

// // // //       <div>
// // // //         {cartItems.map((item) => (
// // // //           <div key={item.id} className="cart-items-list">
// // // //             <img
// // // //               className="cart-items-image"
// // // //               src={item.image}
// // // //               alt={item.name}
// // // //             />
// // // //             <div className="cart-items-name">{item.name}</div>
// // // //             <div className="cart-items-function">
// // // //               <button
// // // //                 className="cart-items-add"
// // // //                 onClick={() => handleAddProduct(item)}
// // // //               >
// // // //                 +
// // // //               </button>
// // // //               <button
// // // //                 className="cart-items-remove"
// // // //                 onClick={() => handleRemoveProduct(item)}
// // // //               >
// // // //                 -
// // // //               </button>
// // // //             </div>
// // // //             <div className="cart-items-price">
// // // //               {item.quantity} * Rs.{item.price}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <div className="cart-items-total-price-name">
// // // //         Total price
// // // //         <div className="cart-items-total-price">Rs.{totalPrice}</div>
// // // //       </div>

// // // //       <div>
// // // //         <h2>Product Details</h2>
// // // //         <p>Name: {productData.name}</p>
// // // //         <p>Price: {productData.price}</p>
// // // //         <p>Image: <img src={productData.image} alt={productData.name} /></p>
// // // //         {/* Render other details as needed */}
// // // //       </div>

// // // //       <form onSubmit={handleFormSubmit}>
// // // //         <button className="submit-cart-button" type="submit">
// // // //           Submit Cart
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Cart;

// import React from 'react';

// const Cart = ({
//   cartItems,
//   handleAddProduct,
//   handleRemoveProduct,
//   handleCartClearance,
//   handleSubmitCart,
//   customerId,
//   customerData,
// }) => {
//   const totalPrice = cartItems.reduce(
//     (price, item) => price + item.quantity * item.price,
//     0
//   );

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     const createOrderPromises = cartItems.map((item) => {
//       const { id, quantity, price } = item;

//       const orderData = {
//         product: id,
//         customer: customerId,
//         quantity: quantity,
//         price: price,
//         address: 'street data',
//         phone: '',
//         date: new Date().toISOString().slice(0, 10), // Use the current date
//         status: false,
//       };

//       return fetch('http://127.0.0.1:8000/api/order/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(orderData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Handle the response data if needed
//           console.log(data);
//         })
//         .catch((error) => {
//           // Handle errors (e.g., show error message)
//           console.error(error);
//         });
//     });

//     Promise.all(createOrderPromises)
//       .then(() => {
//         console.log('Cart items saved in orders');
//         // Handle successful submission
//       })
//       .catch((error) => {
//         console.error('Error saving cart items in orders:', error);
//         // Handle error during submission
//       });

//     handleSubmitCart();
//   };

//   return (
//     <div className="cart-items">
//       <h2 className="cart-items-header">Cart Items</h2>
//       <div className="clear-cart">
//         {cartItems.length >= 1 && (
//           <button className="clear-cart-button" onClick={handleCartClearance}>
//             Clear Cart
//           </button>
//         )}
//       </div>

//       {cartItems.length === 0 && (
//         <div className="cart-items-empty">No items are added</div>
//       )}

//       <div>
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-items-list">
//             <img
//               className="cart-items-image"
//               src={item.image}
//               alt={item.name}
//             />
//             <div className="cart-items-name">{item.name}</div>
//             <div className="cart-items-function">
//               <button
//                 className="cart-items-add"
//                 onClick={() => handleAddProduct(item)}
//               >
//                 +
//               </button>
//               <button
//                 className="cart-items-remove"
//                 onClick={() => handleRemoveProduct(item)}
//               >
//                 -
//               </button>
//             </div>
//             <div className="cart-items-price">
//               {item.quantity} * Rs.{item.price}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="cart-items-total-price-name">
//         Total price
//         <div className="cart-items-total-price">Rs.{totalPrice}</div>
//       </div>

//       <form onSubmit={handleFormSubmit}>
//         <button className="submit-cart-button" type="submit">
//           Submit Cart
//         </button>
//       </form>
//     </div>
//   );
// };

// // export default Cart;
// import React from 'react';

// const Cart = ({
//   cartItems,
//   handleAddProduct,
//   handleRemoveProduct,
//   handleCartClearance,
//   handleSubmitCart,
// }) => {
//   const totalPrice = cartItems.reduce(
//     (price, item) => price + item.quantity * item.price,
//     0
//   );

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     handleSubmitCart();
//   };

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <span>{item.name}</span>
//             <span>{item.quantity}</span>
//             <span>{item.price * item.quantity}</span>
//             <button onClick={() => handleAddProduct(item)}>+</button>
//             <button onClick={() => handleRemoveProduct(item)}>-</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: {totalPrice}</p>
//       <button onClick={handleCartClearance}>Clear Cart</button>
//       <form onSubmit={handleFormSubmit}>
//         <button type="submit">Submit Cart</button>
//       </form>
//     </div>
//   );
// };

// export default Cart;


// import React from 'react'
// import "./Cart.css"

// const Cart = ({ cartItems,
//   handleAddProduct,
//   handleRemoveProduct,
//   handleCartClearance }) => {
//   const totalPrice = cartItems.reduce(
//     (price, item) => price + item.quantity * item.price,
//     0
//   );

//   return (
//     <div className="cart-items">
//       <h2 className="cart-items-header">Cart Items</h2>
//       <div className="clear-cart">
//         {cartItems.length >= 1 &&(
//           <button className="clear-cart-button" onClick={handleCartClearance}>Clear Cart</button>
//         )

//         }
//       </div>


//       {cartItems.length === 0 && (
//         <div className="cart-items-empty">No items are added</div>
//       )}

//       <div>
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-items-list">
//             <img
//               className="cart-items-image"
//               src={item.image}
//               alt={item.name}
//             />
//             <div className="cart-items-name">{item.name}</div>
//             <div className="cart-items-function">
//               <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
//               <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>

//             </div>
//             <div className="cart-items-price">
//               {item.quantity}* Rs.{item.price}
//             </div>

//           </div>
//         ))}
//       </div>
//       <div className="cart-items-total-price-name">
//         Total price
//         <div className="cart-items-total-price">
//           Rs.{totalPrice}
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Cart



// import React, { useState } from 'react';
// import './Cart.css';

// const Cart = ({
//   cartItems,
//   handleAddProduct,
//   handleRemoveProduct,
//   handleCartClearance,
//   customerId,
//   phoneNumber,
// }) => {
//   const totalPrice = cartItems.reduce(
//     (price, item) => price + item.quantity * item.price,
//     0
//   );

//   const [isSubmitted, setIsSubmitted] = useState(false);
 

//   const handleSubmitCart = () => {
//      const orderData = {
//       cartItems: cartItems.map((item) => ({
//         product: item.product,
//         quantity: item.quantity,
//         price: item.price,
//         address: 'address', // Replace with actual address value
//         phone: phoneNumber, // Replace with actual phone value
//         date: new Date().toISOString().slice(0, 10), // Replace with actual date value
//         status: false, // Replace with actual status value
//         customer: `http://127.0.0.1:8000/api/customer/${customerId}/`,
//       })),
//     };
    
  

//     fetch('http://127.0.0.1:8000/api/order/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Order created successfully:', data);
//         setIsSubmitted(true); // Update the state to indicate submission success
//       })
//       .catch((error) => {
//         console.error('Error creating order:', error);
//         // Handle the error appropriately
//       });
//   };

//   return (
//     <div className="cart-items">
//       <h2 className="cart-items-header">Cart Items</h2>
//       <div className="clear-cart">
//         {cartItems.length >= 1 && (
//           <button className="clear-cart-button" onClick={handleCartClearance}>
//             Clear Cart
//           </button>
//         )}
//       </div>

//       {cartItems.length === 0 && (
//         <div className="cart-items-empty">No items are added</div>
//       )}

//       <div>
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-items-list">
//             <img
//               className="cart-items-image"
//               src={item.image}
//               alt={item.name}
//             />
//             <div className="cart-items-name">{item.name}</div>
//             <div className="cart-items-function">
//               <button
//                 className="cart-items-add"
//                 onClick={() => handleAddProduct(item)}
//               >
//                 +
//               </button>
//               <button
//                 className="cart-items-remove"
//                 onClick={() => handleRemoveProduct(item)}
//               >
//                 -
//               </button>
//             </div>
//             <div className="cart-items-price">
//               {item.quantity} * Rs. {item.price}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="cart-items-total-price-name">
//         Total price
//         <div className="cart-items-total-price">Rs. {totalPrice}</div>
//       </div>

//       {!isSubmitted && (
//         <button className="submit-cart-button" onClick={handleSubmitCart}>
//           Submit Cart
//         </button>
//       )}

//       {isSubmitted && <div className="success-message">Added to cart successfully!</div>}
//     </div>
//   );
// };

// export default Cart;



import React, { useState } from 'react';
import './Cart.css';

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  customerId,
  phoneNumber,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitCart = () => {
    const orderData = {
      cartItems: cartItems.map((item) => ({
        product: item.product,
        quantity: item.quantity,
        price: item.price,
        address: 'address', // Replace with actual address value
        phone: phoneNumber, // Replace with actual phone value
        date: new Date().toISOString().slice(0, 10), // Replace with actual date value
        status: false, // Replace with actual status value
        customer: `http://127.0.0.1:8000/api/customer/`,
      })),
      
    };
    console.log(orderData);
    console.log(cartItems);
    fetch('http://127.0.0.1:8000/api/order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Order created successfully:', data);
        setIsSubmitted(true); // Update the state to indicate submission success
      })
      .catch((error) => {
        console.error('Error creating order:', error);
        // Handle the error appropriately
      });
  };

  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Cart Items</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items are added</div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * Rs. {item.price}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">Rs. {totalPrice}</div>
      </div>

      {!isSubmitted && (
        <button className="submit-cart-button" onClick={handleSubmitCart}>
          Submit Cart
        </button>
      )}

      {isSubmitted && <div className="success-message">Added to cart successfully!</div>}
    </div>
  );
};

export default Cart;


