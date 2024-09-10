import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Beginner Workouts (JPEG format)
import IntroBodyweightImage from "../../../../assets/MenWorkoutsSubcategories/intro-bodyweight-men.jpeg";
import EasyCardioImage from "../../../../assets/MenWorkoutsSubcategories/easy-cardio-men.jpeg";
import BasicFlexibilityImage from "../../../../assets/MenWorkoutsSubcategories/basic-flexibility-men.jpeg";

const BeginnerMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Beginner Workouts for Men</h2>
            <p className="men-subcategories-description">
                Simple and effective workouts designed for beginners to build a strong foundation in fitness.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={IntroBodyweightImage}
                            alt="Intro to Bodyweight"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Intro to Bodyweight</h3>
                        <p className="men-subcategories-card-text">
                            A gentle introduction to bodyweight exercises, perfect for beginners.
                        </p>
                        <a
                            href="/build-body-men/beginner/intro-bodyweight"
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
                            src={EasyCardioImage}
                            alt="Easy Cardio"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Easy Cardio</h3>
                        <p className="men-subcategories-card-text">
                            Low-impact cardio workouts to improve your endurance and fitness level.
                        </p>
                        <a
                            href="/build-body-men/beginner/easy-cardio"
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
                            src={BasicFlexibilityImage}
                            alt="Basic Flexibility"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Basic Flexibility</h3>
                        <p className="men-subcategories-card-text">
                            Beginner-friendly stretches to improve your flexibility and prevent injury.
                        </p>
                        <a
                            href="/build-body-men/beginner/basic-flexibility"
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

export default BeginnerMainMen;
