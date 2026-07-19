import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { formatPrice } from '../utils/cart';
import { searchProducts } from '../utils/search';

const Search = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(urlQuery);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    const handleClick = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const suggestions = query.trim() ? searchProducts(query).slice(0, 6) : [];

  const goSearch = (value) => {
    const term = value.trim();
    const params = new URLSearchParams();
    if (term) params.set('q', term);
    const next = params.toString() ? `/?${params.toString()}` : '/';
    navigate(`${next}#products-title`);
    setOpen(false);
    onNavigate?.();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    goSearch(query);
  };

  return (
    <div className="search-area" ref={rootRef}>
      <form className="minisearch" onSubmit={handleSubmit} role="search">
        <input
          type="search"
          id="header-search"
          placeholder="Search products..."
          name="search"
          value={query}
          autoComplete="off"
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
        <button type="submit" className="action" aria-label="Search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      {open && query.trim() && (
        <div className="search-suggestions" role="listbox">
          {suggestions.length === 0 ? (
            <p className="search-suggestions__empty">No products found.</p>
          ) : (
            <ul>
              {suggestions.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => {
                      setOpen(false);
                      onNavigate?.();
                    }}
                  >
                    <img src={product.image} alt="" />
                    <span>
                      <strong>{product.name}</strong>
                      <em>{formatPrice(product.price)}</em>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            className="search-suggestions__all"
            onClick={() => goSearch(query)}
          >
            View all results for “{query.trim()}”
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
