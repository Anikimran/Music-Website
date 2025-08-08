import React, { use, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogoVue } from "react-icons/io5";
import { IoLogoSlack } from "react-icons/io5";
import { useLocation } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState("");

  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsActive(location.pathname || "/");
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    setIsActive(path);
  };
  return (
    <nav className="bg-green-800 text-white p-4 md:py-8 sticky top-0 z-10  ">
      <div className=" flex justify-between items-center container mx-auto ">
        <div className="ml-20 hidden md:flex">
          <IoLogoVue />
          <IoLogoSlack />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoCloseSharp /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-4  md:space-x-8 ">
          <li>
            <Link
              to="/home"
              onClick={() => handleLinkClick("/home")}
              className={`${
                isActive === "/home" ? "text-blue-500" : "hover:text-blue-300"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => handleLinkClick("/products")}
              className={`${
                isActive === "/products"
                  ? "text-blue-500"
                  : "hover:text-blue-300"
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={() => handleLinkClick("/blogs")}
              className={`${
                isActive === "/blogs" ? "text-blue-500" : "hover:text-blue-300"
              }`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={`${
                isActive === "/contact"
                  ? "text-blue-500"
                  : "hover:text-blue-300"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={`${
                isActive === "/about" ? "text-blue-500" : "hover:text-blue-300"
              }`}
            >
              About
            </Link>
          </li>
        </ul>
        <Link to="/login" onClick={() => handleLinkClick("/login")}>
          <button className="mr-30 py-2 px-2 rounded text-white  cursor-pointer hover:bg-blue-950 bg-blue-500 hidden md:flex">
            Login
          </button>
        </Link>
        <div
          className={`md:hidden w-full absolute bg-green-600 top-full left-0  ${
            isOpen ? "block" : "hidden"
          } p-4  hover:text-shadow-blue-600`}
        >
          <ul className="flex flex-col space-y-4 text-center mt-10  ">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
