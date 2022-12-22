
import { useGetItem } from "../hooks/useGetItem";
import ItemDetail from "./ItemDetail";
import { Loading } from "./Loading";


 const ItemDetailContainer = () => {
  const item = useGetItem();
  console.log(item);
  return (
    <div className="flex justify-center items-center ">
     {!item ? <Loading/> : <ItemDetail item={item}  />} 
    </div>
  );
};

export default ItemDetailContainer;