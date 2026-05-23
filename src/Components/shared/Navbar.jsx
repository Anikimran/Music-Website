import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import { logo12 } from "../../assets";
import { ImUser } from "react-icons/im";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ডাইনামিক স্টেটস (স্টোর এবং সার্ভিস ফর্ম হ্যান্ডেল করার জন্য)
  const [selectedService, setSelectedService] = useState(
    "Recording / Production",
  );
  const [selectedProduct, setSelectedProduct] = useState(
    "Modded iPod Classic - 1TB",
  );
  const [activeTab, setActiveTab] = useState("events");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsActive(location.pathname || "/home");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (tabName, path) => {
    setIsActive(path);
    setActiveTab(tabName);
    setIsModalOpen(true);
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsActive(location.pathname || "/home");
  };

  // সার্ভিস লিস্ট ডাটা
  const servicesList = [
    "Recording / Production",
    "Mixing",
    "Mastering",
    "Production Support",
    "Live Sound / Event Support",
    "Lessons — Guitar",
    "Lessons — Technique",
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-black text-white w-full sticky top-0 z-[110] ">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => {
              closeModal();
              navigate("/home");
            }}
            className="text-red-500 text-xl md:text-2xl font-bold cursor-pointer tracking-wider"
          >
            LOGO
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/home"
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                isActive === "/home"
                  ? "bg-red-500 text-white"
                  : "bg-[#151515] text-[#8C8C8C] hover:bg-red-500 hover:text-white hover:cursor-pointer"
              }`}
            >
              Releases
            </Link>

            <button
              onClick={() => openModal("events", "/events")}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                isActive === "/events"
                  ? "bg-red-500 text-white"
                  : "bg-[#151515] hover:cursor-pointer text-[#8C8C8C] hover:bg-red-500 hover:text-white"
              }`}
            >
              Events
            </button>

            <button
              onClick={() => openModal("store", "/store")}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                isActive === "/store"
                  ? "bg-red-500 text-white"
                  : "bg-[#151515] hover:cursor-pointer text-[#8C8C8C] hover:bg-red-500 hover:text-white"
              }`}
            >
              Store
            </button>

            <button
              onClick={() => openModal("services", "/services")}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                isActive === "/services"
                  ? "bg-red-500 text-white"
                  : "bg-[#151515] hover:cursor-pointer text-[#8C8C8C] hover:bg-red-500 hover:text-white"
              }`}
            >
              Services
            </button>

            <button
              onClick={() => openModal("about", "/about")}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                isActive === "/about"
                  ? "bg-red-500 text-white"
                  : "bg-[#151515] hover:cursor-pointer text-[#8C8C8C] hover:bg-red-500 hover:text-white"
              }`}
            >
              About
            </button>
          </div>

          {/* ================= DESKTOP ICONS ================= */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-[#151515] flex items-center justify-center hover:bg-red-500 transition text-gray-400 hover:text-white">
              <FiBell size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#151515] flex items-center justify-center hover:bg-red-500 transition text-gray-400 hover:text-white">
              <IoIosArrowDropdown size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#151515] flex items-center justify-center hover:bg-red-500 transition text-gray-400 hover:text-white">
              <ImUser size={18} color="white" />
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
          className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0f0f0f] ${isOpen ? "max-h-screen py-5" : "max-h-0"}`}
        >
          <div className="flex flex-col items-start px-4 gap-3">
            <Link
              to="/home"
              onClick={() => {
                setIsActive("/home");
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition ${isActive === "/home" ? "bg-red-500 text-white" : "bg-[#1a1a1a] text-gray-300"}`}
            >
              Releases
            </Link>
            <button
              onClick={() => openModal("events", "/events")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition ${isActive === "/events" ? "bg-red-500 text-white" : "bg-[#1a1a1a] text-gray-300"}`}
            >
              Events
            </button>
            <button
              onClick={() => openModal("store", "/store")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition ${isActive === "/store" ? "bg-red-500 text-white" : "bg-[#1a1a1a] text-gray-300"}`}
            >
              Store
            </button>
            <button
              onClick={() => openModal("services", "/services")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition ${isActive === "/services" ? "bg-red-500 text-white" : "bg-[#1a1a1a] text-gray-300"}`}
            >
              Services
            </button>
            <button
              onClick={() => openModal("about", "/about")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition ${isActive === "/about" ? "bg-red-500 text-white" : "bg-[#1a1a1a] text-gray-300"}`}
            >
              About
            </button>
          </div>
        </div>
      </nav>

      {/* ================= DYNAMIC PREMIUM MODALS ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 p-4 overflow-y-autoauto">
          {/* BACKDROP (ঝাপসা ইফেক্ট ছাড়া ডার্ক ব্যাকগ্রাউন্ড) */}
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/75 transition-opacity duration-300"
          ></div>

          {/* MODAL BOX CONTAINER */}
          <div
            className={`relative z-10 w-full bg-[#18181c] border border-[#26262b] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300
            ${activeTab === "about" || activeTab === "events" ? "max-w-2xl" : "max-w-4xl"}`}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#454545] bg-black/60">
              <h2 className="text-white text-lg font-medium capitalize">
                {activeTab}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white "
              >
                <IoCloseSharp size={20} />
              </button>
            </div>

            {/* MODAL BODY CONTROLLER */}
            <div className="p-6 text-white max-h-[80vh] overflow-y-auto">
              {/* 1. EVENTS MODAL */}
              {activeTab === "events" && (
                <div className="flex flex-col gap-4">
                  <div className="bg-[#151618] border border-[#2a2a30] rounded-xl p-5 hover:border-red-500/50 transition">
                    <div className="border-b border-dashed border-[#454545] py-2">
                      <span className="text-xs text-gray-500 font-mono tracking-wider">
                        2025-06-14 / BROOKLYN, NY
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mt-1 text-white">
                      Live at Trans-Pecos
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Long form ambient set + guests. Doors at 8pm.
                    </p>
                  </div>
                  <div className="bg-[#151618] border border-[#2a2a30] rounded-xl p-5 hover:border-red-500/50 transition">
                    <div className="border-b border-dashed border-[#454545] py-2">
                      <span className="text-xs text-gray-500 font-mono tracking-wider">
                        2025-07-19 / BROOKLYN, NY
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mt-1 text-white">
                      Studio Showcase
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Open doors evening at the studio. Sign up for
                      notifications to be the first to know.
                    </p>
                  </div>
                </div>
              )}

              {/* 2. STORE MODAL */}
              {activeTab === "store" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-5 flex flex-col gap-3">
                    <div
                      onClick={() =>
                        setSelectedProduct("Modded iPod Classic - 1TB")
                      }
                      className={`flex gap-4 p-3 rounded-xl border cursor-pointer transition bg-[#151618] ${selectedProduct === "Modded iPod Classic - 1TB" ? "border-red-500" : "border-[#2a2a30]"}`}
                    >
                      <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                        <img
                          src={logo12}
                          alt="image"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          Modded iPod Classic - 1TB
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                          Refurbished 7th-gen, 1TB SSD, replaced <br /> battery,
                          custom click wheel.
                        </p>
                        <p className="text-sm font-semibold text-white mt-1">
                          $520.00
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={() =>
                        setSelectedProduct("Modded iPod Classic - 0.5TB")
                      }
                      className={`flex gap-4 p-3 rounded-xl border cursor-pointer transition bg-[#151618] ${selectedProduct === "Modded iPod Classic - 0.5TB" ? "border-red-500" : "border-[#2a2a30]"}`}
                    >
                      <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                        <img
                          src={logo12}
                          alt="image"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          Modded iPod Classic - 0.5TB
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                          Refurbished 7th-gen, SSD, upgraded battery...
                        </p>
                        <p className="text-sm font-semibold text-white mt-1">
                          $380.00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 bg-[#1c1c21] border border-[#2a2a30] p-5 rounded-xl">
                    <h3 className="text-sm font-medium text-gray-300 mb-4">
                      Purchase Inquiry
                    </h3>
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          Product
                        </label>
                        <select
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                          className="w-full bg-[#18181c] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500"
                        >
                          <option>Modded iPod Classic - 1TB</option>
                          <option>Modded iPod Classic - 0.5TB</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full bg-[#18181c] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full bg-[#18181c] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          Message
                        </label>
                        <textarea
                          rows="2"
                          placeholder="Enter your message"
                          className="w-full bg-[#18181c] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-red-500 resize-none"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-red-500 text-white font-semibold w-[189px]  py-3 text-xs tracking-wider uppercase rounded-full flex items-center justify-center gap-1 hover:bg-red-600 transition mt-2"
                      >
                        <span>✦</span> Send Inquiry
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* 3. SERVICES MODAL */}
              {activeTab === "services" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-5 flex flex-col gap-1.5">
                    {servicesList.map((service) => (
                      <button
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border ${
                          selectedService === service
                            ? "bg-[#1c1c21] border-red-500 text-white font-medium"
                            : "bg-[#1c1c21]/40 border-transparent text-gray-400 hover:bg-[#1c1c21]"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>

                  <div className="md:col-span-7 bg-[#1c1c21] border border-[#2a2a30] p-5 rounded-xl">
                    <h3 className="text-sm font-medium text-gray-300 mb-4">
                      Purchase Inquiry:{" "}
                      <span className="text-white font-semibold">
                        {selectedService}
                      </span>
                    </h3>
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full bg-[#18181c] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full bg-[#18181c] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          What are you working on?
                        </label>
                        <textarea
                          rows="3"
                          placeholder="Enter your message"
                          className="w-full bg-[#18181c] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-red-500 resize-none"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-red-500 text-white font-semibold text-xs tracking-wider uppercase py-2.5 rounded-full flex items-center justify-center gap-1 hover:bg-red-600 transition mt-2"
                      >
                        <span>✦</span> Send Inquiry
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* 4. ABOUT MODAL */}
              {activeTab === "about" && (
                <div className="flex flex-col gap-6">
                  <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
                    Crucial Tone is a small studio devoted to recording, mixing,
                    mastering, and the music that comes out of all three.
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
                    We work on records, live sound, lessons, and hand-customized
                    modded iPod Classics. Shared early 90s equipment and rare
                    instinct. This site is intentionally small and private, a
                    place for people we already know, and people we'd like to.
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#26262b] text-left">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                        Based
                      </span>
                      <span className="text-xs font-medium text-gray-300 mt-1 block">
                        SOMEWHERE WITH GOOD ROOMS
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                        Email
                      </span>
                      <span className="text-xs font-medium text-gray-300 mt-1 block break-all">
                        HELLO@CRUCIALTONE.STUDIO
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                        Phone
                      </span>
                      <span className="text-xs font-medium text-gray-300 mt-1 block">
                        555-0199 121
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
