"use client";

import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import { useStore } from "@/store/store";
import { formatPrice } from "@/lib/utils";

export default function CheckoutOrderSummary() {
  const { cartItems, getCartTotal } = useStore();
  const subtotal = getCartTotal();
  const delivery = 0;
  const assembly = 1500;
  const total = subtotal + delivery + assembly;

  return (
    <div className="border border-border rounded-2xl p-6 bg-background sticky top-[140px]">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-16 h-16 rounded-lg bg-muted overflow-hidden flex-shrink-0">
              <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" unoptimized />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background text-[10px] font-bold rounded-full flex items-center justify-center">
                {item.quantity}
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium line-clamp-1">{item.product.name}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{item.selectedColor} | {item.selectedMaterial}</p>
              <div className="font-bold text-sm mt-1">{formatPrice(item.product.price)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-6 pt-4 border-t border-border">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Delivery</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Assembly</span>
          <span className="font-medium">{formatPrice(assembly)}</span>
        </div>
      </div>

      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between items-end mb-1">
          <span className="font-bold text-lg">Total</span>
          <span className="text-2xl font-bold">{formatPrice(total)}</span>
        </div>
      </div>

      <button className="w-full bg-foreground text-background py-4 rounded-lg font-bold hover:bg-foreground/90 transition-colors mb-4 flex items-center justify-center gap-2">
        PLACE ORDER
      </button>
      
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium mb-4">
        <Lock className="w-3 h-3" /> 100% Secure Payments
      </div>
      
      <p className="text-[10px] text-muted-foreground text-center">
        By placing your order, you agree to our <Link href="/terms" className="underline">Terms & Conditions</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </div>
  );
}
