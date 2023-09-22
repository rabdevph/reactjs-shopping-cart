import useCartStore from '../stores/cartStore';

// Custom hook to get the quantity of a single product in cart
const useProductQuantity = (productId) => {
  const cart = useCartStore((state) => state.cart);

  const foundProduct = cart.find((product) => product.id === productId);

  if (foundProduct) {
    return foundProduct.quantity;
  }

  return null;
};

export default useProductQuantity;
