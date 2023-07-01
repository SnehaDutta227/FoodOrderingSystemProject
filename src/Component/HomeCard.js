import React from 'react';
import ProductList from '../page/ProductList';

const HomeCard = (name,category,image,price,description) => {
  return (
    <div>
        <div className=''>
            <img src={image} className='w-40'/>
        </div>
    </div>
  )
}

export default HomeCard