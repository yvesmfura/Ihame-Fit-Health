import React from 'react';
import './EverydayStrengthWomen.css';

const EverydayStrengthWomen: React.FC = () => {
    return (
        <div className="everyday-strength-women-container">
            <h2>Everyday Strength Workouts for Women</h2>
            <p>Build functional strength with these exercises, designed to improve your daily activities and overall fitness.</p>

            <h3>Importance of Functional Strength for Women</h3>
            <p>Functional strength training is crucial for women of all ages as it enhances the ability to perform everyday tasks with ease. This type of training helps in:</p>
            <ul className="everyday-strength-women-importance">
                <li><strong>Improving Posture:</strong> Functional exercises strengthen the core, improving posture and reducing back pain.</li>
                <li><strong>Enhancing Mobility:</strong> It increases joint stability and flexibility, helping with daily movements and reducing the risk of injury.</li>
                <li><strong>Boosting Metabolism:</strong> Building muscle mass through functional strength exercises can enhance metabolism and aid in weight management.</li>
                <li><strong>Supporting Bone Health:</strong> Weight-bearing exercises strengthen bones and reduce the risk of osteoporosis.</li>
                <li><strong>Increasing Overall Fitness:</strong> Functional strength training can improve endurance, balance, and coordination.</li>
            </ul>

            <h3>30-Minute Workout Plan</h3>
            <ul className="everyday-strength-women-workout">
                <li><strong>Warm-up (5 minutes):</strong> Light cardio (jumping jacks, high knees)</li>
                <li><strong>Bodyweight Squats (3 sets, 15 reps):</strong> Strengthen legs and glutes.</li>
                <li><strong>Push-ups (3 sets, 12 reps):</strong> Improve upper body strength. Modify with knee push-ups if needed.</li>
                <li><strong>Lunges (3 sets, 12 reps each leg):</strong> Enhance lower body strength and stability.</li>
                <li><strong>Plank (3 sets, 30 seconds):</strong> Build core strength and endurance.</li>
                <li><strong>Bird-Dog (3 sets, 10 reps each side):</strong> Improve balance and core stability.</li>
                <li><strong>Cool-down (5 minutes):</strong> Stretching, focusing on legs, arms, and back.</li>
            </ul>

            <h3>Do's and Don'ts</h3>
            <ul className="everyday-strength-women-dos-donts">
                <li><strong>Do:</strong> Maintain proper form to avoid injury and maximize effectiveness.</li>
                <li><strong>Do:</strong> Start with manageable weights and gradually increase as you gain strength.</li>
                <li><strong>Do:</strong> Incorporate a variety of exercises to work different muscle groups.</li>
                <li><strong>Don't:</strong> Skip the warm-up and cool-down, as they are essential for injury prevention.</li>
                <li><strong>Don't:</strong> Overexert yourself; listen to your body and rest as needed.</li>
                <li><strong>Don't:</strong> Neglect hydration and nutrition; they are crucial for muscle recovery and performance.</li>
            </ul>

            <h3>Health and Lifestyle Tips</h3>
            <ul className="everyday-strength-women-health-tips">
                <li>Stay hydrated throughout your workout and daily routine to keep muscles functioning optimally.</li>
                <li>Incorporate a balanced diet rich in protein, healthy fats, and complex carbohydrates to support strength building.</li>
                <li>Get adequate sleep to facilitate muscle recovery and overall health.</li>
                <li>Consistency is key; aim for strength training exercises 2-3 times per week for optimal results.</li>
                <li>Consider incorporating stress management techniques like meditation or yoga to complement your physical training.</li>
            </ul>

            <h3>Statistical Facts</h3>
            <ul className="everyday-strength-women-stats">
                <li><strong>Strength Training Benefits:</strong> According to the American Heart Association, strength training can improve cardiovascular health, decrease body fat, and increase muscle mass.</li>
                <li><strong>Bone Health:</strong> The National Osteoporosis Foundation reports that weight-bearing exercises help maintain bone density and reduce the risk of osteoporosis.</li>
                <li><strong>Functional Strength:</strong> Studies show that functional strength training can significantly improve balance and coordination, reducing the risk of falls in older adults.</li>
                <li><strong>Metabolism Boost:</strong> The Mayo Clinic highlights that muscle mass contributes to a higher resting metabolic rate, aiding in weight management.</li>
            </ul>

            <section className="everyday-strength-women-video">
                <h3>Guidance Video</h3>
                <p>Watch this video to get a visual guide on how to perform agility drills effectively.</p>
                <div className="agrility-drills-women-video-frame">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/SAMPLE_VIDEO" 
                        title="Agility Drills for Women" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default EverydayStrengthWomen;