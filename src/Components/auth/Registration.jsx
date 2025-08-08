import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useData } from "../context/Data";

const Registration = () => {
  const [showpass, setShowpass] = useState(false);
  const [showpass2, setShowpass2] = useState(false);
  const [error, setError] = useState("");

  const { authInformation } = useData();
  const { createUser } = authInformation;

  const handelregister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;

    if (password !== confirmpassword) {
      setError("Password doesn't match.");
      return;
    }
    setError("");

    try {
      await createUser(email, password);
      toast.success("Account Created Successfully!");
      e.target.reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-blue-400 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Registration
        </h2>
        <form onSubmit={handelregister}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1"> Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <label className="block text-gray-700 mb-1">Password</label>
          <div className="mb-4 relative flex items-center">
            <input
              type={showpass ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {showpass ? (
              <FaEye
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowpass(!showpass)}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowpass(!showpass)}
              />
            )}
          </div>

          {/* Confirm Password */}
          <label className="block text-gray-700 mb-1">Confirm Password</label>
          <div className="mb-6 flex relative items-center">
            <input
              type={showpass2 ? "text" : "password"}
              name="confirmpassword"
              placeholder="Confirm password"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {showpass2 ? (
              <FaEye
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowpass2(!showpass2)}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowpass2(!showpass2)}
              />
            )}
          </div>

          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          <div className="text-right mb-5 hover:cursor-pointer ">
            <p>
              <Link to={"/forget"}>Forget password</Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Register
          </button>

          {/* Other buttons and links */}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to={"/login"} className="font-bold underline">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
