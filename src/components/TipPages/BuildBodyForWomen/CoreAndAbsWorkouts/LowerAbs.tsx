import React from 'react';
import './LowerAbs.css';

const LowerAbsWomen: React.FC = () => {
    return (
        <div className="lower-abs-women-container">
            <h2 className="lower-abs-women-header">Lower Abs Workouts for Women</h2>
            <p className="lower-abs-women-description">
                Target your lower abs with these effective exercises, designed to tone and strengthen your core. Building strong lower abs can help improve posture, support your lower back, and enhance overall core stability, which is essential for fitness and aesthetics.
            </p>

            <div className="lower-abs-women-benefits">
                <h3 className="lower-abs-women-subheader">Importance of Lower Abs Workouts</h3>
                <p className="lower-abs-women-paragraph">
                    Focusing on your lower abs provides several health and aesthetic benefits:
                </p>
                <ul className="lower-abs-women-list">
                    <li>Improves core strength and stability.</li>
                    <li>Enhances lower back support and reduces back pain.</li>
                    <li>Contributes to a toned, flat belly, improving aesthetics.</li>
                    <li>Increases overall body balance and posture.</li>
                </ul>
            </div>

            <div className="lower-abs-women-workout">
                <h3 className="lower-abs-women-subheader">30-Minute Lower Abs Workout Plan</h3>
                <ul className="lower-abs-women-list">
                    <li><strong>Leg Raises</strong> – 3 sets of 15 reps</li>
                    <li><strong>Reverse Crunches</strong> – 3 sets of 12 reps</li>
                    <li><strong>Flutter Kicks</strong> – 3 sets of 20 reps</li>
                    <li><strong>Mountain Climbers</strong> – 3 sets of 30 seconds</li>
                    <li><strong>Bicycle Crunches</strong> – 3 sets of 15 reps each side</li>
                    <li><strong>Plank with Knee Tucks</strong> – 3 sets of 30 seconds</li>
                </ul>
                <p className="lower-abs-women-paragraph">Complete each exercise in sequence, resting for 30 seconds between each set. Perform this workout 3-4 times a week for optimal results.</p>
            </div>

            <div className="lower-abs-women-tips">
                <h3 className="lower-abs-women-subheader">Health and Lifestyle Tips</h3>
                <div className="lower-abs-women-tip">
                    <h4 className="lower-abs-women-subsubheader">For Fitness</h4>
                    <p className="lower-abs-women-paragraph">
                        Consistency is key when targeting your lower abs. Pair your workouts with a healthy, balanced diet rich in lean protein, whole grains, and healthy fats. Also, drink plenty of water and get adequate rest to promote muscle recovery and overall wellness.
                    </p>
                </div>
                <div className="lower-abs-women-tip">
                    <h4 className="lower-abs-women-subsubheader">For Aesthetic Goals</h4>
                    <p className="lower-abs-women-paragraph">
                        In addition to working out, reducing overall body fat through cardio exercises and mindful eating will help reveal a toned, defined core. Focus on a calorie-controlled diet, regular cardio, and targeted ab workouts for the best aesthetic results.
                    </p>
                </div>
            </div>

            <div className="lower-abs-women-video">
                <h3 className="lower-abs-women-subheader">Guidance Video</h3>
                <iframe
                    className="lower-abs-women-video-frame"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/your-video-url"
                    title="Lower Abs Workout Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default LowerAbsWomen;