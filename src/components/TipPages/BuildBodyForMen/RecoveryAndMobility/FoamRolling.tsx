import React from 'react';
import './FoamRolling.css';

const FoamRollingMen: React.FC = () => {
    return (
        <div className="foam-rolling-men-container">
            <h2>Foam Rolling for Men</h2>
            <p>
                Improve muscle recovery and flexibility with foam rolling. This technique is essential for releasing muscle tightness, reducing soreness, and enhancing overall mobility after workouts.
            </p>

            <section className="foam-rolling-men-importance-section">
                <h3>Importance of Foam Rolling</h3>
                <p>
                    Foam rolling helps to release muscle tightness, improve blood flow, and increase range of motion. Regular foam rolling can reduce muscle soreness, prevent injuries, and speed up recovery time. It's a crucial practice for maintaining flexibility and ensuring effective muscle recovery.
                </p>
            </section>

            <section className="foam-rolling-men-plan-section">
                <h3>30-Minute Foam Rolling Plan</h3>
                <ul className="foam-rolling-men-plan-list">
                    <li><strong>Warm-Up (5 minutes):</strong> Light cardio such as jogging or jumping jacks to increase blood flow.</li>
                    <li><strong>Calves (5 minutes):</strong> Roll each calf for 2.5 minutes, focusing on any tight spots.</li>
                    <li><strong>Quadriceps (5 minutes):</strong> Roll each thigh for 2.5 minutes, pausing on any sore areas.</li>
                    <li><strong>Hamstrings (5 minutes):</strong> Roll each hamstring for 2.5 minutes, ensuring full coverage.</li>
                    <li><strong>Glutes (5 minutes):</strong> Sit on the foam roller and roll each side for 2.5 minutes.</li>
                    <li><strong>Upper Back (5 minutes):</strong> Lie on the foam roller and roll from mid-back to shoulders, focusing on tight spots.</li>
                    <li><strong>Cool-Down (5 minutes):</strong> Gentle stretching and deep breathing to relax muscles.</li>
                </ul>
            </section>

            <section className="foam-rolling-men-dos-donts-section">
                <h3>Do's and Don'ts</h3>
                <div className="foam-rolling-men-dos-donts-grid">
                    <div className="foam-rolling-men-dos">
                        <h4>Do's</h4>
                        <ul>
                            <li>Roll slowly over muscles, pausing on tender spots for a few seconds.</li>
                            <li>Use your body weight to apply pressure, but avoid excessive force.</li>
                            <li>Maintain a steady, controlled motion during the rolling process.</li>
                            <li>Incorporate foam rolling into your routine 3-4 times a week for best results.</li>
                        </ul>
                    </div>
                    <div className="foam-rolling-men-donts">
                        <h4>Don'ts</h4>
                        <ul>
                            <li>Don’t roll over joints or bones; focus on muscle groups.</li>
                            <li>Don’t use a foam roller on injured or inflamed areas.</li>
                            <li>Avoid rolling too quickly or using too much pressure.</li>
                            <li>Don’t skip foam rolling after intense workouts to prevent tightness.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Health and Lifestyle Tips */}
            <section className="foam-rolling-men-health-lifestyle-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Stay hydrated to help flush out toxins and support muscle recovery.</li>
                    <li>Include a balanced diet rich in protein and healthy fats to support muscle repair.</li>
                    <li>Ensure adequate sleep to enhance recovery and overall health.</li>
                    <li>Combine foam rolling with stretching and strength training for comprehensive muscle care.</li>
                    <li>Listen to your body and adjust rolling techniques based on individual needs.</li>
                </ul>
            </section>

            {/* Video Section */}
            <section className="foam-rolling-men-video-section">
                <h3>Foam Rolling Techniques Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sampleVideoID"
                    title="Foam Rolling Techniques for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default FoamRollingMen;