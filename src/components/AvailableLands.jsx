import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AvailableLands = ({ tabs, defaultActiveIndex = 0, onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [loadedTabs, setLoadedTabs] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  useEffect(() => {
    if (!loadedTabs.includes(activeIndex)) {
      setLoadedTabs([...loadedTabs, activeIndex]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setCurrentSlide(0); // reset slider on tab change
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const mainSettings = {
    asNavFor: thumbSlider.current,
    ref: mainSlider,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const thumbSettings = {
    asNavFor: mainSlider.current,
    ref: thumbSlider,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    centerMode: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 3000, // desktop
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="relative bg-gray-50 pb-20 pt-16 lg:pb-22">
      <div className="mx-auto max-w-6xl px-4 md:px-8 xl:px-0">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mb-3 inline-block rounded-full bg-blue-600 px-5 py-2 text-white text-sm font-medium">
            Featured Properties
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            LANDS AND PROPERTIES
          </h2>
          <p className="mt-2 text-gray-600 md:w-3/5 mx-auto">
            With Goli Properties by your side, your acquisition journey is in
            trusted hands.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                index === activeIndex
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h4 className="mb-4 text-2xl font-bold text-gray-900">
              {tabs[activeIndex].label}
            </h4>
            <p className="mb-6 text-gray-600 leading-relaxed">
              {tabs[activeIndex].content}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-blue-600">
                {tabs[activeIndex].price}
              </span>
              <button className="rounded-full bg-blue-600 px-6 py-2 text-white font-medium transition hover:bg-blue-700">
                <a href="/contact-us">
                 Buy Now
                </a>
              </button>
            </div>
          </div>

          {/* Image Slider with Thumbnails */}
          <div className="w-full md:w-1/2">
            {/* Main Slider */}
            <Slider {...mainSettings}>
              {tabs[activeIndex].images?.map((img, idx) => (
                <div key={idx} className="px-2">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={img.img}
                      alt={`property-${idx}`}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>

            {/* Thumbnails */}
            <div className="mt-4">
              <Slider {...thumbSettings}>
                {tabs[activeIndex].images?.map((img, idx) => (
                  <div key={idx} className="px-1">
                    <img
                      src={img.img}
                      alt={`thumb-${idx}`}
                      className={`w-full h-[80px] md:h-[100px] object-cover rounded-lg cursor-pointer border-2 transition ${
                        idx === currentSlide
                          ? "border-blue-600"
                          : "border-transparent hover:border-gray-400"
                      }`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableLands;
