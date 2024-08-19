import React from 'react';
import './Tippages_Styles/DentalCare.css';

const DentalCare: React.FC = () => {
  return (
    <div className="dental-care-page">
      <h2 className="dental-care-title">Dental Care Tips</h2>
      <p className="dental-care-intro">
        Good dental hygiene is essential for overall health. Achieving healthy teeth takes a lifetime of care, 
        even if you’ve been told that you have nice teeth. It’s crucial to take the right steps every day to 
        care for them and prevent problems. Here are some tips to help you maintain a healthy smile:
      </p>
      <ul className="dental-care-list">
        <li className="dental-care-item">Brush your teeth at least twice a day with fluoride toothpaste.</li>
        <li className="dental-care-item">Don’t go to bed without brushing your teeth.</li>
        <li className="dental-care-item">Brush properly, using gentle, circular motions.</li>
        <li className="dental-care-item">Don’t neglect your tongue; gently brush it as well.</li>
        <li className="dental-care-item">Use a fluoride toothpaste to protect against tooth decay.</li>
        <li className="dental-care-item">Floss daily to remove plaque and food particles between teeth.</li>
        <li className="dental-care-item">Don’t let flossing difficulties stop you; use tools if necessary.</li>
        <li className="dental-care-item">Consider using mouthwash to reduce acid, clean hard-to-brush areas, and re-mineralize teeth.</li>
        <li className="dental-care-item">Drink more water, especially after meals, to wash out the effects of sticky and acidic foods.</li>
        <li className="dental-care-item">Eat crunchy fruits and vegetables to stimulate your gums and promote healthy teeth.</li>
        <li className="dental-care-item">Limit sugary and acidic foods, which can erode enamel and lead to cavities.</li>
        <li className="dental-care-item">See your dentist at least twice a year for cleanings and checkups.</li>
        <li className="dental-care-item">Wear a mouthguard if you grind your teeth or play contact sports.</li>
      </ul>
      <div className="dental-care-video">
        <h3 className="video-title">How to Brush Your Teeth Properly</h3>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/leVF5RYj42Y?si=HaAB4Ei_98x53rhI"  
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default DentalCare;
