import useCartStore from '../stores/cartStore';

// Custom hook to get the quantity of a single product in cart
const useProductQuantity = () => {
  const cart = useCartStore((state) => state.cart);

  const productQuantity = (productId) => {
    const foundProduct = cart.find((product) => product.id === productId);

    if (foundProduct) {
      return foundProduct.quantity;
    }
  };

  return productQuantity;
};

export default useProductQuantity;
