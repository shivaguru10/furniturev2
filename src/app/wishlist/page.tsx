"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useStore } from "@/store/store";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, addToCart } = useStore();

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <Heart className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Your wishlist is empty</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Save your favorite items here to purchase them later.
        </p>
        <Link 
          href="/" 
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">My Wishlist ({wishlistItems.length})</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="group flex flex-col gap-3 relative border border-border p-3 rounded-2xl">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-xl bg-muted overflow-hidden">
              <Image
                src={item.product.images[0]}
                alt={item.product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <button
                onClick={() => removeFromWishlist(item.product.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-background transition-colors text-muted-foreground hover:text-red-500 z-10"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Product Info */}
            <div className="flex-1 flex flex-col">
              <Link href={`/product/${item.product.slug}`} className="text-sm font-medium text-foreground line-clamp-2 mb-1 hover:underline">
                {item.product.name}
              </Link>
              
              <div className="font-bold text-sm mb-3">
                {formatPrice(item.product.price)}
              </div>

              <div className="mt-auto pt-2 border-t border-border">
                <button 
                  onClick={() => addToCart(item.product, item.product.colors[0].name, item.product.materials[0])}
                  className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" /> Move to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
