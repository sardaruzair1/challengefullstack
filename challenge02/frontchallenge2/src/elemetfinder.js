import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DuplicateElementsFinder = () => {
  const [inputArray, setInputArray] = useState('');
  const [result, setResult] = useState([]);

  const handleInputChange = (event) => {
    setInputArray(event.target.value);
  };

  const findDuplicates = () => {
    const elements = inputArray.split(',').map((item) => parseInt(item.trim(), 10));
    const elementCount = {};

    for (const element of elements) {
      elementCount[element] = (elementCount[element] || 0) + 1;
    }

    const duplicates = Object.keys(elementCount).filter((key) => elementCount[key] > 1);
    setResult(duplicates);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Find Duplicate Elements</h2>
      <div className="mb-3">
        <label className="form-label">Enter elements (comma-separated):</label>
        <input
          type="text"
          className="form-control"
          value={inputArray}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={findDuplicates}>
        Find Duplicates
      </button>

      <div className="mt-3">
        <h3>Result:</h3>
        {result.length === 0 ? (
          <p>No duplicates found.</p>
        ) : (
          <p>Duplicate elements: {result.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default DuplicateElementsFinder;
