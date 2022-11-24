import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { item as itemMock } from "../mocks/item.mock";

const ItemDetailContainer = () => {
  const {items} = useParams()
  const [item, setItem] = useState([]);
  

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock), 2000)).then(
      (data) => {
      if (items) {
        const ids = data.find(
          (product) => product.id === items
        );
        setItem(ids);
      } else {
        setItem(data);
      }
    });
  }, [items]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;