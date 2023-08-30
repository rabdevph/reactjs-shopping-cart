/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

import Loader from '../components/Loader.jsx';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    fetch(
      'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}',
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((data) => {
        const {
          data: {
            products: { edges },
          },
        } = data;

        const updatedProducts = edges.map((edge) => {
          const defaultId = edge.node.id;
          const productId = defaultId.substring(defaultId.lastIndexOf('/') + 1);
          return {
            id: productId,
            node: edge.node,
          };
        });

        setProducts(updatedProducts);
        setLoadingProducts(false);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
        setLoadingProducts(false);
      });
  }, []);

  console.log(products);

  return (
    <ProductContext.Provider value={{ products, loadingProducts }}>
      {loadingProducts ? <Loader /> : children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
