import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Login = () => {
  const [showpass, setShowpass] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="bg-blue-700 p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
          
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
           <label className="block mb-1 font-medium">Password</label>
          <div className="relative flex ">
           
            <input
              type={showpass ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            {showpass ? (
              <FaEye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowpass(false)}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowpass(true)}
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
           <div className="flex justify-center items-center space-x-4 "> <hr className="border-black-500 w-1/4 "/><span>or</span><hr className="border-black-500 w-1/4"/></div>
                <p className="border w-1/2 mx-auto py-1 my-3 rounded-md  bg-blue-400 hover:bg-blue-900 hover: cursor-pointer "><button className="flex hover: cursor-pointer"> <FaGoogle className="mt-1 mr-2 hover: cursor-pointer  hover:bg-blue-900 "/>login with Google</button></p>
               <p className="border w-1/2 mx-auto py-1 my-3 rounded-md  bg-blue-400 hover:bg-blue-900 hover: cursor-pointer "><button className="flex hover: cursor-pointer"> <FaGithub  className="mt-1 mr-2 hover: cursor-pointer  hover:bg-blue-900 "/>Login with Github</button></p>
               <p>Already have an account? <Link to={'/registration'} className='w-full font-bold py-2 '>Registration Here</Link></p>
        </form> 


        
      </div>
    </div>
  );
};

export default Login;
