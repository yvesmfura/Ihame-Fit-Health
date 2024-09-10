import React from 'react';
import '../subcategories-workouts-main-women.css';

// Import images for each workout
import PrenatlImage from "../../../../assets/WomenWorkoutsSubcategories/prenatal-workouts-women.jpeg";
import PostnatalImage from "../../../../assets/WomenWorkoutsSubcategories/postnatal-workouts-women.jpeg";
import CoreAndPelvicImage from "../../../../assets/WomenWorkoutsSubcategories/core-pelvic-exercises-women.jpeg";

const PrePostNatalWorkoutsMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Pre/Post-Natal Workouts for Women</h2>
            <p className="women-subcategories-description">
                These workouts are specially designed for expectant and new mothers to maintain fitness and support recovery.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={PrenatlImage}
                            alt="Prenatal Workouts"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Prenatal Workouts</h3>
                        <p className="women-subcategories-card-text">
                            Safe and effective workouts tailored for expectant mothers to maintain strength and wellness during pregnancy.
                        </p>
                        <a
                            href="/build-body-women/pre-post-natal-workouts/prenatal"
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
                            src={PostnatalImage}
                            alt="Postnatal Workouts"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Postnatal Workouts</h3>
                        <p className="women-subcategories-card-text">
                            Designed to help new mothers recover, regain strength, and feel energized after childbirth.
                        </p>
                        <a
                            href="/build-body-women/pre-post-natal-workouts/postnatal"
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
                            src={CoreAndPelvicImage}
                            alt="Core and Pelvic Floor"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Core & Pelvic Floor</h3>
                        <p className="women-subcategories-card-text">
                            Strengthen your core and pelvic floor with these exercises, perfect for pre- and post-natal recovery.
                        </p>
                        <a
                            href="/build-body-women/pre-post-natal-workouts/core-and-pelvic"
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

export default PrePostNatalWorkoutsMainWomen;