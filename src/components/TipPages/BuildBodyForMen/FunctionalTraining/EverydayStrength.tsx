import React from 'react';
import './EverydayStrength.css';

const EverydayStrengthMen: React.FC = () => {
    return (
        <div className="everyday-strength-men-container">
            <h2>Everyday Strength Workouts for Men</h2>
            <p>Develop functional strength that helps with everyday tasks like lifting, carrying, and pushing. These exercises improve overall fitness, making daily activities easier and reducing the risk of injury.</p>

            <h3>Importance of Functional Strength</h3>
            <p>Functional strength exercises are designed to engage multiple muscle groups and mirror common daily movements. This kind of training is crucial for men of all ages as it enhances overall mobility, posture, and balance.</p>

            <h3>Workout Plan</h3>
            <ul>
                <li><strong>Deadlifts:</strong> Strengthen the lower back, glutes, and hamstrings to help with lifting heavy objects off the ground.</li>
                <li><strong>Squats:</strong> Build leg strength and stability, essential for bending and lifting.</li>
                <li><strong>Push-Ups:</strong> Improve upper body strength for pushing movements, targeting chest, shoulders, and triceps.</li>
                <li><strong>Lunges:</strong> Enhance balance and leg strength, which helps with walking, running, and climbing stairs.</li>
                <li><strong>Farmers Walk:</strong> Train grip strength and core stability, simulating the action of carrying heavy items.</li>
                <li><strong>Planks:</strong> Strengthen the core, which is key for stabilizing the body in most daily activities.</li>
            </ul>

            <h3>Tips for Everyday Strength Training</h3>
            <ul>
                <li><strong>Consistency is Key:</strong> Incorporate these exercises into your routine 2-3 times a week for optimal results.</li>
                <li><strong>Use Proper Form:</strong> Always prioritize good form over heavy weights to prevent injury.</li>
                <li><strong>Increase Weight Gradually:</strong> As your strength improves, gradually increase the weights to keep progressing.</li>
                <li><strong>Warm-up and Cool-down:</strong> Perform a 5-minute warm-up before and stretching after each workout to prevent injury.</li>
                <li><strong>Rest and Recovery:</strong> Ensure you take enough time to rest between workouts to allow muscles to recover.</li>
            </ul>

            <h3>Video Guide</h3>
            <div className="everyday-strength-men-video">
                <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="Everyday Strength Workouts for Men" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default EverydayStrengthMen;