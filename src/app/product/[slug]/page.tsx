import Breadcrumb from "@/components/ui/breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { products, categories } from "@/lib/data";

// Type fix for Next.js App Router dynamic routes in Next 15 (params is a Promise)
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug) || products[0];
  const category = categories.find(c => c.id === product.categoryId) || categories[0];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: category.name, href: `/category/${category.slug}` },
        { label: product.name }
      ]} />
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6 items-start">
        {/* Left Column: Gallery */}
        <div className="w-full lg:w-[55%] max-w-2xl">
          <ProductGallery images={product.images} name={product.name} />
        </div>
        
        {/* Right Column: Info */}
        <div className="w-full lg:w-[45%]">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Product Tabs */}
      <ProductTabs 
        description={product.description} 
        specifications={product.specifications} 
        reviewCount={product.reviewCount} 
      />

      {/* Related Products */}
      <RelatedProducts />
    </div>
  );
}
