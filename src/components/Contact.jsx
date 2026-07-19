import React, { useState } from 'react';
import '../styles/Page.css';
import '../styles/Contact.css';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in every field.');
      return;
    }

    setSent(true);
  };

  return (
    <div className="page-main contact-page">
      <h1 className="page-title">Contact</h1>
      <p className="contact-lead">
        Questions about an order, a delivery point, or a product? Send us a
        note and we&apos;ll get back to you.
      </p>

      {sent ? (
        <div className="contact-success" role="status">
          Thanks, {form.name}. We received your note and will reply to{' '}
          {form.email} soon.
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          {error && <p className="contact-error">{error}</p>}
          <button type="submit" className="contact-submit">
            Send message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
