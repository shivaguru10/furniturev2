import SectionHeader from "./SectionHeader";
import Marquee from "../ui/Marquee";

export default function BrandLogos() {
  const brands = ["Urbana", "Duroflex", "Nilkamal", "Godrej Interio", "Hafele", "Wakefit", "@home", "Sleepwell", "Pepperfry"];

  return (
    <section className="py-6 lg:py-10 border-t border-border overflow-hidden bg-muted/30">
      <div className="max-w-[1400px] mx-auto px-4 mb-4 lg:mb-6">
        <SectionHeader title="Top Brands" viewAllLink="/brands" />
      </div>
      <Marquee speed={1.2} gap="2rem" className="py-2">
        {brands.map((brand) => (
          <div 
            key={brand} 
            className="text-lg md:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer whitespace-nowrap"
            style={{ fontFamily: brand === 'Urbana' || brand === 'Hafele' ? 'var(--font-serif)' : 'var(--font-sans)' }}
          >
            {brand}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
