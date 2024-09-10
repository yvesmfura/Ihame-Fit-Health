import React from 'react';
import '../subcategories-workouts-main-women.css'; // Use the shared CSS

// Import images for Beginner Workouts
import IntroBodyweightImage from "../../../../assets/WomenWorkoutsSubcategories/intro-bodyweight-women.jpeg";
import EasyCardioImage from "../../../../assets/WomenWorkoutsSubcategories/easy-cardio-women.jpeg";
import BasicFlexibilityImage from "../../../../assets/WomenWorkoutsSubcategories/basic-flexibility-women.jpeg";

const BeginnerMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Beginner Workouts for Women</h2>
            <p className="women-subcategories-description">
                Simple and effective workouts designed for beginners to build a strong foundation in fitness.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={IntroBodyweightImage}
                            alt="Intro to Bodyweight"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Intro to Bodyweight</h3>
                        <p className="women-subcategories-card-text">
                            A gentle introduction to bodyweight exercises, perfect for beginners.
                        </p>
                        <a
                            href="/build-body-women/beginner/intro-bodyweight"
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
                            src={EasyCardioImage}
                            alt="Easy Cardio"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Easy Cardio</h3>
                        <p className="women-subcategories-card-text">
                            Low-impact cardio workouts to improve your endurance and fitness level.
                        </p>
                        <a
                            href="/build-body-women/beginner/easy-cardio"
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
                            src={BasicFlexibilityImage}
                            alt="Basic Flexibility"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Basic Flexibility</h3>
                        <p className="women-subcategories-card-text">
                            Beginner-friendly stretches to improve your flexibility and prevent injury.
                        </p>
                        <a
                            href="/build-body-women/beginner/basic-flexibility"
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

export default BeginnerMainWomen;
