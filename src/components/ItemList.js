import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <ul className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};

export default ItemList;