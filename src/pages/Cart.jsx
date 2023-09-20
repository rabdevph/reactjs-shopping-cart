import { useEffect } from 'react';
import { useCartItemContext } from '../contexts/ShopContext.jsx';

import CartButtons from '../components/CartButtons.jsx';
import CartCard from '../components/CartCard.jsx';
import CartEmpty from '../components/CartEmpty.jsx';

const Cart = () => {
  const { cartItem, totalQuantity, totalPrice } = useCartItemContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = totalPrice.toFixed(2);

  return (
    <>
      {cartItem.length === 0 ? (
        <CartEmpty />
      ) : (
        <div
          id="cart"
          className="flex flex-col items-center min-h-svh gap-4 p-4 md:items-stretch md:min-h-svh md:gap-8 md:w-full md:p-8 lg:px-16 lg:py-8"
        >
          <div className="flex flex-col items-center text-lg md:text-2xl">
            <p className="font-rubik font-medium">SHOPPING CART</p>
            <p className="text-xs md:text-sm">{totalQuantity} items</p>
          </div>
          <CartButtons id="top" />
          <div id="cart-summary" className="flex flex-col gap-8 w-full md:flex-row md:gap-16">
            <div id="cart-items" className="flex gap-4 md:flex-1 flex-col md:gap-8">
              {cartItem.map((product) => {
                return <CartCard key={product.id} itemId={product.id} />;
              })}
            </div>
            <div
              id="cart-order-summary"
              className="flex flex-col gap-2 max-w-full md:gap-8 md:min-w-[224px] lg:min-w-[320px]"
            >
              <p className="text-sm font-medium">Order Summary</p>
              <div className="flex flex-col gap-1 font-rubik text-sm md:gap-4">
                <div className="flex md:justify-between">
                  <p>SUBTOTAL</p>
                  <p>{subtotal}</p>
                </div>
                <div className="flex justify-between">
                  <p>SHIPPING</p>
                  <p>FREE</p>
                </div>
                <div className="bg-gray-300 h-px"></div>
                <div className="flex font-medium justify-between">
                  <p>TOTAL</p>
                  <p>{subtotal}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-auto">
            <CartButtons id="bottom" />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

// cart empty image attribution
// <a href="https://www.flaticon.com/free-icons/empty-cart" title="empty cart icons">Empty cart icons created by kerismaker - Flaticon</a>
