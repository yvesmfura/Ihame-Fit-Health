import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Bodyweight Strength Training (JPEG format)
import FullBodyStrengthImage from "../../../../assets/MenWorkoutsSubcategories/full-body-strength-men.jpeg";
import UpperBodyStrengthImage from "../../../../assets/MenWorkoutsSubcategories/upper-body-strength-men.jpeg";
import LowerBodyStrengthImage from "../../../../assets/MenWorkoutsSubcategories/lower-body-strength-men.jpeg";

const BodyweightStrengthMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Bodyweight Strength Training for Men</h2>
            <p className="men-subcategories-description">
                Effective bodyweight exercises to build strength, endurance, and flexibility.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={FullBodyStrengthImage}
                            alt="Full Body Strength"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Full Body Strength</h3>
                        <p className="men-subcategories-card-text">
                            A full-body bodyweight workout designed to target all major muscle groups.
                        </p>
                        <a
                            href="/build-body-men/bodyweight-strength/full-body"
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
                            src={UpperBodyStrengthImage}
                            alt="Upper Body Strength"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Upper Body Strength</h3>
                        <p className="men-subcategories-card-text">
                            Focus on building upper body strength with these bodyweight exercises.
                        </p>
                        <a
                            href="/build-body-men/bodyweight-strength/upper-body"
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
                            src={LowerBodyStrengthImage}
                            alt="Lower Body Strength"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Lower Body Strength</h3>
                        <p className="men-subcategories-card-text">
                            Strengthen your lower body with these effective bodyweight movements.
                        </p>
                        <a
                            href="/build-body-men/bodyweight-strength/lower-body"
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

export default BodyweightStrengthMainMen;
