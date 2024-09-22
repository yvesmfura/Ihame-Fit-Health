import React from 'react';
import './AbCircuits.css';

const AbCircuitsMen: React.FC = () => {
    return (
        <div className="ab-circuits-men-container">
            <h2>Ab Circuits for Men</h2>
            <p>Target your core with these ab circuits, designed to strengthen and tone your midsection for improved overall stability.</p>

            {/* Importance of Ab Circuits */}
            <section className="importance-men-section">
                <h3>Importance of Ab Circuits</h3>
                <p>Ab circuits play a vital role in developing core strength, which improves posture, enhances balance, and reduces the risk of injury. A strong core is essential for everyday activities and athletic performance, helping stabilize your body during dynamic movements.</p>
            </section>

            {/* 30-Minute Ab Circuit Workout Plan */}
            <section className="workout-plan-men-section">
                <h3>30-Minute Ab Circuit Workout Plan</h3>
                <p>Follow this 30-minute ab circuit to effectively target your core muscles:</p>
                <ul>
                    <li><strong>Warm-up (5 minutes):</strong> Light cardio (jumping jacks, high knees, or jogging in place)</li>
                    <li><strong>1st Circuit (3 sets):</strong>
                        <ul>
                            <li>Plank (1 minute)</li>
                            <li>Bicycle Crunches (20 reps)</li>
                            <li>Mountain Climbers (30 seconds)</li>
                        </ul>
                    </li>
                    <li><strong>2nd Circuit (3 sets):</strong>
                        <ul>
                            <li>Leg Raises (15 reps)</li>
                            <li>Russian Twists (20 reps per side)</li>
                            <li>Side Plank (30 seconds per side)</li>
                        </ul>
                    </li>
                    <li><strong>Cooldown (5 minutes):</strong> Stretching exercises focusing on your core and lower back.</li>
                </ul>
            </section>

            {/* Do's and Don'ts */}
            <section className="dos-donts-men-section">
                <h3>Do's and Don'ts</h3>
                <p>To get the most out of your ab workouts, keep the following tips in mind:</p>
                <ul>
                    <li><strong>Do:</strong> Engage your core during each exercise to maximize effectiveness.</li>
                    <li><strong>Do:</strong> Perform each movement slowly and with control to avoid injury.</li>
                    <li><strong>Don't:</strong> Arch your back during exercises like planks or leg raises, as this puts unnecessary strain on your lower back.</li>
                    <li><strong>Don't:</strong> Overwork your abs without allowing time for recovery between sessions.</li>
                </ul>
            </section>

            {/* Health and Lifestyle Tips */}
            <section className="health-lifestyle-men-section">
                <h3>Health and Lifestyle Tips for Ab Circuits</h3>
                <ul>
                    <li>Maintain a balanced diet rich in protein and healthy fats to support muscle growth and recovery.</li>
                    <li>Incorporate cardio into your routine to reduce body fat and reveal your ab muscles.</li>
                    <li>Stay hydrated and get enough sleep to promote overall health and optimal performance.</li>
                    <li>Avoid excessive sugar and processed foods that can lead to fat gain around the midsection.</li>
                </ul>
            </section>

            {/* Guidance Video */}
            <section className="video-men-section">
                <h3>Guidance Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/P1mInEK7BEU?si=F9TCjJ6SYbTxcqkC"
                    title="Ab Circuit Workout for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default AbCircuitsMen;