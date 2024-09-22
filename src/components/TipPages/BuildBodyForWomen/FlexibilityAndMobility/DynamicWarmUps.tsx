import React from 'react';
import './DynamicWarmUps.css';

const DynamicWarmUpsWomen: React.FC = () => {
    return (
        <div className="Dynamic-Warmup-Women-container">
            <h2 className="Dynamic-Warmup-Women-title">Dynamic Warm-Ups for Women</h2>
            <p className="Dynamic-Warmup-Women-description">
                Dynamic warm-ups are essential for preparing your body for intense physical activity. 
                They help improve flexibility, mobility, and coordination while reducing the risk of injury. 
                For women, dynamic warm-ups can also target specific areas, such as the hips and shoulders, 
                that tend to need more mobility.
            </p>

            <h3 className="Dynamic-Warmup-Women-subtitle">30-Minute Dynamic Warm-Up Plan</h3>
            <ul className="Dynamic-Warmup-Women-plan">
                <li>5 min: Light Cardio (e.g., jogging in place or jumping jacks)</li>
                <li>5 min: Leg Swings (front-to-back and side-to-side)</li>
                <li>5 min: Arm Circles and Shoulder Rotations</li>
                <li>5 min: Hip Circles and Lunges (alternating legs)</li>
                <li>5 min: Walking Knee Hugs and Quad Stretches</li>
                <li>5 min: Dynamic Squats and High Knees</li>
            </ul>

            <h3 className="Dynamic-Warmup-Women-subtitle">Do's and Don'ts</h3>
            <div className="Dynamic-Warmup-Women-dos-donts">
                <div className="Dynamic-Warmup-Women-dos">
                    <h4>Do's</h4>
                    <ul>
                        <li>Do start with light cardio to increase blood flow.</li>
                        <li>Do focus on full-body movements to engage all muscle groups.</li>
                        <li>Do perform exercises that mimic your workout activities.</li>
                        <li>Do stay hydrated and wear comfortable clothing.</li>
                    </ul>
                </div>
                <div className="Dynamic-Warmup-Women-donts">
                    <h4>Don'ts</h4>
                    <ul>
                        <li>Don’t skip warm-ups, especially before intense workouts.</li>
                        <li>Don’t rush through exercises—focus on controlled movements.</li>
                        <li>Don’t stretch cold muscles—start with dynamic, not static stretching.</li>
                        <li>Don’t overextend or force movements, especially if you're new.</li>
                    </ul>
                </div>
            </div>

            <h3 className="Dynamic-Warmup-Women-subtitle">Health and Lifestyle Tips</h3>
            <div className="Dynamic-Warmup-Women-tips">
                <ul>
                    <li>Incorporate regular warm-ups into your routine to improve workout performance and recovery.</li>
                    <li>Eat a balanced diet rich in vitamins and minerals to support muscle health and energy levels.</li>
                    <li>Get enough sleep—rest is key to maintaining energy and muscle recovery.</li>
                    <li>Practice mindfulness and breathing techniques to stay focused during workouts.</li>
                </ul>
            </div>

            <div className="Dynamic-Warmup-Women-video">
                <h3 className="Dynamic-Warmup-Women-subtitle">Watch This Warm-Up Routine</h3>
                <iframe
                    title="Dynamic Warm-Up Routine"
                    src="https://www.youtube.com/embed/LKSC_KujZ4g?si=aNC4bOHLLDTNoiy-"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="Dynamic-Warmup-Women-video-frame"
                ></iframe>
            </div>
        </div>
    );
};

export default DynamicWarmUpsWomen;
