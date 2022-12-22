import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/cartContext";

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
      <form onSubmit={handleFinalizePurchase} className="flex flex-col w-1/2">
        <div className="flex flex-col">
          <input
            className="h-8 pl-4 mb-4 rounded-md"
            placeholder="Nombre Completo"
            required
          />
          <input
            className="h-8 pl-4 mb-4 rounded-md"
            placeholder="Numero de Telefono"
            type="number"
            required
          />
          <input
            className="h-8 pl-4 mb-4 rounded-md"
            placeholder="Email"
            type={"email"}
            required
          />
        </div>
        <span>
          Total a pagar: <strong>${totalAmount}</strong>
        </span>
        <button
          type="submit"
          className="rounded-lg p-2 bg-gray-800 text-black disabled:opacity-50"
          disabled={isLoading}
        >
          Finalizar
        </button>
      </form>
    </Layout>
  );
};

export default CheckoutView;