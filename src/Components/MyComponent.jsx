import React from "react";
import {
  FiPlay,
  FiHeart,
  FiPause,
  FiSkipBack,
  FiSkipForward,
} from "react-icons/fi";

const releases = [
  {
    id: 1,
    title: "Divide",
    year: "2017",
    image: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
  },
  {
    id: 2,
    title: "Multiply",
    year: "2023",
    image: "https://i.scdn.co/image/ab67616d0000b273c6f7af36f736a31f4c2b94f7",
  },
  {
    id: 3,
    title: "Equals",
    year: "2021",
    image: "https://i.scdn.co/image/ab67616d0000b2732d7d59d0f9d2f8c89eacdd5b",
  },
  {
    id: 4,
    title: "Peru",
    year: "2022",
    image: "https://i.scdn.co/image/ab67616d0000b273ab5db46f4b838ef6027e6f96",
  },
  {
    id: 5,
    title: "Subtract",
    year: "2025",
    image: "https://i.scdn.co/image/ab67616d0000b2738c0f0c0d8dcb9f0b4c93f84f",
  },
];

const MyComponent = () => {
  return (
    <div className="bg-[#0b0b0f] min-h-screen text-white p-4 md:p-6">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Left Side */}
        <div className="lg:col-span-3 space-y-5">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#17171f] to-[#20202a] rounded-3xl overflow-hidden p-6 md:p-10 relative">
            <p>Welcome back</p>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Text */}
              <div className="space-y-5 z-10">
                <div>
                  <p className="text-gray-400 text-sm">Welcome back</p>
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
                    A small studio, an open door.
                  </h1>
                </div>

                <div>
                  <p className="uppercase tracking-[5px] text-gray-500 text-xs">
                    Latest
                  </p>

                  <h2 className="text-4xl font-bold mt-2">Transmission 01</h2>

                  <p className="text-gray-400 mt-2">
                    82,736,050 monthly listeners
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-full flex items-center gap-2 font-medium">
                    <FiPlay />
                    PLAY FIRST TRACK
                  </button>

                  <button className="bg-[#2a2a35] hover:bg-[#3a3a45] transition px-6 py-3 rounded-full flex items-center gap-2">
                    <FiHeart />
                    SAVED
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="artist"
                  className="w-full max-w-sm object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Popular Releases */}
          <div className="bg-[#16161d] rounded-3xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold">Popular Releases</h2>
              <button className="text-red-500 text-sm">See All</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {releases.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#20202a] rounded-2xl p-3 hover:scale-105 transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-xl"
                  />

                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.year} Album</p>
                </div>
              ))}
            </div>
          </div>

          {/* Player */}
          <div className="bg-[#16161d] rounded-3xl p-5 flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Song */}
            <div className="flex items-center gap-4">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
                alt=""
                className="w-14 h-14 rounded-xl object-cover"
              />

              <div>
                <h3 className="font-semibold">Shape of You</h3>
                <p className="text-sm text-gray-400">Ed Sheeran</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-5">
              <button>
                <FiSkipBack size={22} />
              </button>

              <button className="bg-red-500 p-4 rounded-full">
                <FiPause size={20} />
              </button>

              <button>
                <FiSkipForward size={22} />
              </button>
            </div>

            {/* Progress */}
            <div className="w-full md:w-64">
              <input type="range" className="w-full accent-red-500" />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-5">
          {/* Fans Also Like */}
          <div className="bg-[#16161d] rounded-3xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-lg">Fans Also Like</h2>
              <button className="text-red-500 text-sm">See All</button>
            </div>

            <div className="bg-[#20202a] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt=""
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">James Arthur</h3>
                <p className="text-gray-400 text-sm">Artist</p>
              </div>
            </div>
          </div>

          {/* Recent Played */}
          <div className="bg-[#16161d] rounded-3xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-lg">Recent Played</h2>
              <button className="text-red-500 text-sm">See All</button>
            </div>

            <div className="space-y-4">
              {[
                "Loveless",
                "Roman Picasso",
                "Tell Me",
                "Feel Alive",
                "Your Shape",
              ].map((song, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
                      alt=""
                      className="w-12 h-12 rounded-lg object-cover"
                    />

                    <div>
                      <h4 className="text-sm font-medium">{song}</h4>
                      <p className="text-xs text-gray-400">Artist</p>
                    </div>
                  </div>

                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
