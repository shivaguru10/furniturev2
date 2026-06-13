import Link from "next/link";
import Image from "next/image";

export default function PromoBanners() {
  return (
    <section className="py-8 lg:py-12 max-w-[1400px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Banner 1 - Dark */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden h-[240px]">
          <div className="relative z-10 w-2/3">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">Up to 40% Off</h3>
            <p className="text-sm text-primary-foreground/80 mb-6">On Premium Collections<br/><span className="text-xs opacity-70">Limited Time Offer</span></p>
            <Link href="/category/sale" className="bg-background text-foreground text-xs font-bold px-4 py-2 rounded uppercase inline-block hover:bg-background/90 transition-colors w-max">
              SHOP THE SALE
            </Link>
          </div>
        </div>

        {/* Banner 2 - Light with Image */}
        <div className="bg-[#EAE6DF] rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden h-[240px]">
          <div className="relative z-10 w-2/3">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">New Arrivals</h3>
            <p className="text-sm text-foreground/80 mb-6">Fresh Designs.<br/>Just for You.</p>
            <Link href="/category/new" className="bg-background text-foreground text-xs font-bold px-4 py-2 rounded uppercase inline-block border border-border hover:bg-muted transition-colors w-max">
              EXPLORE NOW
            </Link>
          </div>
        </div>

        {/* Banner 3 - Brown with Image */}
        <div className="bg-[#9F8054] text-white rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden h-[240px]">
          <div className="relative z-10 w-2/3">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">Interior Consultation</h3>
            <p className="text-sm text-white/80 mb-6">Book a free session with our design experts</p>
            <Link href="/consultation" className="bg-background text-foreground text-xs font-bold px-4 py-2 rounded uppercase inline-block hover:bg-background/90 transition-colors w-max">
              BOOK NOW
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
