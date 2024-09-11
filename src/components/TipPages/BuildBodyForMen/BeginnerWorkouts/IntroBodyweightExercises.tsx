import React from 'react';
import './IntroBodyweightExercises.css';

const IntroBodyweightMen: React.FC = () => {
    return (
        <div className="beginner-men-container">
            <h2 className="beginner-men-title">Intro to Bodyweight Exercises for Men</h2>
            <p className="beginner-men-description">
                Learn the basics of bodyweight exercises with these introductory workouts, perfect for beginners. This plan focuses on building a foundation of strength, endurance, and mobility using just your body weight.
            </p>

            {/* Weekly Workout Plan */}
            <h3 className="beginner-men-subtitle">Weekly Workout Plan</h3>
            <p className="beginner-men-description">
                This plan will help you ease into a consistent workout routine. Each workout takes approximately 30 minutes and focuses on a different muscle group.
            </p>

            <table className="beginner-men-workout-plan">
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
                    <td className="days-background-men-beginner">Monday</td>
                        <td>Full-Body Circuit</td>
                        <td>30 minutes</td>
                        <td>
                            <ul>
                                <li>Push-Ups: 3 sets x 10 reps</li>
                                <li>Bodyweight Squats: 3 sets x 15 reps</li>
                                <li>Plank: 3 sets x 30 seconds</li>
                                <li>Burpees: 3 sets x 10 reps</li>
                            </ul>
                        </td>
                        <td>Builds overall strength and endurance by targeting multiple muscle groups.</td>
                    </tr>

                    {/* Tuesday */}
                    <tr>
                        <td className="days-background-men-beginner">Tuesday</td>
                        <td>Core & Abs</td>
                        <td>20 minutes</td>
                        <td>
                            <ul>
                                <li>Crunches: 3 sets x 20 reps</li>
                                <li>Leg Raises: 3 sets x 15 reps</li>
                                <li>Mountain Climbers: 3 sets x 30 seconds</li>
                                <li>Side Plank: 3 sets x 20 seconds per side</li>
                            </ul>
                        </td>
                        <td>Strengthens your core, crucial for balance and overall stability.</td>
                    </tr>

                    {/* Wednesday */}
                    <tr>
                        <td className="days-background-men-beginner">Wednesday</td>
                        <td>Lower Body Focus</td>
                        <td>30 minutes</td>
                        <td>
                            <ul>
                                <li>Lunges: 3 sets x 12 reps per leg</li>
                                <li>Glute Bridges: 3 sets x 15 reps</li>
                                <li>Wall Sits: 3 sets x 45 seconds</li>
                                <li>Jump Squats: 3 sets x 10 reps</li>
                            </ul>
                        </td>
                        <td>Improves leg strength and mobility, focusing on quads, hamstrings, and glutes.</td>
                    </tr>

                    {/* Thursday */}
                    <tr>
                        <td className="days-background-men-beginner">Thursday</td>
                        <td>Rest Day</td>
                        <td>—</td>
                        <td>—</td>
                        <td>Allows your muscles to recover and prepare for the next workout.</td>
                    </tr>

                    {/* Friday */}
                    <tr>
                        <td className="days-background-men-beginner">Friday</td>
                        <td>Upper Body Strength</td>
                        <td>30 minutes</td>
                        <td>
                            <ul>
                                <li>Push-Ups: 3 sets x 15 reps</li>
                                <li>Tricep Dips: 3 sets x 12 reps</li>
                                <li>Inverted Rows: 3 sets x 10 reps</li>
                                <li>Arm Circles: 3 sets x 1 minute</li>
                            </ul>
                        </td>
                        <td>Targets chest, arms, and back muscles to build upper body strength.</td>
                    </tr>

                    {/* Saturday */}
                    <tr>
                        <td className="days-background-men-beginner">Saturday</td>
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
                        <td>Enhances flexibility and aids in recovery by reducing muscle stiffness.</td>
                    </tr>

                    {/* Sunday */}
                    <tr>
                        <td className="days-background-men-beginner">Sunday</td>
                        <td>Light Cardio</td>
                        <td>25 minutes</td>
                        <td>
                            <ul>
                                <li>Jogging in Place: 3 sets x 3 minutes</li>
                                <li>Jumping Jacks: 3 sets x 1 minute</li>
                                <li>High Knees: 3 sets x 1 minute</li>
                                <li>Butt Kicks: 3 sets x 1 minute</li>
                            </ul>
                        </td>
                        <td>Improves cardiovascular health and helps burn calories while keeping your heart rate elevated.</td>
                    </tr>
                </tbody>
            </table>

            {/* Workout Importance */}
            <h3 className="beginner-men-subtitle">Why These Workouts Matter</h3>
            <p className="beginner-men-description">
                Each exercise in this plan serves a specific purpose in your fitness journey:
            </p>
            <ul className="beginner-men-importance-list">
                <li><strong>Push-Ups:</strong> Great for building upper body strength, targeting the chest, shoulders, and triceps.</li>
                <li><strong>Squats:</strong> Build leg strength while improving mobility and endurance.</li>
                <li><strong>Planks:</strong> Strengthen your core and improve posture.</li>
                <li><strong>Lunges:</strong> Target the glutes, quads, and hamstrings, improving balance and coordination.</li>
                <li><strong>Stretching:</strong> Enhances flexibility, helping to prevent injuries and improve range of motion.</li>
            </ul>

            <p> <strong>Watch Video below for more tips</strong></p>

            {/* Video Introduction */}
            <div className="beginner-men-video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/30PqX2zvK88?si=0_djmjdAJbE-1fsz"
                    title="Intro to Bodyweight Exercises"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
        
    );

};

export default IntroBodyweightMen;