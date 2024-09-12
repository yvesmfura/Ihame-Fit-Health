import React from 'react';
import './DynamicWarmUps.css';

const DynamicWarmUpsMen: React.FC = () => {
    return (
        <div className="dynamic-warm-ups-men-container">
            <h2>Dynamic Warm-Ups for Men</h2>
            <p>
                Dynamic warm-ups are essential for flexibility and mobility, helping to prevent injuries, improve performance, and enhance range of motion. These warm-ups are especially important for men of all ages, as they improve joint health, coordination, and functional fitness.
            </p>

            <h3>Importance of Dynamic Warm-Ups</h3>
            <p>
                - Improves flexibility and mobility, allowing for better movement during exercises.
                <br />
                - Reduces injury risk by properly preparing muscles and joints.
                <br />
                - Enhances blood flow, improving overall workout performance.
                <br />
                - Crucial for men of different age categories:
                <ul>
                    <li><strong>Young Adults (18-35):</strong> Helps boost athletic performance and maintain flexibility.</li>
                    <li><strong>Middle-Aged (36-55):</strong> Supports mobility and prevents stiffness.</li>
                    <li><strong>Seniors (56+):</strong> Improves balance, coordination, and joint health.</li>
                </ul>
            </p>

            <h3>30-Minute Dynamic Warm-Up Plan</h3>
            <p>Follow this 30-minute routine to warm up your body and prepare for a workout session.</p>
            <ol>
                <li><strong>Arm Circles:</strong> 2 minutes (1 minute forward, 1 minute backward)</li>
                <li><strong>Leg Swings:</strong> 2 minutes (Front to back and side to side)</li>
                <li><strong>Walking Lunges:</strong> 3 minutes</li>
                <li><strong>High Knees:</strong> 3 minutes</li>
                <li><strong>Hip Rotations:</strong> 2 minutes</li>
                <li><strong>Butt Kicks:</strong> 3 minutes</li>
                <li><strong>Inchworms:</strong> 4 minutes</li>
                <li><strong>Spiderman Stretch:</strong> 3 minutes</li>
                <li><strong>Dynamic Squats:</strong> 3 minutes</li>
                <li><strong>Side Lunges:</strong> 2 minutes</li>
                <li><strong>Jumping Jacks:</strong> 3 minutes</li>
            </ol>

            <h3>Do's and Don'ts</h3>
            <ul>
                <li><strong>Do:</strong> Start slow and progressively increase intensity.</li>
                <li><strong>Do:</strong> Focus on full range of motion and controlled movements.</li>
                <li><strong>Do:</strong> Make sure your body feels warm before proceeding to intense exercises.</li>
                <li><strong>Don't:</strong> Skip dynamic stretches, especially before heavy lifts or intense cardio.</li>
                <li><strong>Don't:</strong> Push yourself into painful positions. The goal is to prepare the body, not overstretch it.</li>
                <li><strong>Don't:</strong> Rush through the warm-up. Give your body the time it needs to activate.</li>
            </ul>

            <h3>Statistical Facts</h3>
            <p>
                - Research shows that dynamic warm-ups reduce the risk of injury by 30% compared to static stretching.
                <br />
                - Athletes who perform dynamic warm-ups see a 5-10% increase in performance during training sessions.
                <br />
                - Older adults who practice dynamic stretching regularly improve their mobility by 20-30%, reducing the risk of falls.
            </p>

            <h3>Video Guidance</h3>
            <iframe 
                className="dynamic-warm-ups-men-video"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/some-video-id" 
                title="Dynamic Warm-Up for Flexibility and Mobility" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default DynamicWarmUpsMen;