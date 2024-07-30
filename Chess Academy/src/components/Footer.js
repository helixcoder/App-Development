import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1> Elite Chess Academy</h1>
          <p>Empowering Chess Enthusiasts</p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:info@chessacademy.com">info@chessacademy.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Chess Street, Chess City, CC 12345</p>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <a href="https://facebook.com/chessacademy" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/chessacademy" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com/chessacademy" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chess Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
