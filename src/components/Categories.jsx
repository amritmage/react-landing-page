import React from 'react';
import { categories } from '../data/catalog';

const Categories = ({ activeCategory, onSelect }) => {
  return (
    <section className="home-section" aria-labelledby="categories-title">
      <p className="home-section__eyebrow">Shop by category</p>
      <h2 id="categories-title" className="home-section__title">
        Find your routine
      </h2>
      <p className="home-section__lead">
        Skincare, hair, body, wellness, makeup, fragrance, and more — tap a
        category to refine the picks below.
      </p>
      <div className="category-row" role="tablist" aria-label="Product categories">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`category-pill${isActive ? ' is-active' : ''}`}
              onClick={() => onSelect(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
