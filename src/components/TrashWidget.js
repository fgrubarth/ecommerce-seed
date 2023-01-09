import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import {AiTwotoneDelete} from 'react-icons/ai'

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <button
      onClick={() => removeItem(itemId)}
      className="eliminar "
    >
    <AiTwotoneDelete />
    </button>
  );
};