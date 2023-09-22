import useProductStore from '../stores/productStore';

// Custom hook to get the stock of a product
const useProductStock = (productId) => {
  const products = useProductStore((state) => state.products);

  const foundProduct = products.find((product) => product.id === productId);

  if (foundProduct) {
    return foundProduct.stock;
  }
};

export default useProductStock;
