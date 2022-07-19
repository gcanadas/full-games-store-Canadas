import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ name, type, price, pictureURL, stock, id }) => {

  return (
    <div className=" w-full h-auto p-6 m-0 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img className="h-56 w-56 object-contain object-center m-auto" src={pictureURL} alt={name}/>
        <div className='h-20 flex justify-center items-center'>
          <Link to={`../product/${id}`}>
            <h3 className="text-2xl font-bold text-gray-700 text-center hover:text-gray-400">{name}</h3>
          </Link>
        </div>
        <p className="text-sm text-gray-700 pl-5">Disponible: {stock}</p>
        <p className="block text-xl font-semibold text-gray-700 cursor-auto pl-5">${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={(n) => alert(`Agregados ${n} productos`)}/>
    </div>
  )
}

export default Item