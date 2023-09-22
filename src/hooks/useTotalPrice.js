import { useMemo } from 'react';
import useCartStore from '../stores/cartStore';

// Custom hook to get total price of ALL product in cart
const useTotalPrice = () => {
  const totalPrice = useCartStore((state) => {
    const total = state.cart.reduce((amount, product) => {
      // Calculate the total price for each item in the cart
      const itemQty = product.quantity;
      const itemPrice = parseFloat(product.price);
      const cartTotalPrice = itemQty * itemPrice;
      // Return total(accumulator)
      return amount + cartTotalPrice;
    }, 0);
    // Return total price
    return total;
  });
  return useMemo(() => totalPrice, [totalPrice]);
};

export default useTotalPrice;
