import React, { useState, useRef, useEffect } from 'react';
import './Component_Styles/ProteinCalculator.css';

const ProteinCalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [protein, setProtein] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLParagraphElement>(null);

  const validateWeight = () => {
    const weightInKg = parseFloat(weight);
    if (isNaN(weightInKg) || weightInKg <= 10 || weightInKg > 500) {
      return "Please enter a valid weight (10-500 kg).";
    }
    return null;
  };

  const calculateProtein = () => {
    const errorMsg = validateWeight();
    if (errorMsg) {
      setError(errorMsg);
      setProtein(null);
      return;
    }

    setError(null); // Clear any previous errors
    const weightInKg = parseFloat(weight);
    const dailyProtein = weightInKg * 0.8; // Standard 0.8g protein per kg of body weight
    setProtein(dailyProtein);
  };

  useEffect(() => {
    if (protein && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [protein]);

  return (
    <div className="protein-calculator">
      <h2 className="protein-calculator__title">Protein Intake Calculator</h2>
      <p className="protein-calculator__description">
        Protein is an essential nutrient for building and repairing tissues in the body. It is also important for muscle growth and maintenance. The recommended daily protein intake varies depending on factors such as age, weight,
        and activity level.
      </p>
      <div className="protein-calculator__input-group">
        <label htmlFor="weight" className="protein-calculator__label">Weight in kg:</label>
        <input 
          type="number" 
          id="weight"
          placeholder="Enter your weight in kg" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          className="protein-calculator__input"
        />
      </div>
      <button onClick={calculateProtein} className="protein-calculator__button">Calculate</button>

      {error && (
        <p className="protein-calculator__error">{error}</p>
      )}

      {protein && (
        <p ref={resultRef} className="protein-calculator__result">
          Your Daily Protein Need is: {protein.toFixed(2)} g
        </p>
      )}
    </div>
  );
};

export default ProteinCalculator;
