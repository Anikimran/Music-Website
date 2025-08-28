import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp, IoLogoVue, IoLogoSlack } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsActive(location.pathname || "/");
  }, [location.pathname]);

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];
  const navigator = useNavigate();
  const handleLogoClick = () => {
    navigator("/home");
  }

  return (
    <nav className="bg-green-800 text-white p-2 md:py-8 sticky top-0 z-10">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="ml-4 flex gap-2 items-center">
            <IoLogoSlack/>
          <span className="text-lg font-semibold cursor-pointer" onClick={handleLogoClick}>
            MyWebsite
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        {location.pathname !== "/login" &&  location.pathname !== "/registration"&&(
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsActive(link.path)}
                    className={`${
                      isActive === link.path
                        ? "text-blue-500"
                        : "hover:text-blue-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/login">
              <button className="py-2 px-4 rounded text-white cursor-pointer hover:bg-blue-950 bg-blue-500">
                Login
              </button>
            </Link>
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-full absolute bg-green-600 top-full left-0 transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-center mt-6 pb-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={toggleMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" onClick={toggleMenu}>
                <button className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-950">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
