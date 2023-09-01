/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

import Loader from '../components/Loader.jsx';

// Product context
const ProductContext = createContext([]);

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
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

  return (
    <ProductContext.Provider value={{ products, loadingProducts }}>
      {loadingProducts ? <Loader /> : children}
    </ProductContext.Provider>
  );
};

// Cart item context
const CartItemContext = createContext([]);

export const useCartItemContext = () => {
  return useContext(CartItemContext);
};

const CartItemProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const updateCart = (item, itemId) => {
    if (cartItem.length !== 0) {
      // cart item is not empty
      const itemInCart = cartItem.some((cartItem) => cartItem.productId === itemId);

      if (itemInCart) {
        // item already in cart
        const updatedCart = cartItem.map((cartItem) => {
          if (cartItem.productId === itemId) {
            // item in cart id matches the product selected id
            return {
              ...cartItem,
              qty: cartItem.qty + item.qty,
            };
          }
          return cartItem;
        });
        setCartItem(updatedCart);
      } else {
        // item not in cart
        setCartItem((prevCart) => {
          return [...prevCart, item];
        });
      }
    } else {
      // cart item is empty
      setCartItem([item]);
    }
  };

  const isInCart = (itemId) => {
    return cartItem.some((cartItem) => cartItem.productId === itemId);
  };

  const getQuantity = (itemId) => {
    const foundProduct = cartItem.find((cartItem) => cartItem.productId === itemId);

    if (foundProduct) {
      const qty = foundProduct.qty;
      return qty;
    }
  };

  const totalQuantity = cartItem.reduce((total, item) => total + item.qty, 0);

  return (
    <CartItemContext.Provider
      value={{ cartItem, updateCart, isInCart, getQuantity, totalQuantity }}
    >
      {children}
    </CartItemContext.Provider>
  );
};

export const ShopProvider = ({ children }) => {
  return (
    <ProductProvider>
      <CartItemProvider>{children}</CartItemProvider>
    </ProductProvider>
  );
};
