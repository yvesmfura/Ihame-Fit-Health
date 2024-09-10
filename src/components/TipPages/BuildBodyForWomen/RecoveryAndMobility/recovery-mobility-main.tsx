import React from 'react';
import '../subcategories-workouts-main-women.css'; // Shared CSS for women's workouts

// Import images for Recovery and Mobility Workouts for Women
import PostWorkoutStretchingImage from "../../../../assets/WomenWorkoutsSubcategories/post-workout-stretching-women.jpeg";
import RelaxationTechniquesImage from "../../../../assets/WomenWorkoutsSubcategories/relaxation-techniques-women.jpeg";
import FoamRollingImage from "../../../../assets/WomenWorkoutsSubcategories/foam-rolling-women.jpeg";

const RecoveryMobilityMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Recovery and Mobility Workouts for Women</h2>
            <p className="women-subcategories-description">
                These routines focus on recovery and mobility, helping to improve movement, reduce pain, and speed up recovery.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={PostWorkoutStretchingImage}
                            alt="Post-Workout Stretching"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Post-Workout Stretching</h3>
                        <p className="women-subcategories-card-text">
                            A series of stretches to relax muscles, improve flexibility, and aid recovery after intense workouts.
                        </p>
                        <a
                            href="/build-body-women/recovery-mobility/post-workout-stretching"
                            className="women-subcategories-card-link"
                        >
                            Try Now
                        </a>
                    </div>
                </div>

                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={RelaxationTechniquesImage}
                            alt="Relaxation Techniques"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Relaxation Techniques</h3>
                        <p className="women-subcategories-card-text">
                            Techniques designed to relieve tension, reduce stress, and improve your overall mental and physical relaxation.
                        </p>
                        <a
                            href="/build-body-women/recovery-mobility/relaxation-techniques"
                            className="women-subcategories-card-link"
                        >
                            Try Now
                        </a>
                    </div>
                </div>

                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={FoamRollingImage}
                            alt="Foam Rolling"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Foam Rolling</h3>
                        <p className="women-subcategories-card-text">
                            Use foam rollers to release muscle tightness, enhance blood flow, and promote faster recovery.
                        </p>
                        <a
                            href="/build-body-women/recovery-mobility/foam-rolling"
                            className="women-subcategories-card-link"
                        >
                            Try Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoveryMobilityMainWomen;
