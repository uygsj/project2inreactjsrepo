// CandyForm.js
import React, { useState } from 'react';
import { useCandy } from './CandyContext';

function CandyForm() {
  const { addCandy } = useCandy();
  const [candy, setCandy] = useState({ name: '', description: '', price: '' });
  const [idCounter, setIdCounter] = useState(1); // Initialize the counter

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandy({ ...candy, [name]: value });
  };

  const handleAddCandy = () => {
    if (candy.name && candy.description && candy.price) {
      // Generate a unique ID for the candy
      const candyWithId = {
        ...candy,
        id: idCounter,
      };

      addCandy(candyWithId);
      setIdCounter(idCounter + 1); // Increment the counter for the next candy
      setCandy({ name: '', description: '', price: '' });
    }
  };

  return (
    <div>
      <h2>Candy Shop</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Candy Name"
          value={candy.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={candy.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={candy.price}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddCandy}>
          Add Candy
        </button>
      </form>
    </div>
  );
}

export default CandyForm;
