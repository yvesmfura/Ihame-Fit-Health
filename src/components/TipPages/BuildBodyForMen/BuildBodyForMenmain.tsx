import { Link } from 'react-router-dom';
import './BuildBodyForMenmain.css';

import BodyweightStrengthImage from "../../../assets/ImagesBuildMen/bodyweight-strength-image.jpeg";
import CardioImage from "../../../assets/ImagesBuildMen/cardio-image.jpeg"; 
import FlexibilityImage from "../../../assets/ImagesBuildMen/flexibility-image.jpeg"; 
import CoreAbsImage from "../../../assets/ImagesBuildMen/core-abs-image.jpeg"; 
import FunctionalImage from "../../../assets/ImagesBuildMen/functional-image.jpeg"; 
import BeginnerImage from "../../../assets/ImagesBuildMen/beginner-image.jpeg"; 
import RecoveryMobilityImage from "../../../assets/ImagesBuildMen/recovery-mobility-image.jpeg"; 
import GluteLegImage from "../../../assets/ImagesBuildMen/glute-leg-image.jpeg"; 
import SportsSpecificImage from "../../../assets/ImagesBuildMen/sports-specific-image.jpeg"; 

const BuildBodyForMenmain = () => {
    return (
        <div className="buildbodymen-container">
            <h1 className="buildbodymen-page-title">Men's Workouts</h1>
            <div className="buildbodymen-categories-grid">
            <div className="buildbodymen-category-card">
                    <img src={BeginnerImage} alt="Beginner Workouts" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Beginner Workouts</h2>
                    <p className="buildbodymen-card-description">
                        Start your fitness journey with beginner-friendly workouts designed to build a solid foundation.
                    </p>
                    <Link to="/build-body-men/beginner" className="buildbodymen-explore-button">Explore</Link>
                </div>
                <div className="buildbodymen-category-card">
                    <img src={BodyweightStrengthImage} alt="Bodyweight Strength" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Bodyweight Strength</h2>
                    <p className="buildbodymen-card-description">
                        Focus on building strength with minimal equipment, ideal for home workouts or outdoor sessions.
                    </p>
                    <Link to="/build-body-men/bodyweight-strength" className="buildbodymen-explore-button">Explore</Link>
                </div>
                <div className="buildbodymen-category-card">
                    <img src={CardioImage} alt="Cardio" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Cardio</h2>
                    <p className="buildbodymen-card-description">
                        Boost your cardiovascular health and burn calories with high-intensity cardio workouts.
                    </p>
                    <Link to="/build-body-men/cardio" className="buildbodymen-explore-button">Explore</Link>
                </div>
                <div className="buildbodymen-category-card">
                    <img src={FlexibilityImage} alt="Flexibility" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Flexibility</h2>
                    <p className="buildbodymen-card-description">
                        Enhance your flexibility and mobility through stretching and dynamic exercises to improve overall performance.
                    </p>
                    <Link to="/build-body-men/flexibility" className="buildbodymen-explore-button">Explore</Link>
                </div>
                <div className="buildbodymen-category-card">
                    <img src={CoreAbsImage} alt="Core and Abs" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Core and Abs</h2>
                    <p className="buildbodymen-card-description">
                        Strengthen your core and abs with targeted exercises that improve stability and strength.
                    </p>
                    <Link to="/build-body-men/core-abs" className="buildbodymen-explore-button">Explore</Link>
                </div>
                <div className="buildbodymen-category-card">
                    <img src={FunctionalImage} alt="Functional Training" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Functional Training</h2>
                    <p className="buildbodymen-card-description">
                        Improve your functional strength and coordination with exercises that mimic everyday movements.
                    </p>
                    <Link to="/build-body-men/functional" className="buildbodymen-explore-button">Explore</Link>
                </div>
                <div className="buildbodymen-category-card">
                    <img src={RecoveryMobilityImage} alt="Recovery and Mobility" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Recovery and Mobility</h2>
                    <p className="buildbodymen-card-description">
                        Enhance your recovery and mobility with stretching and relaxation techniques to prevent injuries and improve flexibility.
                    </p>
                    <Link to="/build-body-men/recovery-mobility" className="buildbodymen-explore-button">Explore</Link>
                </div>
                <div className="buildbodymen-category-card">
                    <img src={GluteLegImage} alt="Glute and Leg Workouts" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Glute and Leg Workouts</h2>
                    <p className="buildbodymen-card-description">
                        Strengthen and tone your glutes and legs with targeted exercises for enhanced lower body strength.
                    </p>
                    <Link to="/build-body-men/glute-leg" className="buildbodymen-explore-button">Explore</Link>
                </div>
                <div className="buildbodymen-category-card">
                    <img src={SportsSpecificImage} alt="Sports Specific Training" className="buildbodymen-card-image" />
                    <h2 className="buildbodymen-card-title">Sports Specific Training</h2>
                    <p className="buildbodymen-card-description">
                        Improve your performance in specific sports with training routines tailored to various athletic disciplines.
                    </p>
                    <Link to="/build-body-men/sports-specific-training" className="buildbodymen-explore-button">Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default BuildBodyForMenmain;