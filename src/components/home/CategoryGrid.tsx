"use client";

import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import CategoryCard from "./CategoryCard";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragged, setDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    if (window.innerWidth >= 1024) return; // Only drag on mobile/tablet

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftState(container.scrollLeft);
    dragStartPos.current = { x: e.pageX, y: e.pageY };
    setDragged(false);

    container.style.scrollBehavior = "auto";
    container.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const container = containerRef.current;
    if (container) {
      container.style.scrollBehavior = "smooth";
      container.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = containerRef.current;
    if (container) {
      container.style.scrollBehavior = "smooth";
      container.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;
    
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftState - walk;

    const moveX = Math.abs(e.pageX - dragStartPos.current.x);
    const moveY = Math.abs(e.pageY - dragStartPos.current.y);
    if (moveX > 5 || moveY > 5) {
      setDragged(true);
    }
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
      setDragged(false);
    }
  };

  return (
    <section className="py-6 lg:py-[42px] max-w-[1600px] lg:w-full mx-auto px-4 lg:px-8 overflow-hidden">
      <SectionHeader title="Shop by Category" viewAllLink="/category/all" />
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClickCapture={handleClickCapture}
        className="flex lg:grid lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 w-full overflow-x-auto scrollbar-hide pb-3 select-none scroll-smooth snap-x snap-mandatory cursor-grab lg:cursor-default"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {categories.map((cat, index) => (
          <CategoryCard key={cat.id} category={cat} isLast={index === categories.length - 1} />
        ))}
        {/* Spacer to ensure the last item is fully scrollable and not cut off by container padding */}
        <div className="w-[1px] lg:hidden flex-shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}

