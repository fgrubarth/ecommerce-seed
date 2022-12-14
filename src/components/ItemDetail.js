import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.cantidad);
  const maxQuantity = currentStock;
  

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else setCurrentStock(currentStock - count);
  }

  function handleCheckout() {
    navigate("/cart");
  }
  
  return (
      <div>
      
        <div className="d-flex">
          <img className="ms-5 img-fluid carta" src={item.imagen} alt={item.nombre} />
          <div className="d-flex flex-column text-start ms-5 p-2 ">
            <div className="fs-2 fw-bold">{item.nombre}</div>
            {currentStock > 0 && (
            <p className="text-sm">En Stock: {currentStock}</p>
            )}
            <div className="d-flex flex-column m-4">
              <div>{item.detalles.nombre}</div>
              <div>{item.detalles.sativa}</div>
              <div>{item.detalles.indica}</div>
              <div>{item.detalles.flora}</div>
              <div>{item.detalles.thc}</div>
              <div>{item.detalles.cbd}</div>
              <div>{item.detalles.detalle}</div>
                      
            </div>
            <div className="row flex-nowrap align-items-center">
              <div className="col-lg-3 ">Paquetes de semillas</div>
              <div className="col-sm-2">Precio por semilla</div>
              <div className="col-sm-2">Precio por paquete</div>
              <div className="col-sm-3 col-md-4 col-lg-3">Cantidad de paquetes</div>
            </div>

            <div className="row flex-nowrap align-items-center">
              <div className="col-sm-5 col-md-4 col-lg-3">Pack x3</div>
              <div className=" col-sm-2 ">${item.precio/3}</div>
              <div className=" col-sm-2  ">${item.precio}</div>
            
              <div className="">
              
                {currentStock > 0 ? (
                  <ItemCount count={count} handleCount={handleCount} />
                ) : (
                  <span className="text-red-500 mt-10">Sin stock</span>
                )}
              
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <button
                onClick={handleAdd}
                className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40"
                disabled={currentStock === 0}
              >
                Agregar al carrito
              </button>
              <button
                onClick={handleCheckout}
                className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40 "
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default ItemDetail;