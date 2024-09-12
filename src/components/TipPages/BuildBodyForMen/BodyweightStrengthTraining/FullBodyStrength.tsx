// FullBodyStrengthMen.tsx

import React from 'react';
import './FullBodyStrengthMen.css';

const FullBodyStrengthMen: React.FC = () => {
    return (
        <div className="full-body-strength-men-container">
            {/* Introduction to Full Body Strength Workouts */}
            <h2>Full Body Strength Workouts for Men</h2>
            <p className="full-body-strength-men-description">
                Full-body workouts are crucial for men aiming to build balanced muscle strength, improve cardiovascular health, and enhance endurance. 
                These workouts target multiple muscle groups, promoting muscle growth, fat loss, and better overall body function. 
                Whether you're looking to build lean muscle or improve athletic performance, full-body strength workouts are an essential component of your fitness journey.
            </p>

            {/* 30 Minute Workout Plan */}
            <div className="full-body-strength-men-workout-plan">
                <h3>30 Minute Full Body Workout Plan</h3>
                <p>Here’s a 30-minute full-body workout plan focusing on strength building for men. No equipment required!</p>
                
                <ul className="full-body-strength-men-workout-list">
                    <li><strong>Warm-up:</strong> 5 minutes of dynamic stretching or jogging in place</li>
                    <li><strong>Push-ups:</strong> 3 sets of 15 reps</li>
                    <li><strong>Bodyweight Squats:</strong> 3 sets of 20 reps</li>
                    <li><strong>Plank:</strong> 3 sets of 30 seconds</li>
                    <li><strong>Burpees:</strong> 3 sets of 12 reps</li>
                    <li><strong>Lunges:</strong> 3 sets of 10 reps per leg</li>
                    <li><strong>Mountain Climbers:</strong> 3 sets of 30 seconds</li>
                    <li><strong>Cooldown:</strong> 5 minutes of light stretching</li>
                </ul>

                <p>Perform each exercise back to back with minimal rest. Take a 1-minute break between sets.</p>
            </div>

            {/* Health and Lifestyle Tips */}
            <div className="full-body-strength-men-tips-section">
                <h3>Health Tips</h3>
                <p>To maximize the benefits of your workout, maintain a balanced diet rich in lean protein, whole grains, and healthy fats. Consider including foods like chicken, fish, eggs, and vegetables to fuel muscle growth and recovery.</p>
                
                <h3>Lifestyle Tips</h3>
                <p>Getting adequate rest is as important as working out. Aim for 7-8 hours of sleep per night to allow your muscles to recover and grow. Additionally, staying hydrated throughout the day and managing stress through mindfulness or yoga can greatly benefit your overall fitness and well-being.</p>
            </div>

            {/* Workout Video Guidance */}
            <div className="full-body-strength-men-video-section">
                <h3>Follow Along with This Video</h3>
                <iframe
                    title="30 Minute Full Body Workout for Men"
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

export default FullBodyStrengthMen;
