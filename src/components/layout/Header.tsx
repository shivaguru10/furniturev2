import TopBar from "./TopBar";
import MainHeader from "./MainHeader";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full bg-background flex flex-col shadow-sm">
      <TopBar />
      <MainHeader />
    </div>
  );
}
