import { Link } from 'react-router-dom';

import { useProductContext, useCartItemContext } from '../contexts/ShopContext.jsx';

const ProductCard = ({ productId }) => {
  const { products } = useProductContext();
  const { isInCart } = useCartItemContext();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return null;
  }

  const {
    id,
    node: {
      title,
      featuredImage: { url },
      variants,
    },
  } = product;

  const { amount } = variants.edges[0].node.price;

  const price = parseFloat(amount).toFixed(2);

  return (
    <div className="product-card | flex flex-col gap-2 text-xs relative | md:text-sm">
      {isInCart(id) ? (
        <div className="flex items-center justify-center bg-amber-300 text-black text-2xs absolute top-0 w-full | md:text-xs">
          ITEM IN CART
        </div>
      ) : null}
      <Link to={`/shop/product/${id}`}>
        <img src={url} alt={title} className="product-card-image | h-full w-full object-cover" />
      </Link>
      <div className="flex flex-col gap-0.5">
        <p>{title}</p>
        <p className="font-bold">AED {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
