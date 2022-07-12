import React from 'react';

const Item = ({ name, price, pictureURL, stock, id }) => {

  return (
    <div>
        <h3 className="w-full text-gray-800 text-lg font-semibold">{name}</h3>
        <img src={pictureURL} alt={name} />
        <p className="w-full text-gray-800 text-lg font-semibold">{price}</p>
        <p className="w-full text-gray-800 text-lg font-semibold">{stock}</p>
        <a href='#'>Ver detalle del producto</a>
    </div>
  )
}

export default Item