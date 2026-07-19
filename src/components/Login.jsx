import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Page.css';
import '../styles/Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setError('Please enter your email and password.');
      return;
    }

    if (form.password.trim().length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const nameFromEmail = form.email.trim().split('@')[0] || 'Guest';
    login({
      name: nameFromEmail.replace(/[._-]+/g, ' '),
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
            Welcome back, <strong>{user.name}</strong> ({user.email}).
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
      <h1 className="page-title">Log in</h1>
      <p className="auth-lead">
        Access your Urban Worn demo account. This form only updates local
        browser state — nothing is saved to a database.
      </p>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="auth-field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>
        {error && <p className="auth-error">{error}</p>}
        <button type="submit" className="auth-submit">
          Log in
        </button>
      </form>

      <p className="auth-switch">
        New here? <Link to="/signup">Create an account</Link>
      </p>
      <p className="auth-note">
        Demo tip: any email + password (6+ characters) works. No backend call is
        made.
      </p>
    </div>
  );
};

export default Login;
