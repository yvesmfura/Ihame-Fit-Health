import React from 'react';
import './RelaxationTechniques.css';

const RelaxationTechniquesWomen: React.FC = () => {
    return (
        <div className="relaxation-techniques-women-container">
            <h2 className="relaxation-techniques-women-title">Relaxation Techniques for Women</h2>
            <p className="relaxation-techniques-women-description">
                De-stress and unwind with these relaxation techniques, perfect for enhancing mental well-being and improving overall health.
            </p>

            <h3 className="relaxation-techniques-women-subheading">1. Deep Breathing</h3>
            <p className="relaxation-techniques-women-text">
                Focus on taking slow, deep breaths to calm your mind and reduce stress. Breathe in through your nose for 4 seconds, hold for 4 seconds, and exhale slowly through your mouth for 6 seconds. Repeat this process for 5-10 minutes.
            </p>

            <h3 className="relaxation-techniques-women-subheading">2. Progressive Muscle Relaxation</h3>
            <p className="relaxation-techniques-women-text">
                Start from your toes and work your way up, tensing each muscle group for a few seconds and then slowly releasing. This helps release physical tension and induces a state of relaxation.
            </p>

            <h3 className="relaxation-techniques-women-subheading">3. Visualization</h3>
            <p className="relaxation-techniques-women-text">
                Close your eyes and imagine a peaceful scene, like a beach or a forest. Focus on the sights, sounds, and smells to immerse yourself in the moment and calm your mind.
            </p>

            <h3 className="relaxation-techniques-women-subheading">4. Guided Meditation</h3>
            <p className="relaxation-techniques-women-text">
                Follow along with a guided meditation to help center your thoughts and relax your body. Meditation can be done for 10-20 minutes and is an excellent way to relieve stress.
            </p>

            <div className="relaxation-techniques-women-video-section">
                <h3 className="relaxation-techniques-women-subheading">Watch a Guided Meditation</h3>
                <iframe
                    className="relaxation-techniques-women-video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/someVideoID"
                    title="Guided Meditation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Add Dos and Don'ts */}
            <h3 className="relaxation-techniques-women-subheading">Do's and Don'ts</h3>
            <ul className="relaxation-techniques-women-list">
                <li><strong>Do:</strong> Practice regularly, ensure a comfortable space, and incorporate deep breathing.</li>
                <li><strong>Don't:</strong> Rush the process or skip stretching after intense workouts.</li>
            </ul>

            {/* Add Health and Lifestyle Tips */}
            <h3 className="relaxation-techniques-women-subheading">Health and Lifestyle Tips</h3>
            <ul className="relaxation-techniques-women-list">
                <li>Stay hydrated throughout the day for better physical and mental well-being.</li>
                <li>Follow a balanced diet rich in fruits and vegetables to reduce stress.</li>
                <li>Engage in regular exercise to release endorphins and maintain a positive mood.</li>
                <li>Practice good sleep hygiene to ensure 7-9 hours of rest each night.</li>
            </ul>
        </div>
    );
};

export default RelaxationTechniquesWomen;