import React from 'react';
import '../subcategories-workouts-main-women.css';

// Import images for Glute and Leg Workouts for Women with .jpeg extension
import GluteActivationImage from "../../../../assets/WomenWorkoutsSubcategories/glute-activation-women.jpeg";
import LegToningImage from "../../../../assets/WomenWorkoutsSubcategories/leg-toning-women.jpeg";
import LowerBodyCircuitsImage from "../../../../assets/WomenWorkoutsSubcategories/lower-body-circuits-women.jpeg";

const GluteLegMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Glute and Leg Workouts for Women</h2>
            <p className="women-subcategories-description">
                Strengthen and tone your glutes and legs with these targeted exercises. Great for building lower body power and stability.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={GluteActivationImage}
                            alt="Glute Activation"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Glute Activation</h3>
                        <p className="women-subcategories-card-text">
                            Effective exercises to activate and strengthen your glutes, enhancing lower body performance.
                        </p>
                        <a
                            href="/build-body-women/glute-leg/glute-activation"
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
                            src={LegToningImage}
                            alt="Leg Toning"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Leg Toning</h3>
                        <p className="women-subcategories-card-text">
                            Exercises designed to tone and shape your legs, improving strength and endurance.
                        </p>
                        <a
                            href="/build-body-women/glute-leg/leg-toning"
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
                            src={LowerBodyCircuitsImage}
                            alt="Lower Body Circuits"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Lower Body Circuits</h3>
                        <p className="women-subcategories-card-text">
                            Circuit workouts that target the entire lower body, improving strength, tone, and balance.
                        </p>
                        <a
                            href="/build-body-women/glute-leg/lower-body-circuits"
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

export default GluteLegMainWomen;
