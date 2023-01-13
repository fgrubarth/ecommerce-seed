import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/cartContext";
import { TrashWidget } from "../components/TrashWidget";

// firebase
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: item, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    setIsLoading(true);

    const total = item
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.precio)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email },
      item,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      item.forEach((element) => {
        const itemRef = doc(db, "item", element.item.id);
        const dataToUpdate = {
          stock: element.item.cantidad - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
            alert("Compra finalizada");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
   
  }, [updatingProducts, clear, item, navigate]);

  return (
    <Layout>
      <form onSubmit={handleFinalizePurchase} className="d-flex  justify-content-center">
      
        <div className="formulario ">
          <p className="fs-2 fw-bold">1. INFORMACION</p>
          <p>
            <label className="me-2">Nombre</label>
            <input type="text" placeholder="Nombre Completo" name="nombre" required />
          </p>
          <p>
            <label className="me-3">Correo</label>
            <input type="email" placeholder="Email" name="email" required />
          </p>
          <p>
            <label className="me-2">Teléfono</label>
            <input type="text" placeholder="Numero de Telefono" name="teléfono" required />
          </p>
        </div>
        <div className="ms-5 mt-5  ">
          <p className="fs-2 fw-bold">2. TOTAL</p>         
            <div className="d-flex flex-wrap">
              {item.map((product) => {
                      const quantityAdded = product.quantityAdded;
                      return (
                         <div key={product.item.id} className="d-flex">
                            <img className="img-cart me-4 " src={product.item.imagen} alt={product.item.nombre} />
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
          <span>
            Total a pagar: <strong>${totalAmount}</strong>
          </span>
          <button
            type="submit"
            className="border border-success rounded-pill px-4 py-2 m-2"
            disabled={isLoading}
          >
            Comprar
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default CheckoutView;