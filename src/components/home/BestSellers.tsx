import SectionHeader from "./SectionHeader";
import ProductCard from "../product/ProductCard";
import { products } from "@/lib/data";

export default function BestSellers() {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 5);

  return (
    <section className="py-8 lg:py-12 max-w-[1400px] mx-auto px-4 border-t border-border">
      <SectionHeader title="Best Sellers" viewAllLink="/category/best-sellers" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
