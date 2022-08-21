import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";

const CartItem = ({ id, img, name, qty, price, remove }) => {
  return (
    <article className="border-b-2 flex h-20">
      <Link
        className="ml-10 mr-5 flex items-center justify-center"
        to={`../product/${id}`}
      >
        <img className="h-1/2 w-20 object-contain" src={img} alt={name} />
      </Link>
      <div className="flex items-center w-full justify-around">
        <h2 className="text-xl font-medium w-1/3">{name}</h2>
        <span className="w-10">{qty} Un.</span>
        <span className="w-20">$ {price}</span>
        <button className="hover:text-slate-300" onClick={() => remove(id)}>
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
