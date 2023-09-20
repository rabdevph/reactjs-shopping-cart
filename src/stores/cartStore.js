import { create } from 'zustand';

const useCartStore = create((set) => ({
  // Initialize the cart state as an empty array
  cart: [],
  // Define the update cart action
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
          // Return the product as is, if it's not the product to update
          return product;
        });

        // Return an object with the updated products array to update the state
        return { cart: updatedCart };
      } else {
        // If the product is not in the cart, add it as a new item with quantity 1
        return { cart: [...state.cart, { product, quantity: 1 }] };
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
  // Define a selector function to check if the product is in cart
  isProductInCart: (productId) => (state) => {
    // Return a boolean if product is in cart or not
    return state.cart.some((product) => product.id === productId);
  },
  // Define a selector function to get the quantity of the product
  getProductQuantity: (productId) => (state) => {
    // Find the matching product in the cart
    const foundProduct = state.cart.find((product) => product.id === productId);

    if (foundProduct) {
      // Retrieve the quantity of the found product
      const quantity = foundProduct.quantity;
      // Return the quantity
      return quantity;
    }
  },
  // Define a selector function to calculate the total quantity of products in cart
  getTotalQuantity: (state) => {
    // Sum up the quantities of all products in cart
    const totalQuantity = state.cart.reduce((total, product) => total + product.quantity, 0);
    // Return total quantity
    return totalQuantity;
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
