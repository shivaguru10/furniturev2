"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, User, ShoppingCart, Menu } from "lucide-react";
import { useStore } from "@/store/store";
import MegaMenu from "./MegaMenu";
import { cn } from "@/lib/utils";

export default function MainHeader() {
  const cartCount = useStore((state) => state.getCartCount());
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const closeMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);
  
  return (
    <header className="border-b border-border bg-background py-3 lg:py-[10px] relative">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between gap-4">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-lg rounded-sm">B</div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">BLITZ FURNITURE</span>
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex flex-1 max-w-2xl items-center bg-muted rounded-md px-3 py-2">
          <Search className="w-5 h-5 text-muted-foreground mr-2" />
          <input 
            type="text" 
            placeholder="Search for sofas, beds, tables..." 
            className="bg-transparent border-none outline-none flex-1 text-sm"
          />
          <div 
            className="border-l border-border pl-3 ml-3 text-sm flex items-center cursor-pointer select-none py-1 relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            All Categories 
            <span className={cn(
              "ml-1 text-xs transition-transform duration-200 inline-block",
              isOpen ? "rotate-180" : ""
            )}>
              ▼
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button className="lg:hidden">
            <Search className="w-6 h-6" />
          </button>
          <Link href="/wishlist" className="hidden sm:flex items-center gap-2 hover:text-muted-foreground transition-colors">
            <Heart className="w-6 h-6" />
            <span className="text-sm font-medium hidden lg:block">Wishlist</span>
          </Link>
          <Link href="/account" className="hidden sm:flex items-center gap-2 hover:text-muted-foreground transition-colors">
            <User className="w-6 h-6" />
            <span className="text-sm font-medium hidden lg:block">Account</span>
          </Link>
          <Link href="/cart" className="flex items-center gap-2 hover:text-muted-foreground transition-colors relative">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {isMounted && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-sm font-medium hidden lg:block">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div 
        className={cn(
          "absolute top-full left-0 w-full bg-background border-b border-border shadow-md transition-all duration-300 ease-out z-50",
          isOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        )}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <MegaMenu />
      </div>
    </header>
  );
}
