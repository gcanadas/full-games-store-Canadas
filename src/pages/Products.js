import React from 'react'
import ItemListContainer from '../components/ItemListContainer'

const Products = ({category}) => {
  return (
    <section className="bg-zinc-500">
        <div className='container w-full m-auto px-4 grid grid-cols-1 place-content-center content-center justify-items-center h-32'>
            <h1 className='font-sans text-2xl font-bold text-stone-50 py-6'>{category}</h1>
        </div>
        <ItemListContainer category={category}/>
    </section>
  )
}

export default Products