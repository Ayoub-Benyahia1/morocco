import React from "react";
import img1 from "../../assets/fes/diner-riad-fes.jpeg";
import img2 from "../../assets/fes/fes2.jpg";
import img3 from "../../assets/fes/fes4.jpg";
import img4 from "../../assets/fes/fes5.jpg";
import img5 from "../../assets/fes/fes.jpg";
import img6 from "../../assets/fes/Fes-Artisan.jpg";
import img7 from "../../assets/fes/fes7.jpg";
import img8 from "../../assets/fes/fes-bab-boujloud.jpeg";
import img9 from "../../assets/fes/fes-musee-nejjarine.jpeg";
import ParallaxImage from "./ParallaxImage";

function IndexFes() {
  return (
    <section id="fes" className="h-[400svh] md:h-[900svh] sticky">
      <h1 className="text-9xl text-white font-google font-extrabold text-center italic my-[20svh]">
        Fes
      </h1>
      <div className="mx-auto max-w-7xl px-4 pt-[150px] relative z-10">
        <ParallaxImage
          src={img1}
          alt={"agadir1"}
          start={-200}
          end={200}
          className="w-2/3"
        />
        <ParallaxImage
          src={img3}
          alt={"agadir3"}
          start={200}
          end={-250}
          className="mx-auto w-2/3"
        />
        <ParallaxImage
          src={img2}
          alt={"agadir2"}
          start={-200}
          end={250}
          className="ml-auto w-2/4"
        />
        <ParallaxImage
          src={img4}
          alt={"agadir4"}
          start={0}
          end={-500}
          className="ml-24 w-7/12"
        />
        <ParallaxImage
          src={img5}
          alt={"agadir4"}
          start={150}
          end={-400}
          className="ml-4 w-9/12"
        />
        <ParallaxImage
          src={img6}
          alt={"agadir4"}
          start={0}
          end={300}
          className="mx-auto w-6/6"
        />
        <ParallaxImage
          src={img7}
          alt={"agadir4"}
          start={50}
          end={-500}
          className="ml-auto w-5/12"
        />
        <ParallaxImage
          src={img8}
          alt={"agadir4"}
          start={0}
          end={-500}
          className="mx-auto w-9/12"
        />
        <ParallaxImage
          src={img9}
          alt={"agadir4"}
          start={-50}
          end={0}
          className="mx-auto w-10/12"
        />
      </div>
    </section>
  );
}

export default IndexFes;
