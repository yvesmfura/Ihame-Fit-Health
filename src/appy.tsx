import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BMICalculator from './components/BMICalculator';
import IdealWeightCalculator from './components/IdealWeightCalculator';
import CalorieCalculator from './components/CalorieCalculator';
import ProteinCalculator from './components/ProteinCalculator';
import WaterIntakeCalculator from './components/WaterIntakeCalculator';
import Tips from './components/GetTips';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import './styles.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>IhameFit</h1>
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
            <Route path="/" element={<Home />} />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
            <Route path="/ideal-weight-calculator" element={<IdealWeightCalculator />} />
            <Route path="/calorie-calculator" element={<CalorieCalculator />} />
            <Route path="/protein-calculator" element={<ProteinCalculator />} />
            <Route path="/water-intake-calculator" element={<WaterIntakeCalculator />} />
            <Route path="/get-tips" element={<Tips />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

const Home: React.FC = () => (
  <>
    <section className="hero">
      <div className="hero-text">
        <h2>Get Fit, Stay Healthy</h2>
        <p>Your journey to a healthier life starts here.</p>
        <button className="btn">Join Us</button>
      </div>
    </section>

    <section className="carousel-section">
      <ImageCarousel />
    </section>
  </>
);

export default App;
