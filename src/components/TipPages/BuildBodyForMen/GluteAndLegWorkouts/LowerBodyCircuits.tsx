import React from 'react';
import './LowerBodyCircuits.css';

const LowerBodyCircuitsMen: React.FC = () => {
    return (
        <div className="lower-body-circuits-men-container">
            <h2>Lower Body Circuits for Men</h2>
            <p className="lower-body-circuits-men-intro-text">
                Challenge your legs and glutes with these lower body circuits, designed to build strength, endurance, and power.
            </p>

            {/* Importance of Lower Body Circuits Section */}
            <section className="lower-body-circuits-men-importance-section">
                <h3>Importance of Lower Body Circuits</h3>
                <p>
                    Lower body circuits are essential for improving overall lower body strength and endurance. These circuits help in increasing muscle definition, enhancing athletic performance, and boosting metabolism. By incorporating a mix of exercises targeting various muscle groups, you can achieve a balanced workout that not only builds muscle but also improves cardiovascular health and functional strength.
                </p>
            </section>

            {/* Lower Body Circuit Workout Plan */}
            <section className="lower-body-circuits-men-workout-plan-section">
                <h3>Lower Body Circuit Workout Plan</h3>
                <ul className="lower-body-circuits-men-workout-list">
                    <li><strong>Warm-up (5 minutes):</strong> Light jog, dynamic stretches, and bodyweight exercises.</li>
                    <li><strong>Circuit 1 (3 rounds):</strong> 
                        <ul>
                            <li>Squats - 15 reps</li>
                            <li>Lunges - 12 reps per leg</li>
                            <li>Glute Bridges - 15 reps</li>
                        </ul>
                    </li>
                    <li><strong>Circuit 2 (3 rounds):</strong> 
                        <ul>
                            <li>Step-Ups - 12 reps per leg</li>
                            <li>Calf Raises - 20 reps</li>
                            <li>Bulgarian Split Squats - 12 reps per leg</li>
                        </ul>
                    </li>
                    <li><strong>Cool-down (5 minutes):</strong> Stretching focusing on lower body muscles.</li>
                </ul>
            </section>

            {/* Do's and Don'ts */}
            <section className="lower-body-circuits-men-dos-donts-section">
                <h3>Do's and Don'ts</h3>
                <div className="lower-body-circuits-men-dos-donts-grid">
                    <div className="lower-body-circuits-men-dos">
                        <h4>Do's</h4>
                        <ul>
                            <li>Ensure proper form to prevent injury.</li>
                            <li>Incorporate rest periods between circuits.</li>
                            <li>Stay hydrated and listen to your body.</li>
                            <li>Gradually increase intensity as you progress.</li>
                        </ul>
                    </div>
                    <div className="lower-body-circuits-men-donts">
                        <h4>Don'ts</h4>
                        <ul>
                            <li>Don’t skip the warm-up or cool-down phases.</li>
                            <li>Avoid overtraining; give muscles time to recover.</li>
                            <li>Don’t sacrifice form for the sake of more reps.</li>
                            <li>Don’t ignore pain; consult a professional if needed.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Health and Lifestyle Tips */}
            <section className="lower-body-circuits-men-health-lifestyle-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Consume a balanced diet with sufficient protein to aid muscle recovery.</li>
                    <li>Maintain a regular sleep schedule to support overall health and fitness goals.</li>
                    <li>Incorporate flexibility and mobility exercises to complement your circuit training.</li>
                    <li>Stay consistent with your workout routine for long-term benefits.</li>
                    <li>Track your progress and adjust workouts as needed to continue challenging yourself.</li>
                </ul>
            </section>

            {/* Video Section */}
            <section className="lower-body-circuits-men-video-section">
                <h3>Lower Body Circuits Workout Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/X0xt0fYTZv8?si=b2yxDnBD_kbeipS1"
                    title="Lower Body Circuits Workout for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default LowerBodyCircuitsMen;
