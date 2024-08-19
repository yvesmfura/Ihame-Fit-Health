import React from 'react';
import { Link } from 'react-router-dom';
import './Component_Styles/Workout.css';

const Workout: React.FC = () => {
  return (
    <div className="workout-page">
      <h2>Workout Plans</h2>
      
      <div className="workout-section">
        <h3>No Equipment</h3>
        <ul>
          <li>Push-ups</li>
          <li>Squats</li>
          <li>Lunges</li>
          <li>Plank</li>
          <li>Mountain Climbers</li>
        </ul>
      </div>
      
      <div className="workout-section">
        <h3>With Equipment</h3>
        <ul>
          <li>Deadlifts</li>
          <li>Bench Press</li>
          <li>Bent-over Rows</li>
          <li>Lat Pulldowns</li>
          <li>Shoulder Press</li>
        </ul>
      </div>

      <Link to="/get-tips" className="back-link">Back to Tips</Link>
    </div>
  );
};

export default Workout;