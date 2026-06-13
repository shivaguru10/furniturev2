import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  isLast?: boolean;
}

export default function CategoryCard({ category, isLast }: CategoryCardProps) {
  return (
    <Link 
      href={`/category/${category.slug}`}
      className={`group flex flex-col items-center gap-3 w-[calc((100%-48px)/3.5)] flex-shrink-0 ${isLast ? 'snap-end' : 'snap-start'} md:w-[calc((100%-96px)/4.5)] lg:w-full lg:flex-shrink lg:min-w-0 transition-transform duration-300 active:scale-[0.98] cursor-pointer`}
    >
      <div className="w-full aspect-square rounded-2xl bg-muted overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 30vw, (max-width: 1024px) 25vw, 15vw"
          priority
        />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-center whitespace-nowrap truncate w-full px-1">
        {category.name}
      </span>
    </Link>
  );
}

