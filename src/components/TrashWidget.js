import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <button
      onClick={() => removeItem(itemId)}
      className="absolute flex justify-center items-center "
    >
     Eliminar producto
    </button>
  );
};