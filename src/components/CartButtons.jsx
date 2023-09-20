import { Link } from 'react-router-dom';

const CartButtons = ({ id }) => {
  return (
    <div
      id={`cart-button-${id}`}
      className="flex flex-col justify-between gap-1 w-full md:gap-0 md:flex-row"
    >
      <Link
        to="../shop"
        className="bg-gray-100 text-black border-none outline-none no-underline cursor-pointer w-full p-2 text-xs text-center md:w-max"
      >
        Continue Shopping
      </Link>
      <button className="bg-emerald-500 text-black border-none outline-none no-underline cursor-pointer w-full p-2 text-xs text-center text-white md:w-max">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartButtons;
