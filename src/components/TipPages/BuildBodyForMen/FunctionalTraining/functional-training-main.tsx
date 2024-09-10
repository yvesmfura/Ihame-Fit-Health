import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Functional Training Workouts (JPEG format)
import BalanceCoordinationImage from "../../../../assets/MenWorkoutsSubcategories/balance-coordination-men.jpeg";
import EverydayStrengthImage from "../../../../assets/MenWorkoutsSubcategories/everyday-strength-men.jpeg";
import AgilityDrillsImage from "../../../../assets/MenWorkoutsSubcategories/agility-drills-men.jpeg";

const FunctionalMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Functional Training Workouts for Men</h2>
            <p className="men-subcategories-description">
                Workouts designed to improve everyday movements by focusing on strength, balance, and flexibility.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={BalanceCoordinationImage}
                            alt="Balance & Coordination"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Balance & Coordination</h3>
                        <p className="men-subcategories-card-text">
                            Exercises to enhance balance and coordination, crucial for overall functional fitness.
                        </p>
                        <a
                            href="/build-body-men/functional/balance-coordination"
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
                            src={EverydayStrengthImage}
                            alt="Everyday Strength"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Everyday Strength</h3>
                        <p className="men-subcategories-card-text">
                            Functional strength exercises to help with daily activities and improve overall strength.
                        </p>
                        <a
                            href="/build-body-men/functional/everyday-strength"
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
                            src={AgilityDrillsImage}
                            alt="Agility Drills"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Agility Drills</h3>
                        <p className="men-subcategories-card-text">
                            Drills designed to improve agility and speed, enhancing functional movement patterns.
                        </p>
                        <a
                            href="/build-body-men/functional/agility-drills"
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

export default FunctionalMainMen;
