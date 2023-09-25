
import React from 'react';
import { useCart } from './CartContext';
import { useCandy } from './CandyContext';

function CandyList() {
  const { addToCart, cart } = useCart();
  const { candies } = useCandy();

  const handleBuy = (candy, quantity) => {
    if (quantity > 0) {
      const existingCartItem = cart.find((item) => item.id === candy.id);

      if (existingCartItem) {
        
        existingCartItem.quantity += quantity;
      } else {
        
        const candyItem = {
          id: candy.id, 
          name: candy.name,
          description: candy.description,
          price: candy.price,
          quantity,
        };

        addToCart(candyItem);
      }
    }
  };

  return (
    <div>
      <h2>Candy List</h2>
      {candies.map((candy, index) => (
        <div key={index}>
          <h3>{candy.name}</h3>
          <p>{candy.description}</p>
          <p>Price: ${candy.price}</p>
          <div>
            <button onClick={() => handleBuy(candy, 1)}>Buy One</button>
            <button onClick={() => handleBuy(candy, 2)}>Buy Two</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandyList;
