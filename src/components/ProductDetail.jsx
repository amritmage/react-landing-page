import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories, products } from '../data/catalog';
import { useCart } from '../context/CartContext';
import { formatPrice, getProductById } from '../utils/cart';
import NotFound from './NotFound';
import '../styles/Page.css';
import '../styles/Product.css';

const categoryLabel = (id) =>
  categories.find((category) => category.id === id)?.label || id;

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { items, addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return <NotFound />;
  }

  const inCart = items.some((item) => item.id === product.id);
  const related = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.categories.some((category) => product.categories.includes(category))
    )
    .slice(0, 4);

  return (
    <div className="page-main product-page">
      <Link to="/#products-title" className="product-back">
        ← Back to products
      </Link>

      <div className="product-detail">
        <div className="product-detail__media">
          <img src={product.image} alt={product.name} />
        </div>

        <div>
          <p className="product-detail__eyebrow">
            {categoryLabel(product.categories[0])}
          </p>
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">{formatPrice(product.price)}</p>
          <p className="product-detail__blurb">{product.blurb}</p>

          <div className="product-detail__tags">
            {product.categories.map((category) => (
              <Link
                key={category}
                to={`/?category=${category}#products-title`}
              >
                {categoryLabel(category)}
              </Link>
            ))}
          </div>

          <div className="product-detail__actions">
            <div className="product-qty" aria-label="Quantity">
              <button
                type="button"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span>{qty}</span>
              <button
                type="button"
                onClick={() => setQty((value) => value + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              type="button"
              className={`product-detail__add${inCart ? ' is-added' : ''}`}
              onClick={() => addItem(product, qty)}
            >
              {inCart ? 'Add more' : 'Add to bag'}
            </button>
            {inCart && (
              <Link to="/cart" className="product-detail__cart">
                View bag
              </Link>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="product-related" aria-labelledby="related-title">
          <h2 id="related-title">You may also like</h2>
          <div className="product-related__grid">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="product-related__card"
              >
                <img src={item.image} alt={item.name} loading="lazy" />
                <h3>{item.name}</h3>
                <p>{formatPrice(item.price)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
