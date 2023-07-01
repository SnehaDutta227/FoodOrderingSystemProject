import React, { useState } from "react";
import loginsignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";


function Signup() {
  const [showPassword, setshowPassword] = useState(false);
  const [showconfirmPassword, setshowconfirmPassword] = useState(false);
  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleshowPassword = () => {
    setshowPassword((prev) => !prev);
  };
  const handleshowconfirmPassword = () => {
    setshowconfirmPassword((prev) => !prev);
  };
  const handleonChange =(e) => {
    const {name,value} =e.target
    setData((prev)=>({
        ...prev,
        [name] :value
      }
    ));
  };
  console.log(Data);
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const {firstName,lastName,email,password,confirmpassword}=Data;
    if(firstName && email && password && confirmpassword){
      if(password ===confirmpassword){
        alert("successful!")
      
     
       
      const url = 'http://localhost:8080/api/v1/add'; // Replace with your API endpoint URL

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Data), // Send the form data as JSON
          
        });

        if (response.ok) {
          console.log('Signup successful');
          // Handle successful signup if needed
        } else {
          console.log('Signup failed');
          // Handle failed signup if needed
        }
      } catch (error) {
        console.log('Error:', error);
        // Handle any network or fetch API errors
      }
    }
    else{
     
        alert("Password and confirm password do not match!");
      }
    }
    else {
      alert("Please enter the required fields.");
    }

    } 
   
  


      
      
    
  

  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginsignupImage} className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
            value={Data.firstName}
            onChange={handleonChange}
          />

          <label htmlFor="lastName">Last Name </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
            value={Data.lastName}
            onChange={handleonChange}

          />
          

          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300  "
            value={Data.email}
            onChange={handleonChange}
          />

          <label htmlFor="password">Password </label>
          <div className="flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline focus-within:outline-blue-300 ">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none px-2 py-1 rounded "
              value={Data.password}
            onChange={handleonChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleshowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmpassword">Confirm Password </label>
          <div className="flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline focus-within:outline-blue-300 ">
            <input
              type={showconfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className=" w-full bg-slate-200 border-none outline-none px-2 py-1 rounded "
              value={Data.confirmpassword}
            onChange={handleonChange}
           />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleshowconfirmPassword}
            >
              {showconfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="max-w-[150px] w-full m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have an account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
