import { Link } from 'react-router-dom';
import './BuildBodyForWomenmain.css';

import BodyweightStrengthImage from "../../../assets/ImagesBuildWomen/bodyweight-strength-image.jpeg";
import CardioImage from "../../../assets/ImagesBuildWomen/cardio-image.jpeg"; 
import FlexibilityImage from "../../../assets/ImagesBuildWomen/flexibility-image.jpeg"; 
import CoreAbsImage from "../../../assets/ImagesBuildWomen/core-abs-image.jpeg"; 
import FunctionalImage from "../../../assets/ImagesBuildWomen/functional-image.jpeg"; 
import BeginnerImage from "../../../assets/ImagesBuildWomen/beginner-image.jpeg"; 
import RecoveryMobilityImage from "../../../assets/ImagesBuildWomen/recovery-mobility-image.jpeg"; 
import GluteLegImage from "../../../assets/ImagesBuildWomen/glute-leg-image.jpeg"; 
import PrePostNatalImage from "../../../assets/ImagesBuildWomen/pre-post-natal-image.jpeg"; 

const BuildBodyForWomenmain = () => {
    return (
        <div className="buildbodywomen-container">
            <h1 className="buildbodywomen-page-title">Ladies's Workouts</h1>
            <div className="buildbodywomen-categories-grid">
                <div className="buildbodywomen-category-card">
                    <img src={BeginnerImage} alt="Beginner Workouts" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Beginner Workouts</h2>
                    <p className="buildbodywomen-card-description">
                        Start your fitness journey with beginner-friendly workouts that are easy to follow and build a solid foundation.
                    </p>
                    <Link to="/build-body-women/beginner" className="buildbodywomen-explore-button">Explore</Link>
                </div>
                <div className="buildbodywomen-category-card">
                    <img src={BodyweightStrengthImage} alt="Bodyweight Strength" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Bodyweight Strength</h2>
                    <p className="buildbodywomen-card-description">
                        Build muscle and strength using only your body weight. Perfect for home workouts and minimal equipment.
                    </p>
                    <Link to="/build-body-women/bodyweight-strength" className="buildbodywomen-explore-button">Explore</Link>
                </div>
                <div className="buildbodywomen-category-card">
                    <img src={CardioImage} alt="Cardio" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Cardio</h2>
                    <p className="buildbodywomen-card-description">
                        Elevate your heart rate and boost your stamina with various cardio exercises designed to improve endurance.
                    </p>
                    <Link to="/build-body-women/cardio" className="buildbodywomen-explore-button">Explore</Link>
                </div>
                <div className="buildbodywomen-category-card">
                    <img src={FlexibilityImage} alt="Flexibility" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Flexibility</h2>
                    <p className="buildbodywomen-card-description">
                        Enhance your range of motion and reduce the risk of injury through dedicated flexibility and stretching routines.
                    </p>
                    <Link to="/build-body-women/flexibility" className="buildbodywomen-explore-button">Explore</Link>
                </div>
                <div className="buildbodywomen-category-card">
                    <img src={CoreAbsImage} alt="Core and Abs" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Core and Abs</h2>
                    <p className="buildbodywomen-card-description">
                        Focus on building a strong core with targeted ab exercises that enhance stability and strength.
                    </p>
                    <Link to="/build-body-women/core-abs" className="buildbodywomen-explore-button">Explore</Link>
                </div>
                <div className="buildbodywomen-category-card">
                    <img src={FunctionalImage} alt="Functional Training" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Functional Training</h2>
                    <p className="buildbodywomen-card-description">
                        Improve your daily functional movements and overall fitness with exercises that mimic everyday activities.
                    </p>
                    <Link to="/build-body-women/functional" className="buildbodywomen-explore-button">Explore</Link>
                </div>
                
                <div className="buildbodywomen-category-card">
                    <img src={RecoveryMobilityImage} alt="Recovery and Mobility" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Recovery and Mobility</h2>
                    <p className="buildbodywomen-card-description">
                        Focus on recovery and enhancing mobility with routines designed to help you relax and prevent injuries.
                    </p>
                    <Link to="/build-body-women/recovery-mobility" className="buildbodywomen-explore-button">Explore</Link>
                </div>
                <div className="buildbodywomen-category-card">
                    <img src={GluteLegImage} alt="Glute and Leg Workouts" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Glute and Leg Workouts</h2>
                    <p className="buildbodywomen-card-description">
                        Strengthen and tone your glutes and legs with exercises that target lower body muscles for better shape and strength.
                    </p>
                    <Link to="/build-body-women/glute-leg" className="buildbodywomen-explore-button">Explore</Link>
                </div>
                <div className="buildbodywomen-category-card">
                    <img src={PrePostNatalImage} alt="Pre/Post Natal Workouts" className="buildbodywomen-card-image" />
                    <h2 className="buildbodywomen-card-title">Pre/Post Natal Workouts</h2>
                    <p className="buildbodywomen-card-description">
                        Specialized workouts designed to support women before and after childbirth, focusing on recovery and fitness.
                    </p>
                    <Link to="/build-body-women/pre-post-natal-workouts" className="buildbodywomen-explore-button">Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default BuildBodyForWomenmain;
