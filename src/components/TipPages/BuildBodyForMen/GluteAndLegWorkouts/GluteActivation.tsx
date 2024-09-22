import React from 'react';
import './GluteActivation.css';

const GluteActivationMen: React.FC = () => {
    return (
        <div className="glute-activation-men-container">
            <h2>Glute Activation Workouts for Men</h2>
            <p>
                Activate and strengthen your glutes with these targeted exercises, essential for lower body strength, improved performance, and injury prevention.
            </p>

            {/* Importance of Glute Activation */}
            <section className="glute-activation-men-importance-section">
                <h3>Importance of Glute Activation</h3>
                <p>
                    Glute activation helps improve posture, reduce the risk of injuries, and enhances overall athletic performance. Engaging these muscles ensures balance and stability during physical activities such as running, squatting, and lifting.
                </p>
            </section>

            {/* 30-Minute Glute Activation Workout Plan */}
            <section className="glute-activation-men-workout-plan-section">
                <h3>30-Minute Glute Activation Workout Plan</h3>
                <ul>
                    <li><strong>Warm-up (5 minutes):</strong> Jumping jacks, high knees, and dynamic stretches.</li>
                    <li><strong>Glute Bridge (3 sets, 12 reps):</strong> Squeeze at the top and hold for 2 seconds.</li>
                    <li><strong>Squats (3 sets, 15 reps):</strong> Keep your core engaged and your back straight.</li>
                    <li><strong>Lateral Band Walks (3 sets, 10 steps each direction):</strong> Use a resistance band above your knees.</li>
                    <li><strong>Step-ups (3 sets, 10 reps per leg):</strong> Use a box or step, ensuring full extension at the top.</li>
                    <li><strong>Cool-down (5 minutes):</strong> Stretch and foam roll your glutes and hamstrings.</li>
                </ul>
            </section>

            {/* Do's and Don'ts */}
            <section className="glute-activation-men-dos-donts-section">
                <h3>Do's and Don'ts</h3>
                <div className="glute-activation-men-dos-donts-grid">
                    <div className="glute-activation-men-dos">
                        <h4>Do's</h4>
                        <ul>
                            <li>Engage your core during exercises.</li>
                            <li>Focus on slow, controlled movements.</li>
                            <li>Maintain proper form to avoid injury.</li>
                            <li>Incorporate glute exercises into your routine 3-4 times a week.</li>
                        </ul>
                    </div>
                    <div className="glute-activation-men-donts">
                        <h4>Don'ts</h4>
                        <ul>
                            <li>Don’t rush through exercises; prioritize quality over quantity.</li>
                            <li>Don’t lift heavy weights without warming up properly.</li>
                            <li>Avoid arching your back during glute bridges or squats.</li>
                            <li>Don't neglect other muscle groups; balance is key.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Health and Lifestyle Tips */}
            <section className="glute-activation-men-health-lifestyle-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Stay hydrated by drinking plenty of water throughout the day.</li>
                    <li>Incorporate lean proteins, healthy fats, and fiber-rich carbs into your diet.</li>
                    <li>Get enough sleep to allow your muscles to recover and grow.</li>
                    <li>Maintain a regular workout schedule to build and maintain muscle strength.</li>
                    <li>Focus on overall body flexibility and mobility with regular stretching or yoga.</li>
                </ul>
            </section>

            {/* Video Section */}
            <section className="glute-activation-men-video-section">
                <h3>Glute Activation Workout Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GHBVM3P63ds?si=0CU8tSapG9iB2bte"
                    title="Glute Activation Workout for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default GluteActivationMen;