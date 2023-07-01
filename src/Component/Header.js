import React from "react";
import logo from "../assest/logo.png";
import {Link} from "react-router-dom";
import "tailwindcss/tailwind.css";
import {HiOutlineUserCircle} from 'react-icons/hi';
import {BsFillCartFill} from 'react-icons/bs';
import { useState } from "react";

const Header = () =>{
    const [showMenu, setshowMenu] =useState(false);
    const handleshowMenu = () => {
        setshowMenu(prev => !prev)
    }
    return(
        <header className="shadow-md w-full h-16 px-2 md:px-4 ">
            <div className="flex items-center h-full justify-between" >
                <Link to={""}>
                    <div className="h-10">
                    <img src ={logo} className="h-full" />
                    </div>

                </Link>

            <div className="flex items-center gap-4 md:gap-7">
                <nav className="flex gap-4 md:gap-6 text-base md:text-lg" >
                    <Link to ={""}>Home</Link>
                    <Link to ={"menu"}>Menu</Link>
                    <Link to ={"about"}>About</Link>
                    <Link to ={"contact"}>Contact</Link>

                </nav>
                <div className="text-2xl text-slate-600 relative">
                    <BsFillCartFill />
                    <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">0</div>
                </div>
                <div className="text-slate-600" >
                    <div className="text-3xl cursor-pointer " onClick={handleshowMenu}>
                    <HiOutlineUserCircle/>
                     </div>
                     {showMenu && (<div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                        <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">New product</Link>
                        <Link to={"login"}className="whitespace-nowrap cursor-pointer">Login</Link>

                     </div>)}
                    
                </div>
                
            
                

                    

            </div>
            </div>
        </header>

    );
}
export default Header;