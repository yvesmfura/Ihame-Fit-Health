import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tippages_Styles/ReduceWeightTipPages.css';

const ReduceWeight: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<'diet' | 'workout' | null>(null);
  const [modalVideoSrc, setModalVideoSrc] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setModalVideoSrc(videoUrl);
  };

  const closeModal = () => setModalVideoSrc(null);

  const renderDietTips = () => (
    <div className="rw-tip-section">
      <h3 className="rw-section-title">Diet Tips for Weight Loss</h3>
      <ul className="rw-tip-list">
        <li>Add Protein to Your Diet: Foods like eggs, chicken, and Greek yogurt help boost metabolism and reduce appetite.</li>
        <li>Eat Whole Foods: Focus on fruits, vegetables, whole grains, and lean proteins. Avoid processed foods high in sugar and fat.</li>
        <li>Stay Hydrated: Drink plenty of water, and try green tea for its fat-burning properties.</li>
        <li>Limit Added Sugars and Refined Carbs: Cut down on sugary drinks, sweets, and refined grains like white bread and pasta.</li>
        <li>Incorporate Fiber-Rich Foods: Include foods like beans, whole grains, and vegetables to help you stay full longer.</li>
      </ul>
      <div className="rw-video-links">
        <h4>Watch Useful Videos Below</h4>
        <ul className="rw-video-list">
          <a 
            href="#" 
            className="rw-video-link" 
            onClick={() => openModal('https://www.youtube.com/embed/ahnl7GaV_rU')}
          >
            Diet Tips Video
          </a>
        </ul>
      </div>
    </div>
  );

  const renderWorkoutTips = () => (
    <div className="rw-tip-section">
      <h3 className="rw-section-title">Workout Tips for Weight Loss</h3>
      
      {/* No Equipment Section */}
      <div className="rw-workout-section rw-no-equipment">
        <h4 className="rw-subsection-title">Workouts Without Equipment</h4>
        <ul className="rw-tip-list">
          <li>Bodyweight Exercises: Incorporate squats, push-ups, and lunges to build strength and endurance.</li>
          <li>High-Intensity Interval Training (HIIT): Perform short bursts of intense exercises like jumping jacks, burpees, and sprints, followed by brief rest periods.</li>
          <li>Core Workouts: Strengthen your core with planks, mountain climbers, and bicycle crunches.</li>
        </ul>
        <div className="rw-video-links">
          <h4>Watch Useful Videos Below</h4>
          <ul className="rw-video-list">
            <a 
              href="#" 
              className="rw-video-link" 
              onClick={() => openModal('https://www.youtube.com/embed/YJcecddIdWo')}
            >
              Workout With No Equipment Tips Video 
            </a>
          </ul>
        </div>
      </div>

      {/* With Equipment Section */}
      <div className="rw-workout-section rw-with-equipment">
        <h4 className="rw-subsection-title">Workouts With Equipment</h4>
        <ul className="rw-tip-list">
          <li>Resistance Training: Use dumbbells or resistance bands for exercises like bicep curls, shoulder presses, and deadlifts.</li>
          <li>Cardio Workouts: Incorporate activities like treadmill running, stationary cycling, or rowing for a full-body workout.</li>
          <li>Strength Training: Use weight machines or free weights for exercises like leg presses, chest presses, and lat pulldowns.</li>
        </ul>
        <div className="rw-video-links">
          <h4>Watch Useful Videos Below</h4>
          <ul className="rw-video-list">
            <a 
              href="#" 
              className="rw-video-link" 
              onClick={() => openModal('https://www.youtube.com/embed/xyNxjx60Y7o')}
            >
              Workout With Equipment Tips Video 
            </a>
          </ul>
        </div>
      </div>

      <Link to="/Workout" className="rw-workout-plan-link">
        Get Workout Plan
      </Link>
    </div>
  );

  return (
    <div className="rw-tip-page">
      <h2 className="rw-page-title">Reduce Weight Tips</h2>
      <p className="rw-description">Losing weight requires a balanced approach that includes both a healthy diet and regular physical activity. Below, you can explore tips specifically tailored to either diet or workout strategies for effective weight loss.</p>
      <div className="rw-section-select">
        <button onClick={() => setSelectedSection('diet')} className={selectedSection === 'diet' ? 'rw-active' : ''}>
          Diet
        </button>
        <button onClick={() => setSelectedSection('workout')} className={selectedSection === 'workout' ? 'rw-active' : ''}>
          Workout
        </button>
      </div>
      {selectedSection === 'diet' && renderDietTips()}
      {selectedSection === 'workout' && renderWorkoutTips()}

      {modalVideoSrc && (
        <div className="rw-modal" onClick={closeModal}>
          <div className="rw-modal-content" onClick={e => e.stopPropagation()}>
            <span className="rw-modal-close" onClick={closeModal}>&times;</span>
            <iframe 
              width="100%" 
              height="400" 
              src={modalVideoSrc} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReduceWeight;