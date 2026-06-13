"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Popularity");

  const options = ["Popularity", "Price: Low to High", "Price: High to Low", "Newest First", "Rating"];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-48 px-4 py-2 text-sm border border-border rounded-lg bg-background hover:bg-muted transition-colors"
      >
        <span className="truncate">Sort by: {selected}</span>
        <ChevronDown className="w-4 h-4 ml-2 flex-shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-48 mt-1 bg-background border border-border rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-muted first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
