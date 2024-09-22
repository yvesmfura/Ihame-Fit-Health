import React from 'react';
import './StretchingRoutines.css';

const StretchingMen: React.FC = () => {
    return (
        <div className="stretching-routines-men-container">
            <h2>Stretching Routines for Men</h2>
            <p>Enhance flexibility and reduce the risk of injury with these stretching routines. They are perfect for both pre-workout preparation and post-workout recovery.</p>
            
            <h3>30-Minute Stretching Routine</h3>
            <ol>
                <li><strong>5-minute Neck and Shoulder Stretch</strong>: Gently stretch the neck and shoulders to relieve tension and improve flexibility.</li>
                <li><strong>5-minute Hamstring and Calf Stretch</strong>: Focus on the legs with seated or standing hamstring stretches and calf stretches against a wall.</li>
                <li><strong>5-minute Hip Flexor and Quad Stretch</strong>: Perform lunges to stretch the hips and quads, holding each stretch for 30 seconds on each side.</li>
                <li><strong>5-minute Seated Spinal Twist</strong>: Improve spinal mobility with gentle twists, holding for 30 seconds on each side.</li>
                <li><strong>5-minute Butterfly Stretch</strong>: Open the hips by sitting on the floor and pressing the soles of your feet together, gently pushing your knees towards the ground.</li>
                <li><strong>5-minute Child's Pose</strong>: Finish with this relaxing stretch to open up the back and shoulders, calming the mind and body.</li>
            </ol>

            <h3>Do's and Don'ts</h3>
            <ul>
                <li><strong>Do:</strong> Hold each stretch for at least 30 seconds to allow your muscles to relax and lengthen.</li>
                <li><strong>Do:</strong> Breathe deeply during each stretch to help improve flexibility and reduce muscle tension.</li>
                <li><strong>Don't:</strong> Bounce or force yourself into a stretch as it may lead to injury.</li>
                <li><strong>Don't:</strong> Stretch cold muscles; always warm up with light activity before stretching.</li>
            </ul>

            <h3>Benefits of Stretching</h3>
            <ul>
                <li>Increases flexibility and range of motion, improving overall performance during workouts.</li>
                <li>Reduces muscle stiffness and soreness after intense exercises.</li>
                <li>Enhances circulation, helping to prevent injuries and promote faster recovery.</li>
                <li>Improves posture by relieving tension in muscles and joints.</li>
            </ul>

            <h3>Video Guide</h3>
            <div className="stretching-routines-men-video">
                <iframe 
                    src="https://www.youtube.com/embed/3TlJM9sOQGM?si=AhWC2oHgk-yPY6BU"
                    title="Stretching Routine for Men" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default StretchingMen;