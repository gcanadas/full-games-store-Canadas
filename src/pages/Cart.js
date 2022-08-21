import React, { useState, useContext } from "react";
import CartForm from "../components/CartForm/CartForm";
import ShowCart from "../components/ShowCart/ShowCart";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { getCartQuantity } = cartContext;

  const [showForm, setShowForm] = useState(false);
  const cartEmpty = getCartQuantity();

  return (
    <section>
      {showForm ? (
        <>
          <CartForm />
          <button
            className="ml-auto mr-auto block bg-slate-400 pt-2 pb-2 pl-4 pr-4 rounded-md text-slate-50 text-2xl font-medium mb-5 hover:bg-slate-900"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            {" "}
            Volver Atras{" "}
          </button>
        </>
      ) : (
        <>
          <ShowCart />
          <button
            className="ml-auto mr-auto block bg-slate-400 pt-2 pb-2 pl-4 pr-4 rounded-md text-slate-50 text-2xl font-medium mb-5 hover:bg-slate-900"
            disabled={!cartEmpty}
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            {" "}
            Finalizar Compra{" "}
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;
