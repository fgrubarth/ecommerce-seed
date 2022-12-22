import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";
import { CartContextProvider } from "./context/cartContext";


import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyC3Hy9mpXei8-ZtXC5Sw2QuhgH6168fZOU",
  authDomain: "ecommerce-seed-e8191.firebaseapp.com",
  projectId: "ecommerce-seed-e8191",
  storageBucket: "ecommerce-seed-e8191.appspot.com",
  messagingSenderId: "453043308384",
  appId: "1:453043308384:web:ce9c1067ab967095ce8005"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);


reportWebVitals();
