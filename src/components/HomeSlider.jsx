import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Slider.css';
import slide1 from '../assets/hero-banner-web-1.png';
import slide2 from '../assets/hero-banner-web-2.png';
import slide3 from '../assets/products/serum.jpg';

const slides = [
  {
    id: 1,
    image: slide1,
    alt: 'Beauty offer with night repair serum',
    offer: '15% OFF',
    title: 'Night repair serum',
    subtitle: 'Discover our best offers this week.',
    cta: 'Shop now',
  },
  {
    id: 2,
    image: slide2,
    alt: 'Featured skincare collection',
    offer: '20% OFF',
    title: 'Glow essentials',
    subtitle: 'Skincare picks ready for pickup across CDMX.',
    cta: 'View deals',
  },
  {
    id: 3,
    image: slide3,
    alt: 'Serum bottle on display',
    offer: 'NEW',
    title: 'Urban Worn beauty',
    subtitle: 'Health and personal care at Groop prices.',
    cta: 'Browse all',
  },
];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (next) => {
    setIndex((next + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const active = slides[index];

  return (
    <section
      className="home-banner-slider"
      aria-roledescription="carousel"
      aria-label="Featured offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-track">
        {slides.map((slide, slideIndex) => (
          <article
            key={slide.id}
            className={`hero-slide${slideIndex === index ? ' is-active' : ''}`}
            aria-hidden={slideIndex !== index}
          >
            <img className="hero-slide__image" src={slide.image} alt={slide.alt} />
            <div className="hero-slide__shade" />
          </article>
        ))}
      </div>

      <div className="hero-copy" key={active.id}>
        <p className="hero-copy__offer">{active.offer}</p>
        <h2 className="hero-copy__title">{active.title}</h2>
        <p className="hero-copy__subtitle">{active.subtitle}</p>
        <Link to="/#products-title" className="hero-copy__cta">
          {active.cta}
        </Link>
      </div>

      <div className="hero-dots" role="tablist" aria-label="Slide selectors">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={slideIndex === index}
            aria-label={`Go to slide ${slideIndex + 1}`}
            className={`hero-dot${slideIndex === index ? ' is-active' : ''}`}
            onClick={() => goTo(slideIndex)}
          />
        ))}
      </div>

      <button
        type="button"
        className="hero-nav hero-nav--prev"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-nav hero-nav--next"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
      >
        ›
      </button>
    </section>
  );
};

export default HomeSlider;
