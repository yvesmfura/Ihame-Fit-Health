import React, { useState, useRef, useEffect } from 'react';
import './Component_Styles/IdealWeightCalculator.css';

const CalorieCalculator: React.FC = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null); // For displaying error messages
  const resultRef = useRef<HTMLParagraphElement>(null);

  const validateInputs = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseInt(age);

    if (isNaN(ageInYears) || ageInYears <= 0 || ageInYears > 120) {
      return "Please enter a valid age (1-120 years).";
    }

    if (isNaN(heightInCm) || heightInCm <= 50 || heightInCm > 300) {
      return "Please enter a valid height (50-300 cm).";
    }

    if (isNaN(weightInKg) || weightInKg <= 10 || weightInKg > 500) {
      return "Please enter a valid weight (10-500 kg).";
    }

    return null;
  };

  const calculateCalories = () => {
    const errorMsg = validateInputs();
    if (errorMsg) {
      setError(errorMsg);
      setCalories(null);
      return;
    }

    setError(null); // Clear any previous errors

    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseInt(age);
    let bmr: number;

    // Mifflin-St Jeor Equation for BMR calculation
    if (gender === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
    }

    // Adjust BMR based on activity level
    let dailyCalories: number;
    switch (activityLevel) {
      case 'sedentary':
        dailyCalories = bmr * 1.2;
        break;
      case 'lightly_active':
        dailyCalories = bmr * 1.375;
        break;
      case 'moderately_active':
        dailyCalories = bmr * 1.55;
        break;
      case 'very_active':
        dailyCalories = bmr * 1.725;
        break;
      case 'super_active':
        dailyCalories = bmr * 1.9;
        break;
      default:
        dailyCalories = bmr * 1.2;
    }

    setCalories(dailyCalories);
  };

  useEffect(() => {
    if (calories && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [calories]);

  return (
    <div className="calorie-calculator">
      <h2 className="calorie-calculator__title">Calorie Calculator</h2>
      <p className="calorie-calculator__description">
        Understanding your daily caloric needs is essential for achieving your health and fitness goals.
      </p>
      <div className="calorie-calculator__input-group">
        <div className="calorie-calculator__input-wrapper">
          <label htmlFor="age" className="calorie-calculator__label">Age (years):</label>
          <input 
            type="number" 
            id="age"
            placeholder="Enter your age in years" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            className="calorie-calculator__input"
          />
        </div>
        <div className="calorie-calculator__input-wrapper">
          <label htmlFor="gender" className="calorie-calculator__label">Gender:</label>
          <select 
            id="gender"
            value={gender} 
            onChange={(e) => setGender(e.target.value)} 
            className="calorie-calculator__select"
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="calorie-calculator__input-wrapper">
          <label htmlFor="height" className="calorie-calculator__label">Height (cm):</label>
          <input 
            type="number" 
            id="height"
            placeholder="Enter your height in cm" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            className="calorie-calculator__input"
          />
        </div>
        <div className="calorie-calculator__input-wrapper">
          <label htmlFor="weight" className="calorie-calculator__label">Weight (kg):</label>
          <input 
            type="number" 
            id="weight"
            placeholder="Enter your weight in kg" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            className="calorie-calculator__input"
          />
        </div>
        <div className="calorie-calculator__input-wrapper">
          <label htmlFor="activityLevel" className="calorie-calculator__label">Activity Level:</label>
          <select 
            id="activityLevel"
            value={activityLevel} 
            onChange={(e) => setActivityLevel(e.target.value)} 
            className="calorie-calculator__select"
          >
            <option value="">Select your activity level</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="lightly_active">Lightly Active (light exercise/sports 1-3 days/week)</option>
            <option value="moderately_active">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
            <option value="very_active">Very Active (hard exercise/sports 6-7 days/week)</option>
            <option value="super_active">Super Active (very hard exercise/physical job or training twice a day)</option>
          </select>
        </div>
      </div>
      <button onClick={calculateCalories} className="calorie-calculator__button">Calculate</button>
      
      {error && (
        <p className="calorie-calculator__error">{error}</p>
      )}

      {calories && (
        <p ref={resultRef} className="calorie-calculator__result">
          Your Daily Caloric Need is: {calories.toFixed(2)} kcal
        </p>
      )}
    </div>
  );
};

export default CalorieCalculator;
