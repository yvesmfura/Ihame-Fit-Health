import React from "react";
import { Link } from "react-router-dom";
import './Component_Styles/Calculators.css';

const Calculators: React.FC = () => {
  return (
    <div className="calculators-pg">
      <h1>Health Calculators</h1>
      <p>Select a calculator to get started:</p>
      <ul className="calculator-links">
        <li>
          <Link to="/bmi-calculator">BMI Calculator</Link>
        </li>
        <li>
          <Link to="/ideal-weight-calculator">Ideal Weight Calculator</Link>
        </li>
        <li>
          <Link to="/calorie-calculator">Calorie Intake Calculator</Link>
        </li>
        <li>
          <Link to="/protein-calculator">Protein Intake Calculator</Link>
        </li>
        <li>
          <Link to="/water-intake-calculator">Water Intake Calculator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Calculators;