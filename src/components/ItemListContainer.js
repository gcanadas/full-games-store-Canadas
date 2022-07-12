import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Products from '../data/products.json';

const ItemListContainer = ({ title }) => {

    const [items, setItems] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products);
        }, 2000);
    })

    const getFromDB = async () => {
        try {
            const result = await getProducts;
            setItems (result);
        }catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getFromDB();    
    }, []);
    

    return (
        <section className="bg-zinc-500">
            <div className='container w-full m-auto px-4 grid grid-cols-1 place-content-center content-center'>
                <h1 className='font-sans text-2xl font-bold text-stone-50 py-6'>{title}</h1>
                <p className='font-sans text-base text-stone-100'> Los mejores juegos y consolas al mejor precio </p>
                <ItemList items={items} />
                <ItemCount stock={5} initial={1} onAdd={(n) => alert(`Agregados ${n} productos`)}/>
            </div>
        </section>
    );
};

export default ItemListContainer;