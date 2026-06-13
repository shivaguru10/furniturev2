import { Truck, RefreshCcw, Shield, CreditCard, Headphones } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: Truck, title: "Free Delivery", subtitle: "Pan India" },
    { icon: RefreshCcw, title: "Easy Returns", subtitle: "Within 30 Days" },
    { icon: Shield, title: "Secure Payments", subtitle: "100% Protected" },
    { icon: CreditCard, title: "EMI Options", subtitle: "Easy Installments" },
    { icon: Headphones, title: "Expert Support", subtitle: "7 Days a Week" },
  ];

  return (
    <div className="border-y border-border bg-background py-6 overflow-x-auto scrollbar-hide">
      <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center min-w-max md:min-w-0 gap-8 lg:gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-3">
            <badge.icon className="w-8 h-8 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-semibold whitespace-nowrap">{badge.title}</p>
              <p className="text-xs text-muted-foreground whitespace-nowrap">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
