import React from 'react';
import './Tippages_Styles/EyeCare.css';

const EyeCare: React.FC = () => {
  return (
    <div className="eye-care-page">
      <h2>Eye Care Tips</h2>
      <p>Taking care of your eyes is crucial for maintaining good vision and overall eye health. Follow these tips to protect your eyes:</p>
      
      <h3>Don't Take Your Eyes for Granted</h3>
      <p>Take these easy steps to keep your peepers healthy:</p>
      
      <ul>
        <li><strong>Eat Well</strong>: Good eye health starts with a balanced diet. Include nutrients like omega-3 fatty acids, lutein, zinc, and vitamins C and E. Foods to eat include:
          <ul>
            <li>Green leafy vegetables like spinach, kale, and collards</li>
            <li>Salmon, tuna, and other oily fish</li>
            <li>Eggs, nuts, beans, and other nonmeat protein sources</li>
            <li>Oranges and other citrus fruits or juices</li>
            <li>Oysters and pork</li>
          </ul>
        </li>
        <li><strong>Quit Smoking</strong>: Smoking increases the risk of cataracts, damage to the optic nerve, and macular degeneration. If you've tried to quit before, keep trying and ask your doctor for help.</li>
        <li><strong>Wear Sunglasses</strong>: Choose sunglasses that block 99% to 100% of UVA and UVB rays. Wraparound lenses help protect your eyes from the side. If you wear contact lenses, opt for ones with UV protection, but still wear sunglasses.</li>
        <li><strong>Use Safety Eyewear</strong>: Wear safety glasses or goggles when working with hazardous materials or playing sports that could lead to eye injury.</li>
        <li><strong>Look Away From the Computer Screen</strong>: To prevent eyestrain and other issues, follow these tips:
          <ul>
            <li>Update your glasses or contacts prescription.</li>
            <li>Use an anti-glare screen if needed.</li>
            <li>Position your screen so your eyes are level with the top of the monitor.</li>
            <li>Take breaks: Every 20 minutes, look at something 20 feet away for 20 seconds, and get up every 2 hours for a 15-minute break.</li>
          </ul>
        </li>
        <li><strong>Visit Your Eye Doctor Regularly</strong>: Regular eye exams are essential. They help spot diseases like glaucoma that may not show symptoms. Depending on your needs, see an ophthalmologist or optometrist for comprehensive care.</li>
      </ul>
    </div>
  );
};

export default EyeCare;
