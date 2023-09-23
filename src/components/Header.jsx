/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTotalQuantity from '../hooks/useTotalQuantity';
import brand from '../assets/images/brand.png';
import menu from '../assets/images/menu.svg';
import cartLogo from '../assets/images/shopping-cart.svg';
import shop from '../assets/images/store.svg';
import cartMobile from '../assets/images/shopping-cart-mobile.svg';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  const totalQuantity = useTotalQuantity();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isScrollEnabled) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isScrollEnabled]);

  const handleToggleMenu = () => {
    setIsMobile((prevState) => !prevState);
    setIsScrollEnabled((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsMobile(false);
    setIsScrollEnabled(true);
  };

  const handleWrapperClick = () => {
    setIsMobile(false);
    setIsScrollEnabled(true);
  };

  // wrapper class
  const wrapperClass = isMobile
    ? 'flex bg-transparent absolute top-full left-0 z-50  min-h-cmh w-full'
    : 'hidden';

  // header-links mobile class
  const linksMobileClass = isMobile
    ? 'flex flex-col justify-between bg-white shadow-cms text-black min-h-full w-3/4 transform transition-all duration-300 ease-in-out animate-slide-in'
    : 'hidden';

  // header-link mobile class
  const linkMobileClass = isMobile ? 'flex items-center gap-3 w-full px-4 py-3' : 'hidden';

  // horizontal line class
  const horizontalLineClass = 'bg-neutral-200 h-px w-full | md:h-full md:w-px md:bg-neutral-900';

  return (
    <header className="flex items-center gap-2 h-16 font-medium text-white text-xs px-4 sticky top-0 z-40 bg-neutral-950 md:justify-between md:gap-0 md:px-8 | lg:px-16">
      {/* HAMBURGER */}
      <button
        id="toggle-menu"
        className="toggle-menu | flex items-center justify-center outline-none | md:hidden"
        onClick={handleToggleMenu}
      >
        <img src={menu} alt="" className="h-6 w-6" />
      </button>

      {/* LOGO */}
      <Link to="/" onClick={handleLinkClick}>
        <img src={brand} alt="" className="h-auto w-24 | md:w-32" />
      </Link>

      {/* LINKS */}
      <div
        className={`wrapper | ${wrapperClass} | md:flex md:relative md:top-auto md:left-auto md:h-full`}
        onClick={handleWrapperClick}
      >
        <div
          className={`header-links | ${linksMobileClass} | md:flex md:items-center md:justify-center md:h-full`}
        >
          <div className="md:flex md:items-center md:justify-center md:h-full">
            {/* HOME LINK - WIDE VIEWPORT ONLY */}
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
                  {/* CART & QUANTITY - MOBILE VIEWPORT */}
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
                  {/* CART & QUANTITY - WIDE VIEWPORT */}
                  <img src={cartLogo} alt="cart" className="header-cart-icon | h-5 w-5" />
                  <div className="flex items-center justify-center bg-white rounded-full h-6 w-6 p-1 font-normal text-xs text-black">
                    <p>{totalQuantity}</p>
                  </div>
                </>
              )}
            </Link>

            <div className={horizontalLineClass}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
