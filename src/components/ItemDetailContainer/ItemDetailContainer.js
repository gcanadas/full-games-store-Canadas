import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//import Products from '../data/products.json';
import { getProductsById } from "../../firebase";

function ItemDetailContainer({ id }) {
  const [product, setProduct] = useState([]);

  const getProductsByIdFromDB = async () => {
    try {
      const Products = await getProductsById(id, "products");
      setProduct(Products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductsByIdFromDB();
  }, []);

  return (
    <div>
      {product ? <ItemDetail item={product} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
