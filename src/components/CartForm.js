import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { createItem } from '../firebase';

const CartForm = () => {
    const { cart, getTotalPrice, clearCart } = useContext( CartContext );

    const useForm = ( initialState = {} ) => {
        const [ values, setValues ] = useState( initialState );
        const handleInputData = ( { target } ) => {
            setValues({
                ...values,
                [target.name]: target.value
            });
        };    
        return [ values, handleInputData ];
    }

    const [ formValues, handleInputData ] = useForm({
        name:"",
        phone:"",
        email:""
    });

    const setOrder = {
        buyer: formValues,
        items: cart,
        totalPrice: getTotalPrice(),
        date: new Date().toISOString()
      }

    const sendCart = () => {
        console.log(setOrder);
        createItem(setOrder, "cart");
        clearCart();
    }


  return (
    <form onSubmit={(e)=> {
        e.preventDefault();
        sendCart();
    }}>
        <h2 className='text-2xl font-bold p-4 text-center border-b-2'>Ingresa tus datos para generar la compra</h2>
        <div className='text-2xl font-bold pt-10 pb-10 grid grid-cols-2 w-1/2 ml-auto mr-auto'>
        <label >Nombre Completo: </label>
        <input className='border-2 rounded-tl-xl rounded-br-xl rounded-tr-xl rounded-bl-xl mb-2' type={"text"} name={"name"} onChange={handleInputData} required/>
        <label>Teléfono: </label>
        <input className='border-2 rounded-tl-xl rounded-br-xl rounded-tr-xl rounded-bl-xl mb-2' type={"number"} name={"phone"} onChange={handleInputData} required/>
        <label>Email: </label>
        <input className='border-2 rounded-tl-xl rounded-br-xl rounded-tr-xl rounded-bl-xl mb-2' type={"email"} name={"email"} onChange={handleInputData} required/>
        </div>
        <input className='ml-auto mr-auto block bg-slate-400 pt-2 pb-2 pl-4 pr-4 rounded-md text-slate-50 text-2xl font-medium mb-5 hover:bg-slate-900' type={"submit"} value={"Realizar compra"}/>
    </form>
  )
}

export default CartForm