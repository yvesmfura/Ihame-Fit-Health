import React from 'react';
import './JumpRopeWomen.css';

const JumpRopeWomen: React.FC = () => {
    return (
        <div className="jump-rope-women-container">
            <h2>Jump Rope Workouts for Women</h2>
            <p>
                Enhance your coordination and burn calories with these fun and effective jump rope routines. Perfect for a quick and energizing workout session.
            </p>

            <section className="jump-rope-women-benefits">
                <h3>Benefits of Jump Rope</h3>
                <ul>
                    <li>Improves cardiovascular health and endurance.</li>
                    <li>Boosts coordination and agility.</li>
                    <li>Burns calories quickly and effectively.</li>
                    <li>Convenient and easy to incorporate into any fitness routine.</li>
                </ul>
            </section>

            <section className="jump-rope-women-workout-plan">
                <h3>15-Minute Jump Rope Workout Plan</h3>
                <ul>
                    <li><strong>Warm-Up (2 minutes):</strong> Light jogging or slow skipping.</li>
                    <li><strong>Basic Jump (1 minute):</strong> Regular two-footed jumps at a steady pace.</li>
                    <li><strong>High Knees (1 minute):</strong> Jump with your knees lifting high.</li>
                    <li><strong>Rest (30 seconds):</strong></li>
                    <li><strong>Double Unders (1 minute):</strong> Swing the rope twice under your feet for each jump.</li>
                    <li><strong>Cross Jumps (1 minute):</strong> Cross the rope in front of you as you jump.</li>
                    <li><strong>Side-to-Side Jumps (1 minute):</strong> Jump side to side while skipping.</li>
                    <li><strong>Rest (30 seconds):</strong></li>
                    <li><strong>Repeat 2-3 times</strong></li>
                    <li><strong>Cool Down (2 minutes):</strong> Stretching, focusing on your calves, shoulders, and arms.</li>
                </ul>
            </section>

            <section className="jump-rope-women-tips">
                <h3>Tips for Effective Jump Rope Workouts</h3>
                <ul>
                    <li>Keep your elbows close to your body to better control the rope.</li>
                    <li>Focus on light, quick jumps to minimize strain on your knees.</li>
                    <li>Choose the correct rope length for your height (handles should reach your armpits).</li>
                    <li>Gradually increase the intensity and duration as you improve your skills.</li>
                </ul>
            </section>

            <section className="jump-rope-women-video">
                <h3>Guidance Video</h3>
                <p>Watch the following video for tips and demonstrations on proper jump rope techniques.</p>
                <div className="jump-rope-women-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/C8KFqDcO1sg?si=I-j--ppsPSjtJufJ"
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

export default JumpRopeWomen;