import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [cartState, setCartState] = useState(false);

  const cartContext = useContext(CartContext);
  const { addItem } = cartContext;

  function onAdd(quantityToAdd) {
    addItem(item, quantityToAdd);
    setCartState(true);
  }

  return (
    <div className="w-auto h-auto p-0 m-0 bg-stone-200 shadow-none pb-10 pt-10 flex flex-col items-center">
      <img
        className="h-64 object-auto rounded-t-md object-center inline-block w-fit"
        src={item.pictureURL}
        alt={item.name}
      />
      <h3 className="text-2xl font-bold text-gray-700 mt-4">{item.name}</h3>
      <div className="flex content-start justify-evenly gap-x-8">
        <p className="mt-2 text-gray-700 text-xl">
          <span className="font-semibold underline">Fabricante:</span>{" "}
          {item.company}
        </p>
        <p className="mt-2 text-gray-700 text-xl">
          <span className="font-semibold underline">Año:</span> {item.release}
        </p>
      </div>
      <p className="text-sm mt-2 text-gray-700 p-5 max-w-6xl inline-block">
        {item.description}
      </p>
      <div className="items-center justify-items-center justify-center content-center flex">
        <p
          className={`text-sm text-gray-700 flex w-fit p-2.5 rounded-xl justify-evenly ${
            item.stock > 10
              ? "bg-green-500"
              : item.stock === 0
              ? "bg-red-700"
              : "bg-yellow-400"
          }`}
        >
          Disponible: {item.stock}
        </p>
      </div>
      <p className="m-3 block text-xl font-bold text-gray-700 cursor-auto">
        ${item.price}
      </p>
      {cartState ? (
        <Link
          to={"../cart"}
          className="p-2 bg-blue-700 font-semibold border-2 border-blue-900 text-white text-lg rounded-lg transition-colors duration-700 transform hover:bg-blue-300 hover:text-gray-800 focus:border-4 focus:border-gray-400 w-72 text-center"
        >
          Finalizar compra
        </Link>
      ) : (
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
