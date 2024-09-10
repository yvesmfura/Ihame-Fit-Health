import React from 'react';
import '../subcategories-workouts-main-women.css';

// Import images for Cardio Workouts
import HIITImage from "../../../../assets/WomenWorkoutsSubcategories/hiit-women.jpeg";
import CardioCircuitsImage from "../../../../assets/WomenWorkoutsSubcategories/cardio-circuits-women.jpeg";
import JumpRopeImage from "../../../../assets/WomenWorkoutsSubcategories/jump-rope-women.jpeg";

const CardioMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Cardio Workouts for Women</h2>
            <p className="women-subcategories-description">
                Cardio exercises designed to boost cardiovascular health and promote fat burning. Ideal for enhancing overall fitness and stamina.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={HIITImage}
                            alt="HIIT Workouts"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">HIIT Workouts</h3>
                        <p className="women-subcategories-card-text">
                            High-Intensity Interval Training (HIIT) to boost fat burning and improve endurance.
                        </p>
                        <a
                            href="/build-body-women/cardio/hiit"
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
                            src={CardioCircuitsImage}
                            alt="Cardio Circuits"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Cardio Circuits</h3>
                        <p className="women-subcategories-card-text">
                            Circuit-style cardio exercises to keep your heart rate up and burn calories efficiently.
                        </p>
                        <a
                            href="/build-body-women/cardio/cardio-circuits"
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
                            src={JumpRopeImage}
                            alt="Jump Rope"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Jump Rope</h3>
                        <p className="women-subcategories-card-text">
                            A fun and effective cardio workout using a jump rope to enhance coordination and burn calories.
                        </p>
                        <a
                            href="/build-body-women/cardio/jump-rope"
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

export default CardioMainWomen;