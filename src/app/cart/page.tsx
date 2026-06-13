"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import { useStore } from "@/store/store";

export default function CartPage() {
  const { cartItems, getCartTotal, getCartCount } = useStore();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Looks like you haven't added anything to your cart yet. Discover our premium furniture collection.
        </p>
        <Link 
          href="/category/living-room" 
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">My Cart ({getCartCount()} Items)</h1>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="border-t border-border">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[380px] xl:w-[420px]">
          <OrderSummary 
            subtotal={getCartTotal()} 
            deliveryCharges={0} 
            assemblyCharges={1500} 
            itemCount={getCartCount()} 
          />
        </div>
      </div>
    </div>
  );
}
