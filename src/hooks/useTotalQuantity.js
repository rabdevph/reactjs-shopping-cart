import { useMemo } from 'react';
import useCartStore from '../stores/cartStore';

// Custom hook to get the total quantity of ALL product in cart
const useTotalQuantity = () => {
  const totalQuantity = useCartStore((state) => {
    // Sum up the quantities of all products in cart
    return state.cart.reduce((total, product) => total + product.quantity, 0);
  });

  // Memoize the result to prevent unnecessary re-renders
  return useMemo(() => totalQuantity, [totalQuantity]);
};

export default useTotalQuantity;
