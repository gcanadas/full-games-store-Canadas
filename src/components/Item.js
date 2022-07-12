import React from 'react';

const Item = ({ name, price, pictureURL, stock, id }) => {

  return (
    <div className=" w-64 h-auto p-6 m-4 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img className="h-48 object-auto rounded-t-md object-center" src={pictureURL} alt={name}/>
        <h3 className="text-2xl font-bold text-gray-700">{name}</h3>
        <p className="text-sm mt-2 text-gray-700">Disponible: {stock}</p>
        <p className="block text-xl font-semibold text-gray-700 cursor-auto">${price}</p>
        <a className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300" href='#'>Ver detalle del producto</a>
    </div>
  )
}

export default Item