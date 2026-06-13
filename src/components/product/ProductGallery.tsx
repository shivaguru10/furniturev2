"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Rotate3D } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-[3/2] rounded-2xl bg-muted overflow-hidden shadow-sm">
        <Image
          src={images[currentIndex]}
          alt={name}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        
        {/* Navigation Arrows */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-background transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-background transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* 360 Badge */}
        <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium cursor-pointer hover:bg-background transition-colors">
          <Rotate3D className="w-4 h-4" />
          360° View
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0 transition-all",
              currentIndex === index ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100"
            )}
          >
            <Image src={img} alt={`${name} thumbnail ${index + 1}`} fill className="object-cover" unoptimized />
          </button>
        ))}
      </div>
    </div>
  );
}
