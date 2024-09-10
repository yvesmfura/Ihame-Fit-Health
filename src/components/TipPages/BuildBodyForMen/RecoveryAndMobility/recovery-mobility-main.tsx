import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Recovery and Mobility Workouts (JPEG format)
import PostWorkoutStretchingImage from "../../../../assets/MenWorkoutsSubcategories/post-workout-stretching-men.jpeg";
import RelaxationTechniquesImage from "../../../../assets/MenWorkoutsSubcategories/relaxation-techniques-men.jpeg";
import FoamRollingImage from "../../../../assets/MenWorkoutsSubcategories/foam-rolling-men.jpeg";

const RecoveryMobilityMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Recovery and Mobility Workouts for Men</h2>
            <p className="men-subcategories-description">
                These routines focus on recovery and mobility, helping to improve movement, reduce pain, and speed up recovery.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={PostWorkoutStretchingImage}
                            alt="Post-Workout Stretching"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Post-Workout Stretching</h3>
                        <p className="men-subcategories-card-text">
                            Effective stretching routines to enhance flexibility and aid recovery after workouts.
                        </p>
                        <a
                            href="/build-body-men/recovery-mobility/post-workout-stretching"
                            className="men-subcategories-card-link"
                        >
                            Try Now
                        </a>
                    </div>
                </div>

                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={RelaxationTechniquesImage}
                            alt="Relaxation Techniques"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Relaxation Techniques</h3>
                        <p className="men-subcategories-card-text">
                            Techniques to relax and reduce stress, enhancing overall well-being and recovery.
                        </p>
                        <a
                            href="/build-body-men/recovery-mobility/relaxation-techniques"
                            className="men-subcategories-card-link"
                        >
                            Try Now
                        </a>
                    </div>
                </div>

                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={FoamRollingImage}
                            alt="Foam Rolling"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Foam Rolling</h3>
                        <p className="men-subcategories-card-text">
                            Techniques for foam rolling to reduce muscle soreness and improve recovery.
                        </p>
                        <a
                            href="/build-body-men/recovery-mobility/foam-rolling"
                            className="men-subcategories-card-link"
                        >
                            Try Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoveryMobilityMainMen;
