import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../firebase";

const ItemListContainer = ({ category }) => {
  const [items, setItems] = useState([]);

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
