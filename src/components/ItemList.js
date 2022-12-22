import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  );
};