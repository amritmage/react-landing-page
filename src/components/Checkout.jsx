import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DELIVERY_FEE, pickupPoints } from '../data/catalog';
import { useCart } from '../context/CartContext';
import {
  createOrderId,
  formatPrice,
  LAST_ORDER_STORAGE_KEY,
} from '../utils/cart';
import '../styles/Page.css';
import '../styles/Cart.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  fulfillment: 'pickup',
  pickupPointId: pickupPoints[0]?.id || '',
  address: '',
  payment: 'cod',
  cardNumber: '',
  cardExpiry: '',
  cardCvc: '',
  notes: '',
};

const Checkout = () => {
  const navigate = useNavigate();
  const { lines, itemCount, subtotal, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  useEffect(() => {
    if (lines.length === 0) {
      navigate('/cart', { replace: true });
    }
  }, [lines.length, navigate]);

  if (lines.length === 0) {
    return null;
  }

  const shipping = form.fulfillment === 'delivery' ? DELIVERY_FEE : 0;
  const total = subtotal + shipping;
  const selectedPickup = pickupPoints.find(
    (point) => point.id === form.pickupPointId
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Please fill in your name, email, and phone.');
      return;
    }

    if (form.fulfillment === 'pickup' && !form.pickupPointId) {
      setError('Please choose a pickup point.');
      return;
    }

    if (form.fulfillment === 'delivery' && !form.address.trim()) {
      setError('Please enter a delivery address.');
      return;
    }

    if (form.payment === 'card') {
      const digits = form.cardNumber.replace(/\s/g, '');
      if (digits.length < 12 || !form.cardExpiry.trim() || !form.cardCvc.trim()) {
        setError('Enter demo card details, or switch to pay on delivery.');
        return;
      }
    }

    const order = {
      id: createOrderId(),
      createdAt: new Date().toISOString(),
      customer: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      },
      fulfillment: {
        type: form.fulfillment,
        pickupPoint: selectedPickup || null,
        address: form.fulfillment === 'delivery' ? form.address.trim() : '',
      },
      payment: {
        method: form.payment,
      },
      notes: form.notes.trim(),
      items: lines.map((line) => ({
        id: line.id,
        name: line.name,
        qty: line.qty,
        price: line.price,
        lineTotal: line.lineTotal,
      })),
      itemCount,
      subtotal,
      shipping,
      total,
    };

    localStorage.setItem(LAST_ORDER_STORAGE_KEY, JSON.stringify(order));
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="page-main checkout-page">
      <h1 className="page-title">Checkout</h1>
      <p className="checkout-lead">
        Choose pickup or delivery, then confirm your order. This is a demo —
        no real payment is processed.
      </p>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <section className="checkout-block">
            <h2>Contact</h2>
            <div className="checkout-field">
              <label htmlFor="checkout-name">Name</label>
              <input
                id="checkout-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>
            <div className="checkout-field">
              <label htmlFor="checkout-email">Email</label>
              <input
                id="checkout-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div className="checkout-field">
              <label htmlFor="checkout-phone">Phone / WhatsApp</label>
              <input
                id="checkout-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
          </section>

          <section className="checkout-block">
            <h2>Fulfillment</h2>
            <div className="choice-row">
              <label
                className={`choice-option${
                  form.fulfillment === 'pickup' ? ' is-active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="fulfillment"
                  value="pickup"
                  checked={form.fulfillment === 'pickup'}
                  onChange={handleChange}
                />
                <span>
                  <strong>Pickup point</strong>
                  <span>Free — collect at a Groop point in Mexico City.</span>
                </span>
              </label>
              <label
                className={`choice-option${
                  form.fulfillment === 'delivery' ? ' is-active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="fulfillment"
                  value="delivery"
                  checked={form.fulfillment === 'delivery'}
                  onChange={handleChange}
                />
                <span>
                  <strong>Home delivery</strong>
                  <span>{formatPrice(DELIVERY_FEE)} delivery fee.</span>
                </span>
              </label>
            </div>

            {form.fulfillment === 'pickup' ? (
              <div className="checkout-field">
                <label htmlFor="checkout-pickup">Pickup point</label>
                <select
                  id="checkout-pickup"
                  name="pickupPointId"
                  value={form.pickupPointId}
                  onChange={handleChange}
                >
                  {pickupPoints.map((point) => (
                    <option key={point.id} value={point.id}>
                      {point.label} — {point.address}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="checkout-field">
                <label htmlFor="checkout-address">Delivery address</label>
                <textarea
                  id="checkout-address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street, colonia, alcaldía, CP"
                />
              </div>
            )}
          </section>

          <section className="checkout-block">
            <h2>Payment</h2>
            <div className="choice-row">
              <label
                className={`choice-option${
                  form.payment === 'cod' ? ' is-active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === 'cod'}
                  onChange={handleChange}
                />
                <span>
                  <strong>Pay on delivery</strong>
                  <span>Pay when you pick up or receive your order.</span>
                </span>
              </label>
              <label
                className={`choice-option${
                  form.payment === 'card' ? ' is-active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === 'card'}
                  onChange={handleChange}
                />
                <span>
                  <strong>Card (demo)</strong>
                  <span>No charge — for practicing form state only.</span>
                </span>
              </label>
            </div>

            {form.payment === 'card' && (
              <>
                <div className="checkout-field">
                  <label htmlFor="checkout-card">Card number</label>
                  <input
                    id="checkout-card"
                    name="cardNumber"
                    type="text"
                    inputMode="numeric"
                    value={form.cardNumber}
                    onChange={handleChange}
                    placeholder="4242 4242 4242 4242"
                    autoComplete="off"
                  />
                </div>
                <div className="checkout-field">
                  <label htmlFor="checkout-expiry">Expiry</label>
                  <input
                    id="checkout-expiry"
                    name="cardExpiry"
                    type="text"
                    value={form.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    autoComplete="off"
                  />
                </div>
                <div className="checkout-field">
                  <label htmlFor="checkout-cvc">CVC</label>
                  <input
                    id="checkout-cvc"
                    name="cardCvc"
                    type="text"
                    inputMode="numeric"
                    value={form.cardCvc}
                    onChange={handleChange}
                    placeholder="123"
                    autoComplete="off"
                  />
                </div>
              </>
            )}
          </section>

          <section className="checkout-block">
            <h2>Notes</h2>
            <div className="checkout-field">
              <label htmlFor="checkout-notes">Order notes (optional)</label>
              <textarea
                id="checkout-notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
              />
            </div>
          </section>

          {error && <p className="checkout-error">{error}</p>}

          <button type="submit" className="checkout-submit">
            Place order · {formatPrice(total)}
          </button>
          <Link to="/cart" className="cart-continue">
            Back to bag
          </Link>
        </form>

        <aside className="checkout-summary">
          <h2>Summary</h2>
          <ul className="checkout-mini-lines">
            {lines.map((line) => (
              <li key={line.id}>
                <span>
                  {line.name} × {line.qty}
                </span>
                <span>{formatPrice(line.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
          </div>
          <div className="summary-row is-total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
