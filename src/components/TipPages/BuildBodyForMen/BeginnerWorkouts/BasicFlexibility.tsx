import React from 'react';
import './BasicFlexibility.css';

const BasicFlexibilityMen: React.FC = () => {
    return (
        <div className="basic-flexibility-men-container">
            <h2 className="basic-flexibility-men-title">Basic Flexibility Exercises for Men</h2>
            <p className="basic-flexibility-men-description">
                Flexibility exercises are crucial for maintaining joint health, preventing injuries, and improving overall athletic performance. For men, who may often focus on strength and endurance training, flexibility can enhance range of motion, reduce soreness, and improve posture.
            </p>

            <h3 className="basic-flexibility-men-subtitle">Why Flexibility is Important for Men</h3>
            <p className="basic-flexibility-men-description">
                Flexibility is often overlooked but is a key aspect of fitness for men at all ages. Incorporating flexibility exercises into a routine can help men maintain mobility, reduce the risk of injury, and improve overall health.
            </p>

            <h4 className="basic-flexibility-men-sub-subtitle">Flexibility for Men Aged 20-30</h4>
            <p className="basic-flexibility-men-description">
                At this age, men tend to focus on strength training and high-intensity workouts. However, flexibility helps to reduce stiffness and improve recovery. Statistics show that nearly 40% of sports injuries in young men are related to poor flexibility.
            </p>

            <h4 className="basic-flexibility-men-sub-subtitle">Flexibility for Men Aged 30-50</h4>
            <p className="basic-flexibility-men-description">
                As men enter their 30s and 40s, maintaining flexibility becomes more important for preventing back pain and joint issues. Studies indicate that around 30% of men in their 40s suffer from back pain, which can be alleviated with regular stretching.
            </p>

            <h4 className="basic-flexibility-men-sub-subtitle">Flexibility for Men Aged 50 and Above</h4>
            <p className="basic-flexibility-men-description">
                For older men, flexibility helps preserve mobility, reduce stiffness, and improve balance. Regular stretching can enhance the quality of life and reduce the risk of falls. Flexibility training has been shown to decrease the risk of injury by over 25% in men over 50.
            </p>

            <h3 className="basic-flexibility-men-subtitle">Weekly Flexibility Plan</h3>
            <p className="basic-flexibility-men-description">
                Here’s a suggested weekly flexibility plan for men, incorporating different stretches that target key muscle groups. Perform these stretches after your regular workouts or on rest days.
            </p>

            <table className="basic-flexibility-men-exercise-table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Target Area</th>
                        <th>Exercises</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='basic-flexibility-men-days-background'>Monday</td>
                        <td>Legs and Lower Back</td>
                        <td>
                            <ul>
                                <li>Hamstring Stretch</li>
                                <li>Lower Back Twist</li>
                                <li>Calf Stretch</li>
                            </ul>
                        </td>
                        <td>30 seconds per stretch, 2 sets</td>
                    </tr>
                    <tr>
                        <td className='basic-flexibility-men-days-background'>Wednesday</td>
                        <td>Shoulders and Chest</td>
                        <td>
                            <ul>
                                <li>Shoulder Cross Stretch</li>
                                <li>Chest Stretch (doorway)</li>
                                <li>Triceps Stretch</li>
                            </ul>
                        </td>
                        <td>30 seconds per stretch, 2 sets</td>
                    </tr>
                    <tr>
                        <td className='basic-flexibility-men-days-background'>Friday</td>
                        <td>Hip Flexors and Quads</td>
                        <td>
                            <ul>
                                <li>Quadriceps Stretch</li>
                                <li>Hip Flexor Stretch</li>
                                <li>Butterfly Stretch</li>
                            </ul>
                        </td>
                        <td>30 seconds per stretch, 2 sets</td>
                    </tr>
                    <tr>
                        <td className='basic-flexibility-men-days-background'>Sunday</td>
                        <td>Full Body</td>
                        <td>
                            <ul>
                                <li>Cat-Cow Stretch</li>
                                <li>Child's Pose</li>
                                <li>Side Body Stretch</li>
                            </ul>
                        </td>
                        <td>30 seconds per stretch, 2 sets</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Watch Video below for more tips</strong></p>

            <div className="basic-flexibility-men-video-container">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/L_xrDAtykMI?si=m9EdWWS20O9G_psn" 
                title="Basic Flexibility Exercises"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            </div>
        </div>
    );
};

export default BasicFlexibilityMen;
