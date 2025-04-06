import React, { useEffect, useRef, useState } from "react";
import testimonialQuote from "../assets/testimonial-quote.svg";

const AutoSlider = ({
  images = [],
  interval = 4000,
  height = "min-h-[24rem] sm:min-h-[24rem]",
  slidesContent = [],
}) => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(auto);
  }, [index]);

  const nextSlide = () => {
    const newIndex = (index + 1) % images.length;
    scrollTo(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (index - 1 + images.length) % images.length;
    scrollTo(newIndex);
  };

  const scrollTo = (i) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: i * slideWidth,
        behavior: "smooth",
      });
      setIndex(i);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`flex overflow-x-hidden scroll-smooth snap-x snap-mandatory touch-pan-x no-scrollbar ${height}`}
        onScroll={() => {
          const scrollLeft = sliderRef.current.scrollLeft;
          const slideWidth = sliderRef.current.offsetWidth;
          setIndex(Math.round(scrollLeft / slideWidth));
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-full snap-center flex flex-col justify-center items-center text-white gap-4 p-4 ${height}`}
          >
            <div className="text-center space-y-4 px-4">
              <div className="flex justify-center">
                <img
                  src={testimonialQuote}
                  alt=""
                  className="rounded-full w-12 md:w-16 object-cover transition"
                />
              </div>
              <p className="text-gray-300 text-sm sm:text-lg md:text-2xl leading-loose max-w-sm sm:max-w-xl lg:max-w-4xl mx-auto">
                {slidesContent[i]?.description ||
                  "Experience the taste of freshness and flavor in every bite."}
              </p>
            </div>

            <img
              src={img}
              alt={`slide-${i}`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full shadow-xl select-none pointer-events-none"
              draggable={false}
            />

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-customColor">
              {slidesContent[i]?.title || "Spicyhunt User"}
            </h2>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow"
      >
        ›
      </button>
    </div>
  );
};

export default AutoSlider;
