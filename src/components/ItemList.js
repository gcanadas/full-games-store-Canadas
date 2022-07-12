import React from 'react';
import Item from './Item';

const itemList = ({ items }) => {
  return (
    <div className="">
        <div className="flex flex-wrap items-center justify-center">
            {items.map(({name, price, pictureURL, stock, id}) => {
                return(
                <Item
                    name={name}
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