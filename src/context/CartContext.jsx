import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  CART_STORAGE_KEY,
  getCartLines,
  getItemCount,
  getSubtotal,
} from '../utils/cart';

const CartContext = createContext(null);

const readStoredCart = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (item) =>
          item &&
          typeof item.id === 'number' &&
          typeof item.qty === 'number' &&
          item.qty > 0
      )
      .map((item) => ({ id: item.id, qty: item.qty }));
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => readStoredCart());

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, qty = 1) => {
    const amount = Math.max(1, qty);
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + amount }
            : item
        );
      }
      return [...prev, { id: product.id, qty: amount }];
    });
  };

  const removeItem = (productId) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const setQty = (productId, qty) => {
    const nextQty = Math.floor(Number(qty));
    if (!Number.isFinite(nextQty) || nextQty <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: nextQty } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const value = {
    items,
    lines: getCartLines(items),
    itemCount: getItemCount(items),
    subtotal: getSubtotal(items),
    addItem,
    removeItem,
    setQty,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
