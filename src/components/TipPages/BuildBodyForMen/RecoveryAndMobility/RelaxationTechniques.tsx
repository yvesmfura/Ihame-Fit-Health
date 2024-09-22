import React from 'react';
import './RelaxationTechniques.css';

const RelaxationTechniquesMen: React.FC = () => {
    return (
        <div className="relaxation-techniques-men-container">
            <h2>Relaxation Techniques for Men</h2>
            <p>
                Reduce stress and enhance recovery with these relaxation techniques. Incorporating these methods into your routine can help you unwind after a tough workout, improve mental clarity, and promote overall well-being.
            </p>

            {/* Importance of Relaxation Techniques */}
            <section className="relaxation-techniques-men-importance-section">
                <h3>Importance of Relaxation Techniques</h3>
                <p>
                    Relaxation techniques are essential for managing stress and anxiety, improving sleep quality, and enhancing overall recovery. These techniques can help reduce muscle tension, lower blood pressure, and improve mental focus, which is crucial for maintaining a balanced lifestyle.
                </p>
            </section>

            {/* 30-Minute Relaxation Plan */}
            <section className="relaxation-techniques-men-plan-section">
                <h3>30-Minute Relaxation Plan</h3>
                <ul className="relaxation-techniques-men-plan-list">
                    <li><strong>Deep Breathing (5 minutes):</strong> Sit or lie down comfortably, close your eyes, and take slow, deep breaths. Focus on inhaling deeply through your nose and exhaling slowly through your mouth.</li>
                    <li><strong>Progressive Muscle Relaxation (10 minutes):</strong> Tense and then relax each muscle group, starting from your toes and working up to your head. This helps release muscle tension and promotes relaxation.</li>
                    <li><strong>Guided Meditation (10 minutes):</strong> Listen to a guided meditation track or app. Focus on the instructions and try to clear your mind of any distracting thoughts.</li>
                    <li><strong>Gentle Stretching (5 minutes):</strong> Perform gentle stretches to relax your muscles. Include stretches for the neck, shoulders, back, and legs to help release any residual tension.</li>
                </ul>
            </section>

            {/* Do's and Don'ts */}
            <section className="relaxation-techniques-men-dos-donts-section">
                <h3>Do's and Don'ts</h3>
                <div className="relaxation-techniques-men-dos-donts-grid">
                    <div className="relaxation-techniques-men-dos">
                        <h4>Do's</h4>
                        <ul>
                            <li>Find a quiet, comfortable space to practice your relaxation techniques.</li>
                            <li>Practice regularly to experience the full benefits of relaxation.</li>
                            <li>Use deep breathing and visualization to enhance relaxation.</li>
                            <li>Incorporate relaxation techniques into your daily routine for better results.</li>
                        </ul>
                    </div>
                    <div className="relaxation-techniques-men-donts">
                        <h4>Don'ts</h4>
                        <ul>
                            <li>Don’t practice relaxation techniques in a noisy or distracting environment.</li>
                            <li>Don’t rush through the techniques; take your time to fully relax.</li>
                            <li>Avoid using electronic devices during relaxation to minimize distractions.</li>
                            <li>Don’t skip relaxation practices; consistency is key to effectiveness.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Health and Lifestyle Tips */}
            <section className="relaxation-techniques-men-health-lifestyle-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Maintain a balanced diet rich in fruits, vegetables, and whole grains to support overall health.</li>
                    <li>Engage in regular physical activity to boost your mood and energy levels.</li>
                    <li>Ensure you get sufficient sleep each night to support recovery and mental clarity.</li>
                    <li>Practice mindfulness and meditation regularly to manage stress effectively.</li>
                    <li>Stay hydrated by drinking plenty of water throughout the day.</li>
                </ul>
            </section>

            {/* Video Section */}
            <section className="relaxation-techniques-men-video-section">
                <h3>Relaxation Techniques Video</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8lkJi4ldZ90?si=IrKdFvqJbr9b5O6g"
                    title="Relaxation Techniques for Men"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default RelaxationTechniquesMen;