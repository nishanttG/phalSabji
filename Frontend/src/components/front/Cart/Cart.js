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
        product: item.id,
        quantity: item.quantity,
        price: item.price,
        address: 'address', // Replace with actual address value
        phone: 'phoneNumber', // Replace with actual phone value
        date: new Date().toISOString().slice(0, 10), // Replace with actual date value
        status: false, // Replace with actual status value
        customer: `2`,
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


