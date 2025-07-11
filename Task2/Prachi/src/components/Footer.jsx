// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} NewsNow By Prachi. All rights reserved.</p>
      {/* Add more footer content here, e.g., links, social media icons */}
    </footer>
  );
};

export default Footer;
