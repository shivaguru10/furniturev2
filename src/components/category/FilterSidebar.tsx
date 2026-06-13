"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { filterCategories, filterBrands, filterColors, filterMaterials } from "@/lib/data";

export default function FilterSidebar() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    category: true,
    price: true,
    brand: true,
    color: true,
    material: true,
    rating: true
  });

  const toggleSection = (section: string) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-64 flex-shrink-0 hidden lg:block sticky top-[140px] max-h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
      <h2 className="text-lg font-bold mb-6">Filters</h2>
      
      {/* Category */}
      <div className="mb-6 border-b border-border pb-6">
        <button onClick={() => toggleSection('category')} className="flex items-center justify-between w-full font-semibold mb-4">
          Category {expanded.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expanded.category && (
          <div className="space-y-3">
            {filterCategories.map((cat) => (
              <label key={cat.name} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
                  <span className="ml-2 text-sm text-muted-foreground group-hover:text-foreground">{cat.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">({cat.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mb-6 border-b border-border pb-6">
        <button onClick={() => toggleSection('price')} className="flex items-center justify-between w-full font-semibold mb-4">
          Price {expanded.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expanded.price && (
          <div className="px-2">
            <div className="w-full h-1 bg-border rounded relative mb-4 mt-2">
              <div className="absolute left-[10%] right-[30%] h-full bg-primary rounded"></div>
              <div className="absolute left-[10%] -top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary cursor-pointer"></div>
              <div className="absolute right-[30%] -top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary cursor-pointer"></div>
            </div>
            <div className="flex justify-between text-xs font-medium">
              <span>₹2,000</span>
              <span>₹1,50,000</span>
            </div>
          </div>
        )}
      </div>

      {/* Brand */}
      <div className="mb-6 border-b border-border pb-6">
        <button onClick={() => toggleSection('brand')} className="flex items-center justify-between w-full font-semibold mb-4">
          Brand {expanded.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expanded.brand && (
          <div className="space-y-3">
            <div className="relative mb-3">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Search Brand" className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg outline-none focus:border-primary bg-muted/50" />
            </div>
            {filterBrands.slice(0, 5).map((brand) => (
              <label key={brand.name} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
                  <span className="ml-2 text-sm text-muted-foreground group-hover:text-foreground">{brand.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">({brand.count})</span>
              </label>
            ))}
            <button className="text-sm text-primary font-medium mt-2">+ View More</button>
          </div>
        )}
      </div>

      {/* Color */}
      <div className="mb-6 border-b border-border pb-6">
        <button onClick={() => toggleSection('color')} className="flex items-center justify-between w-full font-semibold mb-4">
          Color {expanded.color ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expanded.color && (
          <div className="flex flex-wrap gap-3">
            {filterColors.map((color) => (
              <button key={color.name} className="w-6 h-6 rounded-full border border-border shadow-sm ring-offset-2 hover:ring-2 ring-primary transition-all" style={{ backgroundColor: color.hex }} title={color.name} />
            ))}
            <span className="text-xs text-muted-foreground flex items-center ml-1">+8</span>
          </div>
        )}
      </div>

      {/* Material */}
      <div className="mb-6 border-b border-border pb-6">
        <button onClick={() => toggleSection('material')} className="flex items-center justify-between w-full font-semibold mb-4">
          Material {expanded.material ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expanded.material && (
          <div className="space-y-3">
            {filterMaterials.slice(0, 5).map((mat) => (
              <label key={mat.name} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
                  <span className="ml-2 text-sm text-muted-foreground group-hover:text-foreground">{mat.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">({mat.count})</span>
              </label>
            ))}
            <button className="text-sm text-primary font-medium mt-2">+ View More</button>
          </div>
        )}
      </div>

      {/* Customer Rating */}
      <div className="mb-6 pb-6">
        <button onClick={() => toggleSection('rating')} className="flex items-center justify-between w-full font-semibold mb-4">
          Customer Rating {expanded.rating ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expanded.rating && (
          <div className="space-y-3">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center">
                  <input type="radio" name="rating" className="w-4 h-4 border-border text-primary focus:ring-primary accent-primary" />
                  <span className="ml-2 flex items-center text-sm text-muted-foreground group-hover:text-foreground">
                    <span className="text-star mr-1">★</span> {rating} & above
                  </span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
