import React, { useState } from 'react';

const PriceFilter = ({ onPriceChange }) => {
  const [price, setPrice] = useState('');

  const handlePriceChange = (event) => {
    const newPrice = event.target.value;
    setPrice(newPrice);
    onPriceChange(newPrice); // Pass the price to the parent or handle it
  };

  return (
    <div>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter price"
        />
      </label>
    </div>
  );
};

export default PriceFilter;
