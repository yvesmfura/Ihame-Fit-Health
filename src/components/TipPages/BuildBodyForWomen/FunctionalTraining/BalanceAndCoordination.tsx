import React from 'react';
import './BalanceAndCoordinationWomen.css';

const BalanceCoordinationWomen: React.FC = () => {
    return (
        <div className="balance-and-coordination-women-container">
            <h2>Balance and Coordination Workouts for Women</h2>
            <p>Enhance your balance and coordination with these exercises, perfect for functional strength and injury prevention.</p>

            <h3>Importance of Balance and Coordination for Different Ages</h3>
            <ul className="balance-and-coordination-women-importance">
                <li><strong>In your 20s and 30s:</strong> Developing balance and coordination helps improve agility and prevent injuries, especially in physically active women.</li>
                <li><strong>In your 40s and 50s:</strong> Balance exercises help maintain core strength and prevent injury as metabolism slows and muscle mass decreases.</li>
                <li><strong>In your 60s and beyond:</strong> Regular balance training reduces the risk of falls and improves mobility, ensuring independence and safety in daily life.</li>
            </ul>

            <h3>30-Minute Workout Plan</h3>
            <ul className="balance-and-coordination-women-workout">
                <li><strong>Warm-up (5 minutes)</strong>: Light cardio (jump rope, side steps)</li>
                <li><strong>Single-leg Balance (3 sets, 30 seconds each leg)</strong>: Engage the core and balance on one leg.</li>
                <li><strong>Side-to-Side Lunges (3 sets, 10 reps each side)</strong>: Improve lower body strength and coordination.</li>
                <li><strong>Balance Ball Squats (3 sets, 12 reps)</strong>: Using a stability ball, balance against the wall while squatting.</li>
                <li><strong>Plank with Arm Lift (3 sets, 12 reps)</strong>: From a plank, lift one arm at a time, alternating sides.</li>
                <li><strong>Cool-down (5 minutes)</strong>: Focus on stretching, especially legs and core.</li>
            </ul>

            <h3>Do's and Don'ts</h3>
            <ul className="balance-and-coordination-women-dos-donts">
                <li><strong>Do:</strong> Maintain proper posture and form throughout the exercises.</li>
                <li><strong>Do:</strong> Start with simple movements and progress as your balance improves.</li>
                <li><strong>Do:</strong> Focus on slow, controlled movements to engage the core muscles.</li>
                <li><strong>Don't:</strong> Skip the warm-up and cool-down—proper preparation prevents injuries.</li>
                <li><strong>Don't:</strong> Overextend your joints during balancing movements.</li>
            </ul>

            <h3>Health and Lifestyle Tips</h3>
            <ul className="balance-and-coordination-women-health-tips">
                <li>Stay hydrated before and after workouts to maintain energy levels.</li>
                <li>Eat balanced meals with protein, healthy fats, and carbohydrates to support your body.</li>
                <li>Get adequate sleep (7-8 hours) to enhance muscle recovery and coordination.</li>
                <li>Incorporate balance exercises into your routine 2-3 times per week for best results.</li>
            </ul>
            <h3>Guidance Video</h3>

            <div className="balance-and-coordination-women-video-frame">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/example"
                    title="Balance and Coordination Workouts for Women"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default BalanceCoordinationWomen;