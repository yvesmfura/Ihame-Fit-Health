import React from 'react';
import './PreNatalWorkouts.css';

const PreNatalWorkoutsWomen: React.FC = () => {
    return (
        <div className="prenatal-workout-women-container">
            <h2 className="prenatal-workout-women-title">Pre-Natal Workouts for Women</h2>
            <p className="prenatal-workout-women-intro">
                Staying active during pregnancy is essential for both the mother and the baby. Proper exercise during pregnancy can reduce back pain, decrease the risk of gestational diabetes, and promote faster postpartum recovery.
            </p>

            {/* Importance of Workouts During Pregnancy */}
            <section className="prenatal-workout-women-importance">
                <h3 className="prenatal-workout-women-section-title">Why Workout During Pregnancy?</h3>
                <ul className="prenatal-workout-women-list">
                    <li>According to the American College of Obstetricians and Gynecologists (ACOG), pregnant women who engage in regular physical activity are 25% less likely to develop gestational diabetes.</li>
                    <li>Research from Harvard Medical School shows that 30 minutes of moderate exercise 5 times a week can reduce complications during delivery by 20%.</li>
                    <li>Exercising during pregnancy improves cardiovascular health, mood, and sleep, and may prevent excess weight gain.</li>
                </ul>
            </section>

            {/* Precautions */}
            <section className="prenatal-workout-women-precautions">
                <h3 className="prenatal-workout-women-section-title">Precautions During Pre-Natal Workouts</h3>
                <ul className="prenatal-workout-women-list">
                    <li>Avoid lying flat on your back during workouts after the first trimester.</li>
                    <li>Stay hydrated and avoid overheating. Keep workout intensity at a moderate level.</li>
                    <li>Always consult your doctor before starting any exercise program during pregnancy.</li>
                    <li>Listen to your body and avoid exercises that cause pain or discomfort.</li>
                </ul>
            </section>

            {/* 30-Minute Workout Plan */}
            <section className="prenatal-workout-women-30-min-plan">
                <h3 className="prenatal-workout-women-section-title">30-Minute Pre-Natal Workout Plan</h3>
                <p className="prenatal-workout-women-description">
                    This 30-minute workout is designed to be safe and effective during all trimesters of pregnancy, focusing on strength, flexibility, and relaxation.
                </p>
                <ol className="prenatal-workout-women-plan-list">
                    <li><strong>Warm-up (5 minutes):</strong> Gentle walking or light stationary cycling to elevate heart rate.</li>
                    <li><strong>Bodyweight Squats (10 minutes):</strong> Perform 3 sets of 10-12 squats, focusing on proper form to strengthen the lower body.</li>
                    <li><strong>Wall Push-ups (5 minutes):</strong> Do 2 sets of 10 push-ups against a wall to engage upper body muscles safely.</li>
                    <li><strong>Cat-Cow Stretch (5 minutes):</strong> A great stretch for the back and spine, helping relieve tension.</li>
                    <li><strong>Cool-down (5 minutes):</strong> Gentle stretching and deep breathing to relax the muscles.</li>
                </ol>
            </section>

            {/* Do's and Don'ts */}
            <section className="prenatal-workout-women-dos-donts">
                <div className="prenatal-workout-women-dos">
                    <h4>Do's</h4>
                    <ul>
                        <li>Do stay active with low-impact exercises like walking, swimming, or prenatal yoga.</li>
                        <li>Do focus on pelvic floor exercises to strengthen muscles for delivery.</li>
                        <li>Do practice proper posture and balance.</li>
                    </ul>
                </div>
                <div className="prenatal-workout-women-donts">
                    <h4>Don'ts</h4>
                    <ul>
                        <li>Don’t engage in contact sports or exercises with a high risk of falling.</li>
                        <li>Don’t push yourself to exhaustion; stop when you're tired.</li>
                        <li>Don’t hold your breath during exercises, as it can reduce oxygen flow to your baby.</li>
                    </ul>
                </div>
            </section>

            {/* Common Mistakes */}
            <section className="prenatal-workout-women-mistakes">
                <h3 className="prenatal-workout-women-section-title">Common Mistakes to Avoid</h3>
                <ul className="prenatal-workout-women-list">
                    <li>Over-exercising: Some women feel the need to maintain pre-pregnancy intensity, but moderation is key.</li>
                    <li>Ignoring discomfort: Always stop exercises that cause pain or discomfort.</li>
                    <li>Skipping warm-up and cool-down: These are crucial to preventing injury and ensuring muscle relaxation.</li>
                </ul>
            </section>

            {/* Food Tips */}
            <section className="prenatal-workout-women-food-tips">
                <h3 className="prenatal-workout-women-section-title">Food Tips for Pregnant Women</h3>
                <ul className="prenatal-workout-women-list">
                    <li>Focus on a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.</li>
                    <li>Eat small, frequent meals to maintain energy levels.</li>
                    <li>Incorporate folate-rich foods such as spinach, lentils, and oranges to support the baby's development.</li>
                    <li>Stay hydrated by drinking plenty of water throughout the day.</li>
                </ul>
            </section>

            {/* Health Tips */}
            <section className="prenatal-workout-women-health-tips">
                <h3 className="prenatal-workout-women-section-title">Health Tips for Pregnant Women</h3>
                <ul className="prenatal-workout-women-list">
                    <li>Get plenty of rest and avoid stress as much as possible.</li>
                    <li>Visit your healthcare provider regularly for check-ups.</li>
                    <li>Engage in light relaxation exercises like prenatal yoga or meditation.</li>
                </ul>
            </section>

            {/* Lifestyle Tips */}
            <section className="prenatal-workout-women-lifestyle-tips">
                <h3 className="prenatal-workout-women-section-title">Lifestyle Tips for Pregnant Women</h3>
                <ul className="prenatal-workout-women-list">
                    <li>Avoid smoking and alcohol to promote a healthy pregnancy.</li>
                    <li>Maintain a positive mindset and connect with other pregnant women for support.</li>
                    <li>Ensure adequate sleep (7-9 hours a night) for optimal health.</li>
                </ul>
            </section>

            <h3 className="prenatal-workout-women-section-title">Watch Pre-Natal Workout Video</h3>

             {/* Video Section */}
             <section className="prenatal-workout-women-video">
                <div className="prenatal-workout-women-video-list">
                    <iframe 
                        className="prenatal-workout-women-video"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/eyjyOKN9a4I?si=pLZCmfnm0OnudIYG" 
                        title="Pre-Natal Yoga" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default PreNatalWorkoutsWomen;