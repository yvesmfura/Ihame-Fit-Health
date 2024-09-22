import React from 'react';
import './LegToning.css';

const LegToningWomen: React.FC = () => {
    return (
        <div className="leg-toning-women-container">
            <h2 className="leg-toning-women-title">Leg Toning Workouts for Women</h2>
            <p className="leg-toning-women-description">
                Sculpt and strengthen your legs with these targeted exercises designed for women. Incorporating a variety of movements will help you achieve toned, lean legs while boosting overall lower body strength.
            </p>

            {/* Importance of Leg Toning */}
            <section className="leg-toning-women-section">
                <h3 className="leg-toning-women-subtitle">Importance of Leg Toning</h3>
                <p className="leg-toning-women-text">
                    Toning your legs is not just about appearance; it’s essential for boosting mobility, balance, and strength. Strong legs support your body, improve posture, and prevent injury, making leg toning vital for overall health and well-being.
                </p>
            </section>

            {/* 30-Minute Workout Plan */}
            <section className="leg-toning-women-section">
                <h3 className="leg-toning-women-subtitle">30-Minute Leg Toning Workout Plan</h3>
                <ul className="leg-toning-women-workout-list">
                    <li>5 minutes: Warm-up (jumping jacks, leg swings, dynamic stretching)</li>
                    <li>5 minutes: Bodyweight squats (3 sets of 15 reps)</li>
                    <li>5 minutes: Lunges (3 sets of 12 reps per leg)</li>
                    <li>5 minutes: Step-ups (3 sets of 15 reps per leg)</li>
                    <li>5 minutes: Side leg raises (3 sets of 12 reps per side)</li>
                    <li>5 minutes: Calf raises (3 sets of 20 reps)</li>
                </ul>
            </section>

            {/* Health & Lifestyle Tips */}
            <section className="leg-toning-women-section">
                <h3 className="leg-toning-women-subtitle">Health & Lifestyle Tips</h3>
                <div className="leg-toning-women-text">
                    <strong>Fitness Oriented:</strong> Incorporate protein-rich foods to aid muscle recovery and strength. Hydrate well before and after workouts, and ensure you get enough rest for muscle recovery.
                </div>
                <div className="leg-toning-women-text">
                    <strong>Aesthetic Oriented:</strong> Along with toning exercises, prioritize lower-body stretching to prevent tightness and maintain flexibility. A balanced diet helps in achieving toned, defined legs.
                </div>
            </section>

            {/* Women's Fitness Facts */}
            <section className="leg-toning-women-section">
                <h3 className="leg-toning-women-subtitle">Women's Fitness Facts</h3>
                <ul className="leg-toning-women-list">
                    <li>Studies show that leg workouts improve metabolism and help women burn fat more effectively.</li>
                    <li>Women have a natural advantage in lower-body strength, making leg exercises highly effective.</li>
                    <li>Consistent leg workouts contribute to increased bone density, reducing the risk of osteoporosis as women age.</li>
                </ul>
            </section>

            {/* Do's and Don'ts */}
            <section className="leg-toning-women-section">
                <h3 className="leg-toning-women-subtitle">Do's and Don'ts</h3>
                <div className="leg-toning-women-dos-donts">
                    <div>
                        <h4 className="leg-toning-women-text">Do's:</h4>
                        <ul className="leg-toning-women-list">
                            <li>Always warm up before leg workouts.</li>
                            <li>Focus on proper form to avoid injury.</li>
                            <li>Incorporate both compound and isolation movements for balanced leg toning.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="leg-toning-women-text">Don'ts:</h4>
                        <ul className="leg-toning-women-list">
                            <li>Don't rush through exercises; control each movement.</li>
                            <li>Don't neglect recovery after intense leg workouts.</li>
                            <li>Don't use heavy weights without proper form and technique.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section className="leg-toning-women-section">
                <h3 className="leg-toning-women-subtitle">Common Mistakes</h3>
                <ul className="leg-toning-women-list">
                    <li>Not engaging glutes and hamstrings properly during leg exercises.</li>
                    <li>Skipping warm-ups, leading to muscle strains or injuries.</li>
                    <li>Using too much weight and sacrificing form.</li>
                </ul>
            </section>

            {/* Guidance Video */}
            <section className="leg-toning-women-section">
                <h3 className="leg-toning-women-subtitle">Guidance Video</h3>
                <div className="leg-toning-women-video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Yx0BW-H5W0Y?si=FbYbQMJWbg-aEoaZ"
                        title="Leg Toning Workout for Women"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <p className="leg-toning-women-text">
                        This video provides a step-by-step guide to leg toning exercises that target all major leg muscles.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LegToningWomen;