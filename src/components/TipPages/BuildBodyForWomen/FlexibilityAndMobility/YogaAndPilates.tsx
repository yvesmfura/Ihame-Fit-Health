import React from 'react';
import './YogaAndPilates.css';

const YogaPilatesWomen: React.FC = () => {
    return (
        <div className="YogaPilatesWomen-container">
            <h2 className="YogaPilatesWomen-title">Yoga and Pilates for Women</h2>
            <p className="YogaPilatesWomen-description">
                Blend strength, flexibility, and mindfulness with these yoga and Pilates routines. 
                These practices not only improve your physical fitness but also promote mental well-being and relaxation.
            </p>

            <h3 className="YogaPilatesWomen-subtitle">Importance of Yoga for Women</h3>
            <p className="YogaPilatesWomen-importance">
                Yoga offers numerous benefits for women, contributing to both physical and mental health. Here’s why incorporating yoga into your routine can be particularly valuable:
            </p>
            <ul className="YogaPilatesWomen-importance-list">
                <li><strong>Enhances Flexibility:</strong> Yoga helps increase flexibility in the muscles and joints, which can improve overall mobility and reduce stiffness, especially important for women as they age.</li>
                <li><strong>Strengthens Core Muscles:</strong> Many yoga poses target the core, strengthening abdominal and back muscles, which can support better posture and reduce back pain.</li>
                <li><strong>Balances Hormones:</strong> Yoga practice can help regulate hormonal imbalances and alleviate symptoms related to menstruation, menopause, and other hormonal fluctuations.</li>
                <li><strong>Improves Mental Health:</strong> Regular practice of yoga can reduce stress, anxiety, and depression through its emphasis on breathing, meditation, and relaxation techniques.</li>
                <li><strong>Supports Weight Management:</strong> Yoga can aid in weight management by improving body awareness, reducing stress-related eating, and promoting a healthy lifestyle.</li>
                <li><strong>Boosts Bone Health:</strong> Weight-bearing yoga poses help maintain bone density and strength, which is crucial for women, particularly post-menopause when the risk of osteoporosis increases.</li>
                <li><strong>Promotes Better Sleep:</strong> The relaxation techniques used in yoga can enhance sleep quality and help manage insomnia or other sleep disorders.</li>
            </ul>

            <h3 className="YogaPilatesWomen-subtitle">30-Minute Yoga and Pilates Routine</h3>
            <ul className="YogaPilatesWomen-plan">
                <li>5 min: Gentle Warm-Up (e.g., child’s pose, cat-cow stretch)</li>
                <li>5 min: Sun Salutations (a series of poses to build heat and flexibility)</li>
                <li>5 min: Standing Poses (e.g., warrior I, II, and III)</li>
                <li>5 min: Core Strengthening (e.g., boat pose, plank)</li>
                <li>5 min: Pilates Mat Exercises (e.g., roll-ups, leg circles)</li>
                <li>5 min: Cool Down (e.g., seated forward bend, corpse pose)</li>
            </ul>

            <h3 className="YogaPilatesWomen-subtitle">Do's and Don'ts</h3>
            <div className="YogaPilatesWomen-dos-donts">
                <div className="YogaPilatesWomen-dos">
                    <h4>Do's</h4>
                    <ul>
                        <li>Do listen to your body and avoid pushing through pain.</li>
                        <li>Do focus on your breathing and maintain a steady rhythm.</li>
                        <li>Do incorporate a variety of poses to target different muscle groups.</li>
                        <li>Do practice regularly for best results in flexibility and strength.</li>
                    </ul>
                </div>
                <div className="YogaPilatesWomen-donts">
                    <h4>Don'ts</h4>
                    <ul>
                        <li>Don’t hold your breath during poses—focus on even, controlled breaths.</li>
                        <li>Don’t rush through movements; take your time to ensure proper form.</li>
                        <li>Don’t compare yourself to others—everyone’s flexibility and strength are different.</li>
                        <li>Don’t skip the warm-up and cool-down, as they are crucial for preventing injury.</li>
                    </ul>
                </div>
            </div>

            <h3 className="YogaPilatesWomen-subtitle">Health and Lifestyle Tips</h3>
            <div className="YogaPilatesWomen-tips">
                <ul>
                    <li>Stay hydrated throughout your practice to maintain energy and support muscle function.</li>
                    <li>Incorporate yoga and Pilates into your weekly routine to enhance overall well-being.</li>
                    <li>Combine your practice with a balanced diet rich in nutrients to support physical and mental health.</li>
                    <li>Set realistic goals and track your progress to stay motivated and see improvements.</li>
                </ul>
            </div>

            <div className="YogaPilatesWomen-video">
                <h3 className="YogaPilatesWomen-subtitle">Watch This Yoga and Pilates Routine</h3>
                <iframe
                    title="Yoga and Pilates Routine"
                   src="https://www.youtube.com/embed/NJU8dcCacRY?si=sAgM70oMMHu7FVEW"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="YogaPilatesWomen-video-frame"
                ></iframe>
            </div>
        </div>
    );
};

export default YogaPilatesWomen;