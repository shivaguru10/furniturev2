import { Check } from "lucide-react";

interface CheckoutStepperProps {
  currentStep: number;
}

export default function CheckoutStepper({ currentStep }: CheckoutStepperProps) {
  const steps = [
    { id: 1, label: "Address" },
    { id: 2, label: "Payment" },
    { id: 3, label: "Review" },
  ];

  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto mb-12 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border -z-10" />
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-foreground -z-10 transition-all duration-500"
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      />
      
      {steps.map((step) => {
        const isCompleted = step.id < currentStep;
        const isActive = step.id === currentStep;
        
        return (
          <div key={step.id} className="flex flex-col items-center gap-2 bg-background px-4">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                isActive 
                  ? "border-foreground bg-foreground text-background" 
                  : isCompleted 
                    ? "border-foreground bg-background text-foreground" 
                    : "border-border bg-background text-muted-foreground"
              }`}
            >
              {isCompleted ? <Check className="w-4 h-4" /> : step.id}
            </div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
