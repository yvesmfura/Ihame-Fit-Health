import React from 'react';
import './LowerBodyWomen.css';

const LowerBodyWomen: React.FC = () => {
    return (
        <div className="lower-body-women-container">
            <h2 className="lower-body-women-title">Lower Body Workouts for Women</h2>
            <p className="lower-body-women-description">
                Discover the best lower body workouts designed specifically for women to enhance strength, shape, and flexibility. Focus on sculpting your legs and glutes while improving overall fitness.
            </p>

            <section className="lower-body-women-age-categories">
                <h3>Importance by Age Categories</h3>
                <div className="lower-body-women-age-category">
                    <h4>In Your 20s</h4>
                    <p>
                        Building a strong foundation in your 20s is key. These years are ideal for focusing on muscle growth and developing long-term fitness habits that will serve you throughout your life. Lower body strength also boosts metabolism.
                    </p>
                </div>
                <div className="lower-body-women-age-category">
                    <h4>In Your 30s</h4>
                    <p>
                        As you enter your 30s, maintaining muscle mass and toning is essential for a lean and strong figure. Regular lower body workouts can help balance hormones and keep your metabolism high, while improving posture and stability.
                    </p>
                </div>
                <div className="lower-body-women-age-category">
                    <h4>In Your 40s and Beyond</h4>
                    <p>
                        In your 40s and beyond, focus on improving flexibility, joint health, and muscle endurance. Lower body exercises like squats and lunges will not only keep your body strong but also improve mobility, reducing the risk of injury.
                    </p>
                </div>
            </section>

            <section className="lower-body-women-workout-plan">
                <h3>30-Minute Lower Body Workout Plan</h3>
                <ul>
                    <li><strong>Warm-Up (5 minutes):</strong> Dynamic stretches and light cardio (e.g., brisk walking or jumping jacks).</li>
                    <li><strong>Bodyweight Squats (4 sets of 15 reps):</strong> Focus on depth and control to engage the glutes and thighs.</li>
                    <li><strong>Reverse Lunges (3 sets of 12 reps per leg):</strong> Strengthen your quads and improve balance.</li>
                    <li><strong>Romanian Deadlifts (3 sets of 10 reps):</strong> Target your hamstrings and lower back.</li>
                    <li><strong>Step-Ups (3 sets of 12 reps per leg):</strong> Enhance glute and quad activation using a step or bench.</li>
                    <li><strong>Glute Bridges (3 sets of 15 reps):</strong> Engage and strengthen your glutes.</li>
                    <li><strong>Cool-Down (5 minutes):</strong> Stretch your hamstrings, quads, and hips for improved flexibility and recovery.</li>
                </ul>
            </section>

            <section className="lower-body-women-health-tips">
                <h3>Health and Aesthetic Tips</h3>
                <div className="lower-body-women-fitness-tips">
                    <h4>For Fitness-Oriented Individuals</h4>
                    <ul>
                        <li>Stay consistent with both strength and cardio exercises for a balanced routine.</li>
                        <li>Incorporate resistance training to build lean muscle and support fat loss.</li>
                        <li>Ensure a diet rich in protein and nutrients to fuel your workouts and support muscle recovery.</li>
                    </ul>
                </div>
                <div className="lower-body-women-aesthetic-tips">
                    <h4>For Aesthetic Goals</h4>
                    <ul>
                        <li>Focus on exercises that emphasize glute activation, such as squats and glute bridges, to create curves.</li>
                        <li>Pay attention to inner and outer thigh exercises like side lunges for a more sculpted look.</li>
                        <li>Combine strength training with healthy eating to enhance muscle definition and reduce excess fat.</li>
                    </ul>
                </div>
            </section>

            <section className="lower-body-women-video-section">
                <h3>Guidance Video</h3>
                <iframe 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                    title="Lower Body Workout Guidance"
                    allowFullScreen
                    className="lower-body-women-video"
                ></iframe>
            </section>
        </div>
    );
};

export default LowerBodyWomen;
