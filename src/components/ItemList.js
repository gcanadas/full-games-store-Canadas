import React from 'react';
import Item from './Item';

const itemList = ({ items }) => {
  return (
    <div className="">
        <div className="grid flex-wrap items-center justify-center h-full grid-cols-4 gap-y-3 gap-x-3 justify-items-center">
            {items.map(({name, type, price, pictureURL, stock, id}) => {
                return(
                <Item
                    name={name}
                    type={type}
                    price={price}
                    pictureURL={pictureURL}
                    stock={stock}
                    id={id}
                    key={id} />
            )})}
        </div>
    </div>
  )
}

export default itemList