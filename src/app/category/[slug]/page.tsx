import Breadcrumb from "@/components/ui/breadcrumb";
import FilterSidebar from "@/components/category/FilterSidebar";
import FilterMobileSheet from "@/components/category/FilterMobileSheet";
import SortDropdown from "@/components/category/SortDropdown";
import ProductGrid from "@/components/product/ProductGrid";
import { products, categories } from "@/lib/data";

// Type fix for Next.js App Router dynamic routes in Next 15 (params is a Promise)
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = slug === 'all' 
    ? { name: "All Products", description: "Browse our entire collection of premium furniture.", slug: "all" } 
    : (categories.find(c => c.slug === slug) || categories[0]);
  // Normally filter by category.id, but for mock data we just use all products
  const categoryProducts = products;

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: category.name }
      ]} />
      
      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        <FilterSidebar />
        
        <div className="flex-1">
          <div className="hidden lg:flex justify-between items-end mb-8 border-b border-border pb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold flex items-baseline gap-3">
                {category.name} <span className="text-sm font-normal text-muted-foreground">({categoryProducts.length} Products)</span>
              </h1>
              <p className="text-muted-foreground mt-2">{category.description}</p>
            </div>
            <SortDropdown />
          </div>

          <div className="lg:hidden mb-4">
            <h1 className="text-2xl font-bold flex items-baseline gap-2 mb-2">
              {category.name} <span className="text-xs font-normal text-muted-foreground">({categoryProducts.length} Products)</span>
            </h1>
          </div>

          <FilterMobileSheet />
          
          <ProductGrid products={categoryProducts} />
        </div>
      </div>
    </div>
  );
}
