import React from 'react';
import './SwimmingTraining.css';

const SwimmingTrainingMen: React.FC = () => {
    return (
        <div className="swimming-training-container">
            <h2>Swimming Training Workouts for Men</h2>
            <p>Build endurance and improve your swimming technique with these workouts, designed to enhance overall aquatic fitness.</p>

            <section className="swimming-training-routines-section">
                <h3>Swimming Routines</h3>
                <ul className="swimming-training-routines-list">
                    <li><strong>Warm-Up (10 minutes):</strong> Light swimming, focusing on smooth strokes to get the body ready.</li>
                    <li><strong>Endurance Set (20 minutes):</strong> Swim continuous laps at a moderate pace, focusing on maintaining technique.</li>
                    <li><strong>Speed Work (15 minutes):</strong> Alternate between fast sprints and moderate-paced laps to build speed and stamina.</li>
                    <li><strong>Drills (15 minutes):</strong> Perform specific drills to improve stroke technique and efficiency.</li>
                    <li><strong>Cool-Down (10 minutes):</strong> Gentle swimming and stretching to relax muscles and reduce stiffness.</li>
                </ul>
            </section>

            <section className="swimming-training-plan-section">
                <h3>Weekly Training Plan</h3>
                <ul className="swimming-training-plan-list">
                    <li><strong>Monday:</strong> Technique-focused session with drills and moderate endurance work.</li>
                    <li><strong>Wednesday:</strong> Interval training with a mix of sprints and recovery laps.</li>
                    <li><strong>Friday:</strong> Long-distance swim to build endurance and stamina.</li>
                    <li><strong>Saturday:</strong> Flexibility and strength training with a focus on core and swimming-specific exercises.</li>
                </ul>
            </section>

            <section className="swimming-training-tips-section">
                <h3>Training Tips</h3>
                <ul className="swimming-training-tips-list">
                    <li>Maintain proper hydration to support optimal performance and recovery.</li>
                    <li>Focus on technique to improve efficiency and reduce the risk of injury.</li>
                    <li>Incorporate breathing exercises to enhance lung capacity and swimming endurance.</li>
                    <li>Use swimming aids like kickboards and pull buoys to isolate and improve specific aspects of your stroke.</li>
                </ul>
            </section>

            <section className="swimming-training-video-section">
                <h3>Swimming Technique Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sampleVideoID"
                    title="Swimming Technique for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default SwimmingTrainingMen;