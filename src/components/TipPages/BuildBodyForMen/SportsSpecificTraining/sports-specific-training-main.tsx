import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Sports-Specific Training Workouts (JPEG format)
import SoccerTrainingImage from "../../../../assets/MenWorkoutsSubcategories/soccer-training-men.jpeg";
import BasketballTrainingImage from "../../../../assets/MenWorkoutsSubcategories/basketball-training-men.jpeg";
import SwimmingTrainingImage from "../../../../assets/MenWorkoutsSubcategories/swimming-training-men.jpeg";

const SportsSpecificTrainingMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Sports-Specific Training for Men</h2>
            <p className="men-subcategories-description">
                Specialized workouts designed to enhance performance in specific sports by improving agility, strength, and endurance.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={SoccerTrainingImage}
                            alt="Soccer Training"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Soccer Training</h3>
                        <p className="men-subcategories-card-text">
                            Training routines focused on improving soccer skills, speed, and agility.
                        </p>
                        <a
                            href="/men/sports-specific-training/soccer"
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
                            src={BasketballTrainingImage}
                            alt="Basketball Training"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Basketball Training</h3>
                        <p className="men-subcategories-card-text">
                            Workouts designed to enhance your basketball skills, strength, and endurance.
                        </p>
                        <a
                            href="/men/sports-specific-training/basketball"
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
                            src={SwimmingTrainingImage}
                            alt="Swimming Training"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Swimming Training</h3>
                        <p className="men-subcategories-card-text">
                            Specialized exercises to boost your swimming performance and technique.
                        </p>
                        <a
                            href="/men/sports-specific-training/swimming"
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

export default SportsSpecificTrainingMainMen;
