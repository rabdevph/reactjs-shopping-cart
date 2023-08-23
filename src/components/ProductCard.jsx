const ProductCard = (props) => {
  const { image, title, price, handleAddToCart } = props;
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt="" className="product-image" />
      </div>
      <p className="product-name">{title}</p>
      <p className="product-price">AED {price}</p>
      <button className="add-item-button" onClick={() => handleAddToCart(title)}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
