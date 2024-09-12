import React from 'react';
import './HIIT.css';

const HIITMen: React.FC = () => {
    return (
        <div className="cardio-hiit-men-container">
            <h2>HIIT Workouts for Men</h2>
            <p>
                High-Intensity Interval Training (HIIT) is an efficient way to burn fat, build muscle, and improve cardiovascular health. It's designed to push your limits in a short period of time, offering great results.
            </p>

            <section className="cardio-hiit-men-benefits">
                <h3>Why HIIT?</h3>
                <ul>
                    <li>Burns calories in a short time.</li>
                    <li>Boosts metabolism for hours after exercise.</li>
                    <li>Improves heart health and endurance.</li>
                    <li>Can be done anywhere, with minimal equipment.</li>
                </ul>
            </section>

            <section className="cardio-hiit-men-workout-plan">
                <h3>30-Minute HIIT Workout Plan</h3>
                <ul>
                    <li><strong>Warm-Up (5 minutes):</strong> Light jogging or jumping jacks to prepare your body.</li>
                    <li><strong>High Knees (1 minute):</strong> Alternate lifting your knees to your chest quickly.</li>
                    <li><strong>Burpees (1 minute):</strong> Drop into a squat, push into a plank, perform a push-up, and jump up.</li>
                    <li><strong>Mountain Climbers (1 minute):</strong> Rapidly alternate bringing knees to chest in plank position.</li>
                    <li><strong>Rest (30 seconds)</strong></li>
                    <li><strong>Jump Squats (1 minute):</strong> Perform squats and jump explosively on the upward movement.</li>
                    <li><strong>Plank (1 minute):</strong> Hold the plank position to strengthen your core.</li>
                    <li><strong>Side Lunges (1 minute):</strong> Step wide and lunge, alternating sides.</li>
                    <li><strong>Rest (30 seconds)</strong></li>
                    <li><strong>Repeat 2-3 times</strong></li>
                    <li><strong>Cool Down (5 minutes):</strong> Stretch your muscles, focusing on deep breathing and flexibility.</li>
                </ul>
            </section>

            <section className="cardio-hiit-men-dos-donts">
                <h3>Do's and Don'ts</h3>
                <div className="cardio-hiit-men-dos">
                    <h4>Do's:</h4>
                    <ul>
                        <li>Warm-up properly before starting HIIT.</li>
                        <li>Use proper form to avoid injuries.</li>
                        <li>Stay hydrated before, during, and after the workout.</li>
                        <li>Give your body time to recover with rest days.</li>
                    </ul>
                </div>
                <div className="cardio-hiit-men-donts">
                    <h4>Don'ts:</h4>
                    <ul>
                        <li>Skip rest periods; they are crucial for the workout's effectiveness.</li>
                        <li>Overexert yourself if you're a beginner.</li>
                        <li>Neglect cooling down after the workout.</li>
                    </ul>
                </div>
            </section>

            <section className="cardio-hiit-men-video">
                <h3>Guidance Video</h3>
                <p>Watch this video for detailed instructions on performing each exercise correctly.</p>
                <div className="cardio-hiit-men-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id"
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

export default HIITMen;