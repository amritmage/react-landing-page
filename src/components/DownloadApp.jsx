import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Page.css';
import '../styles/Auth.css';

const DownloadApp = () => {
  const [message, setMessage] = useState('');

  const handleDemoDownload = (store) => {
    setMessage(
      `${store} download is a demo action — no app store redirect in this project.`
    );
  };

  return (
    <div className="page-main download-page">
      <h1 className="page-title">Download the app</h1>
      <p className="download-lead">
        Shop Groop prices, pick a delivery point, and track offers from your
        phone. Store buttons below are demo links only.
      </p>

      <div className="download-actions">
        <button
          type="button"
          className="download-cta"
          onClick={() => handleDemoDownload('App Store')}
        >
          App Store
        </button>
        <button
          type="button"
          className="download-cta is-secondary"
          onClick={() => handleDemoDownload('Google Play')}
        >
          Google Play
        </button>
      </div>

      {message && <p className="auth-note">{message}</p>}

      <ul className="download-list">
        <li>Browse skincare, hair, body, and wellness picks</li>
        <li>Save a bag and check out with pay on delivery</li>
        <li>Get WhatsApp order confirmations</li>
      </ul>

      <p className="auth-switch">
        Prefer the web? <Link to="/#products-title">Shop on the homepage</Link>
        {' · '}
        <Link to="/contact">Contact us</Link>
      </p>
    </div>
  );
};

export default DownloadApp;
