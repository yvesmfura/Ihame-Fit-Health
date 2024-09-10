import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Cardio Workouts (JPEG format)
import HIITImage from "../../../../assets/MenWorkoutsSubcategories/hiit-men.jpeg";
import CardioCircuitsImage from "../../../../assets/MenWorkoutsSubcategories/cardio-circuits-men.jpeg";
import JumpRopeImage from "../../../../assets/MenWorkoutsSubcategories/jump-rope-men.jpeg";

const CardioMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Cardio Workouts for Men</h2>
            <p className="men-subcategories-description">
                Cardio workouts designed to enhance cardiovascular endurance and promote fat loss. Perfect for boosting overall stamina and heart health.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={HIITImage}
                            alt="High-Intensity Interval Training (HIIT)"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">High-Intensity Interval Training (HIIT)</h3>
                        <p className="men-subcategories-card-text">
                            Short bursts of intense exercise followed by brief recovery periods, designed to burn fat efficiently.
                        </p>
                        <a
                            href="/build-body-men/cardio/hiit"
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
                            src={CardioCircuitsImage}
                            alt="Cardio Circuits"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Cardio Circuits</h3>
                        <p className="men-subcategories-card-text">
                            Perform a series of exercises targeting different muscle groups with minimal rest between sets.
                        </p>
                        <a
                            href="/build-body-men/cardio/cardio-circuits"
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
                            src={JumpRopeImage}
                            alt="Jump Rope Exercises"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Jump Rope Exercises</h3>
                        <p className="men-subcategories-card-text">
                            A simple but effective cardio workout that helps to improve coordination and burn calories.
                        </p>
                        <a
                            href="/build-body-men/cardio/jump-rope"
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

export default CardioMainMen;
