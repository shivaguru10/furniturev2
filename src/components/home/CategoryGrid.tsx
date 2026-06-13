"use client";

import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import CategoryCard from "./CategoryCard";
import Marquee from "../ui/Marquee";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section className="py-6 lg:py-[42px] max-w-[1600px] lg:w-full mx-auto px-4 lg:px-8 overflow-hidden">
      <SectionHeader title="Shop by Category" viewAllLink="/category/all" />
      
      {/* Mobile Marquee View */}
      <div className="lg:hidden -mx-4 pb-4">
        <Marquee speed={0.8} gap="1rem">
          {categories.map((cat, index) => (
            <CategoryCard key={cat.id} category={cat} isLast={index === categories.length - 1} />
          ))}
        </Marquee>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-8 w-full select-none">
        {categories.map((cat, index) => (
          <CategoryCard key={cat.id} category={cat} isLast={index === categories.length - 1} />
        ))}
      </div>
    </section>
  );
}

