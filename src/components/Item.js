
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
    return (
  <div className="card carta align-items-center" >
    <Link to={`/item/${product.id}`}>
      <img src={product.imagen} className="cartaFoto "  alt={product.nombre} />
    </Link>
    <div className="card-body">
      <h5 className="card-title">{product.nombre}</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">${product.precio}</li>
      <li className="list-group-item">Hasta 12 cuotas</li>
    </ul>
  </div>
    );
  };
  
  