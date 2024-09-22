import React from 'react';
import './BasketballTraining.css';

const BasketballTrainingMen: React.FC = () => {
    return (
        <div className="basketball-training-men-container">
            <h2>Basketball Training Workouts for Men</h2>
            <p>
                Enhance your basketball game with these drills, focused on improving speed, agility, and shooting accuracy. Regular training can help you become a more dynamic player and excel on the court.
            </p>

            {/* Importance of Basketball Training */}
            <section className="basketball-training-men-importance-section">
                <h3>Importance of Basketball Training</h3>
                <p>
                    Basketball training is crucial for developing essential skills such as dribbling, shooting, and defensive maneuvers. It also improves physical conditioning, including endurance, strength, and agility, which are vital for peak performance during games.
                </p>
            </section>

            {/* Fitness for Basketball Players */}
            <section className="basketball-training-men-fitness-section">
                <h3>Fitness for Basketball Players</h3>
                <p>
                    A well-rounded fitness regimen for basketball players includes a mix of cardiovascular conditioning, strength training, and flexibility exercises. Key areas to focus on include:
                </p>
                <ul>
                    <li><strong>Cardiovascular Endurance:</strong> Essential for maintaining high energy levels throughout the game. Include activities like running, cycling, and interval training.</li>
                    <li><strong>Strength Training:</strong> Focus on building strength in the legs, core, and upper body. Exercises like squats, lunges, and bench presses are beneficial.</li>
                    <li><strong>Agility and Speed:</strong> Drills that improve quickness and lateral movement, such as cone drills and agility ladders, are crucial for better court performance.</li>
                    <li><strong>Flexibility:</strong> Incorporate stretching and mobility work to enhance range of motion and reduce the risk of injuries.</li>
                </ul>
            </section>

            {/* 30-Minute Basketball Training Plan */}
            <section className="basketball-training-men-plan-section">
                <h3>30-Minute Basketball Training Plan</h3>
                <ul className="basketball-training-men-plan-list">
                    <li><strong>Warm-Up (5 minutes):</strong> Jogging, dynamic stretches, and basketball-specific movements.</li>
                    <li><strong>Dribbling Drills (5 minutes):</strong> Practice dribbling with both hands, using cone drills for agility.</li>
                    <li><strong>Shooting Drills (10 minutes):</strong> Work on shooting from different spots, including free throws, mid-range shots, and three-pointers.</li>
                    <li><strong>Agility Drills (5 minutes):</strong> Ladder drills, quick feet exercises, and lateral shuffles.</li>
                    <li><strong>Defensive Drills (5 minutes):</strong> Practice defensive stances, sliding, and blocking techniques.</li>
                </ul>
            </section>

            <h3>Do's and Don'ts</h3>

            {/* Do's and Don'ts */}
            <section className="basketball-training-men-dos-donts-section">
                
                <div className="basketball-training-men-dos-donts-grid">
                    <div className="basketball-training-men-dos">
                        <h4>Do's</h4>
                        <ul>
                            <li>Practice regularly to build muscle memory and improve skills.</li>
                            <li>Focus on proper form to prevent injuries and maximize effectiveness.</li>
                            <li>Include a mix of drills to cover all aspects of your game.</li>
                            <li>Stay hydrated and maintain a balanced diet to support your training.</li>
                        </ul>
                    </div>
                    <div className="basketball-training-men-donts">
                        <h4>Don'ts</h4>
                        <ul>
                            <li>Don’t skip warm-ups or cool-downs to avoid injuries.</li>
                            <li>Don’t overexert yourself; listen to your body and rest when needed.</li>
                            <li>Avoid practicing the same drills excessively without incorporating variety.</li>
                            <li>Don’t neglect other aspects of fitness like strength and conditioning.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Health and Lifestyle Tips */}
            <section className="basketball-training-men-health-lifestyle-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Get plenty of sleep to aid recovery and improve performance. Aim for 7-9 hours per night.</li>
                    <li>Maintain a balanced diet rich in protein, healthy fats, and complex carbohydrates to fuel your workouts and recovery.</li>
                    <li>Incorporate cross-training activities to enhance overall fitness and prevent burnout. Activities like swimming or yoga can complement basketball training.</li>
                    <li>Regularly stretch to maintain flexibility and reduce the risk of injuries. Incorporate dynamic stretches before workouts and static stretches after.</li>
                    <li>Keep a training journal to track your progress and set new goals. Regular reflection can help you stay motivated and adjust your training plan as needed.</li>
                    <li>Engage in mental training techniques, such as visualization and relaxation exercises, to boost focus and confidence on the court.</li>
                </ul>
            </section>

            {/* Video Section */}
            <section className="basketball-training-men-video-section">
                <h3>Basketball Training Techniques Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ZFkdXiM57Vg?si=lge3BXwnjDnx4dNJ"
                    title="Basketball Training Techniques for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default BasketballTrainingMen;