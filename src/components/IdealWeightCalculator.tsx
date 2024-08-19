import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Component_Styles/IdealWeightCalculator.css';

const IdealWeightCalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [idealWeight, setIdealWeight] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const calculateIdealWeight = () => {
    const heightInCm = parseFloat(height);

    // Validate height input
    if (heightInCm < 90 || heightInCm > 250) {
      setError('Please enter a height between 90 cm and 250 cm.');
      setIdealWeight(null); // Clear previous result
      return;
    }

    setError(null); // Clear any previous error

    // Convert height from cm to inches for the formula
    const heightInInches = heightInCm / 2.54;
    const heightOver5Feet = heightInInches - 60; // 5 feet is 60 inches

    let calculatedWeight;
    if (gender === 'male') {
      calculatedWeight = 50 + 2.3 * heightOver5Feet; // Devine formula for males
    } else {
      calculatedWeight = 45.5 + 2.3 * heightOver5Feet; // Devine formula for females
    }

    setIdealWeight(calculatedWeight);
  };

  useEffect(() => {
    // Scroll to the result section when ideal weight is calculated
    if (idealWeight && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [idealWeight]);

  return (
    <div className="ideal-weight-calculator">
      <h2 className="ideal-weight-calculator__title">Ideal Weight Calculator</h2>
      <p className="ideal-weight-calculator__description">
        The ideal weight is a healthy weight for your height and gender. Note that these values are general estimates and may not be suitable for all body types.
      </p>
      <div className="ideal-weight-calculator__input-group">
        <label htmlFor="height" className="ideal-weight-calculator__label">Enter your height in cm:</label>
        <input 
          type="number" 
          id="height"
          placeholder="Enter your height in cm" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
          className="ideal-weight-calculator__input"
        />
      </div>
      <div className="ideal-weight-calculator__input-group">
        <label htmlFor="gender" className="ideal-weight-calculator__label">Select your gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="ideal-weight-calculator__select"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button onClick={calculateIdealWeight} className="ideal-weight-calculator__button">Calculate Ideal Weight</button>

      {error && <p className="ideal-weight-calculator__error-message">{error}</p>}

      {idealWeight && (
        <div ref={resultRef} className="ideal-weight-calculator__result">
          <p>Your Ideal Weight is: {idealWeight.toFixed(2)} kg</p>
          <p>If you want to achieve your ideal weight, click the button below for tips</p>
          <Link to="/get-tips" className="ideal-weight-calculator__get-tips-btn">Get Tips</Link>
        </div>
      )}
    </div>
  );
};

export default IdealWeightCalculator;
