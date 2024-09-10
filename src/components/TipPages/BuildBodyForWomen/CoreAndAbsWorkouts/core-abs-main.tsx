import React from 'react';
import '../subcategories-workouts-main-women.css';

// Import images for Core and Abs Workouts
import AbCircuitsImage from "../../../../assets/WomenWorkoutsSubcategories/ab-circuits-women.jpeg";
import CoreStabilityImage from "../../../../assets/WomenWorkoutsSubcategories/core-stability-women.jpeg";
import LowerAbsImage from "../../../../assets/WomenWorkoutsSubcategories/lower-abs-women.jpeg";

const CoreAbsMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Core and Abs Workouts for Women</h2>
            <p className="women-subcategories-description">
                Strengthen and tone your core with these targeted exercises. Great for improving posture and stability.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={AbCircuitsImage}
                            alt="Ab Circuits"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Ab Circuits</h3>
                        <p className="women-subcategories-card-text">
                            High-intensity ab circuits to strengthen your core and tone your abs.
                        </p>
                        <a
                            href="/build-body-women/core-abs/ab-circuits"
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
                            src={CoreStabilityImage}
                            alt="Core Stability"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Core Stability</h3>
                        <p className="women-subcategories-card-text">
                            Exercises to improve core stability and balance, essential for overall fitness.
                        </p>
                        <a
                            href="/build-body-women/core-abs/core-stability"
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
                            src={LowerAbsImage}
                            alt="Lower Abs"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Lower Abs</h3>
                        <p className="women-subcategories-card-text">
                            Focused exercises to target the lower abdominal muscles for a toned, strong core.
                        </p>
                        <a
                            href="/build-body-women/core-abs/lower-abs"
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

export default CoreAbsMainWomen;
