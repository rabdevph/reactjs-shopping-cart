import useCartStore from '../stores/cartStore';

// Custom hook to check if product is in cart
const useProductInCart = (productId) => {
  const cart = useCartStore((state) => state.cart);

  return cart.some((product) => product.id === productId);
};

export default useProductInCart;
