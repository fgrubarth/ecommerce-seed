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
      <div className="flex flex-col max-w-[50%]">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img src={EmptyCart} alt="Empty Cart" className="carro" />
            <h1 className="text-2xl">No has agregado productos</h1>
            <button
              onClick={() => navigate("/")}
              className="rounded-lg p-2 bg-gray-800 text-black mt-4"
            >
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div>
            <h1 className="titulo-cart">Producto añadido correctamente a su carrito de compra</h1>
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;
                return (
                  <div>
                    
                   <div className="d-flex">
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
                  </div>
                );
              })}
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
      </div>
    </Layout>
  );
};

export default CartView;