import React, { useState } from 'react';
import './Tippages_Styles/MaintainWeightTipPages.css';
import { Link } from 'react-router-dom';

const MaintainWeight: React.FC = () => {
  const [modalVideoSrc, setModalVideoSrc] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setModalVideoSrc(videoUrl);
  };

  const closeModal = () => {
    setModalVideoSrc(null);
  };

  return (
    <div className="maintain-weight-tip-page">
      <h2 className="maintain-weight-title">Maintain Weight</h2>
      <p className="maintain-weight-description">
        Maintaining a healthy weight is essential for overall well-being and can significantly reduce the risk of chronic diseases like diabetes, heart disease, and certain cancers. It also contributes to higher energy levels, better mental health, and improved quality of life.
      </p>
      <p className="maintain-weight-statistics">
        <strong>Did you know?</strong> According to the World Health Organization (WHO), an estimated 1.9 billion adults worldwide were overweight in 2023, and over 650 million were obese. Maintaining a healthy weight can significantly reduce the risk of obesity-related diseases.
      </p>
      <p className="maintain-weight-statistics">
        Here are some statistics and facts that highlight the importance of maintaining a healthy weight:
      </p>
      <ul className="maintain-weight-facts-list">
        <li>
          <strong>Heart Disease:</strong> The American Heart Association reports that being overweight or obese is a major risk factor for heart disease, the leading cause of death globally. Maintaining a healthy weight can lower the risk of heart disease by up to 50%.
        </li>
        <li>
          <strong>Diabetes:</strong> Research shows that individuals who maintain a healthy weight reduce their risk of developing type 2 diabetes by 58%. Weight management is a key factor in diabetes prevention and management.
        </li>
        <li>
          <strong>Mental Health:</strong> Studies have found that individuals who maintain a healthy weight are less likely to experience depression and anxiety. A balanced diet and regular exercise contribute to better mental health and overall well-being.
        </li>
        <li>
          <strong>Cancer Prevention:</strong> According to the American Cancer Society, about 20% of all cancers in the U.S. are related to body fatness, physical inactivity, excess alcohol consumption, and/or poor nutrition. Maintaining a healthy weight can reduce the risk of certain types of cancer, including breast, colorectal, and kidney cancer.
        </li>
        <li>
          <strong>Longevity:</strong> Research from the National Institutes of Health (NIH) shows that maintaining a healthy weight can add up to 7 years to your life expectancy. Healthy weight management is associated with a longer, healthier life.
        </li>
      </ul>
      <p className="maintain-weight-description">
        The key to maintaining weight is finding a balance that works for your body and lifestyle. Below are some detailed strategies to help you maintain a healthy weight for the long term:
      </p>
      <ul className="maintain-weight-strategies-list">
        <li>
          <strong>Watch Your Portion Sizes:</strong> Portion control is crucial. Eating smaller portions helps prevent overeating. Consider using smaller plates, bowls, and utensils to help manage portion sizes.
        </li>
        <li>
          <strong>Eat a Balanced Diet:</strong> Focus on a diet rich in whole foods, including fruits, vegetables, lean proteins, and whole grains. Avoid processed foods high in sugar and unhealthy fats.
        </li>
        <li>
          <strong>Stay Hydrated:</strong> Drinking enough water is vital for weight maintenance. Water helps you feel full, can improve metabolism, and aids in digestion. Aim to drink at least 8 glasses of water a day.
        </li>
        <li>
          <strong>Track What You Eat:</strong> Keeping a food diary or using a calorie-tracking app can help you stay aware of your daily intake. This practice can prevent mindless eating and help you make healthier choices.
        </li>
        <li>
          <strong>Exercise Regularly:</strong> Incorporating both cardio and strength training exercises into your routine is important. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, along with muscle-strengthening exercises on two or more days a week.
        </li>
        <li>
          <strong>Prioritize Sleep:</strong> Getting adequate sleep (7-9 hours per night) is crucial for weight maintenance. Poor sleep can disrupt hormones that regulate hunger, leading to increased appetite and weight gain.
        </li>
        <li>
          <strong>Manage Stress:</strong> Chronic stress can lead to weight gain by increasing cravings for unhealthy foods and triggering emotional eating. Practice stress management techniques like yoga, meditation, or deep breathing exercises.
        </li>
        <li>
          <strong>Stay Consistent:</strong> Consistency is key to maintaining weight. Stick to your healthy eating and exercise habits even on weekends and holidays to avoid setbacks.
        </li>
        <li>
          <strong>Make Gradual Changes:</strong> If you need to adjust your diet or exercise routine, make small, sustainable changes over time. This approach is more effective and less overwhelming than drastic changes.
        </li>
        <li>
          <strong>Celebrate Small Wins:</strong> Recognize and celebrate your progress, no matter how small. This positive reinforcement can help keep you motivated on your weight maintenance journey.
        </li>
      </ul>
      <div className="maintain-weight-video-section">
        <h4 className="maintain-weight-video-title">Watch Useful Videos Below</h4>
        <ul className="maintain-weight-video-list">
          <a
            href="#"
            className="maintain-weight-video-link"
            onClick={() => openModal('https://www.youtube.com/embed/_j_4YW-uiCA')}
          >
            Healthy Maintaining Weight Tips Video
          </a>
          <Link to="/Workout" className="mw-workout-plan-link">
            Get Workout Plan
          </Link>
        </ul>
      </div>

      {modalVideoSrc && (
        <div className="maintain-weight-modal" onClick={closeModal}>
          <div className="maintain-weight-modal-content" onClick={e => e.stopPropagation()}>
            <span className="maintain-weight-modal-close" onClick={closeModal}>&times;</span>
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
