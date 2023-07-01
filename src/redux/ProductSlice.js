/**import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      try {
        const response = await fetch('/api/products/get');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        throw Error(error.message);
      }
    }
  );

  const initialState = {
    productList: [],
    loading: false,
    error: null,
  };
  
 export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:
     { 
        setDataProduct: (state, action) => {
        console.log(action)
        state.productList = [...action.payload]
  }
}
 }
);**/
  
  