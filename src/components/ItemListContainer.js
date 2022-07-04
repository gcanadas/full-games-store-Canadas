import React from 'react';

const ItemListContainer = ({ title }) => {

    return (
        <section className="bg-zinc-500">
            <div className='container w-full m-auto h-screen px-4 grid grid-cols-1 place-content-center content-center'>
                <h1 className='font-sans text-2xl font-bold text-stone-50 py-6'>{title}</h1>
                <p className='font-sans text-base text-stone-100'> Los mejores juegos y consolas al mejor precio </p>
            </div>
        </section>
    );
};

export default ItemListContainer;