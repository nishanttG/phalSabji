// // import React from 'react';
// // import './CartItem.css';

// // const CartItem = ({ item, handleAddProduct, handleRemoveProduct }) => {
// //   return (
// //     <div className="cart-item">
// //       <div className="cart-item-image">
// //         <img src={item.image} alt={item.name} />
// //       </div>
// //       <div className="cart-item-details">
// //         <div className="cart-item-name">{item.name}</div>
// //         <div className="cart-item-quantity">
// //           <button
// //             className="quantity-button"
// //             onClick={() => handleRemoveProduct(item)}
// //           >
// //             -
// //           </button>
// //           <span className="quantity">{item.quantity}</span>
// //           <button
// //             className="quantity-button"
// //             onClick={() => handleAddProduct(item)}
// //           >
// //             +
// //           </button>
// //         </div>
// //         <div className="cart-item-price">
// //           Price: Rs. {item.price * item.quantity}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartItem;


// import React from 'react';

// const CartItem = ({ item, handleAddProduct, handleRemoveProduct }) => {
//   return (
//     <li>
//       <span>{item.name}</span>
//       <span>{item.quantity}</span>
//       <span>{item.price * item.quantity}</span>
//       <button onClick={() => handleAddProduct(item)}>+</button>
//       <button onClick={() => handleRemoveProduct(item)}>-</button>
//     </li>
//   );
// };

// export default CartItem;
import React from 'react';

const CartItem = ({ item, handleAddProduct, handleRemoveProduct }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <span>{item.price * item.quantity}</span>
      <button onClick={() => handleAddProduct(item)}>+</button>
      <button onClick={() => handleRemoveProduct(item)}>-</button>
    </li>
  );
};

export default CartItem;
