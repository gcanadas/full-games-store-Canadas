import {useState} from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount((valAnt) => valAnt > 0 ? count - 1 : count);
  }

  return (
    <div className="m-4">
        <div className="flex flex-row justify-center items-center custom-number-input h-10">
        <h3 className="w-full text-gray-800 text-lg font-semibold">Cantidad de items</h3>
        </div>
        <div className="flex flex-row justify-center items-center h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button onClick={decrease} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span className="m-auto text-2xl font-semibold">−</span>
            </button>
            <span className="focus:outline-none text-center w-32 h-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black text-gray-700  outline-none flex items-center justify-center">{count}</span>
            <button onClick={increase} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span className="m-auto text-2xl font-semibold">+</span>
            </button>
        </div>
        <button onClick={() => {
            if(count <= stock) onAdd(count);
        }} 
        class="m-4 p-2 bg-transparent font-semibold border-2 border-gray-600 text-gray-800 text-lg rounded-lg transition-colors duration-700 transform hover:bg-gray-300 hover:text-gray-800 focus:border-4 focus:border-gray-400">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount