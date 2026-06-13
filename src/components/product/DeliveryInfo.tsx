import { Truck } from "lucide-react";

export default function DeliveryInfo() {
  return (
    <div className="border border-border rounded-lg p-4 mb-8">
      <div className="flex items-start gap-3 mb-2">
        <Truck className="w-5 h-5 text-muted-foreground mt-0.5" />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">Delivery by 25 May – 29 May</span>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Free</span>
          </div>
          <button className="text-xs text-primary font-medium mt-1 underline underline-offset-2 hover:text-primary/80">
            Enter Pincode for exact delivery date
          </button>
        </div>
      </div>
    </div>
  );
}
