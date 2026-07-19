import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="Urban Worn" />
          <p>
            Health, beauty, and personal care essentials with free pickup points
            across Mexico City.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/download">Download the app</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Account</h3>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/#categories-title">Categories</Link>
            </li>
            <li>
              <Link to="/#products-title">Featured products</Link>
            </li>
            <li>
              <Link to="/#newsletter-title">Newsletter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bar">
        © {new Date().getFullYear()} Urban Worn
      </div>
    </footer>
  );
};

export default Footer;
