import React from 'react';
import { Link } from 'react-router-dom';
import './Component_Styles/GetTips.css';


// Import images
import BodyCareImage from '../assets/imagesforTips/Body_care.jpeg';
import BuildBodyForMenImage from '../assets/imagesforTips/Build_body_for_men.jpeg';
import BuildBodyForWomenImage from '../assets/imagesforTips/Build_body_for_women.jpeg';
import DentalCareImage from '../assets/imagesforTips/Dental_care.jpeg';
import EyeCareImage from '../assets/imagesforTips/Eye_care.jpeg';
import GainWeightImage from '../assets/imagesforTips/Gain_weight.jpeg';
import HairCareImage from '../assets/imagesforTips/Hair_care.jpeg';
import MenSkinCareImage from '../assets/imagesforTips/men_skin_care.jpeg';
import MaintainWeightImage from '../assets/imagesforTips/Mentain_weight.jpeg';
import MentalCareImage from '../assets/imagesforTips/Mental_care.jpeg';
import ReduceWeightImage from '../assets/imagesforTips/Reduce_weight.jpeg';
import WomenSkinCareImage from '../assets/imagesforTips/women_skin_care.jpeg';

const GetTips: React.FC = () => {
  const tips = [
    { title: 'Reduce Weight', link: '/tips/reduce-weight', image: ReduceWeightImage, description: 'Learn effective weight reduction strategies.' },
    { title: 'Maintain Weight', link: '/tips/maintain-weight', image: MaintainWeightImage, description: 'Keep your weight stable with these tips.' },
    { title: 'Gain Weight', link: '/tips/increase-weight', image: GainWeightImage, description: 'Healthy ways to increase your weight.' },
    { title: 'Build Body for Men', link: '/tips/build-body-men', image: BuildBodyForMenImage, description: 'Bodybuilding tips specifically for men.' },
    { title: 'Build Body for Women', link: '/tips/build-body-women', image: BuildBodyForWomenImage, description: 'Bodybuilding tips tailored for women.' },
    { title: 'Skin Care Tips for Men', link: '/tips/skin-care-men', image: MenSkinCareImage, description: 'Maintain healthy skin with these tips.' },
    { title: 'Skin Care for Women', link: '/tips/skin-care-women', image: WomenSkinCareImage, description: 'Skin care advice for women.' },
    { title: 'Dental Health Care', link: '/tips/dental-care', image: DentalCareImage, description: 'Tips to maintain your dental health.' },
    { title: 'Eye Health Care', link: '/tips/eye-care', image: EyeCareImage, description: 'Keep your eyes healthy with these tips.' },
    { title: 'Body Health Care', link: '/tips/body-care', image: BodyCareImage, description: 'General health care tips for your body.' },
    { title: 'Hair Care Tips', link: '/tips/hair-care', image: HairCareImage, description: 'Tips to maintain healthy hair.' },
    { title: 'Mental Health Care', link: '/tips/mental-care', image: MentalCareImage, description: 'Tips to maintain good mental health.' }
  ];

  return (
    <div className="get-tips-container">
      <div className="get-tips-cards">
        {tips.map((tip, index) => (
          <div className="get-tips-card" key={index}>
            <h3>{tip.title}</h3>
            <img src={tip.image} alt={tip.title} className="get-tips-card-img" loading="lazy" />
            <p className="get-tips-card-description">{tip.description}</p>
            <Link to={tip.link} className="get-tips-card-btn">Explore</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetTips;
