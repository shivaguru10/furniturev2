import SectionHeader from "../home/SectionHeader";
import ProductCard from "./ProductCard";
import { products } from "@/lib/data";

export default function RelatedProducts() {
  // Just grabbing a few mock products for demo
  const related = products.slice(0, 5);

  return (
    <div className="mt-20 border-t border-border pt-16">
      <SectionHeader title="You May Also Like" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
