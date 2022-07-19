import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ name, type, price, pictureURL, stock, id }) => {

  return (
    <div className=" w-64 h-auto p-6 m-0 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img className="h-56" src={pictureURL} alt={name}/>
        <Link to={`../product/${id}`}>
          <h3 className="text-2xl font-bold text-gray-700 text-center">{name}</h3>
        </Link>
        <p className="text-sm mt-5 text-gray-700">Disponible: {stock}</p>
        <p className="block text-xl font-semibold text-gray-700 cursor-auto">${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={(n) => alert(`Agregados ${n} productos`)}/>
    </div>
  )
}

export default Item