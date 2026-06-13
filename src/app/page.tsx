import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryGrid from "@/components/home/CategoryGrid";
import BestSellers from "@/components/home/BestSellers";
import PromoBanners from "@/components/home/PromoBanners";
import BrandLogos from "@/components/home/BrandLogos";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroCarousel />
      <div className="flex flex-col w-full bg-background">
        <CategoryGrid />
        <BestSellers />
        <PromoBanners />
        <BrandLogos />
      </div>
    </div>
  );
}
