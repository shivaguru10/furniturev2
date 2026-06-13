"use client";

import { useState } from "react";
import { SlidersHorizontal, ArrowUpDown, X } from "lucide-react";
import FilterSidebar from "./FilterSidebar";

export default function FilterMobileSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden w-full flex items-center gap-4 mb-6">
      <button 
        onClick={() => setIsOpen(true)}
        className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-lg font-medium text-sm hover:bg-muted"
      >
        <SlidersHorizontal className="w-4 h-4" /> Filter
      </button>
      <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-lg font-medium text-sm hover:bg-muted">
        <ArrowUpDown className="w-4 h-4" /> Sort
      </button>

      {/* Sheet Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <button onClick={() => setIsOpen(false)}><X className="w-6 h-6" /></button> Filters
            </h2>
            <button className="text-sm font-medium text-muted-foreground">Reset</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {/* Reusing the sidebar content structure by wrapping it */}
            <div className="[&>div:first-child]:hidden [&>div]:w-full [&>div]:block">
              <FilterSidebar />
            </div>
          </div>

          <div className="p-4 border-t border-border pb-safe">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-bold text-sm"
            >
              VIEW 80 RESULTS
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
