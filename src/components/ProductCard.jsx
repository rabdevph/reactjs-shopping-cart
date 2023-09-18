import { Link } from 'react-router-dom';

import useProductStore from '../stores/productStore.js';
import { useCartItemContext } from '../contexts/ShopContext.jsx';

const ProductCard = ({ productId }) => {
  const { products } = useProductStore();
  const { isInCart } = useCartItemContext();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return null;
  }

  const { id, name, price, imageUrl } = product;

  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <div id="product-card" className="flex flex-col gap-2 text-xs relative md:text-sm">
      {isInCart(id) ? (
        <div className="flex items-center justify-center bg-amber-300 text-black text-2xs absolute top-0 w-full md:text-xs">
          ITEM IN CART
        </div>
      ) : null}
      <Link to={`/shop/product/${id}`}>
        <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
      </Link>
      <div className="flex flex-col gap-0.5">
        <p>{name}</p>
        <p className="font-bold">AED {formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
