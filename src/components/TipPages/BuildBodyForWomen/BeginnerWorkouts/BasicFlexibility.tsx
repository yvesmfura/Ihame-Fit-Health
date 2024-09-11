import React from 'react';
import './BasicFlexibility.css';

const BasicFlexibilityWomen: React.FC = () => {
    return (
        <div className="women-basic-flexibility-container">
            <h2 className="women-flexibility-title">Basic Flexibility Workouts for Women</h2>
            <p className="women-flexibility-intro">
                Flexibility is crucial for maintaining a healthy, active lifestyle. These basic stretches help improve your range of motion, reduce the risk of injury, and promote relaxation, making them essential for women of all ages.
            </p>

            <section className="women-importance-section">
                <h3 className="women-section-title">Why Flexibility is Important for Women</h3>
                <ul className="women-importance-list">
                    <li><strong>Improved Posture:</strong> Flexibility exercises help correct muscle imbalances and improve posture, which is vital for reducing back pain and maintaining a strong core.</li>
                    <li><strong>Injury Prevention:</strong> Stretching keeps muscles and joints supple, reducing the risk of injury, especially during workouts or daily activities.</li>
                    <li><strong>Stress Relief:</strong> Flexibility exercises, such as yoga, also promote relaxation, which helps reduce stress and improve mental health.</li>
                </ul>
            </section>

            <section className="women-age-benefits-section">
                <h3 className="women-section-title">Flexibility Benefits by Age</h3>
                <div className="women-age-benefits">
                    <div className="women-age-group">
                        <h4>Teens (13-19)</h4>
                        <p>During teenage years, improving flexibility helps with the rapid growth of muscles and bones, reducing tightness and discomfort.</p>
                    </div>
                    <div className="women-age-group">
                        <h4>20s and 30s</h4>
                        <p>In your 20s and 30s, maintaining flexibility supports active lifestyles, enhancing athletic performance and preventing injuries from workouts or everyday movements.</p>
                    </div>
                    <div className="women-age-group">
                        <h4>40s and 50s</h4>
                        <p>As we age, flexibility naturally decreases, making it essential to stretch regularly to avoid stiffness, improve balance, and support joint health.</p>
                    </div>
                    <div className="women-age-group">
                        <h4>60s and Beyond</h4>
                        <p>In later years, flexibility exercises help maintain mobility and independence, reducing the risk of falls and improving overall quality of life.</p>
                    </div>
                </div>
            </section>

            <section className="women-flexibility-tips">
                <h3 className="women-section-title">Flexibility Tips</h3>
                <ul className="women-tips-list">
                    <li>Warm up before stretching to avoid muscle strain.</li>
                    <li>Hold each stretch for at least 30 seconds for maximum benefit.</li>
                    <li>Focus on breathing deeply during stretches to enhance relaxation and flexibility.</li>
                    <li>Stretch all major muscle groups for balanced flexibility.</li>
                </ul>
            </section>

            <section className="women-dos-donts-section">
                <h3 className="women-section-title">Do's and Don'ts</h3>
                <div className="women-dos-donts-container">
                    <div className="women-dos">
                        <h4>Do's</h4>
                        <ul>
                            <li>Stretch regularly, aiming for 3-4 times a week.</li>
                            <li>Listen to your body and stretch within your limits.</li>
                            <li>Incorporate flexibility exercises as part of your cool-down routine after workouts.</li>
                        </ul>
                    </div>
                    <div className="women-donts">
                        <h4>Don'ts</h4>
                        <ul>
                            <li>Don't stretch cold muscles—warm up first to avoid injury.</li>
                            <li>Avoid bouncing or jerky movements while stretching.</li>
                            <li>Don't overstretch or push through pain—flexibility takes time to improve.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="women-flexibility-facts">
                <h3 className="women-section-title">Statistics and Facts</h3>
                <ul className="women-facts-list">
                    <li>According to studies, women who stretch regularly reduce their risk of injury by over 30%.</li>
                    <li>Flexibility can decrease by up to 50% as we age, making regular stretching critical in preventing stiffness.</li>
                    <li>Yoga and stretching exercises can improve flexibility by 35% in just 4 weeks.</li>
                </ul>
            </section>

            <section className="women-weekly-plan-section">
                <h3 className="women-section-title">Weekly Flexibility Plan</h3>
                <table className="women-flexibility-plan-table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Focus Area</th>
                            <th>Duration</th>
                            <th>Key Exercises</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>Full Body</td>
                            <td>20 minutes</td>
                            <td>Forward Bend, Cobra Stretch, Child’s Pose</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>Lower Body</td>
                            <td>15 minutes</td>
                            <td>Hamstring Stretch, Quad Stretch, Hip Flexor Stretch</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>Upper Body</td>
                            <td>15 minutes</td>
                            <td>Shoulder Stretch, Triceps Stretch, Neck Stretches</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Full Body Relaxation</td>
                            <td>30 minutes</td>
                            <td>Yoga Flow, Deep Breathing, Meditation</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <p><strong>Watch Video below for more tips</strong></p>

            <div className="basic-flexibility-women-video-container">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qULTwquOuT4" 
                title="Basic Flexibility Exercises"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            </div>
        </div>
    );
};

export default BasicFlexibilityWomen;
