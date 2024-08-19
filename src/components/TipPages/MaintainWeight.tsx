import React, { useState } from 'react';
import './Tippages_Styles/MaintainWeightTipPages.css';

const MaintainWeight: React.FC = () => {
  const [modalVideoSrc, setModalVideoSrc] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setModalVideoSrc(videoUrl);
  };

  const closeModal = () => {
    setModalVideoSrc(null);
  };

  return (
    <div className="tip-page maintain-weight-page">
      <h2>Maintain Weight Tips</h2>
      <p>
        Maintaining a healthy weight is crucial for overall well-being and reduces the risk of chronic diseases. It helps in:
      </p>
      <p>
        Here are some tips to help you maintain a healthy weight:
      </p>
      <ul>
        <li>Watch your portion sizes: Eating smaller portions can help you avoid overeating.</li>
        <li>Eat good foods: Choose foods that are high in nutrition and taste.</li>
        <li>Drink more water: Staying hydrated can help you maintain a healthy weight.</li>
        <li>Track what you eat: Monitor your daily calorie intake.</li>
        <li>Exercise daily: Include both cardio and strength training in your routine.</li>
        <li>Get more sleep: Ensure you get enough rest each night.</li>
        <li>Make a goal and stick to it: Set realistic, achievable goals.</li>
      </ul>
      <div className="video-links">
        <h4>Watch Useful Videos Below</h4>
        <ul className="maintain-weight-video-list">
          
            <a
              href="#"
              className="maintain-weight-video-link"
              onClick={() => openModal('https://www.youtube.com/embed/_j_4YW-uiCA')}
            >
              Healthy Mentaining Weight Tips Video
            </a>
          
        </ul>
      </div>

      {modalVideoSrc && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>&times;</span>
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

export default MaintainWeight;
