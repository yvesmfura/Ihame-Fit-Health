import React from 'react';
import './Tippages_Styles/SkinCareForWomen.css';

const SkinCareForWomen: React.FC = () => {
  return (
    <div className="skincare-women-page">
      <h2 className="skincare-women-title">Skin Care Tips for Women</h2>
      <p className="skincare-women-intro">
        Achieving glowing and healthy skin requires a well-rounded routine tailored to your skin type and concerns. Follow these tips to enhance your skin care regimen:
      </p>
      <ul className="skincare-women-list">
        <li className="skincare-women-item">
          <strong>Daily Cleansing:</strong> Gently cleanse your face twice daily to remove makeup, dirt, and impurities without stripping your skin’s natural oils.
        </li>
        <li className="skincare-women-item">
          <strong>Use a Balancing Toner:</strong> Apply a toner to restore your skin's pH balance after cleansing, helping to tighten pores and prepare your skin for moisturizing.
        </li>
        <li className="skincare-women-item">
          <strong>Moisturize According to Skin Type:</strong> Choose a moisturizer that suits your skin type—whether it’s oily, dry, combination, or sensitive—to maintain hydration without clogging pores.
        </li>
        <li className="skincare-women-item">
          <strong>Daily Sunscreen:</strong> Protect your skin from harmful UV rays by applying a broad-spectrum sunscreen with at least SPF 30 every day, regardless of the weather.
        </li>
        <li className="skincare-women-item">
          <strong>Incorporate Antioxidant Serum:</strong> Add a serum rich in antioxidants like vitamin C or E to fight free radicals, reduce signs of aging, and brighten your complexion.
        </li>
        <li className="skincare-women-item">
          <strong>Regular Exfoliation:</strong> Exfoliate 2-3 times a week to remove dead skin cells, promote cell turnover, and achieve a smoother skin texture.
        </li>
        <li className="skincare-women-item">
          <strong>Hydration & Diet:</strong> Stay hydrated by drinking plenty of water and eat a balanced diet rich in vitamins, minerals, and healthy fats to nourish your skin from within.
        </li>
        <li className="skincare-women-item">
          <strong>Nighttime Care:</strong> Use a richer, hydrating night cream and an eye cream before bed to repair and rejuvenate your skin while you sleep.
        </li>
        <li className="skincare-women-item">
          <strong>Stress Management:</strong> Reduce stress through activities like yoga, meditation, or exercise, as stress can negatively impact your skin’s appearance.
        </li>
        <li className="skincare-women-item">
          <strong>Customize Your Routine:</strong> Adjust your skin care routine based on seasonal changes and any new skin concerns that arise.
        </li>
      </ul>
    </div>
  );
};

export default SkinCareForWomen;
