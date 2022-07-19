import React from 'react'
import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
  return (
    <section className="bg-zinc-500">
        <div className='container w-full m-auto px-4 grid grid-cols-1 place-content-center content-center justify-items-center h-64'>
            <h1 className='font-sans text-2xl font-bold text-stone-50 py-6'>Bienvenido a Full Games</h1>
            <p className='font-sans text-base text-stone-100'> Los mejores juegos y consolas al mejor precio </p>
        </div>
        <ItemListContainer category={'Consolas'}/>
    </section>
  )
}

export default Home