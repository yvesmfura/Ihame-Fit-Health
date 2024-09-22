import React from 'react';
import './YogaAndPilates.css';

const YogaPilatesMen: React.FC = () => {
    return (
        <div className="yoga-pilates-men-container">
            <h2>Yoga and Pilates for Men</h2>
            <p>Focus on flexibility, core strength, and mindfulness with these yoga and Pilates exercises, suitable for all levels. This 30-minute session will help improve posture, reduce stress, and strengthen muscles.</p>
            
            <h3>30-Minute Yoga & Pilates Workout Plan</h3>
            <ol>
                <li><strong>5-minute Warm-up (Dynamic Stretching)</strong>: Start with light stretches focusing on the hips, hamstrings, shoulders, and spine.</li>
                <li><strong>5-minute Sun Salutations (Yoga)</strong>: Flow through sun salutations to improve flexibility and blood circulation.</li>
                <li><strong>5-minute Plank and Side Plank (Pilates)</strong>: Engage the core with a 1-minute plank followed by 30-second side planks on each side.</li>
                <li><strong>10-minute Vinyasa Flow (Yoga)</strong>: Focus on slow, mindful movements to stretch the entire body and increase flexibility.</li>
                <li><strong>5-minute Pilates Bridge and Leg Lifts</strong>: Strengthen the core and glutes with Pilates bridges and controlled leg lifts.</li>
            </ol>

            <h3>Do's and Don'ts</h3>
            <ul>
                <li><strong>Do:</strong> Focus on breathing with every movement, maintain proper posture, and listen to your body.</li>
                <li><strong>Do:</strong> Modify exercises if needed, especially if you're a beginner.</li>
                <li><strong>Don't:</strong> Push yourself into uncomfortable positions that might lead to injury.</li>
                <li><strong>Don't:</strong> Rush through exercises; maintain control and focus on form.</li>
            </ul>

            <h3>Statistical Facts</h3>
            <ul>
                <li>Studies show that yoga improves flexibility by up to 35% after 8 weeks of practice.</li>
                <li>Pilates is proven to reduce back pain and improve core strength in as little as 4 weeks.</li>
                <li>Men who practice yoga report a 23% reduction in stress and anxiety.</li>
            </ul>

            <h3>Video Guide</h3>
            <div className="yoga-pilates-men-video">
                <iframe 
                    src="https://www.youtube.com/embed/SS3WT91y48I?si=PcdU-X5naxuCDzd5" 
                    title="Yoga and Pilates Workout for Men" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default YogaPilatesMen;