import { Link } from 'react-router-dom';

import { useCartItemContext } from '../contexts/ShopContext.jsx';

import cart from '../assets/cart.svg';

const Header = () => {
  const { totalQuantity } = useCartItemContext();

  return (
    <header className="header common-pd">
      <div className="header-logo-wrapper">
        <p className="header-logo-text">
          <span className="header-logo-text-large">A</span>DD
          <span className="header-logo-text-large">T</span>O
          <span className="header-logo-text-large">C</span>ART
        </p>
      </div>
      <div className="header-links-wrapper">
        <Link to="/" className="header-link">
          HOME
        </Link>
        <Link to="shop" className="header-link">
          SHOP
        </Link>
      </div>
      <div className="header-cart-link-wrapper">
        <Link to="cart" className="header-cart-link">
          <img src={cart} alt="cart" className="header-cart-icon" />
          <div className="header-cart-quantity-wrapper">
            <p className="header-cart-quanitity">{totalQuantity}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

{
  // logo attribution
  /* <a href="https://www.flaticon.com/free-icons/shopping-bag" title="shopping bag icons">Shopping bag icons created by iconixar - Flaticon</a> */
}
