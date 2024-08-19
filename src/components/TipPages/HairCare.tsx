import React, { useState } from 'react';
import './Tippages_Styles/Haircare.css';

const HairCare: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="haircare-page">
      <h2>Hair Care Tips</h2>
      <p>Healthy hair requires consistent care and good habits. Explore tips tailored for everyone:</p>
      <ul className="section-list">
        <li onClick={() => handleSectionClick('men')} className={activeSection === 'men' ? 'active' : ''}>Hair Care for Men</li>
        <li onClick={() => handleSectionClick('women')} className={activeSection === 'women' ? 'active' : ''}>Hair Care for Women</li>
      </ul>
      {activeSection === 'men' && (
        <div className="section-content">
          <h3>Hair Care for Men</h3>
          <p>Healthy, luscious hair doesn’t discriminate. It’s possible for both men and women to achieve, as long as you’re willing to put in the effort.</p>
          <p>Here are some detailed tips for men’s hair care:</p>
          <ul className="haircare-tips">
            <li>Keep your scalp clean to avoid disruptions in the microbiome balance.</li>
            <li>Invest in the right products suited to your hair type.</li>
            <li>Start with basic care and remain consistent for best results.</li>
            <li>For Black hair, use nourishing products and get regular trims.</li>
            <li>Manage long hair by trimming every 12 weeks and using soft hold products.</li>
            <li>Gray hair requires conditioning and color-safe products if dyed.</li>
            <li>Curly hair needs regular conditioning and products that enhance texture.</li>
            <li>Moisturize hair regularly to combat dryness.</li>
            <li>Treat a dry scalp with products containing tea tree oil.</li>
            <li>Address oily hair with shampoos containing menthol.</li>
            <li>For hair loss, consider treatments like Rogaine Foam or Propecia, and consult a professional if needed.</li>
          </ul>
          <p>Watch the following video for more insights:</p>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/cjjuDBeWhhg?si=QayDlerg9Yw7D4Fc"
              title="Hair Care Tips for Men"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>Learn more about maintaining your hair and managing common issues.</p>
        </div>
      )}
      {activeSection === 'women' && (
        <div className="section-content">
          <h3>Hair Care for Women</h3>
          <p>Amidst the daily hustle-bustle of life, the one thing that we often put on the back burner is the hair care routine. It’s not a good practice. A hair care routine for women is as essential as a skincare routine. It is not only about using your regular shampoo and conditioner but a lot more. Let’s find out what should be the standard hair care routine for women and how to maintain healthy tresses.</p>
          <ul className="haircare-tips">
            <li><strong>Use the right shampoo:</strong> Choose a natural shampoo free from toxic chemicals and suited to your hair type.</li>
            <li><strong>Don’t shampoo daily:</strong> Limit shampooing to twice a week to avoid stripping natural moisture.</li>
            <li><strong>Follow up with conditioner:</strong> Use a conditioner suitable for your hair type to nourish and moisturize.</li>
            <li><strong>Trim regularly:</strong> Trim your hair every month to maintain health and prevent split ends.</li>
            <li><strong>Treat your hair gently:</strong> Avoid rubbing, pulling, or combing wet hair to prevent damage.</li>
            <li><strong>Massage with hair oil:</strong> Use natural oil to treat breakage, split ends, and dry scalp.</li>
            <li><strong>Nourish with a hair mask:</strong> Use a nourishing hair mask to lock in moisture and repair damage.</li>
            <li><strong>Use leave-in hair conditioner:</strong> Helps keep hair soft and manageable while providing protection.</li>
            <li><strong>Hydrate with hair steam:</strong> Regular steaming helps hydrate dry hair and promote growth.</li>
            <li><strong>Hair Spa:</strong> Incorporate regular hair spa treatments to deep condition and reverse damage.</li>
          </ul>

          <p>Dos and Don’ts:</p>
          <ul className="dos-donts">
            <li><strong>Dos:</strong> Trim regularly, protect hair from sun damage, use natural products.</li>
            <li><strong>Don’ts:</strong> Avoid daily washing, tight hairstyles, and hot water.</li>
          </ul>
          <div className="video-wrapper">
          <p>Watch the following video for more insights:</p>
            <iframe
              src="https://www.youtube.com/embed/Qy5KzhmYL7Q?si=VPLQfLr6Quel_Suv"
              title="Hair Care Tips for Women"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>For further details and personalized care, consult with a professional hair stylist or dermatologist.</p>
        </div>
      )}
    </div>
  );
};

export default HairCare;
