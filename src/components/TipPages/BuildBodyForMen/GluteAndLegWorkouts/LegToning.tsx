import React from 'react';
import './LegToning.css';

const LegToningMen: React.FC = () => {
    return (
        <div className="leg-toning-men-container">
            <h2>Leg Toning Workouts for Men</h2>
            <p className="leg-toning-men-intro-text">
                Focus on toning and strengthening your legs with these exercises, designed to build lean muscle and improve endurance.
            </p>

            {/* Importance of Leg Toning Section */}
            <div className="leg-toning-men-importance-section">
                <h3>Importance of Leg Toning</h3>
                <p>
                    Leg toning is crucial for overall body balance, muscle symmetry, and functional movement. Strong legs support daily activities, reduce the risk of injuries, and help you perform better in sports or physical tasks. Additionally, toning your legs helps to improve posture and boosts metabolism, contributing to fat loss and lean muscle development.
                </p>
            </div>

            {/* Recommended Exercises Section */}
            <div className="leg-toning-men-workouts-section">
                <h3>Recommended Exercises</h3>
                <ul className="leg-toning-men-workout-list">
                    <li><strong>Squats:</strong> 4 sets of 12 reps. Focus on proper form, keeping your back straight and driving through your heels.</li>
                    <li><strong>Lunges:</strong> 3 sets of 10 reps per leg. Keep your core engaged and make sure your knee doesn’t go past your toes.</li>
                    <li><strong>Step-Ups:</strong> 3 sets of 12 reps per leg. Use a box or bench, step up with one leg, then alternate.</li>
                    <li><strong>Calf Raises:</strong> 4 sets of 15 reps. Stand on an elevated surface and raise your heels slowly, holding at the top.</li>
                    <li><strong>Leg Press:</strong> 4 sets of 10 reps. Use the machine, focusing on slow and controlled movements.</li>
                </ul>
            </div>

            {/* Tips Section */}
            <div className="leg-toning-men-tips-section">
                <h3>Training Tips</h3>
                <ul className="leg-toning-men-tips-list">
                    <li>Ensure you are warming up properly before starting your workout.</li>
                    <li>Maintain a balanced diet rich in protein to support muscle growth.</li>
                    <li>Incorporate both strength training and endurance exercises for better results.</li>
                    <li>Stay hydrated and take enough rest between sets to allow proper recovery.</li>
                </ul>
            </div>

            {/* Video Section */}
            <div className="leg-toning-men-video-section">
                <h3>Leg Toning Workout Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sampleVideoID"
                    title="Leg Toning Workout for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default LegToningMen;