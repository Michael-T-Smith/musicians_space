// components/Carousel.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import image1 from "../../../../public/assets/images/Merch/Desert_Promotional_Labled.jpeg";
import image2 from "../../../../public/assets/images/Merch/Underground_Promotional.jpeg";
const images = [
  { src: image1, alt: "Promotional 1", caption: "Promotional 1 Information" },
  { src: image2, alt: "Promotional 2", caption: "Promotional 2 Information" },
  { src: image1, alt: "Promotional 3", caption: "Promotional 3 Information" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  // Scroll when current changes
  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const width = track.clientWidth;
      track.scrollTo({
        left: width * current,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div className="relative w-full xs:h-[100%] overflow-hidden">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-scroll scroll-smooth xs:h-[250px] w-[100vw] sm:h-[500px] md:h-[500px] lg:h-[800px] m-auto " 
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-center relative"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
