import React from 'react';
import './AgilityDrills.css';

const AgilityDrillsMen: React.FC = () => {
    return (
        <div className="agility-drills-men-container">
            <h2>Agility Drills for Men</h2>
            <p>Enhance your speed and agility with these targeted drills. Improving your agility can significantly boost your overall athletic performance and functional capabilities in daily activities.</p>

            <h3>Importance of Agility</h3>
            <p>Agility is crucial for improving quickness, balance, and coordination, which translates to better performance in sports and daily activities. For men, agility training can help in activities like running, jumping, and changing direction quickly, thereby reducing the risk of injury and enhancing functional strength.</p>

            <h3>30-Minute Workout Plan</h3>
            <ul>
                <li><strong>Warm-Up (5 minutes):</strong> Start with light jogging and dynamic stretches to prepare your muscles and joints.</li>
                <li><strong>Agility Ladder Drills (10 minutes):</strong> Perform various ladder drills such as high knees, lateral shuffles, and in-and-outs to improve footwork and coordination.</li>
                <li><strong>Cone Drills (10 minutes):</strong> Set up cones in a zigzag pattern and practice quick direction changes, focusing on speed and control.</li>
                <li><strong>Cool Down (5 minutes):</strong> Finish with static stretching to help muscles recover and improve flexibility.</li>
            </ul>

            <h3>Do's and Don'ts</h3>
            <ul>
                <li><strong>Do:</strong> Maintain proper form to maximize the effectiveness of each drill and reduce the risk of injury.</li>
                <li><strong>Do:</strong> Start with slower speeds and gradually increase intensity as you improve.</li>
                <li><strong>Do:</strong> Incorporate agility drills into your routine 2-3 times a week for best results.</li>
                <li><strong>Don't:</strong> Skip the warm-up and cool-down, as they are essential for injury prevention and muscle recovery.</li>
                <li><strong>Don't:</strong> Overexert yourself; listen to your body and avoid pushing through pain.</li>
                <li><strong>Don't:</strong> Perform drills on uneven surfaces or without proper footwear, as this increases the risk of injury.</li>
            </ul>

            <h3>Health and Lifestyle Tips</h3>
            <ul>
                <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to keep your muscles hydrated and functioning optimally.</li>
                <li><strong>Get Adequate Sleep:</strong> Aim for 7-9 hours of quality sleep each night to support recovery and overall performance.</li>
                <li><strong>Maintain a Balanced Diet:</strong> Consume a diet rich in protein, healthy fats, and complex carbohydrates to fuel your workouts and aid in muscle recovery.</li>
                <li><strong>Manage Stress:</strong> Incorporate stress-reducing activities such as meditation or yoga to maintain overall well-being and enhance focus during drills.</li>
                <li><strong>Regular Exercise:</strong> Complement agility drills with other forms of exercise, including strength training and cardiovascular workouts, for a well-rounded fitness regimen.</li>
            </ul>

            <h3>Video Guide</h3>
            <div className="agility-drills-men-video">
                <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="Agility Drills for Men" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default AgilityDrillsMen;