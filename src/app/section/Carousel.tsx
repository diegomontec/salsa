"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 


    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentIndex === index ? 1 : 0,
            zIndex: currentIndex === index ? 10 : 0,
          }}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
