import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/catalog';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/cart';

const categoryLabel = (id) =>
  categories.find((category) => category.id === id)?.label || id;

const FeaturedProducts = ({ products, searchQuery = '', activeCategory = 'all' }) => {
  const { items, itemCount, addItem } = useCart();
  const activeLabel = categoryLabel(activeCategory);

  const title = searchQuery
    ? `Results for “${searchQuery}”`
    : activeCategory !== 'all'
      ? activeLabel
      : 'Best sellers this week';

  const lead = searchQuery
    ? `${products.length} product${products.length === 1 ? '' : 's'} matched your search.`
    : activeCategory !== 'all'
      ? `Browsing ${activeLabel.toLowerCase()} picks — add what you like to your bag.`
      : 'Beauty and personal care essentials at Groop prices — add what you like to your bag.';

  return (
    <section className="home-section" aria-labelledby="products-title">
      <div className="home-section__header">
        <div>
          <p className="home-section__eyebrow">
            {searchQuery ? 'Search' : 'Featured picks'}
          </p>
          <h2 id="products-title" className="home-section__title">
            {title}
          </h2>
          <p className="home-section__lead">{lead}</p>
          {searchQuery && (
            <Link to="/#products-title" className="search-clear">
              Clear search
            </Link>
          )}
        </div>
        {itemCount > 0 && (
          <Link to="/cart" className="cart-chip" aria-live="polite">
            Bag · {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </Link>
        )}
      </div>

      {products.length === 0 ? (
        <p className="product-empty">
          {searchQuery
            ? 'No products matched that search. Try another term or browse categories.'
            : 'No products in this category yet.'}
        </p>
      ) : (
        <div className="product-grid">
          {products.map((product) => {
            const inCart = items.some((item) => item.id === product.id);
            return (
              <article key={product.id} className="product-tile">
                <div className="product-media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span>{categoryLabel(product.categories[0])}</span>
                </div>
                <div className="product-meta">
                  <h3>{product.name}</h3>
                  <p>{product.blurb}</p>
                </div>
                <div className="product-row">
                  <span className="product-price">{formatPrice(product.price)}</span>
                  <button
                    type="button"
                    className={`product-add${inCart ? ' is-added' : ''}`}
                    onClick={() => addItem(product)}
                  >
                    {inCart ? 'Added' : 'Add'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
