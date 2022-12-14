import { Link } from "react-router-dom";

export const Item = ({ product, quantityAdded }) => {
  
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
        <div className="flex flex-col">
          <hr className="mb-2" />
          <div className="flex justify-between items-center">
            <span className="font-bold">${product.price}</span>
            <span className="text-xs">
              {quantityAdded ? "Agregados" : "En Stock"}:{" "}
              {quantityAdded || product.stock}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Item;