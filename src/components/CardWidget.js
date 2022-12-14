import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
  const count = productsAdded;

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Link to="/cart" className="relative">
        <button
          type="button"
          className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
         <AiOutlineShoppingCart />
        </button>
        {count > 0 && (
          <span className="absolute w-4 h-4 bottom-0 -right-2 rounded-full flex justify-center items-center bg-white/70">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;