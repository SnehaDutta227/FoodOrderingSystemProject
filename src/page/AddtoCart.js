import React from 'react'
import AddedProduct from './AddedProduct';
import { Link } from 'react-router-dom';

const AddtoCart = () => {
  return (
    <div>
      <AddedProduct />

      <Link to="/payment">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Checkout
        </button>
      </Link>
    </div>
  )
}

export default AddtoCart