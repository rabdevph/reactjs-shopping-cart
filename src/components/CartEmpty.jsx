import { Link } from 'react-router-dom';

import EmptyCart from '../assets/images/empty-cart.png';

const CartEmpty = () => {
  return (
    <div className="cart-empty | flex flex-col items-center justify-center gap-8 h-custom-svh w-full text-black px-4 py-8 | md:px-8 | lg:px-16 lg:py-8">
      <div className="cart-empty-image-wrapper | h-60 w-60 | ">
        <img src={EmptyCart} alt="" className="cart-empty-image | h-full w-full object-contain" />
      </div>
      <div className="cart-empty-text-wrapper | flex flex-col items-center gap-1">
        <p className="font-bold text-xl">Your cart is empty!</p>
        <p className="text-sm">Please add something to your cart.</p>
      </div>
      <Link
        to="../shop"
        className="cart-empty-shop | border border-solid border-black rounded px-8 py-2 outline-none no-underline"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default CartEmpty;

// attribution
/* <a href="https://www.flaticon.com/free-icons/empty-cart" title="empty cart icons">Empty cart icons created by kerismaker - Flaticon</a> */
