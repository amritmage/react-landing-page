import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Page.css';
import '../styles/Product.css';

const NotFound = () => {
  return (
    <div className="page-main not-found-page">
      <h1>Page not found</h1>
      <p>
        That link doesn’t match a page in this ecommerce demo. Head home or
        browse the catalog instead.
      </p>
      <div className="not-found-actions">
        <Link to="/">Go home</Link>
        <Link to="/#products-title" className="is-secondary">
          Browse products
        </Link>
        <Link to="/contact" className="is-secondary">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
