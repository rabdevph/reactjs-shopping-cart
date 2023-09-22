import useCartStore from '../stores/cartStore';

// Custom hook to check if product is in cart
const useProductInCart = () => {
  const cart = useCartStore((state) => state.cart);

  const isProductInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  return isProductInCart;
};

export default useProductInCart;
