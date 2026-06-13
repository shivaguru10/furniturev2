import Link from "next/link";
import { formatPrice } from "@/lib/utils";

interface OrderSummaryProps {
  subtotal: number;
  deliveryCharges: number;
  assemblyCharges: number;
  itemCount: number;
}

export default function OrderSummary({ subtotal, deliveryCharges, assemblyCharges, itemCount }: OrderSummaryProps) {
  const total = subtotal + deliveryCharges + assemblyCharges;

  return (
    <div className="border border-border rounded-2xl p-6 bg-background sticky top-[140px]">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Delivery Charges</span>
          <span className={deliveryCharges === 0 ? "text-green-600 font-medium" : "font-medium"}>
            {deliveryCharges === 0 ? "Free" : formatPrice(deliveryCharges)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Assembly Charges</span>
          <span className="font-medium">{formatPrice(assemblyCharges)}</span>
        </div>
      </div>

      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between items-end mb-1">
          <span className="font-bold">Total Amount</span>
          <span className="text-2xl font-bold">{formatPrice(total)}</span>
        </div>
        <p className="text-xs text-muted-foreground text-right">Inclusive of all taxes</p>
      </div>

      <Link 
        href="/checkout" 
        className="block w-full bg-foreground text-background text-center py-4 rounded-lg font-bold hover:bg-foreground/90 transition-colors mb-4"
      >
        PROCEED TO CHECKOUT
      </Link>
      
      <div className="text-center">
        <Link href="/" className="text-sm font-medium hover:underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
