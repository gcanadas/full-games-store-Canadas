import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';

const CartWidget = () => {
    
    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          type="button"
          className="bg-slate-600 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">CARRITO</span>
          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        </div>
    );
};

export default CartWidget;

