import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FiBell, FiUser } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import { Modal } from "antd";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

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
        title: "Upcoming Events",
        description: "Join our exclusive live shows and studio sessions.",
        customBody: (
          <div className="p-4 bg-[#22222f] rounded-xl border border-gray-800 mt-2">
            <span className="text-xs font-mono text-gray-500">
              2026-06-14 / BROOKLYN, NY
            </span>

            <h3 className="text-lg font-medium text-white mt-1">
              Live At Trans-Pecos
            </h3>
          </div>
        ),
      },
    },

    {
      path: "/store",
      label: "Store",
      modal: true,
      content: {
        title: "Digital Merchandise Store",
        description:
          "Explore our latest vinyl releases and premium sample packs.",
        customBody: (
          <p className="text-red-400 text-sm font-semibold mt-2">
            Store opening next month! 🛍️
          </p>
        ),
      },
    },

    {
      path: "/services",
      label: "Services",
      modal: true,
      content: {
        title: "Our Professional Services",
        description:
          "We offer professional mixing, mastering, and audio consultation.",
        customBody: (
          <div className="text-sm text-gray-400 border border-dashed border-gray-800 p-3 rounded-lg mt-2">
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
        title: "About The Studio",
        description:
          "A modern workspace dedicated to sonic experimentation and clean UI aesthetics.",
        customBody: null,
      },
    },
  ];

  useEffect(() => {
    if (!isModalOpen) {
      setIsActive(location.pathname || "/home");
    }
  }, [location.pathname, isModalOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (linkItem) => {
    setIsActive(linkItem.path);

    setModalContent(
      linkItem.content || {
        title: linkItem.label,
        description: "Coming soon...",
      },
    );

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsActive(location.pathname || "/home");
  };

  return (
    <>
      {/* Modal */}
      <Modal
        title={null}
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        centered
        closable={false}
        maskClassName="backdrop-blur-md bg-black/60"
        styles={{
          content: {
            backgroundColor: "#1a1a22",
            color: "#ffffff",
            borderRadius: "1rem",
            border: "1px solid #2d2d3d",
            padding: "24px",
          },
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-gray-800 pb-3">
            <h2 className="text-xl font-semibold text-white tracking-wide">
              {modalContent.title}
            </h2>

            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition"
            >
              <IoCloseSharp size={22} />
            </button>
          </div>

          <div className="space-y-3 pt-2">
            <p className="text-gray-300 text-sm leading-relaxed">
              {modalContent.description}
            </p>

            {modalContent.customBody && modalContent.customBody}
          </div>
        </div>
      </Modal>

      {/* Navbar */}
      <nav className="bg-[#0b0b0f] text-white w-full border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => {
              closeModal();
              navigate("/home");
            }}
            className="text-red-500 text-2xl font-bold cursor-pointer"
          >
            LOGO
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-3 px-3 py-2">
              {navLinks.map((link) => {
                const isLinkActive = isActive === link.path;

                return (
                  <li key={link.path}>
                    {link.modal ? (
                      <button
                        onClick={() => openModal(link)}
                        className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                          isLinkActive
                            ? "bg-red-500 text-white"
                            : "bg-[#1a1a22] text-gray-300 hover:bg-red-500 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsModalOpen(false)}
                        className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                          isLinkActive
                            ? "bg-red-500 text-white"
                            : "bg-[#1a1a22] text-gray-300 hover:bg-red-500 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-[#16161d] flex items-center justify-center hover:bg-red-500 transition">
              <FiBell size={18} />
            </button>

            <button className="w-10 h-10 rounded-full bg-[#16161d] flex items-center justify-center hover:bg-red-500 transition">
              <IoIosArrowDropdown size={24} />
            </button>

            <button className="w-10 h-10 rounded-full bg-[#16161d] flex items-center justify-center hover:bg-red-500 transition">
              <FiUser size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <IoCloseSharp size={28} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#111116] overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen py-5" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => {
              const isLinkActive = isActive === link.path;

              return (
                <li key={link.path}>
                  {link.modal ? (
                    <button
                      onClick={() => {
                        openModal(link);
                        toggleMenu();
                      }}
                      className={`px-5 py-2 rounded-full transition-all duration-300 ${
                        isLinkActive
                          ? "bg-red-500 text-white"
                          : "bg-[#1a1a22] text-gray-300"
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => {
                        setIsActive(link.path);
                        toggleMenu();
                      }}
                      className={`px-5 py-2 rounded-full transition-all duration-300 ${
                        isLinkActive
                          ? "bg-red-500 text-white"
                          : "bg-[#1a1a22] text-gray-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}

            {/* Mobile Icons */}
            <div className="flex gap-3 mt-4">
              <button className="w-10 h-10 rounded-full bg-[#16161d] flex items-center justify-center">
                <FiBell size={18} />
              </button>

              <button className="w-10 h-10 rounded-full bg-[#16161d] flex items-center justify-center">
                <IoIosArrowDropdown size={22} />
              </button>

              <button className="w-10 h-10 rounded-full bg-[#16161d] flex items-center justify-center">
                <FiUser size={18} />
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
