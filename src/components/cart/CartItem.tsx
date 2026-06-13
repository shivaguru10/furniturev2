"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import QuantityStepper from "./QuantityStepper";
import { formatPrice } from "@/lib/utils";
import { CartItem as CartItemType } from "@/types";
import { useStore } from "@/store/store";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useStore();

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 border-b border-border">
      {/* Image */}
      <Link href={`/product/${item.product.slug}`} className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-muted overflow-hidden flex-shrink-0">
        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" unoptimized />
      </Link>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start gap-4">
          <div>
            <Link href={`/product/${item.product.slug}`} className="font-semibold hover:underline line-clamp-2">
              {item.product.name}
            </Link>
            <div className="text-sm text-muted-foreground mt-1 flex gap-2">
              <span>Color: {item.selectedColor}</span>
              <span>•</span>
              <span>Material: {item.selectedMaterial}</span>
            </div>
            <div className="font-bold mt-2">
              {formatPrice(item.product.price)}
            </div>
          </div>
          
          <div className="text-right hidden sm:block font-bold">
            {formatPrice(item.product.price * item.quantity)}
          </div>
        </div>

        {/* Actions & Quantity */}
        <div className="flex justify-between items-end mt-4 sm:mt-0">
          <div className="flex gap-4">
            <button 
              onClick={() => removeFromCart(item.id)}
              className="text-sm font-medium text-red-500 hover:text-red-600 flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" /> Remove
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground border-l border-border pl-4">
              Save for later
            </button>
          </div>

          <QuantityStepper 
            value={item.quantity} 
            onChange={(q) => updateQuantity(item.id, q)} 
          />
        </div>
      </div>
    </div>
  );
}
