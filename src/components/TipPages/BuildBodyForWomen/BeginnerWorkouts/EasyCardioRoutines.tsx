import React from 'react';
import './EasyCardioRoutines.css';

const EasyCardioWomen: React.FC = () => {
    return (
        <div className="easy-cardio-women-container">
            <h2 className="easy-cardio-women-title">Easy Cardio Routines for Women</h2>

            {/* Importance of Cardio */}
            <section className="easy-cardio-women-section">
                <h3 className="easy-cardio-women-subtitle">Why Cardio is Important for Women and Girls</h3>
                <p className="easy-cardio-women-description">
                    Cardiovascular exercise plays a vital role in women's overall health. It not only aids in weight management but also improves heart health,
                    boosts energy, and enhances mental clarity. Regular cardio can reduce the risk of chronic diseases such as heart disease, diabetes, and osteoporosis.
                </p>
                <ul className="easy-cardio-women-benefits">
                    <li>Boosts heart health, reducing the risk of cardiovascular diseases.</li>
                    <li>Supports weight management and burns calories effectively.</li>
                    <li>Improves mental well-being, helping to combat stress and anxiety.</li>
                    <li>Strengthens bones, reducing the risk of osteoporosis.</li>
                    <li>Enhances endurance and stamina for daily activities.</li>
                </ul>
            </section>

            {/* Food Tips */}
            <section className="easy-cardio-women-section">
                <h3 className="easy-cardio-women-subtitle">Healthy Food Tips for Cardio Enthusiasts</h3>
                <ul className="easy-cardio-women-food-tips">
                    <li><strong>Pre-workout:</strong> Have a light snack like a banana, yogurt, or whole wheat toast 30-45 minutes before exercising.</li>
                    <li><strong>Post-workout:</strong> Refuel with protein and carbs—try a smoothie, chicken salad, or quinoa bowl.</li>
                    <li><strong>Hydration:</strong> Stay hydrated throughout the day, and consider adding electrolytes after intense cardio.</li>
                    <li><strong>Balanced diet:</strong> Include lean proteins, healthy fats, and complex carbs for energy and recovery.</li>
                </ul>
            </section>

            {/* Do's and Don'ts */}
            <section className="easy-cardio-women-section">
                <h3 className="easy-cardio-women-subtitle">Do's and Don'ts of Cardio for Women</h3>
                <div className="easy-cardio-women-dos-donts">
                    <div className="easy-cardio-women-dos">
                        <h4>Do's:</h4>
                        <ul>
                            <li>Start slow and gradually increase intensity to avoid injury.</li>
                            <li>Mix up your routine with running, cycling, or swimming.</li>
                            <li>Warm up before and cool down after each workout.</li>
                            <li>Be consistent, focusing on regular workouts over intensity.</li>
                            <li>Wear proper footwear and comfortable clothing.</li>
                        </ul>
                    </div>
                    <div className="easy-cardio-women-donts">
                        <h4>Don'ts:</h4>
                        <ul>
                            <li>Don’t skip warm-up or cool down—it can lead to injury.</li>
                            <li>Avoid comparing your progress to others.</li>
                            <li>Don’t push too hard—listen to your body and rest when needed.</li>
                            <li>Don’t neglect strength training alongside cardio for well-rounded fitness.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Weekly Cardio Plan */}
            <section className="easy-cardio-women-section">
                <h3 className="easy-cardio-women-subtitle">Weekly Cardio Plan for Women</h3>
                <table className="easy-cardio-women-weekly-plan">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Workout</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>30 minutes brisk walking or light jogging</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>30 minutes cycling or dance cardio</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>20 minutes of interval training (run/walk)</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>40 minutes brisk walking or swimming</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>Rest day or light yoga/stretching</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>25 minutes of hiking or outdoor running</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Active rest day: leisure walk or gentle cycling</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <p><strong>Watch Video below for more tips</strong></p>
            {/* Video Introduction */}
            <div className="easy-cardio-women-video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Yn0dV4s81H0"
                    title="Easy Cardio for Beginners"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default EasyCardioWomen;