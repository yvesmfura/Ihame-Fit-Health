import React from 'react';
import './GluteActivation.css';

const GluteActivationWomen: React.FC = () => {
  return (
    <div className="glute-activation-women-container">
      <h2 className="glute-activation-women-title">Glute Activation Workouts for Women</h2>

      {/* Importance of Glute Activation */}
      <section className="glute-activation-women-section">
        <h3 className="glute-activation-women-subtitle">Importance of Glute Activation</h3>
        <p className="glute-activation-women-text">
          <strong>Fitness Purpose:</strong> Activating your glutes before workouts is crucial for improving strength, enhancing performance, and preventing injury. It helps engage the muscles properly, which leads to better squats, lunges, and other lower-body exercises.
        </p>
        <p className="glute-activation-women-text">
          <strong>Aesthetic Purpose:</strong> For those aiming for a toned, shapely look, glute activation helps in sculpting and lifting the glutes, contributing to a more aesthetic figure. It promotes muscle growth in the right areas, giving you a well-rounded silhouette.
        </p>
      </section>

      {/* 30-Minute Workout Plan */}
      <section className="glute-activation-women-section">
        <h3 className="glute-activation-women-subtitle">30-Minute Glute Activation Workout Plan</h3>
        <ul className="glute-activation-women-workout-list">
          <li>5 minutes: Dynamic warm-up (leg swings, bodyweight squats)</li>
          <li>5 minutes: Glute bridges (3 sets of 15 reps)</li>
          <li>5 minutes: Clamshells (3 sets of 12 reps per side)</li>
          <li>5 minutes: Lateral band walks (3 sets of 20 steps)</li>
          <li>5 minutes: Donkey kicks (3 sets of 15 reps per leg)</li>
          <li>5 minutes: Fire hydrants (3 sets of 12 reps per side)</li>
        </ul>
      </section>

      {/* Health and Lifestyle Tips */}
      <section className="glute-activation-women-section">
        <h3 className="glute-activation-women-subtitle">Health & Lifestyle Tips</h3>
        <div className="glute-activation-women-text">
          <strong>Fitness Oriented:</strong> Prioritize a balanced diet rich in protein and healthy fats to fuel muscle growth. Stay consistent with strength training and recovery routines. Incorporate mobility exercises to avoid tightness.
        </div>
        <div className="glute-activation-women-text">
          <strong>Aesthetic Oriented:</strong> Along with a well-rounded fitness routine, maintain proper hydration and skin care for toned glutes and a smooth appearance. A balanced diet helps avoid unnecessary fat gain.
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="glute-activation-women-section">
        <h3 className="glute-activation-women-subtitle">Do's and Don'ts</h3>
        <div className="glute-activation-women-dos-donts">
          <div>
            <h4 className="glute-activation-women-text">Do's:</h4>
            <ul className="glute-activation-women-list">
              <li>Warm up properly before workouts.</li>
              <li>Focus on form and muscle engagement.</li>
              <li>Incorporate progressive overload to see results.</li>
            </ul>
          </div>
          <div>
            <h4 className="glute-activation-women-text">Don'ts:</h4>
            <ul className="glute-activation-women-list">
              <li>Don't neglect recovery and stretching.</li>
              <li>Don't use heavy weights without proper form.</li>
              <li>Don't rely solely on cardio for shaping glutes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="glute-activation-women-section">
        <h3 className="glute-activation-women-subtitle">Common Mistakes</h3>
        <ul className="glute-activation-women-list">
          <li>Not activating the glutes before intense lower-body exercises.</li>
          <li>Over-relying on quads and hamstrings during exercises like squats.</li>
          <li>Skipping unilateral exercises (single-leg work) which help in muscle balance.</li>
        </ul>
      </section>

      {/* Statistical Facts */}
      <section className="glute-activation-women-section">
        <h3 className="glute-activation-women-subtitle">Statistical Facts</h3>
        <p className="glute-activation-women-text">
          According to fitness experts, around 60% of women tend to underutilize their glutes during workouts, relying on other muscle groups instead. Proper glute engagement can improve lower body strength by up to 25%.
        </p>
      </section>

      {/* Guidance Videos */}
      <section className="glute-activation-women-section">
        <h3 className="glute-activation-women-subtitle">Guidance Videos</h3>
        <div className="glute-activation-women-videos">
          <div className="glute-activation-women-video">
            <h4 className="glute-activation-women-text">Glute Activation for Fitness</h4>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zpO4fCquXRk?si=oQniG9L8agccmoIw"
              title="Glute Activation for Fitness"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="glute-activation-women-text">This video focuses on improving strength and performance through proper glute activation techniques.</p>
          </div>

          <div className="glute-activation-women-video">
            <h4 className="glute-activation-women-text">Glute Activation for Aesthetic</h4>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JW2HIBCgTcg?si=qzvXv5Oe6Hz3Ubwd"
              title="Glute Activation for Aesthetic"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="glute-activation-women-text">This video is designed for those aiming for glute sculpting and toning for aesthetic purposes.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GluteActivationWomen;