// UpperBodyMen.tsx

import React from 'react';
import './UpperBodyMen.css';

const UpperBodyMen: React.FC = () => {
    return (
        <div className="upper-body-men-container">
            {/* Importance of Upper Body Workouts */}
            <h2>Upper Body Workouts for Men</h2>
            <p className="upper-body-men-description">
                Upper body strength is vital for building muscle mass, improving posture, and enhancing overall athletic performance. 
                Strengthening your chest, shoulders, arms, and back can also help you perform daily tasks more efficiently while reducing the risk of injury.
            </p>

            {/* 30 Minute Upper Body Workout Plan */}
            <div className="upper-body-men-workout-plan">
                <h3>30 Minute Upper Body Workout Plan</h3>
                <p>Here’s a quick and effective upper body workout plan to build strength and muscle. No equipment needed!</p>
                
                <ul className="upper-body-men-workout-list">
                    <li><strong>Push-ups:</strong> 3 sets of 15 reps</li>
                    <li><strong>Shoulder Taps:</strong> 3 sets of 20 reps (10 each side)</li>
                    <li><strong>Tricep Dips:</strong> 3 sets of 12 reps</li>
                    <li><strong>Plank with Shoulder Taps:</strong> 3 sets of 30 seconds</li>
                    <li><strong>Bodyweight Rows (Underhand Grip):</strong> 3 sets of 12 reps</li>
                    <li><strong>Cooldown:</strong> 5 minutes of light stretching, focusing on your arms and shoulders</li>
                </ul>

                <p>Complete each exercise with minimal rest. Take a 1-2 minute break between sets for recovery.</p>
            </div>

            {/* Health and Lifestyle Tips */}
            <div className="upper-body-men-tips-section">
                <h3>Health Tips</h3>
                <p>To support your upper body workouts, consume foods rich in protein such as lean meats, beans, and nuts. Protein is essential for muscle repair and growth. Consider adding healthy fats like avocados and olive oil to support overall health and recovery.</p>
                
                <h3>Lifestyle Tips</h3>
                <p>Get enough sleep (7-8 hours per night) to allow for proper muscle recovery and regeneration. Incorporate active recovery like light stretching or yoga on rest days to improve flexibility and reduce soreness.</p>
            </div>

            {/* Workout Video Guidance */}
            <div className="upper-body-men-video-section">
                <h3>Follow Along with This Upper Body Workout Video</h3>
                <iframe
                    title="30 Minute Upper Body Workout for Men"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default UpperBodyMen;
