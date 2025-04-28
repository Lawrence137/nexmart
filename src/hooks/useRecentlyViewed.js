import { useState, useEffect } from 'react';

const STORAGE_KEY = 'recently_viewed_products';
const MAX_ITEMS = 8;

export const useRecentlyViewed = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRecentProducts(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing recently viewed products:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const addProduct = (product) => {
    setRecentProducts(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      const updated = [product, ...filtered].slice(0, MAX_ITEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearHistory = () => {
    setRecentProducts([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    recentProducts,
    addProduct,
    clearHistory
  };
}; 