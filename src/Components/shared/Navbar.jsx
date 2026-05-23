import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FiBell, FiUser } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    customBody: null,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/home", label: "Releases" },

    {
      path: "/events",
      label: "Events",
      modal: true,
      content: {
        title: "Events",
        description: "2025-06-14 / Brooklyn, NY",
        customBody: (
          <div className="text-gray-400 text-sm border-t border-dashed border-gray-700 pt-3 mt-3">
            Live show announcement coming soon 🎤
          </div>
        ),
      },
    },

    {
      path: "/store",
      label: "Store",
      modal: true,
      content: {
        title: "Store",
        description: "Explore vinyl releases & sample packs.",
        customBody: (
          <p className="text-red-400 text-sm mt-3">Store opening soon 🛍️</p>
        ),
      },
    },

    {
      path: "/services",
      label: "Services",
      modal: true,
      content: {
        title: "Services",
        description: "Mixing, mastering & audio consultation.",
        customBody: (
          <div className="text-sm text-gray-400 border border-gray-800 p-3 rounded-lg mt-3">
            Email: webzedcontact@gmail.com
          </div>
        ),
      },
    },

    {
      path: "/about",
      label: "About",
      modal: true,
      content: {
        title: "About",
        description: "Modern creative studio experience.",
        customBody: (
          <div className="text-gray-400 text-sm border-t border-dashed border-gray-700 pt-3 mt-3">
            Clean black modern UI design experience.
          </div>
        ),
      },
    },
  ];

  useEffect(() => {
    setIsActive(location.pathname || "/home");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (item) => {
    setIsActive(item.path);
    setModalContent(item.content);
    setIsModalOpen(true);
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsActive(location.pathname || "/home");
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-black text-white w-full sticky top-0 z-50 border-b border-[#151515]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => {
              closeModal();
              navigate("/home");
            }}
            className="text-red-500 text-xl md:text-2xl font-bold cursor-pointer"
          >
            LOGO
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((item) => {
              const active = isActive === item.path;

              return item.modal ? (
                <button
                  key={item.path}
                  onClick={() => openModal(item)}
                  className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                    active
                      ? "bg-red-500 text-white"
                      : "bg-[#151515] text-gray-300 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                    active
                      ? "bg-red-500 text-white"
                      : "bg-[#151515] text-gray-300 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ================= DESKTOP ICONS ================= */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-[#151515] flex items-center justify-center hover:bg-red-500 transition">
              <FiBell size={18} />
            </button>

            <button className="w-10 h-10 rounded-full bg-[#151515] flex items-center justify-center hover:bg-red-500 transition">
              <IoIosArrowDropdown size={20} />
            </button>

            <button className="w-10 h-10 rounded-full bg-[#151515] flex items-center justify-center hover:bg-red-500 transition">
              <FiUser size={18} />
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <IoCloseSharp size={28} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0f0f0f] ${
            isOpen ? "max-h-screen py-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-start px-4 gap-3 w-[85%]">
            {navLinks.map((item) => {
              const active = isActive === item.path;

              return item.modal ? (
                <button
                  key={item.path}
                  onClick={() => openModal(item)}
                  className={`w-[220px] text-left px-4 py-2.5 rounded-xl text-sm transition ${
                    active
                      ? "bg-red-500 text-white"
                      : "bg-[#1a1a1a] text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsActive(item.path);
                    setIsOpen(false);
                  }}
                  className={`w-[220px] text-left px-4 py-2.5 rounded-xl text-sm transition ${
                    active
                      ? "bg-red-500 text-white"
                      : "bg-[#1a1a1a] text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* MOBILE ICONS */}
            <div className="flex items-center gap-3 pt-3">
              <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <FiBell size={18} />
              </button>

              <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <IoIosArrowDropdown size={20} />
              </button>

              <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <FiUser size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MODAL ================= */}
      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[45] flex items-start justify-center px-4 pt-15 md:pt-24">
          {/* BACKDROP */}
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-[0.1px]"
          ></div>

          {/* MODAL BOX */}
          <div className="relative z-10 w-full max-w-md bg-black border border-[#222] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.9)]">
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#222]">
              <h2 className="text-white text-lg md:text-xl font-semibold">
                {modalContent.title}
              </h2>

              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition"
              >
                <IoCloseSharp size={24} />
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 bg-black">
              <p className="text-gray-300 text-sm leading-7">
                {modalContent.description}
              </p>

              {modalContent.customBody}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
