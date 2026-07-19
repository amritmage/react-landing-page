import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Page.css';
import '../styles/Auth.css';

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const navigate = useNavigate();
  const { user, signup } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      setError('Please fill in every field.');
      return;
    }

    if (form.password.trim().length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    signup({
      name: form.name,
      email: form.email,
    });
    navigate('/');
  };

  if (user) {
    return (
      <div className="page-main auth-page">
        <h1 className="page-title">You’re signed in</h1>
        <div className="auth-success">
          <p>
            Account ready for <strong>{user.name}</strong> ({user.email}).
          </p>
          <Link to="/" className="auth-submit">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-main auth-page">
      <h1 className="page-title">Sign up</h1>
      <p className="auth-lead">
        Create a demo account. This form validates input in the browser only —
        no database insert happens.
      </p>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="auth-field">
          <label htmlFor="signup-name">Full name</label>
          <input
            id="signup-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-confirm">Confirm password</label>
          <input
            id="signup-confirm"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>
        {error && <p className="auth-error">{error}</p>}
        <button type="submit" className="auth-submit">
          Create account
        </button>
      </form>

      <p className="auth-switch">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      <p className="auth-note">
        Demo only: your name and email are kept in <code>localStorage</code> for
        this browser session. Passwords are not stored.
      </p>
    </div>
  );
};

export default Signup;
