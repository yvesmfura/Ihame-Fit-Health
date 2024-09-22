import React from 'react';
import './LowerBodyCircuits.css';

const LowerBodyCircuitsWomen: React.FC = () => {
  return (
    <div className="lower-body-women-container">
      <h2 className="lower-body-women-title">Lower Body Circuits for Women</h2>
      <p className="lower-body-women-intro">
        Strengthen, tone, and shape your lower body with these carefully designed circuit-based exercises. Whether your goal is fitness or aesthetics, 
        these exercises will help you sculpt strong and well-defined legs, glutes, and thighs.
      </p>

      {/* 30-Minute Lower Body Workout Plan */}
      <div className="lower-body-women-section">
        <h3 className="lower-body-women-subtitle">30-Minute Lower Body Workout Plan</h3>
        <p className="lower-body-women-text">
          This 30-minute lower body workout is designed to maximize your results, focusing on strength, toning, and muscle endurance. Complete each circuit with minimal rest.
        </p>
        <div className="lower-body-women-workout-plan">
          <h4>Warm-Up (5 minutes):</h4>
          <ul className="lower-body-women-list">
            <li>Bodyweight Squats - 2 sets of 15 reps</li>
            <li>Hip Circles - 1 minute per side</li>
            <li>Walking Lunges - 2 sets of 12 reps per leg</li>
          </ul>

          <h4>Workout (20 minutes):</h4>
          <ul className="lower-body-women-list">
            <li><strong>Circuit 1 (Repeat 3x):</strong></li>
            <ul className="lower-body-women-list">
              <li>Squat Jumps - 30 seconds</li>
              <li>Glute Bridges - 20 reps</li>
              <li>Step-ups (using a bench or chair) - 12 reps per leg</li>
            </ul>
            <li><strong>Circuit 2 (Repeat 3x):</strong></li>
            <ul className="lower-body-women-list">
              <li>Bulgarian Split Squats - 10 reps per leg</li>
              <li>Sumo Squats - 15 reps</li>
              <li>Calf Raises - 20 reps</li>
            </ul>
          </ul>

          <h4>Cool Down (5 minutes):</h4>
          <ul className="lower-body-women-list">
            <li>Quad Stretch - 30 seconds per leg</li>
            <li>Hamstring Stretch - 30 seconds per leg</li>
            <li>Seated Glute Stretch - 1 minute per leg</li>
          </ul>
        </div>
      </div>

      {/* Fitness and Aesthetic Purpose Section */}
      <div className="lower-body-women-section">
        <h3 className="lower-body-women-subtitle">Fitness and Aesthetic Goals</h3>
        <p className="lower-body-women-text">
          Lower body circuits are essential for both fitness and aesthetic goals. By regularly working out your lower body, you not only strengthen major muscle 
          groups like the glutes, hamstrings, and quads, but also improve your overall physique, balance, and posture.
        </p>
        <ul className="lower-body-women-list">
          <li>For fitness: Build muscle endurance, increase power, and prevent injuries.</li>
          <li>For aesthetics: Tone and define your legs and glutes, helping you achieve a lean, feminine figure.</li>
        </ul>
      </div>

      {/* Videos for Fitness and Aesthetic Goals */}
      <div className="lower-body-women-videos">
        <div className="lower-body-women-video">
          <h4>Lower Body Circuit for Fitness</h4>
          <iframe
            src="https://www.youtube.com/embed/k6kZTMsBzTk?si=t4VfnPs57B5rHQSz"
            title="Lower Body Fitness Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>Watch this video to improve your lower body strength and endurance.</p>
        </div>

        <div className="lower-body-women-video">
          <h4>Lower Body Circuit for Aesthetics</h4>
          <iframe
            src="https://www.youtube.com/embed/JW2HIBCgTcg?si=805s0OSRkgvlCO7c"
            title="Lower Body Aesthetic Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>Follow this routine to sculpt a feminine, toned figure.</p>
        </div>
      </div>

      {/* Research, Stats, and Facts */}
      <div className="lower-body-women-section">
        <h3 className="lower-body-women-subtitle">Facts and Research</h3>
        <ul className="lower-body-women-list">
          <li><strong>Scientific fact:</strong> Strong glutes and legs improve posture and lower back health.</li>
          <li><strong>Statistical fact:</strong> Women who engage in regular lower body strength training have a 30% lower risk of hip fractures.</li>
          <li><strong>Common fact:</strong> Many women avoid heavy lifting, but it is essential for building muscle definition without adding bulk.</li>
        </ul>
      </div>

      {/* Dos and Don’ts */}
      <div className="lower-body-women-dos-donts">
        <div>
          <h4>Do's</h4>
          <ul>
            <li>Focus on form to prevent injuries.</li>
            <li>Incorporate both strength and cardio for balanced development.</li>
            <li>Increase weights gradually to improve muscle definition.</li>
            <li>Stay consistent to see long-term progress.</li>
          </ul>
        </div>
        <div>
          <h4>Don'ts</h4>
          <ul>
            <li>Avoid skipping warm-ups, as it can lead to injury.</li>
            <li>Don't focus solely on aesthetics without considering functional strength.</li>
            <li>Don't lift too light – challenge yourself to build strength.</li>
          </ul>
        </div>
      </div>

      {/* Common Mistakes and How to Avoid Them */}
      <div className="lower-body-women-section">
        <h3 className="lower-body-women-subtitle">Common Mistakes and How to Avoid Them</h3>
        <ul className="lower-body-women-list">
          <li><strong>Mistake:</strong> Neglecting form – <em>Solution:</em> Slow down and focus on correct movement patterns.</li>
          <li><strong>Mistake:</strong> Not balancing strength and cardio – <em>Solution:</em> Integrate both into your routine for optimal results.</li>
          <li><strong>Mistake:</strong> Overtraining without rest – <em>Solution:</em> Allow time for recovery to avoid injury and burnout.</li>
        </ul>
      </div>
    </div>
  );
};

export default LowerBodyCircuitsWomen;