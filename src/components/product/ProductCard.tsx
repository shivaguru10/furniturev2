"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useStore } from "@/store/store";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useStore();
  const isWishlisted = wishlistItems.some(item => item.product.id === product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent navigation
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col gap-3">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl bg-muted overflow-hidden shadow-sm">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-background transition-colors z-10"
        >
          <Heart 
            className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-foreground"}`} 
          />
        </button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-sm font-medium text-foreground truncate mb-1">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-sm md:text-base font-bold">{formatPrice(product.price)}</span>
          {product.comparePrice > product.price && (
            <>
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.comparePrice)}
              </span>
              <span className="text-xs font-semibold text-sale">
                -{product.discount}%
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-1">
          <span className="text-star text-sm">★</span>
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
