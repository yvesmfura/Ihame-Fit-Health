import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Developed by Yves IRAKOZE MFURA</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/yves-irakoze-mfura-203053252/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/yves.mfura/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/yvesmfura" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="mailto:mfuryves25@gmail.com">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p>&copy; 2024 Yves IRAKOZE MFURA. All rights reserved.</p>
    </footer>
  );
};

export default Footer;