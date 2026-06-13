import { cn } from "@/lib/utils";
import { ProductColor } from "@/types";

interface ColorSelectorProps {
  colors: ProductColor[];
  selected: string;
  onSelect: (color: string) => void;
}

export default function ColorSelector({ colors, selected, onSelect }: ColorSelectorProps) {
  const selectedColor = colors.find(c => c.name === selected);
  
  return (
    <div className="mb-6">
      <div className="text-sm mb-3">
        Choose Color: <span className="font-medium text-muted-foreground">{selectedColor?.name || selected}</span>
      </div>
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onSelect(color.name)}
            className={cn(
              "w-8 h-8 rounded-full border border-border shadow-sm transition-all",
              selected === color.name ? "ring-2 ring-primary ring-offset-2" : "hover:ring-2 hover:ring-border hover:ring-offset-1"
            )}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}
