import { Link } from 'react-router-dom';

import useProductStore from '../stores/productStore.js';
import useProductInCart from '../hooks/useProductQuantity';

const ProductCard = ({ productId }) => {
  const products = useProductStore((state) => state.products);
  const product = products.find((product) => product.id === productId);
  const isProductInCart = useProductInCart();

  if (!product) {
    return null;
  }

  const { id, name, price, imageUrl } = product;

  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <div id="product-card" className="flex flex-col gap-2 text-xs relative md:text-sm">
      {isProductInCart(id) ? (
        <div className="flex items-center justify-center bg-amber-500 text-white text-2xs absolute top-0 w-full md:text-xs">
          item in cart
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
