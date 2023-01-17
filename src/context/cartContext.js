import { createContext, useEffect, useState } from "react";


export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState ( () => {
    const savedItem = localStorage.getItem("productsAdded");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || [];
   });
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    const amount = productsAdded
      .map((product) => parseInt(product.item.precio) * product.quantityAdded)
      .reduce((partialSum, a) => partialSum + a, 0);
    setTotalAmount(amount);
  }, [productsAdded]);


  useEffect(() => {
		localStorage.setItem('productsAdded', JSON.stringify(productsAdded));
    if (productsAdded){
      JSON.parse(localStorage.getItem('productsAdded'))
    }
	}, [productsAdded]);
  

  function addItem(item, quantity) {
    const isAlreadyAdded = isInCart(item.id);
    if (isAlreadyAdded) {
      setProductsAdded((prevState) =>
        prevState.map((productAdded) =>
          productAdded.item.id === item.id
            ? {
                ...productAdded,
                quantityAdded: productAdded.quantityAdded + quantity,
              }
            : productAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ item, quantityAdded: quantity })
      );
    }
  }

  function removeItem(itemId) {
    setProductsAdded((prevState) =>
      prevState.filter((product) => product.item.id !== itemId)
    );
  }

 

  function clear() {
    setProductsAdded([]);
    setTotalAmount(0);
  }

  function isInCart(itemId) {
    return Boolean(productsAdded.find((product) => product.item.id === itemId));
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        productsAdded,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};