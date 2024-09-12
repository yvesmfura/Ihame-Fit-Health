import React from 'react';
import './PostWorkoutStretching.css';

const PostWorkoutStretchingMen: React.FC = () => {
    return (
        <div className="post-workout-stretching-men-container">
            <h2>Post-Workout Stretching for Men</h2>
            <p>
                Help your muscles recover and prevent soreness with these post-workout stretching routines. Stretching after a workout helps improve flexibility, reduce muscle tension, and enhance overall recovery.
            </p>

            {/* Importance of Post-Workout Stretching */}
            <section className="post-workout-stretching-men-importance-section">
                <h3>Importance of Post-Workout Stretching</h3>
                <p>
                    Post-workout stretching helps in reducing muscle soreness and stiffness, improving circulation, and promoting overall muscle recovery. Regular stretching can also enhance your flexibility, which is crucial for preventing injuries and maintaining a full range of motion.
                </p>
            </section>

            {/* Post-Workout Stretching Routine */}
            <section className="post-workout-stretching-men-routine-section">
                <h3>Post-Workout Stretching Routine</h3>
                <ul className="post-workout-stretching-men-routine-list">
                    <li><strong>Hamstring Stretch (2 minutes):</strong> Sit on the floor with one leg extended and the other bent. Reach for your toes on the extended leg.</li>
                    <li><strong>Quadriceps Stretch (2 minutes):</strong> Stand on one leg, pull your other foot towards your buttocks, and hold it with your hand.</li>
                    <li><strong>Calf Stretch (2 minutes per side):</strong> Place your hands on a wall and step one foot back, pressing your heel into the ground.</li>
                    <li><strong>Chest Stretch (2 minutes):</strong> Stand with your arms extended to the sides and gently pull them back to open up your chest.</li>
                    <li><strong>Shoulder Stretch (2 minutes):</strong> Bring one arm across your body and use your other arm to gently press it towards your chest.</li>
                </ul>
            </section>

            {/* Do's and Don'ts */}
            <section className="post-workout-stretching-men-dos-donts-section">
                <h3>Do's and Don'ts</h3>
                <div className="post-workout-stretching-men-dos-donts-grid">
                    <div className="post-workout-stretching-men-dos">
                        <h4>Do's</h4>
                        <ul>
                            <li>Hold each stretch for at least 30 seconds.</li>
                            <li>Stretch gently and never force your body into a position.</li>
                            <li>Focus on deep breathing to help relax your muscles.</li>
                            <li>Include stretches for all major muscle groups.</li>
                        </ul>
                    </div>
                    <div className="post-workout-stretching-men-donts">
                        <h4>Don'ts</h4>
                        <ul>
                            <li>Don’t bounce or jerk during stretches; it can cause injury.</li>
                            <li>Don’t stretch to the point of pain; mild discomfort is enough.</li>
                            <li>Avoid stretching a cold muscle; do a light warm-up first.</li>
                            <li>Don’t rush your stretching routine; take your time to do it properly.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Health and Lifestyle Tips */}
            <section className="post-workout-stretching-men-health-lifestyle-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Stay hydrated before, during, and after your workout to help with muscle recovery.</li>
                    <li>Incorporate a balanced diet with plenty of proteins, vitamins, and minerals to support muscle repair.</li>
                    <li>Get adequate sleep to allow your body to recover and rebuild muscle tissue.</li>
                    <li>Maintain a regular stretching routine to enhance overall flexibility and mobility.</li>
                    <li>Consider incorporating other recovery techniques, such as foam rolling or massage, into your routine.</li>
                </ul>
            </section>

            {/* Video Section */}
            <section className="post-workout-stretching-men-video-section">
                <h3>Post-Workout Stretching Routine Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sampleVideoID"
                    title="Post-Workout Stretching Routine"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default PostWorkoutStretchingMen;