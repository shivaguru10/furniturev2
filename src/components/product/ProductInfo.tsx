"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import ColorSelector from "./ColorSelector";
import MaterialSelector from "./MaterialSelector";
import DeliveryInfo from "./DeliveryInfo";
import ActionButtons from "./ActionButtons";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0]);

  return (
    <div className="flex flex-col">
      {/* Title & Brand */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">{product.name}</h1>
      <Link href={`/brand/${product.brand.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground hover:underline mb-4 inline-block w-max">
        By {product.brand}
      </Link>

      {/* Rating & Badge */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-1">
          <span className="text-star text-sm">★</span><span className="text-star text-sm">★</span><span className="text-star text-sm">★</span><span className="text-star text-sm">★</span><span className="text-star text-sm">★</span>
          <span className="text-sm font-medium ml-1">{product.rating}</span>
          <span className="text-sm text-muted-foreground underline">({product.reviewCount} Reviews)</span>
        </div>
        {product.isBestSeller && (
          <span className="bg-[#FFF4E5] text-[#D97706] text-xs font-bold px-2 py-1 rounded">Best Seller</span>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-3 mb-1">
          <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
          {product.comparePrice > product.price && (
            <>
              <span className="text-lg text-muted-foreground line-through mb-1">{formatPrice(product.comparePrice)}</span>
              <span className="text-sale font-semibold mb-1">-{product.discount}%</span>
            </>
          )}
        </div>
        <p className="text-xs text-muted-foreground">Incl. of all taxes</p>
      </div>

      {/* EMI */}
      <div className="bg-muted/50 rounded-lg p-3 mb-8 text-sm">
        <span className="font-medium">EMI starts at ₹1,350/month.</span>{" "}
        <span className="text-muted-foreground">No Cost EMI available on select banks.</span>{" "}
        <button className="text-primary font-medium hover:underline">View EMI Options</button>
      </div>

      <ColorSelector colors={product.colors} selected={selectedColor} onSelect={setSelectedColor} />
      <MaterialSelector materials={product.materials} selected={selectedMaterial} onSelect={setSelectedMaterial} />
      
      <DeliveryInfo />
      
      <ActionButtons product={product} selectedColor={selectedColor} selectedMaterial={selectedMaterial} />
    </div>
  );
}
