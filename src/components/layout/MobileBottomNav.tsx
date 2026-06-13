"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Heart, User, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/store";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const cartCount = useStore((state) => state.getCartCount());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LayoutGrid, label: "Categories", href: "/category/living-room" },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: User, label: "Account", href: "/account" },
    { icon: ShoppingCart, label: "Cart", href: "/cart", badge: cartCount },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-background border-t border-border pb-safe z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
      <div className="flex justify-around items-center h-14">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith("/category") && item.href.startsWith("/category"));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1 pt-1",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="relative">
                <item.icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                {isMounted && item.badge ? (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[9px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[9px] font-medium leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
