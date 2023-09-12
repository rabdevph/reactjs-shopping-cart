/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

import Loader from '../components/Loader/Loader.jsx';

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
            id: productId, // add id to each product
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
      const itemInCart = cartItem.some((cartItem) => cartItem.id === itemId);

      if (itemInCart) {
        // item already in cart
        const updatedCart = cartItem.map((cartItem) => {
          if (cartItem.id === itemId) {
            // item in cart id matches the product selected id
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
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

  const updateItemQuantity = (itemId, quantity) => {
    const updatedCart = cartItem.map((cartItem) => {
      if (cartItem.id === itemId) {
        return {
          ...cartItem,
          quantity: quantity,
        };
      }
      return cartItem;
    });
    setCartItem(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItem.filter((cartItem) => cartItem.id !== itemId);
    setCartItem(updatedCart);
  };

  const isInCart = (itemId) => {
    return cartItem.some((cartItem) => cartItem.id === itemId);
  };

  const getQuantity = (itemId) => {
    const foundProduct = cartItem.find((cartItem) => cartItem.id === itemId);

    if (foundProduct) {
      const qty = foundProduct.quantity;
      return qty;
    }
  };

  const totalQuantity = cartItem.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItem.reduce((total, item) => {
    const itemQty = item.quantity;
    const itemPrice = parseFloat(item.price);
    return total + itemQty * itemPrice;
  }, 0);

  return (
    <CartItemContext.Provider
      value={{
        cartItem,
        updateCart,
        updateItemQuantity,
        removeItem,
        isInCart,
        getQuantity,
        totalQuantity,
        totalPrice,
      }}
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
