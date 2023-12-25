import { SelectedPage } from "@/shared/types";
import React from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = (setSelectedPage: Props) => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/*Image and main header */}
    </section>
  );
};

export default Home;
