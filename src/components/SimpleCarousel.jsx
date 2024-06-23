import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

function SimpleCarousel() {
  // Splide carousel configuration options
  const splideOptions = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 4, // Number of items visible per page
    perMove: 1, // Move one item at a time
    rewind: true, // Rewind to start when the end is reached
    pagination: false, // Enable pagination dots
  };

  return (
    <div className="h-screen relative flex items-center justify-center bg-stone-200">
      {/* Container for the carousel with a fixed width */}
      <div className="w-1/2">
        {/* Splide component with configuration options */}
        <Splide options={splideOptions}>
          <SplideSlide>
            <div className="text-3xl flex items-center justify-center">1</div>
          </SplideSlide>
          <SplideSlide>
            <div className="text-3xl flex items-center justify-center">2</div>
          </SplideSlide>
          <SplideSlide>
            <div className="text-3xl flex items-center justify-center">3</div>
          </SplideSlide>
          <SplideSlide>
            <div className="text-3xl flex items-center justify-center">4</div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default SimpleCarousel;
