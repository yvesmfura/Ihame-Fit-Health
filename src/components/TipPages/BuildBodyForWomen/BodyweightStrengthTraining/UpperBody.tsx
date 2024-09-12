import React from 'react';
import './UpperBodyWomen.css';

const UpperBodyWomen: React.FC = () => {
    return (
        <div className="upper-body-women-container">
            <h2 className="upper-body-women-title">Upper Body Workouts for Women</h2>
            <p className="upper-body-women-description">
                Strengthen your arms, shoulders, and back with these targeted upper body exercises. These routines will help improve posture, increase overall strength, and tone your upper body.
            </p>

            <section className="upper-body-women-age-categories">
                <h3>Importance by Age Categories</h3>
                <div className="upper-body-women-age-category">
                    <h4>In Your 20s</h4>
                    <p>
                        Focus on building upper body strength to create a strong foundation. This is a great time to work on overall muscle development and increase endurance.
                    </p>
                </div>
                <div className="upper-body-women-age-category">
                    <h4>In Your 30s</h4>
                    <p>
                        In your 30s, aim to maintain and tone muscle. Focus on exercises that improve posture and balance while continuing to build strength in the shoulders, arms, and back.
                    </p>
                </div>
                <div className="upper-body-women-age-category">
                    <h4>In Your 40s and Beyond</h4>
                    <p>
                        Concentrate on improving muscle endurance, mobility, and joint health. Exercises like push-ups, shoulder presses, and rows will help maintain strength and reduce the risk of injury.
                    </p>
                </div>
            </section>

            <section className="upper-body-women-workout-plan">
                <h3>30-Minute Upper Body Workout Plan</h3>
                <ul>
                    <li><strong>Warm-Up (5 minutes):</strong> Arm circles, light cardio, or jogging in place.</li>
                    <li><strong>Push-Ups (3 sets of 10-15 reps):</strong> Engage your chest, shoulders, and triceps.</li>
                    <li><strong>Shoulder Press (3 sets of 12 reps):</strong> Use dumbbells to target your shoulders.</li>
                    <li><strong>Bicep Curls (3 sets of 15 reps):</strong> Strengthen and tone your arms.</li>
                    <li><strong>Tricep Dips (3 sets of 12 reps):</strong> Work your triceps using a chair or bench.</li>
                    <li><strong>Plank with Shoulder Taps (3 sets of 20 taps):</strong> Engage your core and shoulders.</li>
                    <li><strong>Cool-Down (5 minutes):</strong> Stretch your shoulders, arms, and back for recovery.</li>
                </ul>
            </section>

            <section className="upper-body-women-health-tips">
                <h3>Health and Aesthetic Tips</h3>
                <div className="upper-body-women-fitness-tips">
                    <h4>For Fitness-Oriented Individuals</h4>
                    <ul>
                        <li>Lift heavier weights with lower reps to build upper body strength.</li>
                        <li>Incorporate compound movements like push-ups and rows to engage multiple muscles.</li>
                        <li>Ensure your diet includes enough protein to support muscle growth and repair.</li>
                    </ul>
                </div>
                <div className="upper-body-women-aesthetic-tips">
                    <h4>For Aesthetic Goals</h4>
                    <ul>
                        <li>Use lighter weights with higher reps for a toned appearance.</li>
                        <li>Focus on sculpting muscles through exercises like shoulder raises and bicep curls.</li>
                        <li>Combine strength training with cardio to enhance muscle definition.</li>
                    </ul>
                </div>
            </section>

            <section className="upper-body-women-video-section">
                <h3>Guidance Video</h3>
                <iframe 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                    title="Upper Body Workout Guidance"
                    allowFullScreen
                    className="upper-body-women-video"
                ></iframe>
            </section>
        </div>
    );
};

export default UpperBodyWomen;