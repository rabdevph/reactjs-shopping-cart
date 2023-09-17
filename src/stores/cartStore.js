import { create } from 'zustand';

const useCartStore = create((set) => ({
  // Initialize the cart state as an empty array
  cart: [],
  // Define the updateCart action
  updateCart: (product, productId) => {
    set((state) => {
      // Check if the cart is empty
      if (state.cart.length === 0) {
        // If the cart is empty, create a new state with a cart containing a single product
        return { cart: [{ product, quantity: 1 }] };
      }

      // If the cart is not empty, check if the product is already in the cart
      const productInCart = state.cart.some((product) => product.id === productId);

      if (productInCart) {
        // If the product is in the cart, create an updated cart with incremented quantity
        const updatedCart = state.cart.map((product) => {
          if (product.id === productId) {
            // Increment the quantity of the matching product
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          // Return the product as is
          return product;
        });

        // Return a new state with the updated cart
        return { cart: updatedCart };
      } else {
        // If the product is not in the cart, add it as a new item with quantity 1
        return { cart: [...state.cart, { product, quantity: 1 }] };
      }
    });
  },
}));

export default useCartStore;
