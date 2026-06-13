"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DeliveryOptions() {
  const [selected, setSelected] = useState("standard");

  const options = [
    { id: "standard", name: "Standard Delivery", price: "Free", date: "25 May – 29 May" },
    { id: "express", name: "Express Delivery", price: "₹499", date: "22 May – 24 May" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold mb-4">Delivery Options</h3>
      {options.map((option) => (
        <label 
          key={option.id}
          className={cn(
            "flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors",
            selected === option.id ? "border-foreground bg-muted/20" : "border-border hover:border-muted-foreground"
          )}
        >
          <div className="flex items-center gap-4">
            <input 
              type="radio" 
              name="delivery" 
              value={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="w-5 h-5 accent-foreground border-border text-foreground focus:ring-foreground"
            />
            <div>
              <div className="font-medium">{option.name}</div>
              <div className="text-sm text-muted-foreground">{option.date}</div>
            </div>
          </div>
          <div className="font-semibold">{option.price}</div>
        </label>
      ))}
    </div>
  );
}
