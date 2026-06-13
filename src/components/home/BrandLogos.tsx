import SectionHeader from "./SectionHeader";

export default function BrandLogos() {
  const brands = ["Urbana", "Duroflex", "Nilkamal", "Godrej Interio", "Hafele", "Wakefit", "@home"];

  return (
    <section className="py-8 lg:py-12 max-w-[1400px] mx-auto px-4 border-t border-border">
      <SectionHeader title="Top Brands" viewAllLink="/brands" />
      <div className="flex justify-between items-center overflow-x-auto scrollbar-hide pb-4 gap-8">
        {brands.map((brand) => (
          <div 
            key={brand} 
            className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer whitespace-nowrap px-4"
            style={{ fontFamily: brand === 'Urbana' || brand === 'Hafele' ? 'var(--font-serif)' : 'var(--font-sans)' }}
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
