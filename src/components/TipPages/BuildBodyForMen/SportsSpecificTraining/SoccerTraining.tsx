import React from 'react';
import './SoccerTraining.css';

const SoccerTrainingMen: React.FC = () => {
    return (
        <div className="soccer-training-men-container">
            <h2>Soccer Training Workouts for Men</h2>
            <p>
                Improve your soccer skills with these drills and exercises, designed to enhance speed, agility, and ball control. Soccer training not only boosts your physical fitness but also sharpens your game strategy and teamwork.
            </p>

            <section className="soccer-training-men-importance-section">
                <h3>Importance of Soccer Training</h3>
                <p>
                    Soccer training is crucial for improving overall performance on the field. It helps in building endurance, strength, and agility. Regular training enhances ball control, passing accuracy, and tactical awareness, which are essential for excelling in matches. It also aids in injury prevention and promotes better physical fitness.
                </p>
            </section>

            <section className="soccer-training-men-plan-section">
                <h3>30-Minute Soccer Training Plan</h3>
                <ul className="soccer-training-men-plan-list">
                    <li><strong>Warm-Up (5 minutes):</strong> Light jogging and dynamic stretches to prepare muscles.</li>
                    <li><strong>Dribbling Drills (5 minutes):</strong> Practice dribbling through cones to improve control and speed.</li>
                    <li><strong>Passing Drills (5 minutes):</strong> Work on short and long passes with a partner or against a wall.</li>
                    <li><strong>Shooting Drills (5 minutes):</strong> Practice shooting accuracy and power with various targets.</li>
                    <li><strong>Agility Drills (5 minutes):</strong> Perform ladder drills or shuttle runs to enhance quickness.</li>
                    <li><strong>Defensive Drills (5 minutes):</strong> Work on tackling and positioning with a focus on defending effectively.</li>
                    <li><strong>Cool-Down (5 minutes):</strong> Gentle stretching and deep breathing to relax muscles and reduce soreness.</li>
                </ul>
            </section>

            <h3>Do's and Don'ts</h3>

            <section className="soccer-training-men-dos-donts-section">
                <div className="soccer-training-men-dos-donts-grid">
                    <div className="soccer-training-men-dos">
                        <h4>Do's</h4>
                        <ul>
                            <li>Focus on proper technique to avoid injuries and improve performance.</li>
                            <li>Stay hydrated and maintain good nutrition to support your training.</li>
                            <li>Incorporate strength and flexibility exercises to enhance overall fitness.</li>
                            <li>Warm up and cool down properly to prevent muscle strain and injury.</li>
                        </ul>
                    </div>
                    <div className="soccer-training-men-donts">
                        <h4>Don'ts</h4>
                        <ul>
                            <li>Don’t skip the warm-up or cool-down phases of your training.</li>
                            <li>Avoid overtraining and listen to your body to prevent burnout.</li>
                            <li>Don’t neglect technical skills; balance drills with skill-based practice.</li>
                            <li>Don’t train through pain; address any discomfort with rest and proper care.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="soccer-training-men-health-lifestyle-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Ensure adequate sleep for muscle recovery and optimal performance.</li>
                    <li>Follow a balanced diet rich in protein, carbohydrates, and healthy fats.</li>
                    <li>Stay hydrated before, during, and after training sessions.</li>
                    <li>Incorporate cross-training activities to improve overall fitness and prevent injuries.</li>
                    <li>Regularly assess your performance and adjust training to address weaknesses.</li>
                </ul>
            </section>

            <section className="soccer-training-men-video-section">
                <h3>Soccer Training Techniques Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sampleVideoID"
                    title="Soccer Training Techniques for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default SoccerTrainingMen;