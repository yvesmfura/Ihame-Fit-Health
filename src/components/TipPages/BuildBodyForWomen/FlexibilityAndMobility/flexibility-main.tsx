import React from 'react';
import '../subcategories-workouts-main-women.css';

// Import images for Flexibility and Mobility Workouts
import StretchingImage from "../../../../assets/WomenWorkoutsSubcategories/stretching-women.jpeg";
import YogaPilatesImage from "../../../../assets/WomenWorkoutsSubcategories/yoga-pilates-women.jpeg";
import DynamicWarmupsImage from "../../../../assets/WomenWorkoutsSubcategories/dynamic-warm-ups-women.jpeg";

const FlexibilityMainWomen: React.FC = () => {
    return (
        <div className="women-subcategories-container">
            <h2 className="women-subcategories-title">Flexibility and Mobility Workouts for Women</h2>
            <p className="women-subcategories-description">
                These routines focus on improving flexibility and mobility, helping you to move better and reduce the risk of injury.
            </p>

            <div className="women-subcategories-cards">
                <div className="women-subcategories-card">
                    <div className="women-subcategories-image-container">
                        <img
                            className="women-subcategories-image"
                            src={StretchingImage}
                            alt="Stretching"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Stretching</h3>
                        <p className="women-subcategories-card-text">
                            Stretching routines to enhance flexibility and improve range of motion.
                        </p>
                        <a
                            href="/build-body-women/flexibility/stretching"
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
                            src={YogaPilatesImage}
                            alt="Yoga and Pilates"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Yoga & Pilates</h3>
                        <p className="women-subcategories-card-text">
                            Relaxing yet effective routines that combine yoga and Pilates for flexibility and strength.
                        </p>
                        <a
                            href="/build-body-women/flexibility/yoga-pilates"
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
                            src={DynamicWarmupsImage}
                            alt="Dynamic Warm-Ups"
                        />
                    </div>
                    <div className="women-subcategories-content">
                        <h3 className="women-subcategories-card-title">Dynamic Warm-Ups</h3>
                        <p className="women-subcategories-card-text">
                            A series of dynamic warm-up exercises to get your body ready for a workout or intense activity.
                        </p>
                        <a
                            href="/build-body-women/flexibility/dynamic-warm-ups"
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

export default FlexibilityMainWomen;
