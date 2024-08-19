import React, { useState, useRef, useEffect } from 'react';
import './Component_Styles/WaterCalculator.css';

const WaterIntakeCalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLParagraphElement>(null);

  const validateWeight = () => {
    const weightInKg = parseFloat(weight);
    if (isNaN(weightInKg) || weightInKg <= 10 || weightInKg > 500) {
      return "Please enter a valid weight (10-500 kg).";
    }
    return null;
  };

  const calculateWaterIntake = () => {
    const errorMsg = validateWeight();
    if (errorMsg) {
      setError(errorMsg);
      setWaterIntake(null);
      return;
    }

    setError(null); // Clear any previous errors
    const weightInKg = parseFloat(weight);
    const dailyWater = weightInKg * 35; // 35ml per kg of body weight
    setWaterIntake(dailyWater);
  };

  useEffect(() => {
    if (waterIntake && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [waterIntake]);

  return (
    <div className="water-calculator">
      <h2 className="water-calculator__title">Water Intake Calculator</h2>
      <p className="water-calculator__description">
        Water is essential for maintaining proper hydration, regulating body temperature, and supporting various bodily functions. The recommended daily water intake varies depending on factors such as age, weight, and activity level.
      </p> 
      <div className="water-calculator__input-group">
        <label htmlFor="weight" className="water-calculator__label">Weight kg:</label>
        <input 
          type="number" 
          id="weight"
          placeholder="Enter your weight in kg" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          className="water-calculator__input"
        />
      </div>
      <button onClick={calculateWaterIntake} className="water-calculator__button">Calculate</button>
      
      {error && (
        <p className="water-calculator__error">{error}</p>
      )}

      {waterIntake && (
        <p ref={resultRef} className="water-calculator__result">
          Your Daily Water Intake Should Be: {waterIntake.toFixed(2)} ml
        </p>
      )}
    </div>
  );
};

export default WaterIntakeCalculator;
