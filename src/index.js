import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from  'react-router-dom'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/Home';
import About from './page/About';
import Menu from './page/Menu';
import Contact from './page/Contact';
import header from './Component/Header';
import NewProduct from './page/NewProduct';
import Login from './page/Login';
import Signup from './page/Signup';
import AddtoCart from './page/AddtoCart';
import ProductCategory from './page/ProductCategory';
import PaymentPage from './page/Payment';
import { Provider } from 'react-redux';
import ProductList from './page/ProductList';
import AddedProduct from './page/AddedProduct';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index element={<Home />} />
            <Route path="/product-category" element={<ProductCategory />} />
            <Route path="/menu/:productId" element={<Menu />} />
            <Route path='about' element= {<About />} />
            <Route path='contact' element = {<Contact />} />
            <Route path='newproduct' element={<NewProduct />} />
            <Route path='login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='addtocart' element={<AddtoCart />} />
            <Route path='payment' element={<PaymentPage />} />
            </Route>
            
    )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  
    
    <RouterProvider
      router={router}
      
    />
  
 
  );