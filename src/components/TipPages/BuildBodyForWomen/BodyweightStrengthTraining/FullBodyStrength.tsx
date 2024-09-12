import React from 'react';
import './FullBodyStrengthWomen.css';

const FullBodyStrengthWomen: React.FC = () => {
    return (
        <div className="full-body-strength-women-container">
            <h2>Full Body Strength Workouts for Women</h2>
            <p>These workouts are designed to improve overall body strength using only your body weight, perfect for building a solid fitness foundation. Incorporating full-body strength exercises helps increase muscle tone, enhance endurance, and boost overall metabolism.</p>
            
            <div className="full-body-strength-women-workout-plan">
                <h3>30-Minute Full Body Strength Workout Plan</h3>
                <ul className="full-body-strength-women-workout-list">
                    <li><strong>Warm-Up:</strong> 5 minutes of light cardio (jogging in place, jumping jacks, or dynamic stretches)</li>
                    <li><strong>Bodyweight Squats:</strong> 3 sets of 15 reps</li>
                    <li><strong>Push-Ups:</strong> 3 sets of 10-12 reps</li>
                    <li><strong>Plank:</strong> 3 sets of 30-45 seconds</li>
                    <li><strong>Lunges:</strong> 3 sets of 12 reps per leg</li>
                    <li><strong>Glute Bridges:</strong> 3 sets of 15 reps</li>
                    <li><strong>Cool Down:</strong> 5 minutes of stretching</li>
                </ul>
            </div>

            <div className="full-body-strength-women-tips-section">
                <h3>Health & Lifestyle Tips</h3>
                <p>To maximize the benefits of your full-body workouts, focus on maintaining proper form during exercises. Combine these workouts with a balanced diet rich in proteins and healthy fats. Stay hydrated and ensure you get adequate rest between workout sessions to support muscle recovery and growth.</p>
            </div>

            <div className="full-body-strength-women-dos-donts">
                <h3>Dos and Don'ts</h3>
                <div className="full-body-strength-women-dos">
                    <h4>Dos:</h4>
                    <ul>
                        <li>Do ensure proper form and technique.</li>
                        <li>Do start with a warm-up to prepare your muscles.</li>
                        <li>Do listen to your body and modify exercises as needed.</li>
                        <li>Do incorporate a variety of exercises to target different muscle groups.</li>
                    </ul>
                </div>
                <div className="full-body-strength-women-donts">
                    <h4>Don'ts:</h4>
                    <ul>
                        <li>Don't skip warm-ups or cool-downs.</li>
                        <li>Don't push through pain; stop if you feel sharp discomfort.</li>
                        <li>Don't rely solely on body weight; consider adding resistance over time.</li>
                        <li>Don't neglect other aspects of fitness like flexibility and cardio.</li>
                    </ul>
                </div>
            </div>

            <div className="full-body-strength-women-video-section">
                <h3>Guidance Video</h3>
                <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="Full Body Strength Workout Guide" 
                    allowFullScreen 
                ></iframe>
            </div>
        </div>
    );
};

export default FullBodyStrengthWomen;
