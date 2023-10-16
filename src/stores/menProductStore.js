import { create } from 'zustand';

const useMenProductStore = create((set) => ({
  productsMen: [],

  loadingProductsMen: true,

  fetchProductsMen: async () => {
    try {
      const response = await fetch(
        'https://mock.shop/api?query={collection(handle:%20%22men%22){title%20description%20image%20{url}%20products(first:%2010){edges%20{node%20{id%20title%20description%20featuredImage%20{url}%20variants(first:%205){edges%20{node%20{id%20quantityAvailable%20image%20{url}%20price%20{amount}}}}}}}}}',
      );

      if (!response.ok) {
        throw new Error('server error');
      }

      const result = await response.json();

      console.log(result);

      // const edges = result.data.collection.products.edges;

      // // console.log(edges);

      // const updatedProducts = edges.map((edge) => {
      //   const defaultId = edge.node.id;
      //   const productId = defaultId.substring(defaultId.lastIndexOf('/') + 1);

      //   return {
      //     id: productId,
      //     name: edge.node.title,
      //     description: edge.node.description,
      //     price: edge.node.variants.edges[0].node.price.amount,
      //     featuredImageUrl: edge.node.featuredImage.url,
      //     images: {
      //       variant_a: edge.node.variants.edges[0].node.image.url,
      //       variant_b: edge.node.variants.edges[1].node.image.url,
      //       variant_c: edge.node.variants.edges[2].node.image.url,
      //       variant_d: edge.node.variants.edges[3].node.image.url,
      //       variant_e: edge.node.variants.edges[4].node.image.url,
      //     },
      //   };
      // });

      // set({ productsMen: updatedProducts, loadingProductsMen: false });
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      set({ loadingProductsMen: false });
    }
  },
}));

export default useMenProductStore;
