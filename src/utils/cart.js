import { products } from '../data/catalog';

export const CART_STORAGE_KEY = 'urban-worn-cart';
export const LAST_ORDER_STORAGE_KEY = 'urban-worn-last-order';

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(value);

export const getProductById = (id) =>
  products.find((product) => product.id === id);

export const getCartLines = (items) =>
  items
    .map((item) => {
      const product = getProductById(item.id);
      if (!product) return null;
      return {
        ...product,
        qty: item.qty,
        lineTotal: product.price * item.qty,
      };
    })
    .filter(Boolean);

export const getSubtotal = (items) =>
  getCartLines(items).reduce((total, line) => total + line.lineTotal, 0);

export const getItemCount = (items) =>
  items.reduce((total, item) => total + item.qty, 0);

export const createOrderId = () => {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `UW-${stamp}-${rand}`;
};
