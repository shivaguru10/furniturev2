import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
}

export default function SectionHeader({ title, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full mb-4 lg:mb-6">
      <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
      {viewAllLink && (
        <Link 
          href={viewAllLink}
          className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors shrink-0"
        >
          View all <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
