import React from 'react';
import './CoreStabilityMen.css';

const CoreStabilityMen: React.FC = () => {
    return (
        <div className="core-stability-men-container">
            <h2>Core Stability Workouts for Men</h2>
            <p>Improve your balance and core strength with these stability-focused exercises, ideal for enhancing athletic performance and daily movement efficiency.</p>

            {/* Statistical Facts */}
            <section className="core-stability-men-facts">
                <h3>Did You Know?</h3>
                <ul>
                    <li>Strong core muscles can reduce the risk of lower back pain by up to 40%.</li>
                    <li>Studies show that men with better core stability have a 30% higher performance in strength-related sports.</li>
                    <li>Core stability exercises can improve posture, reducing strain on the spine, which is a common cause of discomfort for 1 in 5 men.</li>
                </ul>
            </section>

            {/* Benefits of Core Stability */}
            <section className="core-stability-men-benefits">
                <h3>Benefits of Core Stability</h3>
                <p>Core stability workouts are essential for:</p>
                <ul>
                    <li>Improving balance and posture</li>
                    <li>Reducing the risk of injury, especially during high-intensity movements</li>
                    <li>Enhancing athletic performance by providing a strong foundation for movement</li>
                    <li>Supporting daily functional activities such as lifting and bending</li>
                </ul>
            </section>

            {/* Core Stability Workout Plan */}
            <section className="core-stability-men-workout-plan">
                <h3>Core Stability Workout Plan</h3>
                <p>Follow this 30-minute workout routine to build and maintain core stability:</p>
                <ul>
                    <li><strong>Warm-up (5 minutes):</strong> Dynamic stretches, focusing on the lower back and core (e.g., cat-cow stretches, hip circles)</li>
                    <li><strong>Workout Circuit (3 sets):</strong>
                        <ul>
                            <li>Plank with Leg Lift (30 seconds per leg)</li>
                            <li>Bird Dog (15 reps per side)</li>
                            <li>Side Plank with Hip Dip (30 seconds per side)</li>
                            <li>Swiss Ball Rollout (12-15 reps)</li>
                        </ul>
                    </li>
                    <li><strong>Cooldown (5 minutes):</strong> Stretching exercises focusing on the core, lower back, and hip flexors.</li>
                </ul>
            </section>

            {/* Common Mistakes to Avoid */}
            <section className="core-stability-men-mistakes">
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>Avoid arching your lower back during planks or leg lifts to prevent injury.</li>
                    <li>Engage your core muscles fully; don't rely on your arms or legs to stabilize yourself.</li>
                    <li>Don't rush through movements—perform each exercise slowly and with control.</li>
                </ul>
            </section>

            {/* Tips for Improving Stability */}
            <section className="core-stability-men-tips">
                <h3>Tips for Improving Core Stability</h3>
                <ul>
                    <li>Incorporate exercises that challenge your balance, such as using a stability ball or standing on one leg.</li>
                    <li>Focus on controlled movements to engage deep core muscles.</li>
                    <li>Practice proper breathing techniques during exercises to maintain stability.</li>
                </ul>
            </section>

            {/* Guidance Video */}
            <section className="core-stability-men-video">
                <h3>Guidance Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="Core Stability Workouts for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default CoreStabilityMen;