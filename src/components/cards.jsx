import { useState } from "react";

export const Card = ({
  title,
  subtitle,
  slides = [
    { image: "/api/placeholder/400/250", info: "Información por defecto" },
  ],
  className = "",
  onClick,
  onSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={`bg-white mt-5 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <div className="p-4 pb-0">
        <h3 className="text-gray-800 text-xl font-medium">{title}</h3>
        {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
      </div>

      <div className="p-4">
        <div className="bg-gray-100 rounded relative overflow-hidden">
          {/* Image carousel */}
          <div className="relative h-48 overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => {
                    onClick(true), onSelect(slide);
                  }}
                />

                {/* Info overlay with gradient background */}
                {slide.info && (
                  <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <p className="text-sm font-medium">{slide.info}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Navigation arrows - only show if more than 1 slide */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-1 backdrop-blur-sm transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-1 backdrop-blur-sm transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Indicator dots - only show if more than 1 slide */}
            {slides.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 z-30 flex justify-center">
                <div className="flex space-x-1">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        currentIndex === index ? "bg-white" : "bg-white/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
