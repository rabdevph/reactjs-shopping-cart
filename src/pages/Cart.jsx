import { useCartItemContext } from '../contexts/ShopContext.jsx';

import CartButtons from '../components/CartButtons.jsx';
import CartCard from '../components/CartCard.jsx';
import CartEmpty from '../components/CartEmpty.jsx';

const Cart = () => {
  const { cartItem, totalQuantity, totalPrice } = useCartItemContext();

  // const item = {
  //   productId: id,
  //   productTitle: title,
  //   qty: selectedQuantity,
  //   price: amount,
  // };
  const subtotal = totalPrice.toFixed(2);

  return (
    <>
      {cartItem.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="cart">
          <div className="cart-header">
            <p className="cart-header-text">SHOPPING CART</p>
            <p className="cart-header-total">{totalQuantity} items</p>
          </div>
          <div className="cart-button-top-wrapper">
            <CartButtons />
          </div>
          <div className="cart-summary-wrapper">
            <div className="cart-items">
              {cartItem.map((product) => {
                return <CartCard key={product.productId} itemId={product.productId} />;
              })}
            </div>
            <div className="cart-order-summary-wrapper">
              <p className="cart-order-summary-text">Order Summary</p>
              <div className="cart-order-amount-wrapper">
                <div className="cart-subtotal-wrapper">
                  <p className="cart-subtotal-text">SUBTOTAL</p>
                  <p className="cart-subtotal-amount">{subtotal}</p>
                </div>
                <div className="cart-shipping-fee-wrapper">
                  <p className="cart-shipping-fee-text">SHIPPING</p>
                  <p className="cart-shopping-fee-amount">FREE</p>
                </div>
                <div className="cart-line-break"></div>
                <div className="cart-total-wrapper">
                  <p className="cart-total-amount-text">TOTAL</p>
                  <p className="cart-total-amount">{subtotal}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-button-bottom-wrapper">
            <CartButtons />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

// cart empty image attribution
// <a href="https://www.flaticon.com/free-icons/empty-cart" title="empty cart icons">Empty cart icons created by kerismaker - Flaticon</a>
