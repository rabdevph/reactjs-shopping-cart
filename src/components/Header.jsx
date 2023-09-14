import { Link } from 'react-router-dom';

import { useCartItemContext } from '../contexts/ShopContext.jsx';

import menu from '../assets/images/menu.svg';
import cart from '../assets/images/shopping-cart.svg';
import shop from '../assets/images/store.svg';
import help from '../assets/images/help.svg';
import info from '../assets/images/info.svg';
import cartMobile from '../assets/images/shopping-cart-mobile.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { totalQuantity } = useCartItemContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    // call function
    handleResize();
    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMobile((prevState) => !prevState);
  };
  help;
  const handleLinkClick = () => {
    setIsMobile(false);
  };

  // header-links [wrapper] mobile class
  const linksMobileClass = isMobile
    ? 'flex flex-col justify-between bg-white shadow-cms absolute top-full left-0 z-50 text-black min-h-cmh w-3/4 transform transition-all duration-300 ease-in-out animate-slide-in'
    : 'hidden';

  // header-link mobile class
  const linkMobileClass = isMobile ? 'flex items-center gap-3 w-full px-4 py-3' : 'hidden';

  // horizontal line class
  const horizontalLineClass = 'bg-neutral-200 h-px w-full | md:h-full md:w-px md:bg-neutral-900';

  console.log(`isMobile: ${isMobile}`);
  console.log('re-render');

  return (
    <header className="flex items-center bg-neutral-950 gap-2 h-16 text-white text-xs px-4 relative md:justify-between md:gap-0 md:px-8 lg:px-16">
      {/* HAMBURGER */}
      <button
        id="toggle-menu"
        className="toggle-menu | flex items-center justify-center outline-none | md:hidden"
        onClick={handleToggleMenu}
      >
        <img src={menu} alt="" className="h-6 w-6" />
      </button>

      {/* LOGO */}
      <Link
        to="/"
        className="logo | flex items-center font-rubik font-black"
        onClick={handleLinkClick}
      >
        <p className="logo-text | text-lg | md:text-2xl">
          <span className="text-xl | md:text-3xl">A</span>DD
          <span className="text-xl | md:text-3xl">T</span>O
          <span className="text-xl | md:text-3xl">C</span>ART
        </p>
      </Link>

      {/* LINKS */}
      <div
        className={`header-links | ${linksMobileClass} font-normal | md:flex md:items-center md:justify-center md:h-full`}
      >
        <div className="md:flex md:items-center md:justify-center md:h-full">
          {/* WIDE VIEW ONLY */}
          {isMobile ? null : (
            <>
              <div className={horizontalLineClass}></div>
              <Link
                to="/"
                className={`header-link | md:flex md:items-center md:justify-center md:h-full md:w-16 md:outline-none md:hover:bg-neutral-900 md:active:text-sm`}
              >
                <p>HOME</p>
              </Link>
              <div className={horizontalLineClass}></div>
            </>
          )}

          <Link
            to="shop"
            className={`header-link | ${linkMobileClass} | md:flex md:items-center md:justify-center md:h-full md:w-16 md:outline-none md:hover:bg-neutral-900 md:active:text-sm`}
            onClick={handleLinkClick}
          >
            {isMobile ? <img src={shop} alt="" className="h-5 w-5" /> : null}
            <p>SHOP</p>
          </Link>

          <div className={horizontalLineClass}></div>

          <Link
            to="cart"
            className={`header-link | ${linkMobileClass} | md:flex md:items-center md:justify-center md:gap-1 md:h-full md:w-16 md:outline-none md:hover:bg-neutral-900`}
            onClick={handleLinkClick}
          >
            {isMobile ? (
              <>
                <img src={cartMobile} alt="" className="h-5 w-5" />
                <div className="flex items-center gap-1">
                  <p>CART</p>
                  <div className="flex items-center justify-center bg-black rounded-full h-6 w-6 p-1 text-2xs text-white">
                    <p>{totalQuantity}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <img src={cart} alt="cart" className="header-cart-icon | h-5 w-5" />
                <div className="flex items-center justify-center bg-white rounded-full h-6 w-6 p-1 text-2xs text-black">
                  <p>{totalQuantity}</p>
                </div>
              </>
            )}
          </Link>

          <div className={horizontalLineClass}></div>
        </div>

        {/* MOBILE ONLY */}
        {isMobile ? (
          <div>
            <div className={horizontalLineClass}></div>

            <Link to="/" className={`header-link | ${linkMobileClass}`} onClick={handleLinkClick}>
              {isMobile ? <img src={help} alt="" className="h-5 w-5" /> : null}
              <p>CUSTOMER SERVICES</p>
            </Link>

            <div className={horizontalLineClass}></div>

            <Link to="/" className={`header-link | ${linkMobileClass}`} onClick={handleLinkClick}>
              {isMobile ? <img src={info} alt="" className="h-5 w-5" /> : null}
              <p>ABOUT US</p>
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
