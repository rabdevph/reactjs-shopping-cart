import { Link } from 'react-router-dom';

const CartButtons = () => {
  return (
    <div className="cart-button-wrapper">
      <Link to="../shop" className="cart-button continue-shopping">
        Continue Shopping
      </Link>
      <button className="cart-button proceed-checkout">Proceed to Checkout</button>
    </div>
  );
};

export default CartButtons;
