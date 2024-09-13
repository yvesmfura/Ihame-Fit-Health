import React, { useState } from 'react';
import './CoreAndPelvicExercises.css';

const CoreAndPelvicExercisesWomen: React.FC = () => {
    const [showPrenatalPlan, setShowPrenatalPlan] = useState(false);
    const [showPostnatalPlan, setShowPostnatalPlan] = useState(false);

    return (
        <div className="core-and-pelvic-exercises-women-container">
            <h2 className="core-and-pelvic-exercises-women-title">Core and Pelvic Exercises for Pre & Post-Natal Women</h2>
            <p className="core-and-pelvic-exercises-women-intro">
                Gentle exercises to strengthen your core and pelvic floor, designed to support you during pregnancy and after childbirth. These routines help improve stability, posture, and overall well-being.
            </p>

            {/* Benefits */}
            <section className="core-and-pelvic-exercises-women-benefits">
                <h3 className="core-and-pelvic-exercises-women-section-title">Benefits of Core & Pelvic Exercises</h3>
                <ul className="core-and-pelvic-exercises-women-list">
                    <li>Helps reduce lower back pain during pregnancy and postpartum recovery.</li>
                    <li>Supports pelvic floor health, reducing the risk of urinary incontinence and pelvic organ prolapse.</li>
                    <li>Improves core strength to support your body as it changes during pregnancy and heals after childbirth.</li>
                    <li>Aids in the recovery of diastasis recti by re-engaging abdominal muscles.</li>
                </ul>
            </section>

            {/* 30-Minute Prenatal Workout Plan */}
            <section className="core-and-pelvic-exercises-women-prenatal-plan">
                <h3 className="core-and-pelvic-exercises-women-section-title" onClick={() => setShowPrenatalPlan(!showPrenatalPlan)}>
                    30-Minute Prenatal Workout Plan {showPrenatalPlan ? '-' : '+'}
                </h3>
                {showPrenatalPlan && (
                    <ol className="core-and-pelvic-exercises-women-plan-list">
                        <li><strong>Warm-Up (5 minutes):</strong> Gentle walking in place and arm circles.</li>
                        <li><strong>Pelvic Tilts (5 minutes):</strong> Lie on your back with knees bent, gently tilt pelvis upward. Hold for 5 seconds. Repeat 10 times.</li>
                        <li><strong>Kegels (5 minutes):</strong> Contract pelvic floor muscles, hold for 5 seconds, release. Repeat 10-15 times.</li>
                        <li><strong>Cat-Cow Stretch (5 minutes):</strong> On all fours, alternate between arching and rounding your back. Repeat 10 times.</li>
                        <li><strong>Side-Lying Leg Lifts (5 minutes):</strong> Lie on your side and lift your top leg up. Repeat 10 times on each side.</li>
                        <li><strong>Cool Down (5 minutes):</strong> Gentle stretching, focusing on your back, legs, and shoulders.</li>
                    </ol>
                )}
            </section>

            {/* 30-Minute Postnatal Workout Plan */}
            <section className="core-and-pelvic-exercises-women-postnatal-plan">
                <h3 className="core-and-pelvic-exercises-women-section-title" onClick={() => setShowPostnatalPlan(!showPostnatalPlan)}>
                    30-Minute Postnatal Workout Plan {showPostnatalPlan ? '-' : '+'}
                </h3>
                {showPostnatalPlan && (
                    <ol className="core-and-pelvic-exercises-women-plan-list">
                        <li><strong>Warm-Up (5 minutes):</strong> Gentle marching in place and shoulder rolls.</li>
                        <li><strong>Pelvic Bridges (5 minutes):</strong> Lie on your back, lift hips and hold for 10 seconds. Repeat 10 times.</li>
                        <li><strong>Kegels (5 minutes):</strong> Contract pelvic floor muscles, hold for 5 seconds, release. Repeat 10-15 times.</li>
                        <li><strong>Bird Dog (5 minutes):</strong> On all fours, extend one arm and the opposite leg, hold for 5 seconds. Repeat 10 times per side.</li>
                        <li><strong>Side Plank (5 minutes):</strong> Hold a side plank on your knees for 10 seconds. Repeat 5 times on each side.</li>
                        <li><strong>Cool Down (5 minutes):</strong> Gentle stretching, focusing on your core and legs.</li>
                    </ol>
                )}
            </section>

            {/* Medical Facts */}
            <section className="core-and-pelvic-exercises-women-medical-facts">
                <h3 className="core-and-pelvic-exercises-women-section-title">Medical Facts</h3>
                <ul className="core-and-pelvic-exercises-women-list">
                    <li>Pelvic floor exercises during pregnancy help reduce delivery complications.</li>
                    <li>Postnatal core exercises enhance recovery time and lower long-term back pain risks.</li>
                    <li>Pelvic exercises are safe during all trimesters and are recommended by health professionals.</li>
                </ul>
            </section>

            {/* Research Findings */}
            <section className="core-and-pelvic-exercises-women-research">
                <h3 className="core-and-pelvic-exercises-women-section-title">Research Findings</h3>
                <ul className="core-and-pelvic-exercises-women-list">
                    <li>Studies show regular pelvic floor exercises during pregnancy can reduce labor time and complications.</li>
                    <li>Postpartum women engaging in core exercises recover faster and face fewer issues like diastasis recti.</li>
                    <li>Research suggests prenatal exercises help reduce postpartum depression and improve overall mood.</li>
                </ul>
            </section>

            {/* Do's and Don'ts */}
            <section className="core-and-pelvic-exercises-women-dos-donts">
                <h3 className="core-and-pelvic-exercises-women-section-title">Do's and Don'ts</h3>
                <ul className="core-and-pelvic-exercises-women-list">
                    <li><strong>Do:</strong> Listen to your body and take breaks as needed.</li>
                    <li><strong>Do:</strong> Consult with your doctor before starting any exercise routine.</li>
                    <li><strong>Don't:</strong> Overexert yourself, especially during the later stages of pregnancy.</li>
                    <li><strong>Don't:</strong> Engage in exercises that involve lying flat on your back after the first trimester.</li>
                </ul>
            </section>

            {/* Common Mistakes and Solutions */}
            <section className="core-and-pelvic-exercises-women-mistakes-solutions">
                <h3 className="core-and-pelvic-exercises-women-section-title">Common Mistakes and Solutions</h3>
                <ul className="core-and-pelvic-exercises-women-list">
                    <li><strong>Mistake:</strong> Holding your breath during exercises.<br/>
                        <strong>Solution:</strong> Breathe steadily and rhythmically throughout.
                    </li>
                    <li><strong>Mistake:</strong> Over-engaging the core muscles, leading to strain.<br/>
                        <strong>Solution:</strong> Engage your core gently, ensuring you're not straining your muscles.
                    </li>
                    <li><strong>Mistake:</strong> Skipping warm-ups or cool-downs.<br/>
                        <strong>Solution:</strong> Always include a gentle warm-up and cool-down to avoid injuries.
                    </li>
                </ul>
            </section>

            {/* Health Tips */}
            <section className="core-and-pelvic-exercises-women-health-tips">
                <h3 className="core-and-pelvic-exercises-women-section-title">Health Tips</h3>
                <ul className="core-and-pelvic-exercises-women-list">
                    <li>Stay hydrated before, during, and after your workouts.</li>
                    <li>Incorporate a balanced diet rich in vitamins and minerals to support recovery and overall health.</li>
                    <li>Practice good posture daily to alleviate back strain and improve core strength.</li>
                </ul>
            </section>

            {/* Lifestyle Tips */}
            <section className="core-and-pelvic-exercises-women-lifestyle-tips">
                <h3 className="core-and-pelvic-exercises-women-section-title">Lifestyle Tips for Women</h3>
                <ul className="core-and-pelvic-exercises-women-list">
                    <li>Incorporate mindfulness and meditation into your routine to reduce stress during pregnancy and postpartum.</li>
                    <li>Ensure you get adequate sleep, as rest is crucial for healing and energy levels.</li>
                    <li>Prioritize self-care by setting aside time for relaxation and hobbies you enjoy.</li>
                </ul>
            </section>

            {/* Video Section */}
            <section className="core-and-pelvic-exercises-women-video">
                <h3 className="core-and-pelvic-exercises-women-section-title">Watch Exercise Demonstrations</h3>
                <div className="core-and-pelvic-exercises-women-video-list">
                    <h4>Prenatal Exercises Video</h4>
                    <iframe 
                        className="core-and-pelvic-exercises-women-video-frame"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/example-prenatal" 
                        title="Prenatal Core Exercises" 
                        allowFullScreen
                    ></iframe>

                    <h4>Postnatal Exercises Video</h4>
                    <iframe 
                        className="core-and-pelvic-exercises-women-video-frame"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/example-postnatal" 
                        title="Postnatal Core Exercises" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default CoreAndPelvicExercisesWomen;