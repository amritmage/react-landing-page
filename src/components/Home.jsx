import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/Page.css';
import '../styles/Home.css';
import { products } from '../data/catalog';
import { searchProducts } from '../utils/search';
import HomeSlider from './HomeSlider';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Benefits from './Benefits';
import Newsletter from './Newsletter';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const query = searchParams.get('q') || '';

  const selectCategory = (categoryId) => {
    const next = new URLSearchParams();
    if (categoryId && categoryId !== 'all') {
      next.set('category', categoryId);
    }
    setSearchParams(next, { replace: true });
  };

  const byCategory =
    activeCategory === 'all'
      ? products
      : products.filter((product) =>
          product.categories.includes(activeCategory)
        );

  const visibleProducts = query
    ? searchProducts(query, byCategory)
    : byCategory;

  return (
    <main className="home-page">
      <HomeSlider />
      <Categories
        activeCategory={query ? 'all' : activeCategory}
        onSelect={selectCategory}
      />
      <FeaturedProducts
        products={visibleProducts}
        searchQuery={query}
        activeCategory={activeCategory}
      />
      <Benefits />
      <Newsletter />
    </main>
  );
};

export default Home;
