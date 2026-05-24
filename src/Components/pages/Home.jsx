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
import { useEffect, useState } from "react";

// Slider Images
const artists = [
  {
    name: "James Arthur",
    role: "Artist",
    img: logo11,
  },
  {
    name: "Selena Gomez",
    role: "Singer",
    img: logo10,
  },
  {
    name: "Ariana Grande",
    role: "Artist",
    img: logo9,
  },
  {
    name: "Charlie Puth",
    role: "Singer",
    img: logo8,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === artists.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* LEFT COLUMN: MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-2">
          {/* Header Banner info */}
          <div className="flex flex-col md:flex-row justify-between items-start  mt-2 pl-6">
            <div>
              <p className="text-[16px] md:text-[20px] text-[#D9D9D9 tracking-[-0.02em] ">
                Welcome back
              </p>
              <h1 className="text-xl md:text-3xl text-[#FFFFFF] font-semibold tracking-[-0.03em]">
                A small studio, an open door.
              </h1>
            </div>
            <p className="text-[14px] text-[#BFBFBF] mt-2 md:mt-5 tracking-[-0.01em]">
              Click any block to open. Music keeps <br /> playing in the
              background.
            </p>
          </div>

          {/* Hero Section / Latest Release */}
          <div className="bg-[#202125] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden max-w-[1038px] h-auto md:h-[400px] mt-5">
            <div className=" space-y-4">
              <span className=" text-[24px]  text-[#FFFFFF]">Releases</span>
              <p className="text-[14px] font-medium text-[#949494] mt-1">
                Albums, EPs, and one-offs. Stream below, or jump out{" "}
                <br className="hidden md:flex" /> to Bandcamp / Nina.
              </p>

              <div className="pt-10 mt-5">
                <span className="text-[16px] text[#949494] uppercase tracking-[4px] block mb-1 ">
                  LATEST
                </span>
                <h2 className=" text-2xl md:text-4xl font-semibold tracking-tight">
                  Transmission 01
                </h2>
                <p className="text-[16px] text-[#949494] mt-5">
                  🎧 82,736,050 monthly listeners
                </p>
              </div>

              <div className="flex gap-3 pt-6">
                <button className="bg-[#e50914] hover:bg-red-700 text-white text-xs font-semibold px-5 py-3 rounded-full flex items-center gap-2 transition">
                  <FaPlay size={10} />
                  <p className="font-semibold text-[14px]">PLAY FIRST TRACK</p>
                </button>
                <button className="bg-[#3E3F45] hover:bg-gray-700 text-[#FCFCFC] text-[14px] font-semibold px-5 py-3 rounded-full flex items-center gap-2 transition">
                  <FaRegBookmark size={18} className="bg-white/50" /> SAVED
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
              <h3 className="text-[22px] text-[#FFFFFF]font-semibold mb-3">
                Popular Releases
              </h3>
              <button className="text-[16px] text-[#FB0D1D] hover:cursor-pointer">
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
          <div className="mb-5 bg-[#202125] md:p-5 rounded-2xl p-2 ">
            <div className="flex justify-between items-center mb-2">
              <h3 className=" text-[16px] md:text-[20px] font-semibold">
                Popular Song
              </h3>
              <button className="text-[12px] md:text-[16px] text-[#FB0D1D] hover:cursor-pointer">
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
        <div className="w-full lg:max-w-[340px] bg-[#1a1b1e] p-5 rounded-2xl flex flex-col justify-between self-start ">
          {/* Fans Also Like */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className=" text-[16px] md:text-[20px] font-semibold text-[#FFFFFF] tracking-[-0.01em]">
                Fans Also Like
              </h3>

              <button className="text-[12px] md:text-[16px] text-[#e50914] font-medium hover:cursor-pointer">
                See All
              </button>
            </div>

            {/* Slider */}
            <div className="relative overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {artists.map((artist, index) => (
                  <div
                    key={index}
                    className="min-w-full relative aspect-[4/3] group cursor-pointer shadow-lg"
                  >
                    <img
                      src={artist.img}
                      alt={artist.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <h4 className="text-base font-bold text-white leading-tight">
                        {artist.name}
                      </h4>

                      <p className="text-xs text-gray-400 font-light mt-0.5">
                        {artist.role}
                      </p>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
                      <FaChevronRight size={10} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {artists.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full cursor-pointer transition ${
                    currentSlide === index ? "bg-[#e50914] w-4" : "bg-gray-600"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Recent Played */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className=" text-[18px] md:text-[20px] font-semibold text-[#FFFFFF] tracking-[-0.01em]">
                Recent Played
              </h3>

              <button className="text-[16px] text-[#e50914] font-medium hover:cursor-pointer">
                See All
              </button>
            </div>

            {/* Scroll Area */}
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
                      className="w-12 h-12 rounded-xl object-cover shadow-md"
                    />

                    <div className="max-w-[150px]">
                      <h4 className="text-[14px] font-bold text-white truncate  transition">
                        {song.title}
                      </h4>

                      <p className="text-[12px] text-[#949494] truncate mt-0.5">
                        {song.artist}
                      </p>
                    </div>
                  </div>

                  <span className="text-[12px] text-[#8C8C8C] font-medium whitespace-nowrap pl-2">
                    {song.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FLOAT MUSIC PLAYER BAR */}
      <div className="absolute z-40 bottom-4 md:bottom-15 left-1/2 -translate-x-1/2 w-[95%] md:w-[92%] max-w-4xl bg-black/80 backdrop-blur-md border border-gray-800 rounded-2xl md:rounded-full py-3 md:py-2.5 px-3 md:px-4 flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-between shadow-2xl">
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
