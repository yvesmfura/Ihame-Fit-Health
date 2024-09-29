import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Developed by Imfura Tech Solutions</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/company/imfuratechsolutions" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://instagram.com/imfuratechsolutions" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/imfutatechsolutions" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="mailto:info@imfuratechsolutions.com">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p>&copy; 2024 Imfura Tech Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
