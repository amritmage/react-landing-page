import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/cart';
import '../styles/Page.css';
import '../styles/Cart.css';

const Cart = () => {
  const { lines, itemCount, subtotal, setQty, removeItem } = useCart();

  if (lines.length === 0) {
    return (
      <div className="page-main cart-page">
        <h1 className="page-title">Your bag</h1>
        <p className="cart-lead">Review items before checkout.</p>
        <div className="cart-empty">
          <p>Your bag is empty. Add a few favorites from the homepage.</p>
          <Link to="/#products-title" className="cart-cta">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-main cart-page">
      <h1 className="page-title">Your bag</h1>
      <p className="cart-lead">
        {itemCount} {itemCount === 1 ? 'item' : 'items'} ready for checkout.
      </p>

      <div className="cart-layout">
        <div className="cart-lines">
          {lines.map((line) => (
            <article key={line.id} className="cart-line">
              <div className="cart-line__media">
                <img src={line.image} alt={line.name} />
              </div>
              <div className="cart-line__body">
                <h3>{line.name}</h3>
                <p>{formatPrice(line.price)} each</p>
                <div className="cart-line__actions">
                  <div className="qty-control" aria-label={`Quantity for ${line.name}`}>
                    <button
                      type="button"
                      onClick={() => setQty(line.id, line.qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{line.qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty(line.id, line.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removeItem(line.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-line__total">{formatPrice(line.lineTotal)}</div>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="summary-note">
            Shipping is selected at checkout — free pickup points available, or
            home delivery for a small fee.
          </p>
          <Link to="/checkout" className="cart-cta">
            Proceed to checkout
          </Link>
          <Link to="/#products-title" className="cart-continue">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
