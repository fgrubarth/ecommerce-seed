

const ItemDetail = ({ item }) => {
    return (
      <div>
      
        <div>
        <div>{item.nombre}</div>
        <img src={item.imagen} alt={item.nombre} />
      </div>
      
      </div>
    );
  };
  
  export default ItemDetail;