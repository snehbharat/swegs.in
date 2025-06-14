import React from "react";
const images = [
  "/images/one.png",
  "/images/four.png",
  "/images/five.png",
  "/images/six.png",
  "/images/eight.png",
  "/images/nine.png",
  "/images/ten.png",
];

const LandingPage = () => {
  const fullImages = [...images, ...images];
  return (
    <div className="bg-gray-900 text-white">
      <div className="relative w-full h-screen">
        <img
          src="/images/landingImg.jpg"
          alt="Couple Shopping Online"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-8">
          {/* Text Content */}
          <div className="text-center md:text-left xl:ml-32 md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Share the Joy of <span className="text-[#fdcfc6]">Gifting</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-md drop-shadow-md">
              Discover curated holiday deals and heartfelt gifts for your loved
              ones.
            </p>
          </div>
          {/* Optional Image Section (kept blank if you want text focus) */}
          <div className="md:w-1/2 hidden md:block">
            {/* You can add extra promotional text, logos, or keep it visual-only */}
          </div>
        </div>
      </div>

      {/*  */}

      <div className="relative w-screen  h-[350px] bg-[#f7f1f0] shadow-lg ">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 z-10 w-24 h-full bg-gradient-to-r from-[#f7f1f0] to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 w-24 h-full bg-gradient-to-l from-[#f7f1f0] to-transparent"></div>

        {/* Scrolling track */}
        <div
          className="flex animate-scroll whitespace-nowrap"
          style={{ width: `${fullImages.length * 250}px` }}
        >
          {fullImages.map((src, index) => (
            <div
              key={index}
              className="w-[250px] h-[350px] flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`carousel-${index}`}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
