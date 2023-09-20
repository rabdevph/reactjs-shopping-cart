import { useProductContext, useCartItemContext } from '../contexts/ShopContext.jsx';

import remove from '../assets/images/remove.svg';

const CartCard = ({ itemId }) => {
  const { products } = useProductContext();
  const { cartItem, updateItemQuantity, removeItem } = useCartItemContext();

  const product = products.find((product) => product.id === itemId);
  const productInCart = cartItem.find((product) => product.id === itemId);

  if (!product) {
    return null;
  }

  const {
    node: {
      featuredImage: { url: imageURL },
      variants,
    },
  } = product;

  const { amount, currencyCode } = variants.edges[0].node.price;

  const { name, quantity } = productInCart;

  const productPrice = parseFloat(amount).toFixed(2);

  const handleUpdateQuantity = (event) => {
    updateItemQuantity(itemId, parseInt(event.target.value));
  };

  const handleRemoveItem = () => {
    removeItem(itemId);
  };

  return (
    <>
      <div id="cart-card" className="flex gap-4 md:gap-8">
        <div className="h-28 w-28">
          <img src={imageURL} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col flex-1 text text-sm md:text-base">
          <div className="flex font-medium justify-between">
            <p>{name}</p>
            <p>
              {currencyCode} {productPrice}
            </p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <button
              className="bg-transparent border-none font-rubik outline-none cursor-pointer text-white text-2xs p-1 md:h-max"
              onClick={handleRemoveItem}
            >
              <img src={remove} alt="" className="h-5 w-auto" />
            </button>
            <select
              id={`qty-dropdown-${itemId}`}
              value={quantity}
              onChange={handleUpdateQuantity}
              className="h-8 w-10 outline-none"
            >
              {Array.from({ length: 5 }, (_, index) => (
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
