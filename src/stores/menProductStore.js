import { create } from 'zustand';

const useMenProductStore = create((set) => ({
  productsMen: [],

  loadingProductsMen: true,

  fetchProductsMen: async () => {
    try {
      const response = await fetch(
        'https://mock.shop/api?query={collection(handle:%20%22men%22){title%20products(first:%2010){edges%20{node%20{id%20title%20description%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}%20images(first:%201){edges%20{node%20{url}}}}}}}}',
      );

      if (!response.ok) {
        throw new Error('server error');
      }

      const data = await response.json();

      const {
        data: {
          collection: {
            products: { edges },
          },
        },
      } = data;

      const updatedProducts = edges.map((edge) => {
        const defaultId = edge.node.id;
        const productId = defaultId.substring(defaultId.lastIndexOf('/') + 1);

        return {
          id: productId,
          name: edge.node.title,
          description: edge.node.description,
          price: edge.node.variants.edges[0].node.price.amount,
          stock: 50,
          imageUrl: edge.node.images.edges[0].node.url,
        };
      });

      set({ productsMen: updatedProducts, loadingProductsMen: false });
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      set({ loadingProductsMen: false });
    }
  },
}));

export default useMenProductStore;
