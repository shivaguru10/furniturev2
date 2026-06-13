import { CheckCircle2 } from "lucide-react";

export default function ProductFeatures() {
  const features = [
    { title: "Premium Material", desc: "Constructed with high-grade materials for longevity." },
    { title: "Ergonomic Design", desc: "Designed for optimal comfort and body support." },
    { title: "Easy Assembly", desc: "Comes with clear instructions and required tools." },
    { title: "Sustainable", desc: "Made with eco-friendly and responsibly sourced wood." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
