import React, { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart, getCartQuantity } = cartContext;

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="bg-slate-600 p-1 rounded-full text-gray-400 hover:text-white"
      >
        <span className="sr-only">CARRITO</span>
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        {cart.length ? (
          <div className="rounded-full bg-stone-200 text-center text-gray-600 text-xs border-black ring-2 ring-stone-50 w-4 h-4 absolute top-3 right-0 opacity-90 scale-x-90 scale-y-90 p-0 flex justify-center items-center">
            <span>{getCartQuantity()}</span>
          </div>
        ) : null}
      </button>
    </div>
  );
};

export default CartWidget;
