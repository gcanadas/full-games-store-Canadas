import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    
  return (
    <div className="w-auto h-auto p-0 m-0 bg-stone-200 shadow-none pb-10 pt-10 flex flex-col items-center">
        <img className="h-64 object-auto rounded-t-md object-center inline-block w-fit" src={item.pictureURL} alt={item.name}/>
        <h3 className="text-2xl font-bold text-gray-700 mt-4">{item.name}</h3>
        <div className="flex content-start justify-evenly gap-x-8">
            <p className="mt-2 text-gray-700 text-xl"><span className='font-semibold underline'>Fabricante:</span> {item.company}</p>
            <p className="mt-2 text-gray-700 text-xl"><span className='font-semibold underline'>Año:</span> {item.release}</p>
        </div>
        <p className="text-sm mt-2 text-gray-700 p-5 max-w-6xl inline-block">{item.description}</p>
        <div className='items-center justify-items-center justify-center content-center flex'>
        <p className="text-sm text-gray-700 bg-green-500 flex w-fit p-2.5 rounded-xl justify-evenly">Disponible: {item.stock}</p>
        </div>
        <p className="mt-2 block text-xl font-bold text-gray-700 cursor-auto">${item.price}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={(n) => alert(`Agregados ${n} productos`)}/>
    </div>
  )
}

export default ItemDetail