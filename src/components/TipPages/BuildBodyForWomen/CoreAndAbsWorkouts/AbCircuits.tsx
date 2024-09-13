import React from 'react';
import './AbCircuitsWomen.css';

const AbCircuitsWomen: React.FC = () => {
    return (
        <div className="ab-circuit-women-container">
            <h2 className="ab-circuit-women-header">Ab Circuits for Women</h2>
            <p className="ab-circuit-women-description">
                Strengthen your core with these targeted ab circuits, designed to build a strong and stable midsection.
                Whether you're aiming to enhance your overall fitness or achieve a more toned and aesthetic appearance, 
                these circuits will help you reach your goals.
            </p>

            <div className="ab-circuit-women-importance">
                <h3 className="ab-circuit-women-subheader">Why Abs Are Important for Women</h3>
                
                <div className="ab-circuit-women-fitness">
                    <h4 className="ab-circuit-women-subsubheader">For Fitness:</h4>
                    <p className="ab-circuit-women-paragraph">
                        A strong core is the foundation of all physical activities. Strengthening your abs has numerous 
                        benefits for fitness enthusiasts, including:
                    </p>
                    <ul className="ab-circuit-women-list">
                        <li>Improved posture: Strong abdominal muscles help to keep your spine aligned and maintain good posture.</li>
                        <li>Better balance and stability: Your core supports almost every movement, from walking to lifting weights, making it essential for balance and coordination.</li>
                        <li>Reduced risk of injury: A strong core helps to stabilize your body, reducing the risk of injuries, especially during high-impact or strength-based exercises.</li>
                        <li>Enhanced athletic performance: Whether you're running, cycling, or practicing yoga, core strength improves endurance, flexibility, and overall performance.</li>
                        <li>Lower back pain relief: Weak core muscles can lead to back pain; strengthening your abs can alleviate pressure on your lower back.</li>
                    </ul>
                </div>

                <div className="ab-circuit-women-aesthetic">
                    <h4 className="ab-circuit-women-subsubheader">For Aesthetic Purposes:</h4>
                    <p className="ab-circuit-women-paragraph">
                        For women looking to achieve a toned and aesthetic look, focusing on ab circuits can offer great results:
                    </p>
                    <ul className="ab-circuit-women-list">
                        <li>Toned appearance: Strong, defined abs give a sleek and toned look to the midsection, enhancing your overall physique.</li>
                        <li>Confidence boost: Many women feel more confident and empowered when they achieve a flat and toned stomach.</li>
                        <li>Waist definition: Well-defined abdominal muscles help create a more sculpted waistline, which contributes to an hourglass figure.</li>
                        <li>Body symmetry: Toned abs contribute to body proportion, making you appear fitter and more balanced.</li>
                        <li>Health glow: When combined with a healthy lifestyle, strong abs promote good posture, which can enhance your overall aesthetic by making you stand taller and look more poised.</li>
                    </ul>
                </div>
            </div>

            <div className="ab-circuit-women-workout">
                <h3 className="ab-circuit-women-subheader">30-Minute Ab Circuit Workout Plan</h3>
                <ul className="ab-circuit-women-list">
                    <li>5 minutes - Warm-up (Dynamic stretching)</li>
                    <li>10 minutes - Core Exercises (Planks, Russian Twists, Leg Raises)</li>
                    <li>10 minutes - High-Intensity Interval Training (HIIT) for Abs</li>
                    <li>5 minutes - Cool Down (Static stretching)</li>
                </ul>
            </div>

            <div className="ab-circuit-women-tips">
                <h3 className="ab-circuit-women-subheader">Health, Lifestyle, and Aesthetic Tips</h3>
                <div className="ab-circuit-women-tip">
                    <h4 className="ab-circuit-women-subsubheader">Health Tips</h4>
                    <ul className="ab-circuit-women-list">
                        <li>Eat a balanced diet rich in protein and fiber to support muscle growth and fat loss.</li>
                        <li>Stay hydrated throughout the day to improve digestion and muscle function.</li>
                        <li>Get at least 7-8 hours of sleep every night to aid in muscle recovery and overall well-being.</li>
                    </ul>
                </div>

                <div className="ab-circuit-women-tip">
                    <h4 className="ab-circuit-women-subsubheader">Lifestyle Tips</h4>
                    <ul className="ab-circuit-women-list">
                        <li>Incorporate regular cardio workouts to reduce overall body fat and reveal toned abs.</li>
                        <li>Practice stress-relief techniques such as meditation, yoga, or breathing exercises to reduce cortisol levels, which can lead to fat retention.</li>
                        <li>Stay consistent: Regular exercise, paired with a healthy diet, is key to achieving both fitness and aesthetic goals.</li>
                    </ul>
                </div>

                <div className="ab-circuit-women-tip">
                    <h4 className="ab-circuit-women-subsubheader">Aesthetic Tips</h4>
                    <ul className="ab-circuit-women-list">
                        <li>Use body scrubs and moisturizers to keep your skin healthy, glowing, and firm around your midsection.</li>
                        <li>Wear high-waist activewear to accentuate your toned waist and give a streamlined appearance.</li>
                        <li>Maintain good posture: Standing tall makes your abs appear more defined and your figure more proportional.</li>
                    </ul>
                </div>
            </div>

            {/* Guidance Video Section */}
            <div className="ab-circuit-women-video">
                <h3 className="ab-circuit-women-subheader">Guidance Video</h3>
                <iframe
                    className="ab-circuit-women-video-frame"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/VIDEO_ID"  // Replace VIDEO_ID with actual video link
                    title="Ab Circuit Workout for Women"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default AbCircuitsWomen;