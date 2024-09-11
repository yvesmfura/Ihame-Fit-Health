import React from 'react';
import './EasyCardioRoutines.css';

const EasyCardioMen: React.FC = () => {
    return (
        <div className="easy-cardio-men-container">
            <h2 className="easy-cardio-men-title">Easy Cardio Routines for Men</h2>
            <p className="easy-cardio-men-description">
                Start your fitness journey with these easy cardio routines, designed to build endurance and cardiovascular health without overwhelming beginners.
            </p>

            {/* Weekly Cardio Routine */}
            <h3 className="easy-cardio-men-subtitle">Weekly Cardio Routine</h3>
            <p className="easy-cardio-men-description">
                This cardio plan is perfect for beginners and focuses on low-impact exercises that are easy on the joints while building up your endurance and heart health.
            </p>

            <table className="easy-cardio-men-workout-plan">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Workout</th>
                        <th>Duration</th>
                        <th>Benefits</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Monday */}
                    <tr>
                        <td className="easy-cardio-men-days-background">Monday</td>
                        <td>Brisk Walking</td>
                        <td>30 minutes</td>
                        <td>Improves cardiovascular fitness and burns calories in a low-impact way.</td>
                    </tr>

                    {/* Tuesday */}
                    <tr>
                        <td className="easy-cardio-men-days-background">Tuesday</td>
                        <td>Cycling (Stationary or Outdoor)</td>
                        <td>20 minutes</td>
                        <td>Strengthens legs, improves heart health, and boosts endurance.</td>
                    </tr>

                    {/* Wednesday */}
                    <tr>
                        <td className="easy-cardio-men-days-background">Wednesday</td>
                        <td>Jogging/Running (at a comfortable pace)</td>
                        <td>25 minutes</td>
                        <td>Boosts cardiovascular endurance and supports weight management.</td>
                    </tr>

                    {/* Thursday */}
                    <tr>
                        <td className="easy-cardio-men-days-background">Thursday</td>
                        <td>Rest Day</td>
                        <td>—</td>
                        <td>Allows muscles to recover and prevents overtraining.</td>
                    </tr>

                    {/* Friday */}
                    <tr>
                        <td className="easy-cardio-men-days-background">Friday</td>
                        <td>Swimming (or Jump Rope)</td>
                        <td>30 minutes</td>
                        <td>Full-body cardio workout, low impact on joints, and improves lung capacity.</td>
                    </tr>

                    {/* Saturday */}
                    <tr>
                        <td className="easy-cardio-men-days-background">Saturday</td>
                        <td>Hiking or Light Trail Walking</td>
                        <td>1 hour</td>
                        <td>Great for endurance and strengthening muscles in a relaxed outdoor environment.</td>
                    </tr>

                    {/* Sunday */}
                    <tr>
                        <td className="easy-cardio-men-days-background">Sunday</td>
                        <td>Rest Day or Gentle Stretching</td>
                        <td>—</td>
                        <td>Focuses on flexibility, allowing your muscles to recover.</td>
                    </tr>
                </tbody>
            </table>

            {/* Importance of Cardio */}
            <h3 className="easy-cardio-men-subtitle">Why Cardio is Important for Your Health</h3>
            <p className="easy-cardio-men-description">
                Cardiovascular exercise is crucial for maintaining heart health, improving lung capacity, and boosting your overall endurance. It helps with:
            </p>
            <ul className="easy-cardio-men-benefits-list">
                <li><strong>Heart Health:</strong> Regular cardio strengthens your heart, allowing it to pump blood more efficiently.</li>
                <li><strong>Weight Management:</strong> Cardio helps burn calories and supports fat loss, especially when combined with a healthy diet.</li>
                <li><strong>Stress Reduction:</strong> Engaging in cardio can reduce stress, boost your mood, and improve mental health.</li>
                <li><strong>Improved Lung Capacity:</strong> Regular cardio trains your lungs to take in more oxygen, which benefits all aspects of your physical performance.</li>
            </ul>

            {/* Food Advice */}
            <h3 className="easy-cardio-men-subtitle">Food Advice for Cardio Workouts</h3>
            <p className="easy-cardio-men-description">
                Fuel your cardio sessions with the right foods:
            </p>
            <ul className="easy-cardio-men-food-advice-list">
                <li><strong>Pre-Workout:</strong> Eat a small snack 30-60 minutes before your workout, such as a banana, a handful of almonds, or a slice of whole-grain toast with peanut butter.</li>
                <li><strong>Post-Workout:</strong> Refuel with a balanced meal including protein (chicken, tofu, fish), complex carbohydrates (brown rice, quinoa), and healthy fats (avocado, olive oil).</li>
                <li><strong>Hydration:</strong> Drink plenty of water before, during, and after your workout to stay hydrated.</li>
            </ul>

            {/* Health Advice */}
            <h3 className="easy-cardio-men-subtitle">General Health Advice</h3>
            <p className="easy-cardio-men-description">
                Along with cardio exercises, keep the following health tips in mind:
            </p>
            <ul className="easy-cardio-men-health-advice-list">
                <li>Get 7-8 hours of sleep each night to allow your body to recover.</li>
                <li>Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains.</li>
                <li>Incorporate flexibility and strength training exercises to improve your overall fitness.</li>
                <li>Manage stress through activities like yoga, meditation, or leisurely outdoor walks.</li>
            </ul>

            <p><strong>Watch Video below for more tips</strong></p>
            {/* Video Introduction */}
            <div className="easy-cardio-men-video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dj03_VDetdw?si=LaLJaUhr9kkONXos" 
                    title="Easy Cardio for Beginners"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default EasyCardioMen;
