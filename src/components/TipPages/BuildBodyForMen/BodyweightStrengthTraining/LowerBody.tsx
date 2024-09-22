import React from 'react';
import './LowerBody.css';

const LowerBodyMen: React.FC = () => {
    return (
        <div className="lower-body-container">
            <h2>Lower Body Workouts for Men</h2>
            <p>Strengthen your legs, glutes, and lower body with these targeted exercises, designed to build power and endurance. Lower body workouts are crucial for improving overall athletic performance, supporting better posture, and enhancing daily functional movements.</p>

            <div className="lower-body-workout-plan">
                <h3>30-Minute Lower Body Workout Plan</h3>
                <ul className="lower-body-workout-list">
                    <li><strong>Warm-Up:</strong> 5 minutes of light cardio (jogging, jump rope, or dynamic stretches)</li>
                    <li><strong>Squats:</strong> 3 sets of 12 reps</li>
                    <li><strong>Lunges:</strong> 3 sets of 10 reps per leg</li>
                    <li><strong>Deadlifts:</strong> 3 sets of 10 reps</li>
                    <li><strong>Leg Press:</strong> 3 sets of 12 reps</li>
                    <li><strong>Calf Raises:</strong> 3 sets of 15 reps</li>
                    <li><strong>Cool Down:</strong> 5 minutes of stretching</li>
                </ul>
            </div>

            <div className="lower-body-tips-section">
                <h3>Health & Lifestyle Tips</h3>
                <p>Incorporating lower body workouts into your routine can help with muscle imbalances, increase strength, and improve overall body coordination. Ensure you’re eating a balanced diet with sufficient protein to support muscle recovery and growth. Stay hydrated and get adequate rest to enhance your performance and prevent injuries.</p>
            </div>

            <div className="lower-body-dos-donts">
                <h3>Dos and Don'ts</h3>
                <div className="lower-body-dos">
                    <h4>Dos:</h4>
                    <ul>
                        <li>Do use proper form to avoid injuries.</li>
                        <li>Do warm up before starting your workout.</li>
                        <li>Do gradually increase weights to challenge your muscles.</li>
                        <li>Do focus on controlled movements to maximize effectiveness.</li>
                    </ul>
                </div>
                <div className="lower-body-donts">
                    <h4>Don'ts:</h4>
                    <ul>
                        <li>Don't skip the warm-up or cool-down.</li>
                        <li>Don't use excessively heavy weights that compromise your form.</li>
                        <li>Don't rush through exercises; perform each rep slowly and with purpose.</li>
                        <li>Don't neglect rest days; muscles need time to recover.</li>
                    </ul>
                </div>
            </div>

            <div className="lower-body-video-section">
                <h3>Guidance Video</h3>
                <iframe 
                    src="https://www.youtube.com/embed/CnfitL4Rl0o?si=os3w078onH27gI-q"
                    title="Lower Body Workout Guide" 
                    allowFullScreen 
                ></iframe>
            </div>
        </div>
    );
};

export default LowerBodyMen;