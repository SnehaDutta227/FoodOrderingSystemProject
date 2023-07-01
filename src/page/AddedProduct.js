
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AddedProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProductData();
    }, []);

    const fetchProductData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products/addtocart'); // Replace '/api/products' with your actual API endpoint
        const data = await response.json();
        
       
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    const calculateTotalPrice = () => {
      let totalPrice = 0;
      products.forEach((product) => {
        totalPrice += product.price * product.quantity;
      });
      return totalPrice;
    };

    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = (productId) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    };
    const decrementQuantity = (productId) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
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
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

      <div className="my-4 flex gap-3 ">
        <div  className="w-full max-w-3xl  ">
        {products.map((product) => (
        <div key={product.id} className='my-4 space-y-4'>
          <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300 mt-15">
          <div className="p-3 bg-white rounded overflow-hidden">
        <img src={process.env.PUBLIC_URL + '/DataBaseimages/' + getFileNameFromPath(product.image)}
                        alt={product.name} className="h-28 w-40 object-cover " />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
        <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
            {product.name}
          </h3>
          </div>
          <p className=" text-slate-500  font-medium ">{product.category}</p>
        <p className=" font-bold text-base">
          <span className="text-red-500 ">₹</span>
          <span>{product.price}</span>
        </p>

        <div className="flex justify-between ">
          <div className="flex gap-3 items-center">
            <button onClick={() => incrementQuantity(product.id)} className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 ">+</button>
            <p className="font-semibold p-1">{product.quantity}</p>
            <button className='bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1' onClick={() => decrementQuantity(product.id)} >-</button>
            </div>
            
            </div>
            
        </div>
        
          
         
          
         


          </div>
          
        </div>
      ))}
      
      
          
        </div>
       
      </div>
      <div className="flex items-center gap-2 font-bold text-slate-700 my-15">
      <p>Total :</p>
        <p>
          <span className="text-red-500">₹</span>
          {calculateTotalPrice()}
        </p>

              </div>
      
    </div>
  )
}

export default AddedProduct;