import { create } from 'zustand';

const useProductStore = create((set) => ({
  // Initialize products state as an empty array
  products: [],
  // Initialize loadingProducts state as true
  loadingProducts: true,
  // Define the fetchProducts action
  fetchProducts: async () => {
    try {
      // Fetch data from the mock.shop API
      const response = await fetch(
        'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}',
      );

      if (!response.ok) {
        // If the response is not ok, throw a server error
        throw new Error('server error');
      }

      // Parse the response JSON data
      const data = await response.json();

      // Extract products data from the JSON structure
      const {
        data: {
          products: { edges },
        },
      } = data;

      // Create customized products based on mock.shop data
      const updatedProducts = edges.map((edge) => {
        const defaultId = edge.node.id;
        const productId = defaultId.substring(defaultId.lastIndexOf('/') + 1);
        return {
          id: productId,
          name: edge.node.title,
          description: edge.node.description,
          price: edge.node.variants.edges[0].node.price.amount,
          stock: 10, // Default stock for each product
          imageURL: edge.node.featuredImage.url,
        };
      });

      // Update the products and loadingProducts state
      set({ products: updatedProducts, loadingProducts: false });
    } catch (error) {
      // Handle and log any errors that occur during data fetching
      console.error(`Error fetching data: ${error}`);
      // Update loadingProducts state to false in case of an error
      set({ loadingProducts: false });
    }
  },
}));

export default useProductStore;
