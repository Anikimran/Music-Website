import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useData } from "../context/Data"; // Context import
import tost from "react-hot-toast";
const Login = () => {
  const [showpass, setShowpass] = useState(false);
  const { authInformation } = useData(); // Context থেকে authInformation নিলাম
  const { singInWithEmailPass } = authInformation; // শুধু লগইন ফাংশন নিলাম

  const handleLoginFrom = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await singInWithEmailPass(email, password);
      tost.success("Login Successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="bg-blue-700 p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-5 text-center text-white">Login</h2>

        <form onSubmit={handleLoginFrom} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-white">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <label className="block mb-1 font-medium text-white">Password</label>
          <div className="relative flex">
            <input
              name="password"
              type={showpass ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600"
          >
            Login
          </button>

          {/* OR Divider */}
          <div className="flex justify-center items-center space-x-4">
            <hr className="border-black-500 w-1/4" />
            <span>or</span>
            <hr className="border-black-500 w-1/4" />
          </div>

          {/* Google Login */}
          <p className="border w-1/2 mx-auto py-1 my-3 rounded-md bg-blue-400 hover:bg-blue-900 cursor-pointer">
            <button className="flex items-center justify-center">
              <FaGoogle className="mr-2" /> Login with Google
            </button>
          </p>

          {/* GitHub Login */}
          <p className="border w-1/2 mx-auto py-1 my-3 rounded-md bg-blue-400 hover:bg-blue-900 cursor-pointer">
            <button className="flex items-center justify-center">
              <FaGithub className="mr-2" /> Login with Github
            </button>
          </p>

          {/* Registration Link */}
          <p className="text-white">
            Don’t have an account?{" "}
            <Link to={"/registration"} className="font-bold underline">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    
    </div>
  );
};

export default Login;
