import { categories, products } from '../data/catalog';

export const menuCategories = categories.filter(
  (category) => category.id !== 'all'
);

export const getCategoryLabel = (id) =>
  categories.find((category) => category.id === id)?.label || id;

export const searchProducts = (query, list = products) => {
  const term = query.trim().toLowerCase();
  if (!term) return [];

  return list.filter((product) => {
    const haystack = [
      product.name,
      product.blurb,
      ...product.categories.map(getCategoryLabel),
      ...product.categories,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(term);
  });
};
