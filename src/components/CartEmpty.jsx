import { Link } from 'react-router-dom';

import EmptyCart from '../assets/empty-cart.png';

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty-image-wrapper">
        <img src={EmptyCart} alt="" className="cart-empty-image" />
      </div>
      <div className="cart-empty-text-wrapper">
        <p className="cart-empty-text">Your cart is empty!</p>
        <p className="cart-empty-subtext">Please add something to your cart.</p>
      </div>
      <Link to="../shop" className="cart-empty-shop">
        RETURN TO SHOP
      </Link>
    </div>
  );
};

export default CartEmpty;
