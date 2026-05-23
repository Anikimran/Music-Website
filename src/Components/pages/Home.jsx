import React from "react";
import {
  FaPlay,
  FaRegBookmark,
  FaChevronLeft,
  FaChevronRight,
  FaVolumeUp,
  FaListUl,
  FaRandom,
  FaRetweet,
  FaRegHeart,
} from "react-icons/fa";
import {
  logo,
  logo10,
  logo11,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
} from "../../assets";
import {
  image1,
  image2,
  image3,
  image4,
  image6,
  image7,
  image8,
  image9,
} from "../../assets/render";
import { AiOutlineBackward, AiOutlineForward } from "react-icons/ai";

export default function Home() {
  // ডামি ডেটা (ইমেজ হিসেবে Unsplash-এর মিউজিক রিলেটেড ছবি ব্যবহার করা হয়েছে)
  const popularReleases = [
    {
      title: "Divide",
      year: "2017",
      type: "Album",
      img: logo2,
    },
    {
      title: "Multiply",
      year: "2025",
      type: "Album",
      img: logo3,
    },
    {
      title: "Number 6",
      year: "2026",
      type: "Album",
      img: logo4,
    },
    {
      title: "Equals",
      year: "2021",
      type: "Album",
      img: logo5,
    },
    {
      title: "Peru",
      year: "Latest Releases",
      type: "S.",
      img: logo8,
    },
    {
      title: "Multiply",
      year: "2014",
      type: "Album",
      img: logo6,
    },
    {
      title: "Plus",
      year: "2023",
      type: "Album",
      img: logo9,
    },
    {
      title: "Subtract",
      year: "2026",
      type: "Album",
      img: logo7,
    },
  ];

  const recentPlayed = [
    {
      title: "Flawless",
      artist: "Liam Harper",
      time: "2 min ago",
      img: image7,
    },
    {
      title: "Roman Picaso",
      artist: "Maya Liora, Oh..",
      time: "8 min ago",
      img: image2,
    },
    {
      title: "Title (Deluxe Edition)",
      artist: "Sophie Lane",
      time: "2 hr ago",
      img: image3,
    },
    {
      title: "Chill",
      artist: "Noah Bennett",
      time: "6 hr ago",
      img: image4,
    },
    {
      title: "Feel Alive",
      artist: "Evan Clarke",
      time: "11 hr ago",
      img: image8,
    },
    {
      title: "Your Shape",
      artist: "Lucas Grant",
      time: "14 hr ago",
      img: image9,
    },
    {
      title: "Bad Vibes",
      artist: "Aiden Brooks",
      time: "20 hr ago",
      img: image1,
    },
    {
      title: "Unhealthy Patterns",
      artist: "Mason Reed",
      time: "20 hr ago",
      img: image6,
    },
    {
      title: "Healthy Patterns",
      artist: "Ethan Cole",
      time: "20 hr ago",
      img: image1,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4 font-sans relative ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT COLUMN: MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-2">
          {/* Header Banner info */}
          <div className="flex flex-col md:flex-row justify-between items-start  mt-5 ">
            <div>
              <p className="text-xs md:text-[18px] text-[#D9D9D9">
                Welcome back
              </p>
              <h1 className="text-xl md:text-3xl text-[#FFFFFF] font-semibold tracking-wide">
                A small studio, an open door.
              </h1>
            </div>
            <p className="text-xs text-gray-500 mt-2 md:mt-0 ">
              Click any block to open. Music keeps <br /> playing in the
              background.
            </p>
          </div>

          {/* Hero Section / Latest Release */}
          <div className="bg-[#202125] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden max-w-[1038px] h-auto md:h-[435px] mt-5">
            <div className="mb-10 space-y-4">
              <span className=" text-[24px] font-medium text-[#FFFFFF]">
                Releases
              </span>
              <p className="text-[14px] font-medium text-[#949494] mt-1">
                Albums, EPs, and one-offs. Stream below, or jump out{" "}
                <br className="hidden md:flex" /> to Bandcamp / Nina.
              </p>

              <div className="pt-10 mt-5">
                <span className="text-xs text[#949494] uppercase tracking-widest block mb-1 ">
                  LATEST
                </span>
                <h2 className=" text-2xl md:text-4xl font-semibold tracking-tight">
                  Transmission 01
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  🎧 82,736,050 monthly listeners
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="bg-[#e50914] hover:bg-red-700 text-white text-xs font-semibold px-5 py-3 rounded-full flex items-center gap-2 transition">
                  <FaPlay size={10} /> PLAY FIRST TRACK
                </button>
                <button className="bg-[#2a2b2e] hover:bg-gray-700 text-white text-xs font-semibold px-5 py-3 rounded-full flex items-center gap-2 transition">
                  <FaRegBookmark size={12} /> SAVED
                </button>
              </div>
            </div>
            {/* Main Artist Image */}
            <div className="mt-4 md:mt-0 md:absolute right-0 bottom-0 h-full w-full md:w-[45%] flex justify-end ">
              <img
                src={logo}
                alt="Artist"
                className="h-full w-full object-cover object-top grayscale  rounded-2xl md:rounded-none"
              />
              <div className="absolute inset-0  hidden md:block"></div>
            </div>
          </div>

          {/* Popular Releases Section */}
          <div className=" bg-[#202125] rounded-2xl p-5 ">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[22px] text-[#FFFFFF]font-semibold ">
                Popular Releases
              </h3>
              <button className="text-xs text-red-500 hover:underline">
                See All
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 ">
              {popularReleases.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-2">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h4 className="text-[14px] font-semibold truncate">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-[#D9D9D9] font-normal truncate">
                    {item.year} · {item.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Song Header (Bottom Area) */}
          <div className="mb-5 bg-[#202125] p-5 rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">Popular Song</h3>
              <button className="text-xs text-red-500 hover:underline">
                See All
              </button>
            </div>
            {/* Standard Song row snippet */}
            <div className="flex items-center gap-4  border-b-[1px] border-gray-800 py-2">
              <span className="text-xs text-gray-500 pl-2">1</span>
              <img
                src={logo10}
                alt="album"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-xs font-medium">Deluxe Edition Tracks</h4>
                <p className="text-[10px] text-gray-500">Various Artists</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="w-full lg:max-w-[340px]  bg-[#1a1b1e] p-5 rounded-2xl flex flex-col justify-between self-start mt-5">
          {/* Fans Also Like Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-white tracking-wide">
                Fans Also Like
              </h3>
              <button className="text-xs text-[#e50914] font-medium hover:underline">
                See All
              </button>
            </div>

            {/* Featured Artist Card */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-lg">
              <img
                src={logo11}
                alt="James Arthur"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              {/* Dark overlay & Text positioning inside image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                <h4 className="text-base font-bold text-white leading-tight">
                  James Arthur
                </h4>
                <p className="text-xs text-gray-400 font-light mt-0.5">
                  Artist
                </p>
              </div>

              {/* Chevron Hover Action */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
                <FaChevronRight size={10} />
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-1.5 h-1.5 bg-[#e50914] rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
            </div>
          </div>

          {/* Recent Played Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-white tracking-wide">
                Recent Played
              </h3>
              <button className="text-xs text-[#e50914] font-medium hover:underline">
                See All
              </button>
            </div>

            {/* Dynamic List Container */}
            <div className="space-y-3.5 max-h-[480px] overflow-y-auto pr-1 scrollbar-none">
              {recentPlayed.map((song, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group hover:bg-[#252629]/50 p-1.5 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={song.img}
                      alt={song.title}
                      className="w-11 h-11 rounded-xl object-cover shadow-md"
                    />
                    <div className="max-w-[150px]">
                      <h4 className="text-xs font-semibold text-white truncate group-hover:text-[#e50914] transition">
                        {song.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 truncate mt-0.5">
                        {song.artist}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap pl-2">
                    {song.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FLOAT MUSIC PLAYER BAR */}
      <div className="fixed bottom-15 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl bg-black/80 backdrop-blur-md border border-gray-800 rounded-full py-2.5 px-4 flex items-center justify-between shadow-2xl ">
        {/* Track Info */}
        <div className="flex items-center gap-3 min-w-[160px]">
          <img
            src={logo2}
            alt="Current Track"
            className="w-9 h-9 rounded-full object-cover animate-spin-slow"
          />
          <div>
            <h4 className="text-xs font-semibold truncate">Shape of You</h4>
            <p className="text-[10px] text-gray-400 truncate">Ed Sheeran</p>
          </div>
        </div>

        {/* Controls & Progress Bar */}
        <div className="flex items-center gap-4 flex-1 max-w-md mx-4">
          <button className="text-gray-400 hover:text-white transition">
            <AiOutlineBackward size={18} color="white" />
          </button>
          <button className="bg-red-600 text-white p-2.5 rounded-full hover:bg-red-700 transition shadow-lg">
            <FaPlay size={10} />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <AiOutlineForward size={18} color="white" />
          </button>

          {/* Progress Timeline */}
          <div className="flex items-center gap-2 flex-1">
            <div className="relative w-full h-1 bg-gray-700 rounded-full cursor-pointer">
              <div className="absolute top-0 left-0 h-full w-[40%] bg-red-600 rounded-full"></div>
              <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-2.5 h-2.5 bg-white border border-red-600 rounded-full shadow"></div>
            </div>
            <span className="text-[10px] text-gray-400 whitespace-nowrap">
              1:45 / 4:42
            </span>
          </div>
        </div>

        {/* Utilities Icons */}
        <div className="flex items-center gap-3.5 text-gray-400">
          <button className="hover:text-white transition">
            <FaVolumeUp size={14} />
          </button>
          <button className="hover:text-white transition">
            <FaListUl size={13} />
          </button>
          <button className="hover:text-white transition">
            <FaRandom size={13} />
          </button>
          <button className="hover:text-white transition">
            <FaRetweet size={13} />
          </button>
          <button className="hover:text-red-500 transition">
            <FaRegHeart size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
