import React from 'react'
import { Link } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/outline';

const CartItem = ({id, img, name, qty, price, remove}) => {
  return (
    <article className='border-t-2 border-b-2'>
        <Link to={`../product/${id}`}>
            <img className='' src={img}/>
        </Link>
        <div>
            <h2>{name}</h2>
            <span>{qty}</span>
            <span>{price}</span>
            <button onClick={()=> remove(id)}>
                <TrashIcon className='h-6 w-6'/>
            </button>
        </div>
    </article>
  )
}

export default CartItem