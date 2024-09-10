import React from 'react';
import '../subcategories-workouts-main-women.css';

// Import images for Functional Training Workouts for Women
import BalanceCoordinationImage from "../../../../assets/WomenWorkoutsSubcategories/balance-coordination-women.jpeg";
import EverydayStrengthImage from "../../../../assets/WomenWorkoutsSubcategories/everyday-strength-women.jpeg";
import AgilityDrillsImage from "../../../../assets/WomenWorkoutsSubcategories/agility-drills-women.jpeg";

const FunctionalMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Functional Training Workouts for Women</h2>
            <p className="women-subcategories-description">
                Workouts designed to improve everyday movements by focusing on strength, balance, and flexibility.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={BalanceCoordinationImage}
                            alt="Balance and Coordination"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Balance and Coordination</h3>
                        <p className="women-subcategories-card-text">
                            Exercises to enhance your balance and coordination, helping improve everyday movement.
                        </p>
                        <a
                            href="/build-body-women/functional/balance-coordination"
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
                            src={EverydayStrengthImage}
                            alt="Everyday Strength"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Everyday Strength</h3>
                        <p className="women-subcategories-card-text">
                            Strength-building exercises focused on improving functional movements for daily life.
                        </p>
                        <a
                            href="/build-body-women/functional/everyday-strength"
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
                            src={AgilityDrillsImage}
                            alt="Agility Drills"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Agility Drills</h3>
                        <p className="women-subcategories-card-text">
                            Agility exercises to improve speed, coordination, and reaction time.
                        </p>
                        <a
                            href="/build-body-women/functional/agility-drills"
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

export default FunctionalMainWomen;
