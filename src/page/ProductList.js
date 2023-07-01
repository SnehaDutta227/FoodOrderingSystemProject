import React, { useEffect, useState } from 'react';
import {CiForkAndKnife} from "react-icons/ci";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/products/get'); // Replace '/api/products' with your actual API endpoint
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const getFileNameFromPath = (filePath) => {
    const fileName = filePath.substring(39);
    console.log(fileName);
    return fileName;
  };

  return (
    <div className=''>
      
      <ul className='flex flex-wrap'>
       {products.slice(0,4).map((product) => (
          <li key={product.id}>
            <div className='w-60 h-min-150px my-7'>
            <img src={process.env.PUBLIC_URL + '/DataBaseimages/' + getFileNameFromPath(product.image)} alt={product.name}  />

            </div>
            <div>
            <h2 className='font-semibold text-slate-600 text-center capitalize text-lg'>{product.name}</h2>
            <p className='text-center text-slate-500 font-medium'>{product.category}</p>
            <p className='text-center font-bold'><span className='text-red-500'>₹</span>{product.price}</p>
            

            </div>
           
            
          </li>
        ))}
      </ul>

      
        
      
    </div>
    
  );
};

export default ProductList;
