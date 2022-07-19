import React from 'react';
import { Link, useParams } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer';

const DetailPage = () => {
    
    let { id } = useParams();

  return (
    <div>
        <ItemDetailContainer id={parseInt(id)} />
    </div>
  )
}

export default DetailPage