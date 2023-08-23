import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import cart from '../assets/shopping-cart.png';

const Header = () => {
  return (
    <header className="header common-pd">
      <div className="logo">
        <img src={logo} alt="shopping bag" className="logo-img" />
        <p className="logo-text">STORE LOGO</p>
      </div>
      <Link>
        <div className="cart">
          <img src={cart} alt="cart" className="cart-icon" />
          <div className="cart-quantity-wrapper">
            <p className="cart-quanitity">0</p>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;

{
  // logo attribution
  /* <a href="https://www.flaticon.com/free-icons/shopping-bag" title="shopping bag icons">Shopping bag icons created by iconixar - Flaticon</a> */
}
