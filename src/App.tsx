import React, { useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './assets/logo.png';

// Import components
import BMICalculator from './components/BMICalculator';
import IdealWeightCalculator from './components/IdealWeightCalculator';
import CalorieCalculator from './components/CalorieCalculator';
import ProteinCalculator from './components/ProteinCalculator';
import WaterIntakeCalculator from './components/WaterIntakeCalculator';
import Tips from './components/GetTips';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import ScrollToTop from './components/ScrollToTop';
import Workout from './components/Workout';
import Calculators from './components/calculators.tsx';


// Import detailed tip pages
import ReduceWeight from './components/TipPages/ReduceWeight';
import MaintainWeight from './components/TipPages/MaintainWeight';
import GainWeight from './components/TipPages/GainWeight';
import BuildBodyForMen from './components/TipPages/BuildBodyForMen/BuildBodyForMenmain';
import BuildBodyForWomen from './components/TipPages/BuildBodyForWomen/BuildBodyForWomenmain';
import SkinCareForMen from './components/TipPages/SkinCareForMen';
import SkinCareForWomen from './components/TipPages/SkinCareForWomen';
import DentalCare from './components/TipPages/DentalCare';
import EyeCare from './components/TipPages/EyeCare';
import BodyCare from './components/TipPages/BodyCare';
import HairCare from './components/TipPages/HairCare';
import MentalCare from './components/TipPages/MentalCare';


// Men’s Workout categories Pages
import BodyweightStrengthMainMen from './components/TipPages/BuildBodyForMen/BodyweightStrengthTraining/bodyweight-strength-main';
import CardioMainMen from './components/TipPages/BuildBodyForMen/CardioWorkouts/cardio-main';
import FlexibilityMainMen from './components/TipPages/BuildBodyForMen/FlexibilityAndMobility/flexibility-mobility-main';
import CoreAbsMainMen from './components/TipPages/BuildBodyForMen/CoreAndAbsWorkouts/core-abs-main';
import FunctionalMainMen from './components/TipPages/BuildBodyForMen/FunctionalTraining/functional-training-main';
import BeginnerMainMen from './components/TipPages/BuildBodyForMen/BeginnerWorkouts/beginner-workouts-main';
import RecoveryMobilityMainMen from './components/TipPages/BuildBodyForMen/RecoveryAndMobility/recovery-mobility-main';
import GluteLegMainMen from './components/TipPages/BuildBodyForMen/GluteAndLegWorkouts/glute-leg-main';
import SportsSpecificTrainingMainMen from './components/TipPages/BuildBodyForMen/SportsSpecificTraining/sports-specific-training-main';
 
// Women’s Workout categories Pages
import BodyweightStrengthMainWomen from './components/TipPages/BuildBodyForWomen/BodyweightStrengthTraining/bodyweight-strength-main';
import CardioMainWomen from './components/TipPages/BuildBodyForWomen/CardioWorkouts/cardio-main';
import FlexibilityMainWomen from './components/TipPages/BuildBodyForWomen/FlexibilityAndMobility/flexibility-main.tsx';
import CoreAbsMainWomen from './components/TipPages/BuildBodyForWomen/CoreAndAbsWorkouts/core-abs-main';
import FunctionalMainWomen from './components/TipPages/BuildBodyForWomen/FunctionalTraining/functional-main';
import BeginnerMainWomen from './components/TipPages/BuildBodyForWomen/BeginnerWorkouts/beginner-main';
import RecoveryMobilityMainWomen from './components/TipPages/BuildBodyForWomen/RecoveryAndMobility/recovery-mobility-main';
import GluteLegMainWomen from './components/TipPages/BuildBodyForWomen/GluteAndLegWorkouts/glute-leg-main';
import PrePostNatalWorkoutsMainWomen from './components/TipPages/BuildBodyForWomen/PrePostNatalWorkouts/pre-post-natal-workouts-main';

// Import components for Men’s Workout Subcategories
import FullBodyStrengthMen from './components/TipPages/BuildBodyForMen/BodyweightStrengthTraining/FullBodyStrength';
import UpperBodyMen from './components/TipPages/BuildBodyForMen/BodyweightStrengthTraining/UpperBody';
import LowerBodyMen from './components/TipPages/BuildBodyForMen/BodyweightStrengthTraining/LowerBody';

import HIITMen from './components/TipPages/BuildBodyForMen/CardioWorkouts/HIIT';
import CardioCircuitsMen from './components/TipPages/BuildBodyForMen/CardioWorkouts/CardioCircuits';
import JumpRopeMen from './components/TipPages/BuildBodyForMen/CardioWorkouts/JumpRope';

import StretchingMen from './components/TipPages/BuildBodyForMen/FlexibilityAndMobility/StretchingRoutines';
import YogaPilatesMen from './components/TipPages/BuildBodyForMen/FlexibilityAndMobility/YogaAndPilates';
import DynamicWarmUpsMen from './components/TipPages/BuildBodyForMen/FlexibilityAndMobility/DynamicWarmUps';

import AbCircuitsMen from './components/TipPages/BuildBodyForMen/CoreAndAbsWorkouts/AbCircuits';
import CoreStabilityMen from './components/TipPages/BuildBodyForMen/CoreAndAbsWorkouts/CoreStability';
import LowerAbsMen from './components/TipPages/BuildBodyForMen/CoreAndAbsWorkouts/LowerAbs';

import BalanceCoordinationMen from './components/TipPages/BuildBodyForMen/FunctionalTraining/BalanceAndCoordination';
import EverydayStrengthMen from './components/TipPages/BuildBodyForMen/FunctionalTraining/EverydayStrength';
import AgilityDrillsMen from './components/TipPages/BuildBodyForMen/FunctionalTraining/AgilityDrills';

import IntroBodyweightMen from './components/TipPages/BuildBodyForMen/BeginnerWorkouts/IntroBodyweightExercises.tsx';
import EasyCardioMen from './components/TipPages/BuildBodyForMen/BeginnerWorkouts/EasyCardioRoutines.tsx';
import BasicFlexibilityMen from './components/TipPages/BuildBodyForMen/BeginnerWorkouts/BasicFlexibility.tsx';

import PostWorkoutStretchingMen from './components/TipPages/BuildBodyForMen/RecoveryAndMobility/PostWorkoutStretching';
import RelaxationTechniquesMen from './components/TipPages/BuildBodyForMen/RecoveryAndMobility/RelaxationTechniques';
import FoamRollingMen from './components/TipPages/BuildBodyForMen/RecoveryAndMobility/FoamRolling';

import GluteActivationMen from './components/TipPages/BuildBodyForMen/GluteAndLegWorkouts/GluteActivation';
import LegToningMen from './components/TipPages/BuildBodyForMen/GluteAndLegWorkouts/LegToning';
import LowerBodyCircuitsMen from './components/TipPages/BuildBodyForMen/GluteAndLegWorkouts/LowerBodyCircuits';

import SoccerTrainingMen from './components/TipPages/BuildBodyForMen/SportsSpecificTraining/SoccerTraining';
import BasketballTrainingMen from './components/TipPages/BuildBodyForMen/SportsSpecificTraining/BasketballTraining';
import SwimmingTrainingMen from './components/TipPages/BuildBodyForMen/SportsSpecificTraining/SwimmingTraining';


// Import components for Women’s Workout Subcategories
import FullBodyStrengthWomen from './components/TipPages/BuildBodyForWomen/BodyweightStrengthTraining/FullBodyStrength';
import UpperBodyWomen from './components/TipPages/BuildBodyForWomen/BodyweightStrengthTraining/UpperBody';
import LowerBodyWomen from './components/TipPages/BuildBodyForWomen/BodyweightStrengthTraining/LowerBody';

import HIITWomen from './components/TipPages/BuildBodyForWomen/CardioWorkouts/HIIT.tsx';
import CardioCircuitsWomen from './components/TipPages/BuildBodyForWomen/CardioWorkouts/CardioCircuits';
import JumpRopeWomen from './components/TipPages/BuildBodyForWomen/CardioWorkouts/JumpRope';

import StretchingWomen from './components/TipPages/BuildBodyForWomen/FlexibilityAndMobility/StretchingRoutines.tsx';
import YogaPilatesWomen from './components/TipPages/BuildBodyForWomen/FlexibilityAndMobility/YogaAndPilates.tsx';
import DynamicWarmUpsWomen from './components/TipPages/BuildBodyForWomen/FlexibilityAndMobility/DynamicWarmUps.tsx';

import AbCircuitsWomen from './components/TipPages/BuildBodyForWomen/CoreAndAbsWorkouts/AbCircuits';
import CoreStabilityWomen from './components/TipPages/BuildBodyForWomen/CoreAndAbsWorkouts/CoreStability';
import LowerAbsWomen from './components/TipPages/BuildBodyForWomen/CoreAndAbsWorkouts/LowerAbs';

import BalanceCoordinationWomen from './components/TipPages/BuildBodyForWomen/FunctionalTraining/BalanceAndCoordination';
import EverydayStrengthWomen from './components/TipPages/BuildBodyForWomen/FunctionalTraining/EverydayStrength';
import AgilityDrillsWomen from './components/TipPages/BuildBodyForWomen/FunctionalTraining/AgilityDrills';

import IntroBodyweightWomen from './components/TipPages/BuildBodyForWomen/BeginnerWorkouts/IntroBodyweightExercises';
import EasyCardioWomen from './components/TipPages/BuildBodyForWomen/BeginnerWorkouts/EasyCardioRoutines';
import BasicFlexibilityWomen from './components/TipPages/BuildBodyForWomen/BeginnerWorkouts/BasicFlexibility';

import PostWorkoutStretchingWomen from './components/TipPages/BuildBodyForWomen/RecoveryAndMobility/PostWorkoutStretching';
import RelaxationTechniquesWomen from './components/TipPages/BuildBodyForWomen/RecoveryAndMobility/RelaxationTechniques';
import FoamRollingWomen from './components/TipPages/BuildBodyForWomen/RecoveryAndMobility/FoamRolling';

import GluteActivationWomen from './components/TipPages/BuildBodyForWomen/GluteAndLegWorkouts/GluteActivation';
import LegToningWomen from './components/TipPages/BuildBodyForWomen/GluteAndLegWorkouts/LegToning';
import LowerBodyCircuitsWomen from './components/TipPages/BuildBodyForWomen/GluteAndLegWorkouts/LowerBodyCircuits';

import PreNatalWorkoutsWomen from './components/TipPages/BuildBodyForWomen/PrePostNatalWorkouts/PreNatalWorkouts';
import PostNatalWorkoutsWomen from './components/TipPages/BuildBodyForWomen/PrePostNatalWorkouts/PostNatalWorkouts';
import CoreAndPelvicExercisesWomen from './components/TipPages/BuildBodyForWomen/PrePostNatalWorkouts/CoreAndPelvicExercises';

import './styles.css';

const App: React.FC = () => { 

  const [isNavOpen, setIsNavOpen] = useState(false);
      const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
      };


  useEffect(() => {
    const handleScroll = () => {
      const navLinks = document.querySelector('.nav-links');
      const isPhone = window.matchMedia('(max-width: 767px)').matches;
  
      if (window.scrollY > 50) {
        if (isPhone) {
          navLinks?.classList.add('nav-links--hide');
        }
      } else {
        if (isPhone) {
          navLinks?.classList.remove('nav-links--hide');
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app">
      <header className="header">
          <div className="logo-container">
            <img src={logo} alt="IhameFit Logo" className="logo" />
            <h1>IhameFit Health</h1>
            <div className="menu-icon" onClick={toggleNav}>
              &#9776;
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="nav-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
              <li><Link to="/ideal-weight-calculator">Ideal Weight Calculator</Link></li>
              <li><Link to="/calorie-calculator">Calorie Intake Calculator</Link></li>
              <li><Link to="/protein-calculator">Protein Intake Calculator</Link></li>
              <li><Link to="/water-intake-calculator">Water Intake Calculator</Link></li>
              <li><Link to="/get-tips">Get Tips</Link></li>
            </ul>
          </nav>
          {/* Phone-Specific Navigation */}
          <nav className={`phone-nav ${isNavOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/calculators">Calculators</Link></li>
              <li><Link to="/get-tips">Get Tips</Link></li>
            </ul>
          </nav>
        </header>

      
        <main className="main-content">
        <Routes>
           {/* Main pages */}
           <Route path="/" element={<Home />} />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
            <Route path="/ideal-weight-calculator" element={<IdealWeightCalculator />} />
            <Route path="/calorie-calculator" element={<CalorieCalculator />} />
            <Route path="/protein-calculator" element={<ProteinCalculator />} />
            <Route path="/water-intake-calculator" element={<WaterIntakeCalculator />} />
            <Route path="/get-tips" element={<Tips />} />
            <Route path="/calculators" element={<Calculators />} />

            {/* Detailed tip pages */}
            <Route path="/tips/reduce-weight" element={<ReduceWeight />} />
            <Route path="/tips/maintain-weight" element={<MaintainWeight />} />
            <Route path="/tips/increase-weight" element={<GainWeight />} />
            <Route path="/tips/build-body-men" element={<BuildBodyForMen />} />
            <Route path="/tips/build-body-women" element={<BuildBodyForWomen />} />
            <Route path="/tips/skin-care-men" element={<SkinCareForMen />} />
            <Route path="/tips/skin-care-women" element={<SkinCareForWomen />} />
            <Route path="/tips/dental-care" element={<DentalCare />} />
            <Route path="/tips/eye-care" element={<EyeCare />} />
            <Route path="/tips/body-care" element={<BodyCare />} />
            <Route path="/tips/hair-care" element={<HairCare />} />
            <Route path="/tips/mental-care" element={<MentalCare />} />
            <Route path="/workout" element={<Workout />} />
        
        {/* Men’s Workout Categories */}
        <Route path="/build-body-men/bodyweight-strength" element={<BodyweightStrengthMainMen />} />
        <Route path="/build-body-men/bodyweight-strength/full-body" element={<FullBodyStrengthMen />} />
        <Route path="/build-body-men/bodyweight-strength/upper-body" element={<UpperBodyMen />} />
        <Route path="/build-body-men/bodyweight-strength/lower-body" element={<LowerBodyMen />} />

        <Route path="/build-body-men/cardio" element={<CardioMainMen />} />
        <Route path="/build-body-men/cardio/hiit" element={<HIITMen />} />
        <Route path="/build-body-men/cardio/cardio-circuits" element={<CardioCircuitsMen />} />
        <Route path="/build-body-men/cardio/jump-rope" element={<JumpRopeMen />} />

        <Route path="/build-body-men/flexibility" element={<FlexibilityMainMen />} />
        <Route path="/build-body-men/flexibility/stretching" element={<StretchingMen />} />
        <Route path="/build-body-men/flexibility/yoga-pilates" element={<YogaPilatesMen />} />
        <Route path="/build-body-men/flexibility/dynamic-warm-ups" element={<DynamicWarmUpsMen />} />

        <Route path="/build-body-men/core-abs" element={<CoreAbsMainMen />} />
        <Route path="/build-body-men/core-abs/ab-circuits" element={<AbCircuitsMen />} />
        <Route path="/build-body-men/core-abs/core-stability" element={<CoreStabilityMen />} />
        <Route path="/build-body-men/core-abs/lower-abs" element={<LowerAbsMen />} />

        <Route path="/build-body-men/functional" element={<FunctionalMainMen />} />
        <Route path="/build-body-men/functional/balance-coordination" element={<BalanceCoordinationMen />} />
        <Route path="/build-body-men/functional/everyday-strength" element={<EverydayStrengthMen />} />
        <Route path="/build-body-men/functional/agility-drills" element={<AgilityDrillsMen />} />

        <Route path="/build-body-men/beginner" element={<BeginnerMainMen />} />
        <Route path="/build-body-men/beginner/intro-bodyweight" element={<IntroBodyweightMen />} />
        <Route path="/build-body-men/beginner/easy-cardio" element={<EasyCardioMen />} />
        <Route path="/build-body-men/beginner/basic-flexibility" element={<BasicFlexibilityMen />} />

        <Route path="/build-body-men/recovery-mobility" element={<RecoveryMobilityMainMen />} />
        <Route path="/build-body-men/recovery-mobility/post-workout-stretching" element={<PostWorkoutStretchingMen />} />
        <Route path="/build-body-men/recovery-mobility/relaxation-techniques" element={<RelaxationTechniquesMen />} />
        <Route path="/build-body-men/recovery-mobility/foam-rolling" element={<FoamRollingMen />} />

        <Route path="/build-body-men/glute-leg" element={<GluteLegMainMen />} />
        <Route path="/build-body-men/glute-leg/glute-activation" element={<GluteActivationMen />} />
        <Route path="/build-body-men/glute-leg/leg-toning" element={<LegToningMen />} />
        <Route path="/build-body-men/glute-leg/lower-body-circuits" element={<LowerBodyCircuitsMen />} />

        <Route path="/build-body-men/sports-specific-training" element={<SportsSpecificTrainingMainMen />} />
        <Route path="/men/sports-specific-training/soccer" element={<SoccerTrainingMen />} />
        <Route path="/men/sports-specific-training/basketball" element={<BasketballTrainingMen />} />
        <Route path="/men/sports-specific-training/swimming" element={<SwimmingTrainingMen />} />

        {/* Women’s Workout Categories */}
        <Route path="/build-body-women/bodyweight-strength" element={<BodyweightStrengthMainWomen />} />
        <Route path="/build-body-women/bodyweight-strength/full-body" element={<FullBodyStrengthWomen />} />
        <Route path="/build-body-women/bodyweight-strength/upper-body" element={<UpperBodyWomen />} />
        <Route path="/build-body-women/bodyweight-strength/lower-body" element={<LowerBodyWomen />} />

        <Route path="/build-body-women/cardio" element={<CardioMainWomen />} />
        <Route path="/build-body-women/cardio/hiit" element={<HIITWomen />} />
        <Route path="/build-body-women/cardio/cardio-circuits" element={<CardioCircuitsWomen />} />
        <Route path="/build-body-women/cardio/jump-rope" element={<JumpRopeWomen />} />

        <Route path="/build-body-women/flexibility" element={<FlexibilityMainWomen />} />
        <Route path="/build-body-women/flexibility/stretching" element={<StretchingWomen />} />
        <Route path="/build-body-women/flexibility/yoga-pilates" element={<YogaPilatesWomen />} />
        <Route path="/build-body-women/flexibility/dynamic-warm-ups" element={<DynamicWarmUpsWomen />} />

        <Route path="/build-body-women/core-abs" element={<CoreAbsMainWomen />} />
        <Route path="/build-body-women/core-abs/ab-circuits" element={<AbCircuitsWomen />} />
        <Route path="/build-body-women/core-abs/core-stability" element={<CoreStabilityWomen />} />
        <Route path="/build-body-women/core-abs/lower-abs" element={<LowerAbsWomen />} />

        <Route path="/build-body-women/functional" element={<FunctionalMainWomen />} />
        <Route path="/build-body-women/functional/balance-coordination" element={<BalanceCoordinationWomen />} />
        <Route path="/build-body-women/functional/everyday-strength" element={<EverydayStrengthWomen />} />
        <Route path="/build-body-women/functional/agility-drills" element={<AgilityDrillsWomen />} />

        <Route path="/build-body-women/beginner" element={<BeginnerMainWomen />} />
        <Route path="/build-body-women/beginner/intro-bodyweight" element={<IntroBodyweightWomen />} />
        <Route path="/build-body-women/beginner/easy-cardio" element={<EasyCardioWomen />} />
        <Route path="/build-body-women/beginner/basic-flexibility" element={<BasicFlexibilityWomen />} />

        <Route path="/build-body-women/recovery-mobility" element={<RecoveryMobilityMainWomen />} />
        <Route path="/build-body-women/recovery-mobility/post-workout-stretching" element={<PostWorkoutStretchingWomen />} />
        <Route path="/build-body-women/recovery-mobility/relaxation-techniques" element={<RelaxationTechniquesWomen />} />
        <Route path="/build-body-women/recovery-mobility/foam-rolling" element={<FoamRollingWomen />} />

        <Route path="/build-body-women/glute-leg" element={<GluteLegMainWomen />} />
        <Route path="/build-body-women/glute-leg/glute-activation" element={<GluteActivationWomen />} />
        <Route path="/build-body-women/glute-leg/leg-toning" element={<LegToningWomen />} />
        <Route path="/build-body-women/glute-leg/lower-body-circuits" element={<LowerBodyCircuitsWomen />} />

        <Route path="/build-body-women/pre-post-natal-workouts" element={<PrePostNatalWorkoutsMainWomen />} />
        <Route path="/build-body-women/pre-post-natal-workouts/prenatal" element={<PreNatalWorkoutsWomen />} />
        <Route path="/build-body-women/pre-post-natal-workouts/postnatal" element={<PostNatalWorkoutsWomen />} />
        <Route path="/build-body-women/pre-post-natal-workouts/core-and-pelvic" element={<CoreAndPelvicExercisesWomen />} />

      </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

const Home: React.FC = () => (
  <>
    <section className="carousel-section">
      <ImageCarousel />
    </section>

    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-text">
          <h2>Get Fit, Stay Healthy</h2>
          <p className="call-to-action">Your journey to a healthier life starts here. <span>Click on Join Us</span></p>
          <Link to="/get-tips" className="btn">Join Us</Link>
      </div>
    </section>

    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>BMI Calculator</h3>
          <p>Track your BMI to maintain a healthy weight.</p>
          <Link to="/bmi-calculator" className="card-btn">Try Now</Link>
        </div>
        <div className="card">
          <h3>Ideal Weight Calculator</h3>
          <p>Find out your ideal weight based on height and age.</p>
          <Link to="/ideal-weight-calculator" className="card-btn">Try Now</Link>
        </div>
        <div className="card">
          <h3>Calorie Calculator</h3>
          <p>Determine your daily caloric needs to meet your goals.</p>
          <Link to="/calorie-calculator" className="card-btn">Try Now</Link>
        </div>
        <div className="card">
          <h3>Protein Calculator</h3>
          <p>Calculate your optimal protein intake for muscle growth.</p>
          <Link to="/protein-calculator" className="card-btn">Try Now</Link>
        </div>
        <div className="card">
          <h3>Water Intake Calculator</h3>
          <p>Ensure you stay hydrated with personalized water intake recommendations.</p>
          <Link to="/water-intake-calculator" className="card-btn">Try Now</Link>
        </div>
        <div className="card">
          <h3>Get Tips</h3>
          <p>Discover helpful tips and advice tailored for you.</p>
          <Link to="/get-tips" className="card-btn">Explore Tips</Link>
        </div>
      </div>
    </section>
  </>
);

export default App;