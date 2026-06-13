"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
}

export default function QuantityStepper({ value, onChange }: QuantityStepperProps) {
  return (
    <div className="flex items-center border border-border rounded-lg bg-background w-max h-9">
      <button 
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        className="w-9 h-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
      >
        <Minus className="w-4 h-4" />
      </button>
      <div className="w-10 text-center font-medium text-sm">
        {value}
      </div>
      <button 
        onClick={() => onChange(value + 1)}
        className="w-9 h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
