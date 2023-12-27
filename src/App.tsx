import Navbar from "@/scenes/navbar/";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import Home from "@/scenes/home/";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  console.log("isTopOfPage, before the useEffect", isTopOfPage);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
        //console.log("isTopOfPage the 1st if", isTopOfPage);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
      //console.log("isTopOfPage the 2nd if", isTopOfPage);
    };
    // window.addEventListener("touchmove", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // window.removeEventListener("touchmove", handleScroll);
  }, []);
  console.log("isTopOfPage, after the useEffect", isTopOfPage);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
    </div>
  );
}
export default App;
