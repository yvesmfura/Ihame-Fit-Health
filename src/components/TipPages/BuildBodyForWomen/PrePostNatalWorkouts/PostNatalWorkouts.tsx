import React from 'react';
import './PostNatalWorkouts.css';

const PostNatalWorkoutsWomen: React.FC = () => {
    return (
        <div className="post-natal-workouts-women-container">
            <h2 className="post-natal-workouts-women-title">Post-Natal Workouts for Women</h2>
            <p className="post-natal-workouts-women-intro">
                Safely return to fitness after childbirth with these gentle post-natal exercises. These workouts focus on rebuilding strength, improving posture, and easing the body back into regular physical activity.
            </p>

            {/* Statistical Facts */}
            <section className="post-natal-workouts-women-stats">
                <h3 className="post-natal-workouts-women-section-title">Statistical Facts about Post-Natal Recovery</h3>
                <ul className="post-natal-workouts-women-list">
                    <li>Nearly 60% of women experience diastasis recti, a separation of the abdominal muscles, after pregnancy.</li>
                    <li>According to the American College of Obstetricians and Gynecologists, 6 weeks postpartum is considered a safe time to start light exercises.</li>
                    <li>80% of postpartum women report improvements in mental health after engaging in physical activity.</li>
                </ul>
            </section>

            {/* Medical Facts */}
            <section className="post-natal-workouts-women-medical-facts">
                <h3 className="post-natal-workouts-women-section-title">Medical Facts on Post-Natal Workouts</h3>
                <ul className="post-natal-workouts-women-list">
                    <li>Exercising postpartum can help restore muscle tone, improve cardiovascular health, and reduce the risk of developing postpartum depression.</li>
                    <li>Post-natal exercises focus on strengthening core muscles, particularly those affected during pregnancy, such as the pelvic floor and abdomen.</li>
                    <li>The World Health Organization recommends that postpartum women start with low-impact exercises like walking, stretching, and core-strengthening movements.</li>
                </ul>
            </section>

            {/* Research Findings */}
            <section className="post-natal-workouts-women-research">
                <h3 className="post-natal-workouts-women-section-title">Recent Research Findings</h3>
                <ul className="post-natal-workouts-women-list">
                    <li>A 2020 study by the Journal of Women's Health found that regular post-natal exercise improved both physical and emotional well-being, with a significant reduction in anxiety and depressive symptoms.</li>
                    <li>Research from Harvard University revealed that women who participated in post-natal strength training had quicker recovery times and improved functional abilities within 6 months after childbirth.</li>
                    <li>A study conducted by the National Institutes of Health showed that women who engaged in light physical activity within 6-8 weeks postpartum experienced fewer complications related to childbirth, such as muscle weakness and fatigue.</li>
                </ul>
            </section>

            {/* 30-Minute Workout Plan */}
            <section className="post-natal-workouts-women-30-min-plan">
                <h3 className="post-natal-workouts-women-section-title">30-Minute Post-Natal Workout Plan</h3>
                <p className="post-natal-workouts-women-description">
                    This workout plan is designed to help you regain strength and stamina after childbirth.
                </p>
                <ol className="post-natal-workouts-women-plan-list">
                    <li><strong>Warm-up (5 minutes):</strong> Gentle walking to get your blood flowing.</li>
                    <li><strong>Pelvic Floor Exercises (5 minutes):</strong> Focus on gentle Kegels to rebuild strength.</li>
                    <li><strong>Glute Bridges (5 minutes):</strong> Perform 3 sets of 10-12 reps to strengthen your lower body.</li>
                    <li><strong>Modified Plank (5 minutes):</strong> Engage your core with a modified plank for 20-30 seconds.</li>
                    <li><strong>Cool-down (5 minutes):</strong> Gentle stretching and deep breathing to relax the body.</li>
                </ol>
            </section>

            {/* Common Mistakes */}
            <section className="post-natal-workouts-women-mistakes">
                <h3 className="post-natal-workouts-women-section-title">Common Mistakes to Avoid</h3>
                <ul className="post-natal-workouts-women-list">
                    <li>Skipping warm-up and cool-down: Proper preparation and relaxation are crucial.</li>
                    <li>Over-exertion: Listen to your body and avoid pushing too hard too soon.</li>
                    <li>Not engaging the core properly: Ensure you are performing core exercises with correct form.</li>
                </ul>
            </section>

            {/* Watch Post-Natal Workout Video */}
            <section className="post-natal-workouts-women-video">
                <h3 className="post-natal-workouts-women-section-title">Watch Post-Natal Workout Video</h3>
                <div className="post-natal-workouts-women-video-list">
                    <iframe 
                        className="post-natal-workouts-women-video"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/example2" 
                        title="Post-Natal Yoga" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default PostNatalWorkoutsWomen;