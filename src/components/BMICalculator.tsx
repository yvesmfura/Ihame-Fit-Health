import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Component_Styles/BMIcalculator.css';

const BMICalculator: React.FC = () => {
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // For displaying error messages
  const bmiResultRef = useRef<HTMLDivElement>(null);

  const validateInputs = (weight: number, height: number) => {
    if (weight <= 0 || weight > 500) {
      return "Please enter a valid weight (1-500 kg).";
    }
    if (height <= 0 || height > 250) {
      return "Please enter a valid height (1-250 cm).";
    }
    return null;
  };

  const calculateBMI = (weight: number, height: number) => {
    const errorMsg = validateInputs(weight, height);
    if (errorMsg) {
      setError(errorMsg);
      setBMI(null);
      setCategory('');
      return;
    }

    const bmiValue = weight / ((height / 100) ** 2);
    setBMI(bmiValue);
    categorizeBMI(bmiValue);
    setError(null); // Clear any previous errors
  };

  const categorizeBMI = (bmi: number) => {
    if (bmi < 18.5) {
      setCategory('underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setCategory('normal');
    } else if (bmi >= 25) {
      setCategory('overweight');
    }
  };

  useEffect(() => {
    // Scroll to the result section when BMI is calculated
    if (bmiResultRef.current) {
      bmiResultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [bmi]);

  return (
    <div className="bmi-calculator-container">
      <h2 className="bmi-calculator__title">BMI Calculator</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const weight = parseFloat((e.target as any).weight.value);
          const height = parseFloat((e.target as any).height.value);
          calculateBMI(weight, height);
        }}
      >
        <div className="input-group">
          <label htmlFor="weight">Weight in kg:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Enter your weight in kg"
            required
            className="bmi-calculator__input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height in cm:</label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="Enter your height in cm"
            required
            className="bmi-calculator__input"
          />
        </div>
        <button type="submit" className="bmi-calculator__button">
          Calculate BMI
        </button>
      </form>

      {error && <p className="bmi-calculator__error">{error}</p>}

      {bmi && (
        <div ref={bmiResultRef} className="bmi-calculator__result">
          <p>Your BMI is: {bmi.toFixed(2)}</p>
          <p>
            You are {category}. Please click the button below for tips.
          </p>
          {category === 'underweight' && (
            <Link to="/tips/increase-weight" className="bmi-calculator__link">
              Gain Weight Tips
            </Link>
          )}
          {category === 'normal' && (
            <Link to="/tips/maintain-weight" className="bmi-calculator__link">
              Maintain Weight Tips
            </Link>
          )}
          {category === 'overweight' && (
            <Link to="/tips/reduce-weight" className="bmi-calculator__link">
              Reduce Weight Tips
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
