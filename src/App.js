import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css'; // Import the CSS for Flatpickr

const App = () => {
  // State to store multiple date ranges and prices
  const [entries, setEntries] = useState([{ startDate: new Date(), endDate: new Date(), price: '' }]);

  // Function to add a new entry
  const addEntry = () => {
    setEntries([...entries, { startDate: new Date(), endDate: new Date(), price: '' }]);
  };

  // Function to handle date changes
  const handleDateChange = (index, [start, end]) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], startDate: start, endDate: end };
    setEntries(newEntries);
  };

  // Function to handle price changes
  const handlePriceChange = (index, value) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], price: value };
    setEntries(newEntries);
  };

  return (
    <div>
      <h1>Date Range and Price Input</h1>
      {entries.map((entry, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>Option {index + 1}</h2>
          <div>
            <label htmlFor={`dateRange-${index}`}>Select Date Range:</label>
            <Flatpickr
              id={`dateRange-${index}`}
              options={{
                mode: 'range',
                dateFormat: 'Y-m-d',
                minDate: 'today',
              }}
              value={[entry.startDate, entry.endDate]}
              onChange={(dates) => handleDateChange(index, dates)}
            />
          </div>
          <div>
            <label htmlFor={`price-${index}`}>Set Price (in EUR):</label>
            <input
              id={`price-${index}`}
              type="text"
              value={entry.price}
              onChange={(e) => handlePriceChange(index, e.target.value)}
              placeholder="Enter price"
            />
          </div>
        </div>
      ))}
      <button onClick={addEntry}>Add Another Option</button>
    </div>
  );
};

export default App;
