import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
  const count = productsAdded.length;

  return (
    <div>
      <Link to="/cart" className="relative">
        
         <AiOutlineShoppingCart className="tarjeta text-white" />
        
        {count > 0 && (
          <span className="text-white ">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;