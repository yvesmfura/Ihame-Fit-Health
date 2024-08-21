import React from 'react';
import './Tippages_Styles/GainWeightTipPages.css';

const GainWeight: React.FC = () => {
  return (
    <div className="gain-weight-page">
      <h2>How to Gain Weight Safely and Healthily</h2>
      <p>Gaining weight should be done healthily, focusing on muscle gain rather than fat. Here are some comprehensive tips:</p>
      
      <h3>Increase Your Caloric Intake</h3>
      <p>The most important step in gaining weight is to create a calorie surplus. Aim for 300-500 extra calories per day for steady weight gain or 700-1,000 extra calories for faster results.</p>
      
      <h3>Eat More Protein</h3>
      <p>Protein is essential for muscle growth. Include high-protein foods like meats, fish, eggs, dairy products, legumes, and nuts in your diet. Consider protein supplements if necessary.</p>
      
      <h3>Increase Your Intake of Carbs</h3>
      <p>Carbohydrates are a vital part of a balanced diet and help increase calorie intake. Include foods like oats, quinoa, fruits, sweet potatoes, and whole grains in your meals.</p>
      
      <h3>Eat More Energy-Dense Foods</h3>
      <p>Incorporate energy-dense foods that pack a lot of calories relative to their weight, such as nuts, dried fruit, full-fat dairy, and healthy oils. Use spices and condiments to make your meals tastier and easier to consume in larger quantities.</p>
      
      <h3>Other Quick Tips</h3>
      <ul className="quick-tips-list">
        <li>Avoid drinking water before meals to avoid filling up your stomach.</li>
        <li>Consider weight gainer shakes if you're struggling to gain weight.</li>
        <li>Use bigger plates to encourage larger portion sizes.</li>
        <li>Take creatine supplements to help build muscle mass.</li>
        <li>Ensure you're getting quality sleep, which is crucial for muscle growth.</li>
        <li>If you smoke, consider quitting, as smoking can lead to lower body weight.</li>
      </ul>

      <h3>The Bottom Line</h3>
      <p>Making dietary changes, focusing on high-calorie, nutrient-dense foods, and maintaining a healthy lifestyle can help you gain weight safely. Consider consulting a nutritionist or dietitian for personalized advice.</p>

      <h3>Watch This Video for More Tips</h3>
      <div className="gain-weight-video">
        <h3 className="video-title">How to gain weight naturally</h3>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/sGVf3w1ow6Q"  
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <h3 className="video-title">Healthy food for gaining weight</h3>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/WwASmxrIEiI" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default GainWeight;
