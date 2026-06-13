"use client";

import { useState } from "react";
import { CreditCard, Banknote, Smartphone, ReceiptText } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PaymentMethods() {
  const [selected, setSelected] = useState("card");

  const methods = [
    { id: "card", icon: CreditCard, name: "Credit / Debit Card", badges: ["Visa", "Mastercard", "RuPay"] },
    { id: "upi", icon: Smartphone, name: "UPI", badges: ["GPay", "PhonePe"] },
    { id: "netbanking", icon: ReceiptText, name: "Net Banking", badges: [] },
    { id: "emi", icon: CreditCard, name: "EMI", badges: ["No Cost EMI"] },
    { id: "cod", icon: Banknote, name: "Cash on Delivery", badges: [] },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold mb-4">Payment Method</h3>
      <div className="space-y-3">
        {methods.map((method) => (
          <label 
            key={method.id}
            className={cn(
              "flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors",
              selected === method.id ? "border-foreground bg-muted/20" : "border-border hover:border-muted-foreground"
            )}
          >
            <div className="flex items-center gap-4">
              <input 
                type="radio" 
                name="payment" 
                value={method.id}
                checked={selected === method.id}
                onChange={() => setSelected(method.id)}
                className="w-5 h-5 accent-foreground border-border text-foreground focus:ring-foreground"
              />
              <div className="flex items-center gap-3">
                <method.icon className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">{method.name}</span>
              </div>
            </div>
            {method.badges.length > 0 && (
              <div className="flex gap-2">
                {method.badges.map(badge => (
                  <span key={badge} className="bg-muted text-[10px] font-semibold px-2 py-1 rounded">
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
