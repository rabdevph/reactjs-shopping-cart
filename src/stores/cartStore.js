import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],

  updateCart: (product, productId) => {
    set((state) => {
      const productInCart = state.cart.find((product) => product.id === productId);

      if (productInCart) {
        const updatedCart = state.cart.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });

        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, product] };
      }
    });
  },

  // Define update product quantity action
  updateProductQuantity: (productId, quantity) => {
    set((state) => {
      // Create an updated cart with updated quantity
      const updatedCart = state.cart.map((product) => {
        if (product.id === productId) {
          // Update the quantity of the matching product
          return {
            ...product,
            quantity: quantity,
          };
        }
        // Return the product as is, if it's not the product to update
        return product;
      });

      // Return an object with the updated products array to update the state
      return { cart: updatedCart };
    });
  },

  // Define remove product action
  removeProduct: (productId) => {
    set((state) => {
      // Create updated cart without the removed product
      const updatedCart = state.cart.filter((product) => product.id !== productId);

      // Return an object with the updated products array to update the state
      return { cart: updatedCart };
    });
  },

  // Define a selector function to calculate the total price of products in the cart
  getTotalPrice: (state) => {
    // Sum up the price of all the products in cart
    const totalPrice = state.cart.reduce((total, item) => {
      // Calculate the total price for each item in the cart
      const itemQty = item.quantity;
      const itemPrice = item.parseFloat(item.price);
      const cartTotalPrice = itemQty * itemPrice;
      // Return total(accumulator)
      return total + cartTotalPrice;
    }, 0);
    // Return total price
    return totalPrice;
  },
}));

export default useCartStore;
