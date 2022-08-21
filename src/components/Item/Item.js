import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const [cartState, setCartState] = useState(false);

  const cartContext = useContext(CartContext);
  const { addItem } = cartContext;

  function onAdd(quantityToAdd) {
    addItem(item, quantityToAdd);
    setCartState(true);
  }

  return (
    <div className=" w-full h-full p-6 m-0 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
      <img
        className="h-56 w-56 object-contain object-center m-auto"
        src={item.pictureURL}
        alt={item.name}
      />
      <div className="h-20 flex justify-center items-center">
        <Link to={`../product/${item.id}`}>
          <h3 className="text-2xl font-bold text-gray-700 text-center hover:text-gray-400">
            {item.name}
          </h3>
        </Link>
      </div>
      <p className="text-sm text-gray-700 pl-5">Disponible: {item.stock}</p>
      <p className="block text-xl font-semibold text-gray-700 cursor-auto pl-5">
        ${item.price}
      </p>
      {cartState ? (
        <Link
          to={"../cart"}
          className="p-2 bg-blue-700 font-semibold border-2 border-blue-900 text-white text-lg rounded-lg transition-colors duration-700 transform hover:bg-blue-300 hover:text-gray-800 focus:border-4 focus:border-gray-400 text-center block relative mt-4 mb-4"
        >
          Finalizar compra
        </Link>
      ) : (
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default Item;
