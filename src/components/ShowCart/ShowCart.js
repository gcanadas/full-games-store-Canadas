import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ShowCart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, clearCart, getCartQuantity, getTotalPrice } =
    cartContext;

  return (
    <>
      <h1 className="text-2xl font-bold p-4 text-center border-b-2">
        Tu carrito de compras ({getCartQuantity()})
      </h1>
      {cart ? (
        cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              img={item.pictureURL}
              name={item.name}
              qty={item.qty}
              price={item.price * item.qty}
              remove={removeItem}
            />
          );
        })
      ) : (
        <p>No hay productos en el carrito</p>
      )}
      {cart.length ? (
        <div>
          <h3 className="text-2xl font-bold relative text-right right-20 pt-4 pb-4">
            Total:<span className="pl-10">$ {getTotalPrice()}</span>
          </h3>
          <button
            className="ml-auto mr-auto block bg-slate-400 pt-2 pb-2 pl-4 pr-4 rounded-md text-slate-50 text-2xl font-medium mb-5 hover:bg-slate-900"
            onClick={clearCart}
          >
            {" "}
            Vaciar Carrito
          </button>
        </div>
      ) : (
        <>
          <p className="text-center mt-20 mb-20 block font-medium">
            No hay productos en el carrito
          </p>
          <Link to={"/"}>
            <button
              className="ml-auto mr-auto block bg-slate-400 pt-2 pb-2 pl-4 pr-4 rounded-md text-slate-50 text-2xl font-medium mb-5 hover:bg-slate-900"
              onClick={clearCart}
            >
              {" "}
              Seguir Comprando
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default ShowCart;
