import React from 'react';

const ItemDetail = ({ item }) => {
    console.log("conseguido");
  return (
    <div className="w-auto h-auto p-0 m-0 bg-stone-200 shadow-none pb-10 pt-10">
        <img className="h-64 object-auto rounded-t-md object-center inline-block" src={item.pictureURL} alt={item.name}/>
        <h3 className="text-2xl font-bold text-gray-700">{item.name}</h3>
        <div className="flex content-start justify-evenly">
            <p className="mt-2 text-gray-700 text-xl"><span className='font-semibold underline'>Fabricante:</span> {item.company}</p>
            <p className="mt-2 text-gray-700 text-xl"><span className='font-semibold underline'>Año:</span> {item.release}</p>
        </div>
        <p className="text-sm mt-2 text-gray-700 p-5 max-w-6xl inline-block">{item.description}</p>
        <div className='items-center justify-items-center justify-center content-center flex'>
        <p className="text-sm text-gray-700 bg-green-500 flex w-fit p-2.5 rounded-xl justify-evenly">Disponible: {item.stock}</p>
        </div>
        <p className="mt-2 block text-xl font-bold text-gray-700 cursor-auto">${item.price}</p>
    </div>
  )
}

export default ItemDetail