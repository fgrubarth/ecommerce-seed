import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
      <div >
        <Link to={`/item/${product.id}`}>
          <img src={product.imagen} className="carta"  alt={product.nombre} />
        </Link>
        <ul className="d-flex flex-column align-items-center list-group">
          <li className="list-group-item">{product.nombre}</li>
          <li className="list-group-item">${product.precio}</li>
          <li className="list-group-item">Hasta 12 cuotas</li>
        </ul>
      </div>
    );
  };
  
  export default Item;