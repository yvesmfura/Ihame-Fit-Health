import React from 'react';
import '../subcategories-workouts-main-men.css';

// Import images for Flexibility and Mobility Workouts (JPEG format)
import StretchingImage from "../../../../assets/MenWorkoutsSubcategories/stretching-men.jpeg";
import YogaPilatesImage from "../../../../assets/MenWorkoutsSubcategories/yoga-pilates-men.jpeg";
import DynamicWarmUpsImage from "../../../../assets/MenWorkoutsSubcategories/dynamic-warm-ups-men.jpeg";

const FlexibilityMainMen: React.FC = () => {
    return (
        <div className="men-subcategories-container">
            <h2 className="men-subcategories-title">Flexibility and Mobility Workouts for Men</h2>
            <p className="men-subcategories-description">
                These routines focus on improving flexibility and mobility, helping you to move better and reduce the risk of injury.
            </p>

            <div className="men-subcategories-cards">
                <div className="men-subcategories-card">
                    <div className="men-subcategories-image-container">
                        <img
                            className="men-subcategories-image"
                            src={StretchingImage}
                            alt="Stretching"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Stretching</h3>
                        <p className="men-subcategories-card-text">
                            Stretching exercises to improve flexibility, increase range of motion, and reduce muscle stiffness.
                        </p>
                        <a
                            href="/build-body-men/flexibility/stretching"
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
                            src={YogaPilatesImage}
                            alt="Yoga & Pilates"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Yoga & Pilates</h3>
                        <p className="men-subcategories-card-text">
                            A combination of yoga and Pilates to enhance flexibility, core strength, and balance.
                        </p>
                        <a
                            href="/build-body-men/flexibility/yoga-pilates"
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
                            src={DynamicWarmUpsImage}
                            alt="Dynamic Warm-Ups"
                        />
                    </div>
                    <div className="men-subcategories-content">
                        <h3 className="men-subcategories-card-title">Dynamic Warm-Ups</h3>
                        <p className="men-subcategories-card-text">
                            Dynamic movements to increase flexibility and mobility, preparing the body for more intense physical activity.
                        </p>
                        <a
                            href="/build-body-men/flexibility/dynamic-warm-ups"
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

export default FlexibilityMainMen;
