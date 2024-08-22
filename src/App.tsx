import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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



// Import detailed tip pages
import ReduceWeight from './components/TipPages/ReduceWeight';
import MaintainWeight from './components/TipPages/MaintainWeight';
import GainWeight from './components/TipPages/GainWeight';
import BuildBodyForMen from './components/TipPages/BuildBodyForMen';
import BuildBodyForWomen from './components/TipPages/BuildBodyForWomen';
import SkinCareForMen from './components/TipPages/SkinCareForMen';
import SkinCareForWomen from './components/TipPages/SkinCareForWomen';
import DentalCare from './components/TipPages/DentalCare';
import EyeCare from './components/TipPages/EyeCare';
import BodyCare from './components/TipPages/BodyCare';
import HairCare from './components/TipPages/HairCare';
import MentalCare from './components/TipPages/MentalCare';

import './styles.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app">
        <header className="header">
          <h1>Ihame Health Focus</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
              <li><Link to="/ideal-weight-calculator">Ideal Weight Calculator</Link></li>
              <li><Link to="/calorie-calculator">Calorie Calculator</Link></li>
              <li><Link to="/protein-calculator">Protein Calculator</Link></li>
              <li><Link to="/water-intake-calculator">Water Intake Calculator</Link></li>
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
      <div className="hero-text">
        <h2>Get Fit, Stay Healthy</h2>
        <p>Your journey to a healthier life starts here.</p>
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
