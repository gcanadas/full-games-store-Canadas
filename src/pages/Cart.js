import React, { useState } from 'react';
import CartForm from '../components/CartForm';
import ShowCart from '../components/ShowCart';


const Cart = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section>
      {
        showForm
        ? <>
            <CartForm />
            <button className='ml-auto mr-auto block bg-slate-400 pt-2 pb-2 pl-4 pr-4 rounded-md text-slate-50 text-2xl font-medium mb-5 hover:bg-slate-900' onClick={()=> {setShowForm(!showForm)}}> Volver Atras </button>
          </>
        : <>
            <ShowCart />
            <button className='ml-auto mr-auto block bg-slate-400 pt-2 pb-2 pl-4 pr-4 rounded-md text-slate-50 text-2xl font-medium mb-5 hover:bg-slate-900' onClick={()=> {setShowForm(!showForm)}}> Finalizar Compra </button>
          </>
      } 
    </section>
  )
}

export default Cart