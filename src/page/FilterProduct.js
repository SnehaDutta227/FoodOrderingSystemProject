import React from 'react';
import {CiForkAndKnife} from "react-icons/ci";
import Home from './Home';


const FilterProduct = ({category,handleFilter}) => {
    const handleClick = () =>{
        handleFilter(category);
    }
  return (
    <div>
        <button onClick= {handleClick}>
        <div className='text-3xl p-5 bg-yellow-500 rounded-full'>
        <CiForkAndKnife />
       </div>
       <p className='text-center font-medium my-1 captitalize'>{category}</p>

        </button>
    
    </div>
  )
}

export default FilterProduct;