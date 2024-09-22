import React from 'react';
import './StretchingRoutines.css';

const StretchingMen: React.FC = () => {
    return (
        <div className="stretching-men-container">
            <h2 className="stretching-men-title">Stretching Routines for Men</h2>
            <p className="stretching-men-description">Improve your flexibility and prevent injuries with these effective stretching routines.</p>

            <section className="stretching-men-importance">
                <h3 className="stretching-men-subtitle">Importance of Stretching for Men</h3>
                <p>Stretching is crucial for maintaining flexibility, reducing muscle tension, and improving overall performance. It helps men of all ages stay active and injury-free. Here’s why stretching is important:</p>
                <ul className="stretching-men-list">
                    <li><strong>Young Adults (18-30 years):</strong> Enhances athletic performance and reduces the risk of injuries from intense workouts.</li>
                    <li><strong>Adults (31-50 years):</strong> Helps manage stress, improves posture, and mitigates muscle stiffness from sedentary lifestyles.</li>
                    <li><strong>Older Adults (51+ years):</strong> Improves mobility, balance, and reduces the risk of falls and chronic pain.</li>
                </ul>
            </section>

            <section className="stretching-men-plan">
                <h3 className="stretching-men-subtitle">30-Minute Stretching Workout Plan</h3>
                <ol className="stretching-men-list">
                    <li><strong>Warm-Up (5 minutes):</strong> Gentle marching or light jogging to increase heart rate.</li>
                    <li><strong>Neck Stretch (2 minutes):</strong> Slowly tilt your head towards each shoulder and hold for 30 seconds.</li>
                    <li><strong>Shoulder Stretch (3 minutes):</strong> Cross one arm over your chest and use the other arm to gently press it closer to your chest. Hold for 30 seconds on each side.</li>
                    <li><strong>Triceps Stretch (3 minutes):</strong> Reach one arm overhead, bend the elbow, and use the other hand to gently push the elbow. Hold for 30 seconds on each side.</li>
                    <li><strong>Chest Stretch (3 minutes):</strong> Stand in a doorway, place your arms on the frame, and gently lean forward. Hold for 1 minute.</li>
                    <li><strong>Hamstring Stretch (3 minutes):</strong> Sit with one leg extended and the other leg bent. Reach towards the toes of the extended leg. Hold for 1 minute on each side.</li>
                    <li><strong>Quadriceps Stretch (3 minutes):</strong> Stand on one leg, pull the other foot towards your buttocks, and hold. Use a wall for balance if needed. Hold for 1 minute on each side.</li>
                    <li><strong>Calf Stretch (3 minutes):</strong> Stand facing a wall, place one foot behind you with the heel on the ground, and lean forward. Hold for 1 minute on each side.</li>
                    <li><strong>Cool Down (5 minutes):</strong> Gentle stretching or slow walking to bring your heart rate down.</li>
                </ol>
            </section>

            <section className="stretching-men-dos-donts">
                <h3 className="stretching-men-subtitle">Do's and Don'ts</h3>
                <div className="stretching-men-dos-donts-content">
                    <div className="stretching-men-dos">
                        <h4 className="stretching-men-dos-title">Do's</h4>
                        <ul className="stretching-men-dos-list">
                            <li>Warm up before stretching to prepare your muscles.</li>
                            <li>Hold each stretch for at least 30 seconds for optimal benefits.</li>
                            <li>Perform stretches in a slow and controlled manner.</li>
                            <li>Focus on breathing deeply and steadily during stretches.</li>
                        </ul>
                    </div>
                    <div className="stretching-men-donts">
                        <h4 className="stretching-men-donts-title">Don'ts</h4>
                        <ul className="stretching-men-donts-list">
                            <li>Don’t bounce or use jerky movements while stretching.</li>
                            <li>Don’t stretch to the point of pain; stretch to a comfortable limit.</li>
                            <li>Don’t forget to stretch both sides of your body equally.</li>
                            <li>Don’t rush through stretches; take your time for each one.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="stretching-men-health-tips">
                <h3 className="stretching-men-subtitle">Health Tips</h3>
                <ul className="stretching-men-list">
                    <li>Stay hydrated throughout the day to keep your muscles healthy.</li>
                    <li>Incorporate stretching into your daily routine for long-term benefits.</li>
                    <li>Listen to your body and modify stretches as needed to avoid strain.</li>
                    <li>Combine stretching with other forms of exercise like strength training or cardio for a balanced fitness regimen.</li>
                </ul>
            </section>

            <section className="stretching-men-lifestyle-tips">
                <h3 className="stretching-men-subtitle">Lifestyle Tips</h3>
                <ul className="stretching-men-list">
                    <li>Maintain a balanced diet rich in nutrients to support muscle recovery and flexibility.</li>
                    <li>Get regular check-ups and consult with a healthcare provider if you have any chronic conditions or injuries.</li>
                    <li>Incorporate relaxation techniques like meditation or deep breathing to complement your stretching routine.</li>
                    <li>Stay active throughout the day by taking breaks to stretch or walk, especially if you have a sedentary job.</li>
                </ul>
            </section>

            <section className="stretching-men-video">
                <h3 className="stretching-men-subtitle">Stretching Routine Video</h3>
                <iframe 
                    className="stretching-men-video-frame"
                    src="https://www.youtube.com/embed/hNCqIgl7Pjc?si=xMPcce-33uU4Mdqx" 
                    title="Stretching Routine Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default StretchingMen;