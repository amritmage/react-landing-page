import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice, LAST_ORDER_STORAGE_KEY } from '../utils/cart';
import '../styles/Page.css';
import '../styles/Cart.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LAST_ORDER_STORAGE_KEY);
      if (!raw) {
        navigate('/', { replace: true });
        return;
      }
      setOrder(JSON.parse(raw));
    } catch {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  if (!order) {
    return null;
  }

  const fulfillmentLabel =
    order.fulfillment?.type === 'delivery'
      ? `Home delivery to ${order.fulfillment.address}`
      : `Pickup at ${order.fulfillment?.pickupPoint?.label || 'your selected point'} — ${
          order.fulfillment?.pickupPoint?.address || ''
        }`;

  const paymentLabel =
    order.payment?.method === 'card'
      ? 'Card (demo — not charged)'
      : 'Pay on delivery';

  return (
    <div className="page-main order-page">
      <h1 className="page-title">Order confirmed</h1>
      <p className="order-lead">Thanks for trying the Urban Worn checkout demo.</p>

      <div className="order-success">
        <h2>We received your order</h2>
        <p className="order-id">Order {order.id}</p>
        <p>
          We&apos;ll contact you on WhatsApp at {order.customer.phone} to confirm
          details — same flow described in the FAQ.
        </p>
        <p>
          <strong>{order.customer.name}</strong> · {order.customer.email}
        </p>
        <p>{fulfillmentLabel}</p>
        <p>Payment: {paymentLabel}</p>

        <ul className="order-list">
          {order.items.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span>{formatPrice(item.lineTotal)}</span>
            </li>
          ))}
        </ul>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>{formatPrice(order.subtotal)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>
            {order.shipping === 0 ? 'Free' : formatPrice(order.shipping)}
          </span>
        </div>
        <div className="summary-row is-total">
          <span>Total</span>
          <span>{formatPrice(order.total)}</span>
        </div>

        {order.notes ? <p>Notes: {order.notes}</p> : null}

        <div className="order-actions">
          <Link to="/" className="order-cta">
            Back to home
          </Link>
          <Link to="/faq" className="order-cta is-secondary">
            Read FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
