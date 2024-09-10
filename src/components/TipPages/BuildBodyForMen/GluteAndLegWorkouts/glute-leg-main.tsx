import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Glute and Leg Workouts (JPEG format)
import GluteActivationImage from "../../../../assets/MenWorkoutsSubcategories/glute-activation-men.jpeg";
import LegToningImage from "../../../../assets/MenWorkoutsSubcategories/leg-toning-men.jpeg";
import LowerBodyCircuitsImage from "../../../../assets/MenWorkoutsSubcategories/lower-body-circuits-men.jpeg";

const GluteLegMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Glute and Leg Workouts for Men</h2>
            <p className="men-subcategories-description">
                Exercises focused on strengthening and toning the glutes and legs, essential for lower body power and stability.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={GluteActivationImage}
                            alt="Glute Activation"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Glute Activation</h3>
                        <p className="men-subcategories-card-text">
                            Targeted exercises to activate and strengthen the glutes for better performance and muscle tone.
                        </p>
                        <a
                            href="/build-body-men/glute-leg/glute-activation"
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
                            src={LegToningImage}
                            alt="Leg Toning"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Leg Toning</h3>
                        <p className="men-subcategories-card-text">
                            Effective routines to tone and sculpt the legs, enhancing strength and definition.
                        </p>
                        <a
                            href="/build-body-men/glute-leg/leg-toning"
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
                            src={LowerBodyCircuitsImage}
                            alt="Lower Body Circuits"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Lower Body Circuits</h3>
                        <p className="men-subcategories-card-text">
                            Circuit-based workouts to target the entire lower body, improving endurance and strength.
                        </p>
                        <a
                            href="/build-body-men/glute-leg/lower-body-circuits"
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

export default GluteLegMainMen;
