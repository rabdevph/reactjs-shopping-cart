import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../stores/productStore.js';
import useCartStore from '../stores/cartStore.js';
import useProductQuantity from '../hooks/useProductQuantity';
import useProductInCart from '../hooks/useProductInCart';
import cartLogo from '../assets/images/shopping-cart.svg';
import warning from '../assets/images/warning.svg';

const Product = () => {
  const { productId } = useParams();
  const products = useProductStore((state) => state.products);
  const updateStock = useProductStore((state) => state.updateStock);
  const updateCart = useCartStore((state) => state.updateCart);

  const isProductInCart = useProductInCart();
  const productQuantity = useProductQuantity();

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
      updateStock(productId);
    }
  };

  return (
    <div
      id="product-wrapper"
      className="flex justify-center p-4 min-h-svh md:p-8 lg:static lg:h-svh lg:w-full lg:px-16 lg:py-8"
    >
      <div
        id="product"
        className="flex flex-col justify-center gap-2 font-rubik lg:flex-row lg:gap-8 lg:max-h-screen lg:max-w-5xl"
      >
        <div
          id="product-image-wrapper"
          className="flex items-center justify-center bg-imgbg relative lg:h-full lg:w-auto"
        >
          {isProductInCart(productId) ? (
            <div className="flex items-center justify-center absolute bg-amber-500 text-white h-8 w-20 top-2 left-2 text-xs">
              {productQuantity(id)} in cart
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
                <img src={cartLogo} alt="" className="h-5 w-auto" />
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
