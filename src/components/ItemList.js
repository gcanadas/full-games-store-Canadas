import React from 'react';
import Item from './Item';

const itemList = ({ items }) => {
  return (
    <div>
        {items.map(({name, price, pictureURL, stock, id}) => {
            <Item
                name={name}
                price={price}
                pictureURL={pictureURL}
                stock={stock}
                id={id} />
        })}
    </div>
  )
}

export default itemList