import React from 'react';
import './FoamRolling.css';

const FoamRollingWomen: React.FC = () => {
    return (
        <div className="foam-rolling-women-container">
            <h2 className="foam-rolling-women-title">Foam Rolling Exercises for Women</h2>
            <p className="foam-rolling-women-description">
                Release muscle tension and improve recovery with these foam rolling exercises. Foam rolling is a great way to enhance flexibility, reduce soreness, and prevent injury.
            </p>

            <h3 className="foam-rolling-women-subheading">1. Quads Roll</h3>
            <p className="foam-rolling-women-text">
                Position the foam roller under your thighs and roll from the top of your knees to your hips. Focus on rolling slowly, especially over any tight spots. Perform for 1-2 minutes per leg.
            </p>

            <h3 className="foam-rolling-women-subheading">2. Hamstrings Roll</h3>
            <p className="foam-rolling-women-text">
                Sit on the floor with the foam roller beneath your hamstrings. Slowly roll from just above your knees to your glutes. You can perform one leg at a time or both together for 1-2 minutes per side.
            </p>

            <h3 className="foam-rolling-women-subheading">3. IT Band Roll</h3>
            <p className="foam-rolling-women-text">
                Lie on your side with the foam roller positioned under your outer thigh. Roll from your hip down to your knee, focusing on tight spots. This can be intense, so go slow and control the pressure. Roll for 1-2 minutes on each side.
            </p>

            <h3 className="foam-rolling-women-subheading">4. Upper Back Roll</h3>
            <p className="foam-rolling-women-text">
                Position the foam roller under your upper back and cross your arms in front of your chest. Gently roll up and down, focusing on the shoulder blades and upper back muscles. Roll for 1-2 minutes.
            </p>

            <h3 className="foam-rolling-women-subheading">30-Minute Foam Rolling Routine</h3>
            <ul className="foam-rolling-women-plan">
                <li>5 minutes: Quads Roll</li>
                <li>5 minutes: Hamstrings Roll</li>
                <li>5 minutes: IT Band Roll</li>
                <li>5 minutes: Upper Back Roll</li>
                <li>5 minutes: Calves Roll</li>
                <li>5 minutes: Glutes Roll</li>
            </ul>

            <h3 className="foam-rolling-women-subheading">Do's and Don'ts of Foam Rolling</h3>
            <ul className="foam-rolling-women-list">
                <li><strong>Do:</strong> Roll slowly over muscles and focus on breathing.</li>
                <li><strong>Do:</strong> Focus on tight and sore areas but avoid rolling over joints.</li>
                <li><strong>Don't:</strong> Roll directly on injuries or sharp pains.</li>
                <li><strong>Don't:</strong> Rush through the routine; take your time to release tension.</li>
            </ul>

            <h3 className="foam-rolling-women-subheading">Health and Lifestyle Tips</h3>
            <ul className="foam-rolling-women-list">
                <li>Stay hydrated before and after foam rolling to aid muscle recovery.</li>
                <li>Combine foam rolling with stretching and mobility exercises to maximize benefits.</li>
                <li>Make foam rolling part of your post-workout routine for optimal results.</li>
            </ul>

            <div className="post-workout-stretching-women-video-section">
                <h3 className="post-workout-stretching-women-subheading">Watch a Post-Workout Stretching Routine</h3>
                <iframe
                    className="post-workout-stretching-women-video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/H_71YGXBt8g?si=4MM36s6whx7cBEeG"
                    title="foam rolling women Routine"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default FoamRollingWomen;