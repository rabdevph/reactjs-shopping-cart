import { useProductContext, useCartItemContext } from '../contexts/ShopContext.jsx';

const CartCard = ({ itemId }) => {
  const { products } = useProductContext();
  const { cartItem } = useCartItemContext();
  const productInCart = cartItem.find((product) => product.productId === itemId);
  const product = products.find((product) => product.id === itemId);

  console.log(itemId);

  if (!product) {
    return null;
  }

  console.log(product);

  const {
    node: {
      featuredImage: { url },
      variants,
    },
  } = product;

  const { amount, currencyCode } = variants.edges[0].node.price;

  const { productTitle, qty } = productInCart;

  const productPrice = parseFloat(amount).toFixed(2);

  return (
    <div className="cart-card">
      <div className="cart-card-image-wrapper">
        <img src={url} alt={productTitle} className="cart-card-image" />
      </div>
      <div className="cart-card-details-wrapper">
        <p className="cart-card-title">{productTitle}</p>
        <p className="cart-card-price">
          {currencyCode} {productPrice}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
