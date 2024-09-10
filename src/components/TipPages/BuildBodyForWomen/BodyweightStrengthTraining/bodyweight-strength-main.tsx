import React from 'react';
import '../subcategories-workouts-main-women.css'; // Use the shared CSS

// Import images for Bodyweight Strength Workouts
import FullBodyStrengthImage from "../../../../assets/WomenWorkoutsSubcategories/full-body-strength-women.jpeg";
import UpperBodyStrengthImage from "../../../../assets/WomenWorkoutsSubcategories/upper-body-strength-women.jpeg";
import LowerBodyStrengthImage from "../../../../assets/WomenWorkoutsSubcategories/lower-body-strength-women.jpeg";

const BodyweightStrengthMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Bodyweight Strength Workouts for Women</h2>
            <p className="women-subcategories-description">
                These workouts are designed to build strength using only your body weight. Perfect for enhancing muscle tone and endurance.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={FullBodyStrengthImage}
                            alt="Full Body Strength"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Full Body Strength</h3>
                        <p className="women-subcategories-card-text">
                            A comprehensive workout targeting all major muscle groups using bodyweight exercises.
                        </p>
                        <a
                            href="/build-body-women/bodyweight-strength/full-body"
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
                            src={UpperBodyStrengthImage}
                            alt="Upper Body Strength"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Upper Body Strength</h3>
                        <p className="women-subcategories-card-text">
                            Focused on building upper body strength using bodyweight movements such as push-ups and planks.
                        </p>
                        <a
                            href="/build-body-women/bodyweight-strength/upper-body"
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
                            src={LowerBodyStrengthImage}
                            alt="Lower Body Strength"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Lower Body Strength</h3>
                        <p className="women-subcategories-card-text">
                            Strengthen your legs and glutes with exercises like squats and lunges.
                        </p>
                        <a
                            href="/build-body-women/bodyweight-strength/lower-body"
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

export default BodyweightStrengthMainWomen;
