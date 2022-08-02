import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
//import Products from '../data/products.json';
import { getProductsById } from '../firebase'

function ItemDetailContainer({ id }) {
const [product, setProduct] = useState([]);

// const getProducts = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(Products);
//     }, 2000);
// })

// const getProductById = async () => {
//     try {
//       const result = await getProducts;
//       setProduct(result.find((el) => el.id === id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

const getProductsByIdFromDB = async () => {
  try {
          const Products = await getProductsById(id, 'products');
          setProduct(Products);
  } catch (error) {
      console.error(error);        
  }
}

useEffect(() => {
  //getProductById();
  getProductsByIdFromDB();
}, [])

  return (
    <div>
        {product ? <ItemDetail item={product} /> : <p>Cargando producto...</p>}
    </div>
  )
}

export default ItemDetailContainer