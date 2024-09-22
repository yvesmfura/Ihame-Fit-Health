import React from 'react';
import './LowerAbsMen.css';

const LowerAbsMen: React.FC = () => {
    return (
        <div className="lower-abs-men-container">
            <h2>Lower Abs Workouts for Men</h2>
            <p>Focus on the lower part of your abs with these targeted exercises, designed to strengthen and define your core for a well-rounded physique.</p>

            {/* Statistical Facts */}
            <section className="lower-abs-men-facts">
                <h3>Did You Know?</h3>
                <ul>
                    <li>Lower abs are often the most challenging area for men to define due to higher fat storage in the lower abdomen.</li>
                    <li>Strengthening your lower abs can help improve overall core stability and reduce the risk of lower back injuries.</li>
                    <li>Men with stronger lower abs have a 20% higher athletic performance in activities requiring balance and coordination.</li>
                </ul>
            </section>

            {/* Benefits of Lower Abs Workouts */}
            <section className="lower-abs-men-benefits">
                <h3>Benefits of Lower Abs Workouts</h3>
                <p>Lower abs exercises are essential for:</p>
                <ul>
                    <li>Strengthening the lower core muscles and improving posture</li>
                    <li>Enhancing overall athletic performance and reducing injury risk</li>
                    <li>Supporting balance and stability in day-to-day activities</li>
                    <li>Reducing excess fat around the abdomen with consistent training</li>
                </ul>
            </section>

            {/* Lower Abs Workout Plan */}
            <section className="lower-abs-men-workout-plan">
                <h3>Lower Abs Workout Plan</h3>
                <p>Follow this 30-minute workout routine to build your lower abs:</p>
                <ul>
                    <li><strong>Warm-up (5 minutes):</strong> Light cardio and dynamic stretches targeting the lower body.</li>
                    <li><strong>Workout Circuit (3 sets):</strong>
                        <ul>
                            <li>Leg Raises (15 reps)</li>
                            <li>Reverse Crunches (15 reps)</li>
                            <li>Flutter Kicks (30 seconds)</li>
                            <li>Mountain Climbers (30 seconds)</li>
                        </ul>
                    </li>
                    <li><strong>Cooldown (5 minutes):</strong> Stretching exercises focusing on the hip flexors and lower back.</li>
                </ul>
            </section>

            {/* Common Mistakes to Avoid */}
            <section className="lower-abs-men-mistakes">
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>Avoid using momentum during leg raises; engage your abs to lift your legs instead.</li>
                    <li>Keep your lower back pressed into the floor during crunches to prevent strain.</li>
                    <li>Don’t rush through exercises—control each movement to maximize muscle engagement.</li>
                </ul>
            </section>

            {/* Tips for Achieving Defined Lower Abs */}
            <section className="lower-abs-men-tips">
                <h3>Tips for Achieving Defined Lower Abs</h3>
                <ul>
                    <li>Incorporate cardio exercises such as running or HIIT to burn fat and reveal your abs.</li>
                    <li>Focus on a clean diet rich in protein, fiber, and healthy fats to support muscle growth and fat loss.</li>
                    <li>Stay consistent with your workout routine and gradually increase intensity for better results.</li>
                </ul>
            </section>

            {/* Guidance Video */}
            <section className="lower-abs-men-video">
                <h3>Guidance Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/P1mInEK7BEU?si=F9TCjJ6SYbTxcqkC"
                    title="Lower Abs Workouts for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default LowerAbsMen;