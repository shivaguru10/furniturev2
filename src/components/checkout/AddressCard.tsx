import { MapPin } from "lucide-react";
import { mockAddresses } from "@/lib/data";

export default function AddressCard() {
  const address = mockAddresses[0];
  
  return (
    <div className="border-2 border-foreground rounded-2xl p-6 relative">
      <div className="absolute top-6 right-6">
        <button className="text-sm font-medium text-primary hover:underline">Change</button>
      </div>
      
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold">{address.name}</h3>
            <span className="bg-muted text-xs font-semibold px-2 py-0.5 rounded uppercase">{address.label}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-3">
            {address.street}, {address.city}, {address.state} {address.pincode}
          </p>
          <p className="text-sm font-medium">
            <span className="text-muted-foreground">Mobile:</span> {address.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
