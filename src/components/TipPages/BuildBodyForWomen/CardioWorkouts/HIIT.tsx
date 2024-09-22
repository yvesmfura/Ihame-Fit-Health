import React from 'react';
import './HIITWomen.css';

const HIITWomen: React.FC = () => {
    return (
        <div className="hiit-women-container">
            <h2>HIIT Workouts for Women</h2>
            <p>
                Get your heart pumping with these high-intensity interval training workouts, designed to burn fat, build muscle, and improve cardiovascular fitness.
            </p>

            <section className="hiit-women-benefits">
                <h3>Benefits of HIIT</h3>
                <ul>
                    <li>Burns a significant amount of calories in a short time.</li>
                    <li>Boosts metabolism and continues burning calories post-workout.</li>
                    <li>Improves cardiovascular health and endurance.</li>
                    <li>Can be done with minimal equipment, making it flexible and accessible.</li>
                </ul>
            </section>

            <section className="hiit-women-workout-plan">
                <h3>20-Minute HIIT Workout Plan</h3>
                <ul>
                    <li><strong>Warm-Up (3 minutes):</strong> Light jogging or jumping jacks.</li>
                    <li><strong>High Knees (1 minute):</strong> Quick, high knee lifts.</li>
                    <li><strong>Rest (30 seconds):</strong></li>
                    <li><strong>Burpees (1 minute):</strong> Full-body exercise with a jump and push-up.</li>
                    <li><strong>Mountain Climbers (1 minute):</strong> Fast-paced climbing motion in a plank position.</li>
                    <li><strong>Rest (30 seconds):</strong></li>
                    <li><strong>Jump Squats (1 minute):</strong> Squat down and jump up explosively.</li>
                    <li><strong>Plank (1 minute):</strong> Hold a plank position to engage the core.</li>
                    <li><strong>Rest (30 seconds):</strong></li>
                    <li><strong>Repeat 2-3 times</strong></li>
                    <li><strong>Cool Down (3 minutes):</strong> Gentle stretching focusing on legs, arms, and back.</li>
                </ul>
            </section>

            <section className="hiit-women-tips">
                <h3>Tips for Effective HIIT Workouts</h3>
                <ul>
                    <li>Stay hydrated and pace yourself during the high-intensity intervals.</li>
                    <li>Focus on proper form to prevent injuries and maximize effectiveness.</li>
                    <li>Mix up exercises to keep workouts varied and engaging.</li>
                    <li>Ensure adequate rest between HIIT sessions for optimal recovery.</li>
                </ul>
            </section>

            <section className="hiit-women-video">
                <h3>Guidance Video</h3>
                <p>Watch the following video for tips and demonstrations on effective HIIT techniques.</p>
                <div className="hiit-women-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/jqUGUYpxQ7U?si=Fn0CWlt84vwPErMF"
                        title="HIIT Workout Guide"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default HIITWomen;