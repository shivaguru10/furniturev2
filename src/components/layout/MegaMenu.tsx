import Link from "next/link";
import { categories, styles } from "@/lib/data";
import Image from "next/image";

export default function MegaMenu() {
  return (
    <div className="bg-background w-full py-8">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-4 gap-8">
        {/* Categories */}
        <div className="col-span-1 border-r border-border pr-8">
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link href={`/category/${cat.slug}`} className="flex items-center gap-3 hover:text-accent font-medium">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative bg-muted flex-shrink-0">
                    <Image src={cat.image} alt={cat.name} fill className="object-cover" unoptimized />
                  </div>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Shop By Category & Style */}
        <div className="col-span-2 grid grid-cols-2 gap-8 pr-8 border-r border-border">
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm tracking-wider">Shop by Category</h3>
            <ul className="space-y-3">
              {categories[0].subcategories?.map((sub) => (
                <li key={sub.id}>
                  <Link href={`/category/${sub.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm tracking-wider">Shop by Style</h3>
            <ul className="space-y-3">
              {styles.map((style) => (
                <li key={style}>
                  <Link href={`/category/style-${style.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {style}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Promo */}
        <div className="col-span-1">
          <div className="bg-muted rounded-xl p-6 h-full flex flex-col justify-center items-center text-center">
            <h3 className="font-serif text-2xl font-bold mb-2">Premium Comfort.</h3>
            <h3 className="font-serif text-2xl font-bold mb-6">Everyday Luxury.</h3>
            <Link href="/category/living-room" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              EXPLORE LIVING ROOM
            </Link>
          </div>
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="max-w-[1400px] mx-auto px-4 mt-8 pt-6 border-t border-border flex justify-between">
        <div className="flex items-center gap-2 text-sm"><span className="text-xl">🚚</span> Free Delivery</div>
        <div className="flex items-center gap-2 text-sm"><span className="text-xl">↩</span> Easy Returns</div>
        <div className="flex items-center gap-2 text-sm"><span className="text-xl">🔒</span> Secure Payments</div>
        <div className="flex items-center gap-2 text-sm"><span className="text-xl">💳</span> EMI Options</div>
      </div>
    </div>
  );
}
