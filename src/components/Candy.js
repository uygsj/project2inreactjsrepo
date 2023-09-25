// Import CandyContext in a component where you want to use it
import React, { useContext } from 'react';
import { CandyContext } from './CandyContext';

function Candy({ candy }) {
  // Access the context using useContext
  const { addToCart } = useContext(CandyContext);

  const handleAddToCart = () => {
    addToCart(candy);
  };

  return (
    <div className="candy">
      <h3>{candy.name}</h3>
      <p>{candy.description}</p>
      <p>Price: ${candy.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Candy;
