"use client";

import { Heart, ArrowLeftRight, Share } from "lucide-react";
import { Product } from "@/types";
import { useStore } from "@/store/store";

interface ActionButtonsProps {
  product: Product;
  selectedColor: string;
  selectedMaterial: string;
}

export default function ActionButtons({ product, selectedColor, selectedMaterial }: ActionButtonsProps) {
  const { addToCart, wishlistItems, addToWishlist, removeFromWishlist } = useStore();
  const isWishlisted = wishlistItems.some(item => item.product.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedMaterial);
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <button 
          onClick={handleAddToCart}
          className="flex-1 h-12 border-2 border-foreground bg-background text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
        >
          ADD TO CART
        </button>
        <button 
          className="flex-1 h-12 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
        >
          BUY NOW
        </button>
      </div>
      
      <div className="flex items-center gap-6 justify-center text-sm font-medium">
        <button 
          onClick={toggleWishlist} 
          className={`flex items-center gap-2 hover:text-foreground transition-colors ${isWishlisted ? "text-red-500" : "text-muted-foreground"}`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} /> Wishlist
        </button>
        <div className="w-px h-4 bg-border"></div>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeftRight className="w-4 h-4" /> Compare
        </button>
        <div className="w-px h-4 bg-border"></div>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Share className="w-4 h-4" /> Share
        </button>
      </div>
    </div>
  );
}
