import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../imagenes/empty.png";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";


const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };
  const goHome = () => {
    navigate("/");
  };

  return (
    <Layout>
        {items.length === 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <img src={EmptyCart} alt="Empty Cart" className="carro" />
            <p className="p-3 mb-2 bg-danger text-white">No has agregado productos al carrito</p>
            <button
              onClick={() => navigate("/")}
              className="border border-success rounded-pill px-4 py-2 m-3 mb-5"
            >
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div>
            <h1 className="titulo-cart">Producto añadido correctamente a su carrito de compra</h1>
              <div className="d-flex flex-wrap mt-5">
                {items.map((product) => {
                  const quantityAdded = product.quantityAdded;
                  return (                 
                     <div key={product.item.id} className="d-flex m-1">
                        <img className="img-cart me-4" src={product.item.imagen} alt={product.item.nombre} />
                       <div className="informacion-cart">
                         <p>{product.item.nombre}</p>
                         <p>Cantidad: {quantityAdded}</p>
                         <p>Pack x3</p>
                       </div>
                       <div>
                        <TrashWidget itemId={product.item.id} />
                       </div>
                      </div>
                  );
                })}
              </div>
              <div className="mt-4">
                        <div className="">
                          <span>
                            Total a pagar: <strong>${totalAmount}</strong>
                          </span>
                          <button
                            onClick={goToCheckout}
                            className="border border-success rounded-pill px-4 py-2 m-2">
                              Finalizar compra
                          </button>
                          O
                          <button
                            onClick={goHome}
                            className="border border-success rounded-pill px-4 py-2 m-2">
                              Seguir comprando
                          </button>
                        </div>
                      </div>
          </div>
        )}
      
    </Layout>
  );
};

export default CartView;