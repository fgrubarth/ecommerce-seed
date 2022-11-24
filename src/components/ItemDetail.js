import Detail from "./Item";

const ItemDetail = ({ item }) => {
    return (
      <div>
      {item.map((item) => (
        <Detail product={item} />
      ))}
      </div>
    );
  };
  
  export default ItemDetail;