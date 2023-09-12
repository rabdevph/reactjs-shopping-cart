import { Link } from 'react-router-dom';

import { useCartItemContext } from '../contexts/ShopContext.jsx';

import cart from '../assets/images/shopping-cart.svg';

const Header = () => {
  const { totalQuantity } = useCartItemContext();

  return (
    <header className="header | flex bg-black px-24 text-white">
      <div className="header-logo | flex-1 flex items-center font-rubik font-black py-8">
        <p className="header-logo-text | text-2xl">
          <span className="text-3xl">A</span>DD
          <span className="text-3xl">T</span>O<span className="text-3xl">C</span>ART
        </p>
      </div>
      <div className="header-links | flex-1 flex items-center justify-center text-sm font-bold">
        <div className="h-full w-px bg-neutral-900"></div>
        <Link
          to="/"
          className="header-link | flex items-center justify-center h-full w-16 outline-none hover:bg-neutral-900 active:text-xs"
        >
          HOME
        </Link>
        <div className="h-full w-px bg-neutral-900"></div>
        <Link
          to="shop"
          className="header-link | flex items-center justify-center h-full w-16 outline-none hover:bg-neutral-900 active:text-xs"
        >
          SHOP
        </Link>
        <div className="h-full w-px bg-neutral-900"></div>
      </div>
      <div className="header-cart | flex-1 flex">
        <Link to="cart" className="header-cart-link | flex items-center gap-1 ml-auto outline-none">
          <img src={cart} alt="cart" className="header-cart-icon | h-5 w-5" />
          <div className="header-cart-quantity-wrapper | flex items-center justify-center bg-white rounded-full h-6 w-6 p-1 text-2xs text-black">
            <p>{totalQuantity}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
