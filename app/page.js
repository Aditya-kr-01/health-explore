import Navbar from "./navbar";
import Hero from "./hero";
import SearchBar from "./searchbar";
import QuickAccess from "./quickaccess";
import BottomCTA from "./BottomCTA";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickAccess />
      <BottomCTA />
      
    </div>
  );
}
