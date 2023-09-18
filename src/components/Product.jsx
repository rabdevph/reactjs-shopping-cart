import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../stores/productStore.js';
import { useCartItemContext } from '../contexts/ShopContext.jsx';

import cart from '../assets/images/shopping-cart.svg';
import warning from '../assets/images/warning.svg';

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
    <div
      id="product-wrapper"
      className="flex justify-center p-4 min-h-svh md:p-8 lg:static lg:h-svh lg:w-full lg:p-16"
    >
      <div
        id="product"
        className="flex flex-col justify-center gap-2 font-rubik lg:flex-row lg:gap-8 lg:max-h-[398px] lg:max-w-5xl"
      >
        <div
          id="product-image-wrapper"
          className="flex items-center justify-center bg-imgbg relative lg:h-full lg:w-auto"
        >
          {isInCart(id) ? (
            <div className="flex items-center justify-center absolute bg-amber-500 text-white bottom-0 w-full lg:h-8 lg:w-20 lg:text-xs lg:absolute lg:top-2 lg:left-2">
              {getQuantity(id)} in cart
            </div>
          ) : null}
          <img
            id="product-image"
            src={imageUrl}
            alt={name}
            className="object-contain h-full w-auto lg:h-full lg:w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 text-lg lg:text-base lg:h-full">
          <div className="flex justify-between font-bold lg:text-2xl">
            <p>{name}</p>
            <p>AED {formattedPrice}</p>
          </div>
          <p className="text-xs font-opensans lg:text-sm">{description}</p>

          <div className="text-base mt-auto">
            {stock ? (
              <button
                id="add-to-cart"
                className="flex items-center justify-center gap-1 bg-black font-medium w-full py-2 text-white outline-none lg:static"
                onClick={handleUpdateCart}
              >
                <img src={cart} alt="" className="h-5 w-auto" />
                <p>ADD TO CART</p>
              </button>
            ) : (
              <div className="flex items-center justify-center gap-1 bg-red-600 font-medium w-full py-2 text-white outline-none lg:static">
                <img src={warning} alt="" className="h-5 w-auto" />
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
