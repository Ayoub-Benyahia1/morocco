import React from "react";
import Lenis from "lenis";
import Beginning from "./components/first/Beginning";
import Navbar from "./components/Navbar";
import Chefchaouen from "./components/chefchaouen/Chefchaouen";
import IndexRabat from "./components/rabat/IndexRabat";
import IndexMarrakech from "./components/marrakech/IndexMarrakech";
import IndexTanger from "./components/tanger/indexTanger";
import IndexFes from "./components/fes/IndexFes";
import IndexAgadir from "./components/agadir/IndexAgadir";

function App() {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Navbar />
      <Beginning />
      <IndexTanger />
      <Chefchaouen />
      <IndexFes />
      <IndexRabat />
      <IndexMarrakech />
      <IndexAgadir />
    </>
  );
}

export default App;
