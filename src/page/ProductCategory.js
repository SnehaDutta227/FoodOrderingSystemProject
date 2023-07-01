  import React, { useEffect, useState } from 'react';
  import { Link, useNavigate} from 'react-router-dom';
  
  const ProductCategory = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetchProductData();
    }, []);

    const fetchProductData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products/get'); // Replace '/api/products' with your actual API endpoint
        const data = await response.json();
        
       
        setProducts(data);
        
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    const handleAddToCart = async (product) => {
      try {

    const formData = new FormData();
    formData.append('name', product.name);
formData.append('category', product.category);
formData.append('price', product.price);
formData.append('quantity', Number(1));
formData.append('image', product.image);
    
   
    
   
    
    

    console.log(formData);
    

      
        const response = await fetch('http://localhost:8080/api/products/addtocart', {
          method: 'POST',
          
          body: formData
        });
  
        if (response.ok) {
          console.log('Item added to cart successfully');
          navigate('addtocart');
          // Reset quantity if needed
         
        } else {
          console.log('Failed to add item to cart');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    
    const getFileNameFromPath = (filePath) => {
      if (filePath && typeof filePath === 'string') {
        const fileName = filePath.substring(39);
        console.log(fileName);
        return fileName;
      }
      return '';
    };

    return (
      <div className='w-full min-w-[200px] max-w-[200px] py-5 px-4 cursor-pointer flex flex-wrap'>
        <div className='flex flex-wrap'>
          <ul className='flex'>
            {products
              .filter((product) => selectedCategory === product.category)
              .map((filteredProduct) => (
                <li key={filteredProduct.id} className='m-3 rounded-md bg-white p-4'>
                  <Link to={`/menu/${filteredProduct.id}`}>
                    <div className='h-28 flex flex-col justify-center items-center'>
                      <img
                        src={process.env.PUBLIC_URL + '/DataBaseimages/' + getFileNameFromPath(filteredProduct.image)}
                        alt={filteredProduct.name}
                        className='h-full'
                      />
                    </div>
                    <div>
                      <h2 className='font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden'>{filteredProduct.name}</h2>
                      <p className='text-slate-500 font-medium'>{filteredProduct.category}</p>
                      <p className='font-bold'>
                        <span className='text-red-500'>₹</span>
                        {filteredProduct.price}
                      </p>
                    </div>
                  </Link>
            <button  className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full' onClick={ () => {handleAddToCart(filteredProduct)}}>Add to Cart</button>  
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  };

  export default ProductCategory;
