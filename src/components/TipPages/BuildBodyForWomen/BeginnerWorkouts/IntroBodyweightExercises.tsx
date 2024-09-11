import React from 'react';
import './IntroBodyweightExercises.css';

const IntroBodyweightWomen: React.FC = () => {
    return (
        <div className="beginner-women-container">
            <h2 className="beginner-women-title">Intro to Bodyweight Exercises for Women and Girls</h2>
            <p className="beginner-women-description">
                Start your fitness journey with these beginner-friendly bodyweight exercises. This plan focuses on building strength, toning muscles, and improving flexibility, all without the need for equipment.
            </p>

            {/* Weekly Workout Plan */}
            <h3 className="beginner-women-subtitle">Weekly Workout Plan</h3>
            <p className="beginner-women-description">
                This plan is designed to fit into your weekly schedule, focusing on different muscle groups each day. Each workout is about 30 minutes long and suitable for all fitness levels.
            </p>

            <table className="beginner-women-workout-plan">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Workout</th>
                        <th>Time/Period</th>
                        <th>Sets & Reps</th>
                        <th>Importance</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Monday */}
                    <tr>
                        <td className="days-background-women-beginner">Monday</td>
                        <td>Full-Body Circuit</td>
                        <td>30 minutes</td>
                        <td>
                            <ul>
                                <li>Bodyweight Squats: 3 sets x 12 reps</li>
                                <li>Knee Push-Ups: 3 sets x 10 reps</li>
                                <li>Plank: 3 sets x 30 seconds</li>
                                <li>Jumping Jacks: 3 sets x 1 minute</li>
                            </ul>
                        </td>
                        <td>Engages multiple muscle groups, improving strength and stamina.</td>
                    </tr>

                    {/* Tuesday */}
                    <tr>
                        <td className="days-background-women-beginner">Tuesday</td>
                        <td>Core & Abs</td>
                        <td>20 minutes</td>
                        <td>
                            <ul>
                                <li>Bicycle Crunches: 3 sets x 20 reps</li>
                                <li>Leg Raises: 3 sets x 12 reps</li>
                                <li>Mountain Climbers: 3 sets x 30 seconds</li>
                                <li>Side Plank: 3 sets x 20 seconds per side</li>
                            </ul>
                        </td>
                        <td>Strengthens your core, improving balance and stability.</td>
                    </tr>

                    {/* Wednesday */}
                    <tr>
                        <td className="days-background-women-beginner">Wednesday</td>
                        <td>Lower Body Focus</td>
                        <td>30 minutes</td>
                        <td>
                            <ul>
                                <li>Glute Bridges: 3 sets x 15 reps</li>
                                <li>Lunges: 3 sets x 10 reps per leg</li>
                                <li>Wall Sits: 3 sets x 45 seconds</li>
                                <li>Jump Squats: 3 sets x 10 reps</li>
                            </ul>
                        </td>
                        <td>Focuses on strengthening your legs, glutes, and hips.</td>
                    </tr>

                    {/* Thursday */}
                    <tr>
                        <td className="days-background-women-beginner">Thursday</td>
                        <td>Rest Day</td>
                        <td>—</td>
                        <td>—</td>
                        <td>Rest allows your muscles to recover and grow stronger.</td>
                    </tr>

                    {/* Friday */}
                    <tr>
                        <td className="days-background-women-beginner">Friday</td>
                        <td>Upper Body Strength</td>
                        <td>30 minutes</td>
                        <td>
                            <ul>
                                <li>Push-Ups (Modified): 3 sets x 10 reps</li>
                                <li>Tricep Dips: 3 sets x 12 reps</li>
                                <li>Arm Circles: 3 sets x 1 minute</li>
                                <li>Inverted Rows: 3 sets x 10 reps</li>
                            </ul>
                        </td>
                        <td>Strengthens your arms, chest, and shoulders.</td>
                    </tr>

                    {/* Saturday */}
                    <tr>
                        <td className="days-background-women-beginner">Saturday</td>
                        <td>Full-Body Stretching</td>
                        <td>20 minutes</td>
                        <td>
                            <ul>
                                <li>Hamstring Stretch: 3 sets x 30 seconds</li>
                                <li>Quad Stretch: 3 sets x 30 seconds per leg</li>
                                <li>Shoulder Stretch: 3 sets x 30 seconds</li>
                                <li>Child's Pose: 3 sets x 1 minute</li>
                            </ul>
                        </td>
                        <td>Improves flexibility and aids muscle recovery.</td>
                    </tr>

                    {/* Sunday */}
                    <tr>
                        <td className="days-background-women-beginner">Sunday</td>
                        <td>Light Cardio</td>
                        <td>25 minutes</td>
                        <td>
                            <ul>
                                <li>Brisk Walking: 25 minutes</li>
                            </ul>
                        </td>
                        <td>Promotes cardiovascular health while keeping the body active.</td>
                    </tr>
                </tbody>
            </table>

            {/* Workout Importance */}
            <h3 className="beginner-women-subtitle">Why These Workouts Matter</h3>
            <p className="beginner-women-description">
                Each exercise in this plan is chosen to help you progress safely and effectively:
            </p>
            <ul className="beginner-women-importance-list">
                <li><strong>Bodyweight Squats:</strong> Strengthen legs and improve mobility.</li>
                <li><strong>Push-Ups (Modified):</strong> Build upper body strength while supporting joints.</li>
                <li><strong>Planks:</strong> Enhance core stability and balance.</li>
                <li><strong>Stretching:</strong> Prevents injury and increases flexibility.</li>
            </ul>

            <p><strong>Watch the video below for more tips:</strong></p>

            {/* Video Introduction */}
            <div className="beginner-women-video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qAT1k2hAr6o"
                    title="Intro to Bodyweight Exercises"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default IntroBodyweightWomen;
