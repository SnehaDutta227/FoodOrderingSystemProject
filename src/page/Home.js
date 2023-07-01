import React, { useSyncExternalStore } from 'react'
import HomeCard from '../Component/HomeCard'
import {useSelector} from "react-redux";
import { useState } from 'react';
import ProductList from './ProductList';



import { useEffect } from 'react';
import FilterProduct from './FilterProduct';
import ProductCategory from './ProductCategory';

const Home = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('');
  

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };


  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

      <div className='md:w-1/2'>
        <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
          <p className='font-medium text-slate-900'>Bike Delivery</p>
          <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" className='h-8'/>
        </div>
        <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fastest Delivery in <span className='text-red-700 text-'>Your Home</span></h2>
        <p className='py-3 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className='text-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
      </div>

      <div className='md:w-1/2 mx-100 my-10'>
        <ProductList/>
        </div>
      </div>

      <div className='flex gap-4 my-10 px-10 justify-center overflow-scroll scrollbar-none'>
        <FilterProduct category="Fruits" handleFilter={handleFilter}/>
        <FilterProduct category="Vegetables" handleFilter={handleFilter}/>
        <FilterProduct category="Ice Cream" handleFilter={handleFilter}/>
        <FilterProduct category="Dosa" handleFilter={handleFilter}/>
        <FilterProduct category="Pizza" handleFilter={handleFilter}/>
        <FilterProduct category="Burger" handleFilter={handleFilter}/>
        <FilterProduct category="Rice" handleFilter={handleFilter}/>
        <FilterProduct category="Cake" handleFilter={handleFilter}/>
        <FilterProduct category="Paneer" handleFilter={handleFilter}/>
        <FilterProduct category="Sandwich" handleFilter={handleFilter}/>
        
      </div>
      
      <ProductCategory selectedCategory={selectedCategory}/>

      
     
    </div>
        );


   
  
};

export default Home;