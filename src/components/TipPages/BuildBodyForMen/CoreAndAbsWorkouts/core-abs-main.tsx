import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Core and Abs Workouts (JPEG format)
import AbCircuitsImage from "../../../../assets/MenWorkoutsSubcategories/ab-circuits-men.jpeg";
import CoreStabilityImage from "../../../../assets/MenWorkoutsSubcategories/core-stability-men.jpeg";
import LowerAbsImage from "../../../../assets/MenWorkoutsSubcategories/lower-abs-men.jpeg";

const CoreAbsMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Core and Abs Workouts for Men</h2>
            <p className="men-subcategories-description">
                Targeted exercises to strengthen the core muscles and build a solid foundation for overall fitness and stability.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={AbCircuitsImage}
                            alt="Ab Circuits"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Ab Circuits</h3>
                        <p className="men-subcategories-card-text">
                            A series of ab exercises performed in circuits to strengthen and tone your abdominal muscles.
                        </p>
                        <a
                            href="/build-body-men/core-abs/ab-circuits"
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
                            src={CoreStabilityImage}
                            alt="Core Stability"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Core Stability</h3>
                        <p className="men-subcategories-card-text">
                            Exercises focused on improving your core stability, essential for balance and posture.
                        </p>
                        <a
                            href="/build-body-men/core-abs/core-stability"
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
                            src={LowerAbsImage}
                            alt="Lower Abs"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Lower Abs</h3>
                        <p className="men-subcategories-card-text">
                            Target lower abdominal muscles with these specialized exercises.
                        </p>
                        <a
                            href="/build-body-men/core-abs/lower-abs"
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

export default CoreAbsMainMen;
