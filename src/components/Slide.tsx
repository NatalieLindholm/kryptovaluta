"use client";
import React, { useEffect, useState } from "react";

export default function SlideComponent({ children }: any) {
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = React.Children.count(children);

  useEffect(() => {}, [slideIndex]);

  // Next/previous controls
  function plusSlides(n: number) {
    let newIndex = slideIndex + n;
    if (newIndex > totalSlides) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = totalSlides;
    }
    setSlideIndex(newIndex);
  }

  // Thumbnail image controls
  function currentSlide(n: number) {
    setSlideIndex(n);
  }

  // Calculate the starting index of the displayed items
  const startIndex = Math.max(1, slideIndex);

  // Calculate the ending index of the displayed items
  const endIndex = Math.min(totalSlides, slideIndex + 2);

  return (
    <div>
      <div className="whole">
        <div className="slideshow-container">
          <div className="flex">
            {React.Children.map(children, (child, index) => (
              <div
                className={`mySlides ${
                  index + 1 >= startIndex && index + 1 <= endIndex
                    ? "active"
                    : ""
                }`}
                key={index}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        <br />

        <div className="buttons">
          <button className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </button>
          <button className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </button>
        </div>

        <div className="text-center">
          <span className="page-number">
            {startIndex}-{endIndex} / {totalSlides}
          </span>
        </div>
      </div>
    </div>
  );
}
