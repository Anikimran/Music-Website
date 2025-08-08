import React, { useEffect } from "react";
import { useData } from "../Components/context/Data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SamplePrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-purple-800 rounded-full p-2 hover:bg-purple-900 transition-colors"
      aria-label="Previous Slide"
    >
      <AiOutlineArrowLeft color="white" size={24} />
    </button>
  );
};

const SampleNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-purple-800 rounded-full p-2 hover:bg-purple-900 transition-colors"
      aria-label="Next Slide"
    >
      <AiOutlineArrowRight color="white" size={24} />
    </button>
  );
};

const MyComponent = () => {
  const { data, click } = useData();

  useEffect(() => {
    click();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-10 px-4">
      <Slider {...settings}>
        {Array.isArray(data) &&
          data.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-lg shadow-lg"
              style={{ height: "600px" }}
            >
              <div className="flex flex-col md:flex-row gap-10 justify-center items-center h-full px-6 py-8">
                <div className="space-y-6 text-center md:text-left max-w-md">
                  <h3 className="text-sm font-semibold text-red-500 font-sans">
                    Powering your world with technology
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3">
                    {item.name || item.title}
                  </h1>
                  <p className="text-gray-400 line-clamp-3">
                    {item.email || item.description || "No description available."}
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-6 py-2 rounded-md cursor-pointer hover:from-red-700 hover:to-purple-700 transition-colors">
                    Buy Now
                  </button>
                </div>
                <div>
                  {/* API data may not have image, so use placeholder */}
                  <img
                    src={`https://i.pravatar.cc/450?img=${item.id}`}
                    alt={item.name || "User Image"}
                    className="rounded-full w-[300px] h-[300px] object-cover hover:scale-110 transition-transform shadow-2xl shadow-red-400"
                  />
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MyComponent;
