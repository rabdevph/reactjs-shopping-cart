import useProductStore from '../stores/productStore.js';
import useCartStore from '../stores/cartStore.js';
import useOptimizeImage from '../hooks/useOptimizeImage.js';

import remove from '../assets/images/remove.svg';

const CartCard = ({ productId }) => {
  const products = useProductStore((state) => state.products);
  const cart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const imgSrc = useOptimizeImage();

  const product = products.find((product) => product.id === productId);
  const cartProduct = cart.find((product) => product.id === productId);

  if (!product) {
    return null;
  }

  const { price, imageUrl } = product;

  const { name, quantity } = cartProduct;

  const productPrice = parseFloat(price).toFixed(2);

  const handleUpdateQuantity = (event) => {
    updateProductQuantity(productId, parseInt(event.target.value));
  };

  const handleRemoveItem = () => {
    removeProduct(productId);
  };

  return (
    <>
      <div id="cart-card" className="flex gap-4 md:gap-8">
        <div className="h-28 w-28">
          <img src={imgSrc(imageUrl)} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col flex-1 text text-sm md:text-base">
          <div className="flex font-medium justify-between">
            <p>{name}</p>
            <p>AED {productPrice}</p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <button
              className="bg-transparent border-none font-rubik outline-none cursor-pointer text-white text-2xs p-1 md:h-max"
              onClick={handleRemoveItem}
            >
              <img src={remove} alt="" className="h-5 w-auto" />
            </button>
            <select
              id={`qty-dropdown-${productId}`}
              value={quantity}
              onChange={handleUpdateQuantity}
              className="h-8 w-10 outline-none"
            >
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 h-px"></div>
    </>
  );
};

export default CartCard;
