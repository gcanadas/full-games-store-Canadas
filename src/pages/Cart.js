import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";


const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, clearCart, getCartQuantity, getTotalPrice } = cartContext;


  console.log(cart)

  return (
    <section>
      <h1>Tu carrito de compras</h1>
        {cart 
          ? cart.map((item) => {
            return ( <CartItem key={item.id} id={item.id} img={item.pictureURL} name={item.name} qty={item.qty} price={item.price * item.qty} remove={removeItem} />);
          })
          : <p>No hay productos en el carrito</p>
        }
        {cart.length
          ? <button className='' onClick={clearCart}> Vaciar Carrito</button> 
          : <>
            <Link to={'/'}>
              <p>No hay productos en el carrito</p>
              <button className='' onClick={clearCart}> Seguir Comprando</button>
            </Link>
            </>
        }
      <div>
        <h3>Total: {getTotalPrice()}</h3> 
      </div>
    </section>
  )
}

export default Cart