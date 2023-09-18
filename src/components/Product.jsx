import { useParams } from 'react-router-dom';

import useProductStore from '../stores/productStore.js';
import { useCartItemContext } from '../contexts/ShopContext.jsx';

import warning from '../assets/images/warning.svg';
import { useEffect } from 'react';

const Product = () => {
  const { productId } = useParams();
  const { products, updateStock } = useProductStore();
  const { updateCart, isInCart, getQuantity } = useCartItemContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return null;
  }

  const { id, name, description, price, stock, imageUrl } = product;

  const formattedPrice = parseFloat(price).toFixed(2);

  const item = {
    id: id,
    name: name,
    quantity: 1,
    price: price,
  };

  const handleUpdateCart = () => {
    if (stock !== 0) {
      updateCart(item, productId);
      updateStock(id);
    }
  };

  return (
    <div id="product" className="flex justify-center p-4 md:p-8 lg:h-svh lg:w-full lg:p-16">
      <div
        id="product-wrapper"
        className="flex justify-center font-rubik h-full lg:gap-8  lg:max-w-4xl"
      >
        <div id="product-image-wrapper" className="relative lg:relative lg:h-full lg:w-auto">
          {isInCart(id) ? (
            <div className="flex items-center justify-center absolute bg-amber-400 bottom-0 w-full lg:h-8 lg:w-20 lg:text-xs lg:top-2 lg:left-2">
              {getQuantity(id)} in cart
            </div>
          ) : null}
          <img
            id="product-image"
            src={imageUrl}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 text-lg lg:text-base lg:h-full">
          <div className="flex justify-between font-bold lg:text-2xl">
            <p>{name}</p>
            <p>AED {formattedPrice}</p>
          </div>
          <p className="text-sm font-opensans">{description}</p>

          <div className="mt-auto">
            {stock ? (
              <button
                id="add-to-cart"
                className="bg-emerald-500 font-medium text-white w-full py-3 outline-none border-none rounded"
                onClick={handleUpdateCart}
              >
                ADD TO CART
              </button>
            ) : (
              <div className="flex items-center justify-center gap-1 bg-red-500 font-medium text-white w-full py-3 rounded">
                <img src={warning} alt="" className="h-6 w-auto" />
                <p>MAXIMUM QUANTITY REACHED</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
