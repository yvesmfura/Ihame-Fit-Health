import React from 'react';
import './CardioCircuitsMen.css';

const CardioCircuitsMen: React.FC = () => {
    return (
        <div className="cardio-circuits-men-container">
            <h2>Cardio Circuits for Men: Age-Specific Benefits and Tips</h2>

            <section className="cardio-circuits-men-intro-section">
                <p>Cardio is essential for men of all ages. Whether you're in your 20s, 40s, or 60s, maintaining cardiovascular health helps reduce the risk of heart disease, diabetes, and other chronic conditions. This guide outlines the benefits of cardio across different age groups, provides a 30-minute workout plan, and offers tips on nutrition, health, and lifestyle.</p>
            </section>

            <section className="cardio-circuits-men-age-groups">
                <h3>Cardio for Different Age Groups</h3>
                <ul>
                    <li><strong>Men in their 20s & 30s:</strong> At this stage, cardiovascular fitness helps build endurance and maintain a healthy metabolism. Research shows that regular cardio can reduce heart disease risk by up to 30%.</li>
                    <li><strong>Men in their 40s & 50s:</strong> Cardio supports heart health and lowers blood pressure. By maintaining regular activity, men can reduce the risk of developing hypertension and cholesterol issues by 20%.</li>
                    <li><strong>Men 60+:</strong> Cardio helps maintain mobility and reduces the risk of age-related cognitive decline. Studies suggest that consistent cardio workouts can decrease the likelihood of memory issues by 25%.</li>
                </ul>
            </section>

            <section className="cardio-circuits-men-workout-plan">
                <h3>30-Minute Cardio Circuit Workout Plan</h3>
                <ul>
                    <li><strong>Warm-Up (5 minutes):</strong> Jog in place or jump rope to get your heart rate up.</li>
                    <li><strong>High Knees (1 minute):</strong> Lift your knees to hip level, alternating quickly.</li>
                    <li><strong>Jump Squats (1 minute):</strong> Perform squats, jumping explosively on the upward movement.</li>
                    <li><strong>Mountain Climbers (1 minute):</strong> Alternate bringing your knees to your chest in a plank position.</li>
                    <li><strong>Rest (30 seconds)</strong></li>
                    <li><strong>Burpees (1 minute):</strong> Drop into a squat, then push into a plank, perform a push-up, and jump back up.</li>
                    <li><strong>Side Lunges (1 minute):</strong> Step out wide, shifting your weight onto one leg, alternating sides.</li>
                    <li><strong>Jumping Jacks (1 minute):</strong> Classic jumping jacks to keep your heart rate elevated.</li>
                    <li><strong>Plank (1 minute):</strong> Hold the plank position to strengthen your core.</li>
                    <li><strong>Cool Down (5 minutes):</strong> Stretch your legs, arms, and core, focusing on deep breathing.</li>
                </ul>
            </section>

            <section className="cardio-circuits-men-dos-donts">
                <h3>Do's and Don'ts</h3>
                <div className="cardio-circuits-men-dos">
                    <h4>Do's:</h4>
                    <ul>
                        <li>Warm up before starting your cardio routine.</li>
                        <li>Stay hydrated throughout your workout.</li>
                        <li>Incorporate different types of cardio for variety (e.g., running, swimming, cycling).</li>
                        <li>Monitor your heart rate for optimal performance.</li>
                    </ul>
                </div>
                <div className="cardio-circuits-men-donts">
                    <h4>Don'ts:</h4>
                    <ul>
                        <li>Skip rest days; recovery is crucial for muscle repair.</li>
                        <li>Overexert yourself if you're a beginner; build up your stamina gradually.</li>
                        <li>Neglect nutrition; ensure you’re consuming enough protein and carbs for energy.</li>
                    </ul>
                </div>
            </section>

            <section className="cardio-circuits-men-food-tips">
                <h3>Food Tips for Cardiovascular Health</h3>
                <ul>
                    <li>Include lean proteins (e.g., chicken, fish, beans) to repair and build muscle.</li>
                    <li>Incorporate healthy fats (e.g., avocados, nuts, olive oil) to support heart health.</li>
                    <li>Eat fiber-rich foods (e.g., oats, whole grains, vegetables) to improve digestion and lower cholesterol.</li>
                    <li>Stay hydrated by drinking plenty of water, especially during and after workouts.</li>
                </ul>
            </section>

            <section className="cardio-circuits-men-health-lifestyle-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Get at least 7-8 hours of sleep per night to support recovery and mental clarity.</li>
                    <li>Manage stress through meditation, deep breathing, or relaxing hobbies.</li>
                    <li>Avoid smoking and limit alcohol consumption to reduce cardiovascular risks.</li>
                    <li>Get regular check-ups to monitor your heart health, cholesterol, and blood pressure.</li>
                </ul>
            </section>

            <section className="cardio-circuits-men-guidance-video">
                <h3>Guidance Video</h3>
                <p>Watch the video below for a visual guide to these cardio circuits and tips on performing each exercise safely and effectively.</p>
                <div className="cardio-circuits-men-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/onY-vv46tpU?si=dzmtD_mGHi__couq"
                        title="Cardio Workout Guide"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default CardioCircuitsMen;
