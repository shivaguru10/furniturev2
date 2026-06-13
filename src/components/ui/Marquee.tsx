"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  gap?: string;
  direction?: "forward" | "backward";
  pauseOnHover?: boolean;
}

export default function Marquee({ 
  children, 
  className, 
  speed = 1, 
  gap = "2rem",
  direction = "forward",
  pauseOnHover = true
}: MarqueeProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({ 
        playOnInit: true, 
        speed: speed, 
        direction: direction,
        stopOnInteraction: false, // Resume after drag
        stopOnMouseEnter: pauseOnHover,
      })
    ]
  );

  const [isPointerDown, setIsPointerDown] = useState(false);

  const handlePointerDown = useCallback(() => setIsPointerDown(true), []);
  const handlePointerUp = useCallback(() => setIsPointerDown(false), []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);
    return () => {
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
    };
  }, [emblaApi, handlePointerDown, handlePointerUp]);

  return (
    <div 
      className={cn("w-full relative", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div 
        ref={emblaRef} 
        className={cn(
          "overflow-hidden w-full select-none cursor-grab active:cursor-grabbing",
          isPointerDown && "cursor-grabbing"
        )}
      >
        <div className="flex items-center backface-hidden">
          {React.Children.map(children, (child, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 min-w-0" 
              style={{ paddingRight: gap }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
