import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext(null);

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
        setProducts(edges);
        setLoadingProducts(false);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
        setLoadingProducts(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products, loadingProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => {
  return useContext(ProductContext);
};
