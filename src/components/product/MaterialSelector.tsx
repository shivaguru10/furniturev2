import { cn } from "@/lib/utils";

interface MaterialSelectorProps {
  materials: string[];
  selected: string;
  onSelect: (material: string) => void;
}

export default function MaterialSelector({ materials, selected, onSelect }: MaterialSelectorProps) {
  return (
    <div className="mb-8">
      <div className="text-sm mb-3">
        Choose Material: <span className="font-medium text-muted-foreground">{selected}</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {materials.map((material) => (
          <button
            key={material}
            onClick={() => onSelect(material)}
            className={cn(
              "px-6 py-2 rounded-full border text-sm font-medium transition-all",
              selected === material 
                ? "bg-foreground text-background border-foreground" 
                : "bg-background text-foreground border-border hover:border-foreground"
            )}
          >
            {material}
          </button>
        ))}
      </div>
    </div>
  );
}
