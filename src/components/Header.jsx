import React, { useState } from 'react';
import '../styles/Header.css';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/fontawesome-free-solid';
import logo from '../assets/logo.svg';
import Search from './Search';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { menuCategories } from '../utils/search';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const hasQuery = Boolean(searchParams.get('q'));

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header-main">
      <div className="header-top">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Urban Worn" />
        </Link>

        <Search onNavigate={closeMenu} />

        <Link
          to="/cart"
          className="cart-link"
          onClick={closeMenu}
          aria-label={`Cart with ${itemCount} items`}
        >
          <FontAwesomeIcon icon={faShoppingBag} />
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="utility-nav"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="utility-nav"
          className={`utility-nav${menuOpen ? ' is-open' : ''}`}
        >
          <ul>
            <li>
              <Link to="/faq" onClick={closeMenu}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            {user ? (
              <>
                <li className="utility-user" title={user.email}>
                  Hi, {user.name.split(' ')[0]}
                </li>
                <li>
                  <button
                    type="button"
                    className="utility-logout"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={closeMenu}>
                    Sign up
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                to="/download"
                className="descarga_la_app"
                onClick={closeMenu}
              >
                Download the app
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="category-nav" aria-label="Product categories">
        <div className="category-nav__inner">
          <Link
            to="/#products-title"
            className={
              !hasQuery && activeCategory === 'all'
                ? 'category-nav__link is-active'
                : 'category-nav__link'
            }
            onClick={closeMenu}
          >
            All
          </Link>
          {menuCategories.map((category) => {
            const to = `/?category=${category.id}#products-title`;
            const isActive = !hasQuery && activeCategory === category.id;
            return (
              <Link
                key={category.id}
                to={to}
                className={`category-nav__link${isActive ? ' is-active' : ''}`}
                onClick={closeMenu}
              >
                {category.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
