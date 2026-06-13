import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 mb-16 lg:mb-0">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-lg rounded-sm">B</div>
              <span className="font-bold text-xl tracking-tight">BLITZ FURNITURE</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Discover designs that blend comfort, functionality and timeless aesthetics. Premium furniture for beautiful living.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/category/living-room" className="hover:text-foreground">Living Room</Link></li>
              <li><Link href="/category/bedroom" className="hover:text-foreground">Bedroom</Link></li>
              <li><Link href="/category/dining-room" className="hover:text-foreground">Dining</Link></li>
              <li><Link href="/category/office" className="hover:text-foreground">Office</Link></li>
              <li><Link href="/category/outdoor" className="hover:text-foreground">Outdoor</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link href="/returns" className="hover:text-foreground">Returns & Exchanges</Link></li>
              <li><Link href="/shipping" className="hover:text-foreground">Shipping Info</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="min-w-0">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex gap-2 w-full">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 min-w-0 bg-muted rounded-md px-3 py-2 text-sm outline-none border border-transparent focus:border-border"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Blitz Furniture. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>UPI</span>
            <span>RuPay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
