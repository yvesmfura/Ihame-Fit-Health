import React from 'react';
import './JumpRope.css';

const JumpRopeMen: React.FC = () => {
    return (
        <div className="jump-rope-men-container">
            <h2>Jump Rope Workouts for Men</h2>
            <p>
                Jump rope workouts are a fantastic way to improve cardiovascular fitness, burn calories, and enhance coordination. With just a rope, you can achieve a full-body workout.
            </p>

            <section className="jump-rope-men-benefits">
                <h3>Why Jump Rope?</h3>
                <ul>
                    <li>Improves agility, balance, and coordination.</li>
                    <li>Burns a high amount of calories in a short time.</li>
                    <li>Boosts cardiovascular endurance.</li>
                    <li>Easy to do anywhere, with minimal equipment.</li>
                </ul>
            </section>

            <section className="jump-rope-men-workout-plan">
                <h3>15-Minute Jump Rope Workout Plan</h3>
                <ul>
                    <li><strong>Warm-Up (2 minutes):</strong> Slow skipping to get the body ready.</li>
                    <li><strong>Basic Jump (1 minute):</strong> Regular two-footed jumps at a steady pace.</li>
                    <li><strong>High Knees (1 minute):</strong> Jump with your knees lifting high.</li>
                    <li><strong>Rest (30 seconds):</strong></li>
                    <li><strong>Double Unders (1 minute):</strong> Swing the rope twice under your feet for every jump.</li>
                    <li><strong>Cross Jumps (1 minute):</strong> Cross the rope in front of you as you jump.</li>
                    <li><strong>Side-to-Side Jumps (1 minute):</strong> Jump side to side while skipping.</li>
                    <li><strong>Rest (30 seconds):</strong></li>
                    <li><strong>Repeat 2-3 times</strong></li>
                    <li><strong>Cool Down (2 minutes):</strong> Stretching, focusing on your calves, shoulders, and arms.</li>
                </ul>
            </section>

            <section className="jump-rope-men-tips">
                <h3>Tips for Effective Jump Rope Workouts</h3>
                <ul>
                    <li>Keep your elbows close to your body for better control of the rope.</li>
                    <li>Focus on light, quick jumps to reduce strain on your knees.</li>
                    <li>Choose the right rope length for your height (handles should reach your armpits).</li>
                    <li>Gradually increase intensity as your coordination improves.</li>
                </ul>
            </section>

            <section className="jump-rope-men-age-benefits">
                <h3>Importance of Jump Rope Across Different Age Categories</h3>
                <p>Jump rope exercises offer valuable benefits across all age groups. Here’s how they can positively impact various stages of life:</p>
                <ul>
                    <li><strong>Children (Ages 6-12):</strong> Enhances coordination, balance, and cardiovascular health while being a fun and engaging activity.</li>
                    <li><strong>Teenagers (Ages 13-19):</strong> Improves athletic performance, helps with weight management, and serves as a stress-relief tool during high school and early adulthood.</li>
                    <li><strong>Young Adults (Ages 20-35):</strong> Provides a time-efficient full-body workout, builds muscle, and supports long-term cardiovascular health.</li>
                    <li><strong>Middle-Aged Adults (Ages 36-55):</strong> Assists with weight management, maintains bone density, and promotes heart health, which becomes increasingly important with age.</li>
                    <li><strong>Seniors (Ages 56 and Above):</strong> Improves balance and stability, supports bone health with low-impact variations, and helps maintain cognitive function.</li>
                </ul>
            </section>

            <section className="jump-rope-men-video">
                <h3>Guidance Video</h3>
                <p>Watch the following video for tips and demonstrations on proper jump rope techniques.</p>
                <div className="jump-rope-men-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id"
                        title="Jump Rope Workout Guide"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default JumpRopeMen;
