"use client";

import Link from "next/link";
import { Package, Heart, Clock, MapPin, CreditCard, Star, Gift, Settings, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { useStore } from "@/store/store";

export default function AccountPage() {
  const { wishlistItems } = useStore();

  const menuItems = [
    { icon: Package, label: "My Orders", href: "/orders" },
    { icon: Heart, label: "My Wishlist", href: "/wishlist", badge: wishlistItems.length },
    { icon: Clock, label: "Recently Viewed", href: "/recent" },
    { icon: MapPin, label: "Saved Addresses", href: "/addresses" },
    { icon: CreditCard, label: "Payment Methods", href: "/payments" },
    { icon: Star, label: "My Reviews", href: "/reviews" },
    { icon: Gift, label: "Refer & Earn", href: "/refer" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: HelpCircle, label: "Help & Support", href: "/support" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-8 p-6 bg-muted rounded-2xl">
        <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
          JD
        </div>
        <div>
          <h1 className="text-xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">john.doe@example.com</p>
        </div>
        <button className="ml-auto text-sm font-medium border border-border px-4 py-2 rounded-lg hover:bg-background transition-colors hidden sm:block">
          Edit Profile
        </button>
      </div>

      {/* Menu List */}
      <div className="bg-background rounded-2xl border border-border overflow-hidden">
        {menuItems.map((item, index) => (
          <Link 
            key={item.label}
            href={item.href}
            className={`flex items-center justify-between p-4 hover:bg-muted transition-colors ${
              index !== menuItems.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <item.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
            <div className="flex items-center gap-3">
              {item.badge ? (
                <span className="bg-primary text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              ) : null}
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Link>
        ))}
      </div>

      <button className="w-full mt-6 flex items-center justify-center gap-2 p-4 text-red-500 font-medium hover:bg-red-50 transition-colors rounded-xl border border-transparent hover:border-red-100">
        <LogOut className="w-5 h-5" /> Logout
      </button>
    </div>
  );
}
