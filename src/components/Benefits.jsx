import React from 'react';
import { benefits } from '../data/catalog';

const Benefits = () => {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="home-section">
        <p className="home-section__eyebrow">Why Groop</p>
        <h2 id="benefits-title" className="home-section__title">
          Simple from browse to pickup
        </h2>
        <p className="home-section__lead">
          One purpose per step — choose products, pick a delivery point, and
          confirm your order.
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit.id} className="benefit-item">
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
