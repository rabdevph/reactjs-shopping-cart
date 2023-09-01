import { Link } from 'react-router-dom';

import { useCartItemContext } from '../contexts/ShopContext.jsx';

import logo from '../assets/logo.png';
import cart from '../assets/shopping-cart.png';

const Header = () => {
  const { totalQuantity } = useCartItemContext();

  return (
    <header className="header common-pd">
      <div className="logo">
        <img src={logo} alt="shopping bag" className="logo-img" />
        <p className="logo-text">STORE LOGO</p>
      </div>
      <div className="header-links">
        <Link to="/" className="header-link">
          HOME
        </Link>
        <Link to="shop" className="header-link">
          SHOP
        </Link>
        <Link to="cart" className="cart-link">
          <img src={cart} alt="cart" className="cart-icon" />
          <div className="cart-quantity-wrapper">
            <p className="cart-quanitity">{totalQuantity}</p>
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
