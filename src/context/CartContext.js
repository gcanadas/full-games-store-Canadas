import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty) => {
    if (cart.some((el) => el.id === item.id)) {
        let newProductIndex = cart.findIndex((el) => el.id === item.id);
        let newProduct = cart[newProductIndex];
        newProduct.qty = newProduct.qty + qty;
        let tempCart = [...cart];
        tempCart.splice(newProductIndex, 1, newProduct);
        setCart([...tempCart]);
    } else {
        let newProduct = {...item, qty};
        setCart([...cart, newProduct]);
    }
  }

  const removeItem = (itemId) => {
    let tempCart = [...cart];
    cart.some((el) => el.id === itemId) 
        ? tempCart.splice(cart.findIndex((el) => el.id === itemId), 1) 
        : alert(`No se encontro el producto en el carrito`);
    setCart([...tempCart]);
  }

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (itemId) => {
    return (
    cart.some((el) => el.id === itemId) 
        ? true 
        : false
  )}

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearCart, isInCart }}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider