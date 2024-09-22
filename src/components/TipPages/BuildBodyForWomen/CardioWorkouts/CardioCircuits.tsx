import React from 'react';
import './CardioCircuitsWomen.css';

const CardioCircuitsWomen: React.FC = () => {
    return (
        <div className="cardio-circuits-women-container">
            <h2>Cardio Circuits for Women</h2>
            <p>
                Boost your stamina with these cardio circuit routines, ideal for improving overall fitness and targeting key areas of interest.
            </p>

            <section className="cardio-circuits-women-benefits">
                <h3>Why Cardio Circuits?</h3>
                <ul>
                    <li>Enhances cardiovascular health and endurance.</li>
                    <li>Supports weight loss and muscle toning.</li>
                    <li>Increases energy levels and reduces stress.</li>
                    <li>Flexible routines that can be done at home or the gym.</li>
                </ul>
            </section>

            <section className="cardio-circuits-women-workout-plan">
                <h3>20-Minute Cardio Circuit Workout Plan</h3>
                <ul>
                    <li><strong>Warm-Up (3 minutes):</strong> Light jogging or marching in place.</li>
                    <li><strong>Jumping Jacks (2 minutes):</strong> Classic exercise to elevate heart rate.</li>
                    <li><strong>High Knees (2 minutes):</strong> Lift knees high while jogging in place.</li>
                    <li><strong>Rest (1 minute):</strong> Catch your breath.</li>
                    <li><strong>Burpees (2 minutes):</strong> Full-body exercise that combines squats and jumps.</li>
                    <li><strong>Mountain Climbers (2 minutes):</strong> Dynamic move to strengthen the core.</li>
                    <li><strong>Rest (1 minute):</strong> Prepare for the next set.</li>
                    <li><strong>Repeat 2-3 times</strong></li>
                    <li><strong>Cool Down (3 minutes):</strong> Stretching, focusing on legs, arms, and back.</li>
                </ul>
            </section>

            <section className="cardio-circuits-women-tips">
                <h3>Tips for Effective Cardio Circuits</h3>
                <ul>
                    <li>Stay hydrated and listen to your body.</li>
                    <li>Use proper form to avoid injuries.</li>
                    <li>Incorporate variety to keep workouts exciting.</li>
                    <li>Combine with strength training for balanced fitness.</li>
                </ul>
            </section>

            <section className="cardio-circuits-women-video">
                <h3>Guidance Video</h3>
                <p>Watch the following video for tips and demonstrations on effective cardio circuit techniques.</p>
                <div className="cardio-circuits-women-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/tgm_QjUiwlk?si=udhoVrOYKseysWc8"
                        title="Cardio Circuit Workout Guide"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default CardioCircuitsWomen;