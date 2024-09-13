import React from 'react';
import './CoreStabilityWomen.css';

const CoreStabilityWomen: React.FC = () => {
    return (
        <div className="core-stability-women-container">
            <h2 className="core-stability-women-header">Core Stability Workouts for Women</h2>
            <p className="core-stability-women-description">
                Improve your balance and stability with these core-focused exercises, essential for overall body strength, injury prevention, and a toned physique. These workouts are designed to help you achieve a solid core foundation, benefiting both fitness and aesthetic goals.
            </p>

            <div className="core-stability-women-importance">
                <h3 className="core-stability-women-subheader">Why Core Stability is Important</h3>
                <div className="core-stability-women-fitness">
                    <h4 className="core-stability-women-subsubheader">For Fitness:</h4>
                    <p className="core-stability-women-paragraph">
                        A strong and stable core plays a key role in various fitness activities. Here are some of the benefits:
                    </p>
                    <ul className="core-stability-women-list">
                        <li>Improved balance: Core stability helps to maintain better control of your body in motion.</li>
                        <li>Enhanced performance: Whether you're running, lifting, or swimming, a stable core allows you to perform better in all physical activities.</li>
                        <li>Prevents injury: A strong core stabilizes your body and helps prevent injuries, especially during dynamic movements.</li>
                        <li>Supports posture: Core strength helps align your spine and improve your posture, which is critical for reducing back pain.</li>
                    </ul>
                </div>

                <div className="core-stability-women-aesthetic">
                    <h4 className="core-stability-women-subsubheader">For Aesthetic Purposes:</h4>
                    <p className="core-stability-women-paragraph">
                        In addition to fitness benefits, a stable core can significantly improve your physical appearance:
                    </p>
                    <ul className="core-stability-women-list">
                        <li>Toned midsection: Core workouts target your abdominal muscles, helping to achieve a sleek, toned look.</li>
                        <li>Waist definition: Stability exercises help create a more defined waistline, enhancing your overall shape.</li>
                        <li>Improved posture: A strong core naturally improves your posture, giving you a more elegant and poised appearance.</li>
                    </ul>
                </div>
            </div>

            <div className="core-stability-women-workout">
                <h3 className="core-stability-women-subheader">30-Minute Core Stability Workout Plan</h3>
                <ul className="core-stability-women-list">
                    <li>5 minutes - Warm-up (Dynamic stretches and light cardio)</li>
                    <li>10 minutes - Core Stability Exercises (Plank Variations, Dead Bugs, Bird Dogs)</li>
                    <li>10 minutes - Core Strength and Balance (Single-leg Deadlifts, Stability Ball Passes, Side Planks)</li>
                    <li>5 minutes - Cool Down (Static stretches for the core and lower back)</li>
                </ul>
            </div>

            <div className="core-stability-women-tips">
                <h3 className="core-stability-women-subheader">Health, Lifestyle, and Aesthetic Tips</h3>
                <div className="core-stability-women-tip">
                    <h4 className="core-stability-women-subsubheader">Health Tips</h4>
                    <ul className="core-stability-women-list">
                        <li>Incorporate core exercises at least 2-3 times a week to improve stability and reduce the risk of injuries.</li>
                        <li>Pair core workouts with full-body strength training to ensure balanced muscle development.</li>
                        <li>Stay hydrated and eat a nutrient-dense diet to support muscle growth and recovery.</li>
                    </ul>
                </div>

                <div className="core-stability-women-tip">
                    <h4 className="core-stability-women-subsubheader">Lifestyle Tips</h4>
                    <ul className="core-stability-women-list">
                        <li>Engage in activities that challenge your core, such as yoga, Pilates, and swimming.</li>
                        <li>Focus on maintaining proper posture throughout the day to keep your core muscles engaged.</li>
                        <li>Prioritize rest and recovery by getting adequate sleep and incorporating rest days into your routine.</li>
                    </ul>
                </div>

                <div className="core-stability-women-tip">
                    <h4 className="core-stability-women-subsubheader">Aesthetic Tips</h4>
                    <ul className="core-stability-women-list">
                        <li>Wear supportive, high-waist leggings that enhance your silhouette and provide stability during workouts.</li>
                        <li>Incorporate body scrubs and moisturizers to keep your skin around your midsection firm and glowing.</li>
                        <li>Maintain good posture in all activities to help naturally emphasize your waistline and core definition.</li>
                    </ul>
                </div>
            </div>

            {/* Guidance Video Section */}
            <div className="core-stability-women-video">
                <h3 className="core-stability-women-subheader">Guidance Video</h3>
                <iframe
                    className="core-stability-women-video-frame"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/VIDEO_ID"  // Replace VIDEO_ID with actual video link
                    title="Core Stability Workout for Women"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default CoreStabilityWomen;