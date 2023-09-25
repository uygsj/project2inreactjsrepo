
import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css'; 

function Cart() {
  const { cart, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-container">
      
      <button className="toggle-cart-button" onClick={toggleCart}>
        {isCartOpen ? 'Cart' : 'Cart'}
      </button>
      {isCartOpen && (
        <div className="cart-content">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span className="cart-item-quantity">{item.description} Quantity: {item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
          <button className="clear-cart-button" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
