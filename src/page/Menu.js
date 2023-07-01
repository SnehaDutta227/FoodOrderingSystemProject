import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCategory from './ProductCategory';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  console.log(productId);
  

  useEffect(() => {
    fetchProductData(productId);
  }, [productId]);

  const fetchProductData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  

  const getFileNameFromPath = (filePath) => {
    if (filePath && typeof filePath === 'string') {
      const fileName = filePath.substring(39);
      console.log(fileName);
      return fileName;
    }
    return '';
  };
  
  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl m-auto md:flex bg-white flex gap-12' >
      <div className='max-w-sm overflow-hidden w-full p-5'>
          <img src={process.env.PUBLIC_URL + '/DataBaseimages/' + getFileNameFromPath(product.image)} className='hover:scale-105 transition-all h-full ' alt={product.name} />

          

        </div>
        

         <div className='flex flex-col gap-1'>
          <h3 className='font-semibold text-slate-600 capitalize text-2xl md:text-4xl'>{product.name}</h3>
          <p className='text-slate-500 font-medium text-2xl'>{product.category}</p>
          <p className='font-bold md:text-2xl'>
            <span className='text-red-500'>₹</span>
            <span>{product.price}</span>
          </p>
          <div className='flex gap-3'>
            <button className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]'>Buy</button>
          <button className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]' >Add to Cart</button>

          </div>
        </div>

        </div>
        </div>
       
  );
};

export default Menu;
