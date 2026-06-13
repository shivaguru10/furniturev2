import Link from "next/link";

export default function TopBar() {
  return (
    <div className="hidden md:flex bg-topbar text-topbar-foreground text-xs py-2 px-4 justify-between items-center max-w-[1400px] mx-auto w-full">
      <div className="flex-1 text-center font-medium">
        Free Delivery on All Orders Above ₹25,000
      </div>
      <div className="flex gap-4">
        <Link href="/track" className="hover:underline">Track Order</Link>
        <Link href="/help" className="hover:underline">Help & Support</Link>
        <Link href="/stores" className="hover:underline">Stores</Link>
      </div>
    </div>
  );
}
