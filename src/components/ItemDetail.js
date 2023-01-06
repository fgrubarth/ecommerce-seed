import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [currentStock, setCurrentStock] = useState(item.cantidad);
  const maxQuantity = currentStock;
  
  
  

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else if(count === 0) alert("Agrega una cantidad")
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }
  
  return (
      <div>
        <div className="d-flex flex-wrap">
          <img className="ms-5 img-fluid carta" src={item.imagen} alt={item.nombre} />
          <div className="d-flex flex-column text-start ms-5 p-2 ">
            <div className="fs-2 fw-bold">{item.nombre}</div>
            {currentStock > 0 && (
            <p className="text-sm">En Stock: {currentStock}</p>
            )}
            <div className="d-flex flex-column m-1">
      
              <div>{item.detalles[1]}</div>
              <div>{item.detalles[2]}</div>
              <div>{item.detalles[3]}</div>
              <div>{item.detalles[4]}</div>
              <div>{item.detalles[5]}</div>
                  
            </div>
            <div className=" d-inline-flex align-items-center  flex-nowrap paquete ">
                <div className="col-sm-3 ps-2 ">Paquetes de semillas</div>
                <div className="col-sm-3 ps-2">Precio por semilla</div>
                <div className="col-sm-4 ps-2">Precio por paquete</div>
                <div className="col-sm-3 pe-2">Cantidad de paquetes</div>
            </div>
            <div className="d-flex flex-nowrap align-items-center justify-content-around carta-cantidad">
                <div className="col-sm-4  col-lg-2">Pack x3</div>
                <div className=" col-sm-2 ">${item.precio/3}</div>
                <div className=" col-sm-2 ">${item.precio}</div>
                <div>
                  {currentStock > 0 ? (
                    <ItemCount addItem={addItem} count={count} handleCount={handleCount} />
                  ) : (
                    <span className="text-red-500 mt-10">Sin stock</span>
                  )}
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <button
                onClick={handleAdd}
                className="border border-success rounded-pill px-4 py-2"
                disabled={currentStock === 0}
              >
                Agregar al carrito
              </button>
              <button
                disabled={!isInCart(item.id)}
                onClick={handleCheckout}
                className="border border-success rounded-pill px-4 py-2 "
              >
                Finalizar Compra
              </button>
            </div>
            <span>
                Total a pagar: <strong>${totalAmount}</strong>
            </span>
          </div>
        </div>
        <div className="informacion">
          <h2 className="m-2">Informacion del producto</h2>
          <div className="m-2">{item.detalles[6]}</div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;

