import Link from "next/link";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";

export default function NavBar() {
  return (
    <nav className="hidden lg:block border-b border-border bg-background relative z-40">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-start gap-8 text-sm font-medium h-12">
        {navLinks.map((link) => (
          <div key={link.label} className="group h-full flex items-center">
            <Link 
              href={link.href} 
              className={cn(
                "h-full flex items-center border-b-2 border-transparent hover:border-foreground transition-colors",
                link.isSale ? "text-sale" : "text-foreground"
              )}
            >
              {link.label}
              {link.hasDropdown && <span className="inline-block ml-1 text-[10px] transition-transform duration-200 group-hover:rotate-180">▼</span>}
            </Link>
            {link.hasDropdown && (
              <div className="absolute top-full left-0 w-full opacity-0 invisible pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 ease-out border-b border-border shadow-md z-50">
                <MegaMenu />
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
