import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
//import Products from '../data/products.json';
import { getProducts, getProductsByCategory } from "../../firebase";

const ItemListContainer = ({ category }) => {
  const [items, setItems] = useState([]);

  // const getProducts = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //         resolve(Products.filter((el) => el.type === category));
  //     }, 2000);
  // })

  // const getFromDB = async () => {
  //     try {
  //         const result = await getProducts;
  //         setItems (result);
  //     }catch (err) {
  //         console.log(err);
  //     }
  // }

  const getProductsFromDB = async () => {
    try {
      if (!category) {
        const Products = await getProducts("products");
        setItems(Products);
      } else {
        const Products = await getProductsByCategory(category, "products");
        setItems(Products);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //getFromDB();
    getProductsFromDB();
  }, [category]);

  return (
    <section className="bg-zinc-500">
      <div className="container w-full m-auto px-4 grid grid-cols-1 place-content-center content-center">
        <ItemList items={items} />
      </div>
    </section>
  );
};

export default ItemListContainer;
