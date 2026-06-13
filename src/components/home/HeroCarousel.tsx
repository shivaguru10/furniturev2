"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/data";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-[8px] md:mt-[18px] lg:mt-[26px] mb-3 md:mb-4 lg:mb-6">
      {/* Banner Card */}
      <div className="relative w-[calc(100%-24px)] md:w-[calc(100%-48px)] xl:w-full max-w-[1440px] mx-auto h-[50vw] min-h-[160px] max-h-[220px] md:h-[280px] md:min-h-0 md:max-h-none lg:h-[420px] rounded-[20px] md:rounded-[24px] lg:rounded-[28px] overflow-hidden bg-background md:bg-muted shadow-sm">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt="Hero background"
                fill
                className="object-cover object-center"
                unoptimized
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-[12px] z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

