import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="home-section">
        <p className="home-section__eyebrow">Stay in the loop</p>
        <h2 id="newsletter-title" className="home-section__title">
          Offers in your inbox
        </h2>
        <p className="home-section__lead">
          Be first to hear about night serums, glow drops, and weekly deals.
        </p>

        {submitted ? (
          <p className="newsletter-success" role="status">
            Thanks — we&apos;ll send the next drop to {email}.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@email.com"
              required
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
