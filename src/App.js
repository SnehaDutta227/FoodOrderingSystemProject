

import './App.css';
import Header from "./Component/Header";
import { Outlet } from 'react-router-dom';
import Signup from './page/Signup';
import ProductList from './page/ProductList';



function App() {
  return (
    <div>
      <Header />
     <div className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
     
     
     <Outlet />
      </div> 
      
      
      
      
      

      

    </div>
    
  );
}

export default App;
