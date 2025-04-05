import React from "react";
import ParallaxImage from "./ParallaxImage";

const images = [
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/diner-riad-fes.jpeg?updatedAt=1743875075578",
    alt: "diner-riad-fes",
    start: -200,
    end: 200,
    className: "w-2/3",
  },
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/fes4.jpg?updatedAt=1743875070273",
    alt: "fes4",
    start: 200,
    end: -250,
    className: "mx-auto w-2/3",
  },
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/fes2.jpg?updatedAt=1743877181283",
    alt: "fes2",
    start: -200,
    end: 250,
    className: "ml-auto w-2/4",
  },
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/fes5.jpg?updatedAt=1743875067240",
    alt: "fes5",
    start: 0,
    end: -500,
    className: "ml-24 w-7/12",
  },
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/fes.jpg?updatedAt=1743875059425",
    alt: "fes",
    start: 150,
    end: -400,
    className: "ml-4 w-9/12",
  },
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/Fes-Artisan.jpg?updatedAt=1743875079978",
    alt: "Fes-Artisan",
    start: 0,
    end: 300,
    className: "mx-auto w-6/6",
  },
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/fes7.jpg?updatedAt=1743875103227",
    alt: "fes7",
    start: 50,
    end: -500,
    className: "ml-auto w-5/12",
  },
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/fes-bab-boujloud.jpeg?updatedAt=1743875073341",
    alt: "fes-bab-boujloud",
    start: 0,
    end: -500,
    className: "mx-auto w-9/12",
  },
  {
    src: "https://ik.imagekit.io/nuywxjba2/morocco/fes/fes-musee-nejjarine.jpeg?updatedAt=1743875103589",
    alt: "fes-musee-nejjarine",
    start: -50,
    end: 0,
    className: "mx-auto w-10/12",
  },
];

function IndexFes() {
  return (
    <section id="fes" className="h-[400svh] md:h-[900svh] sticky">
      <h1 className="text-9xl text-white font-google font-extrabold text-center italic my-[20svh]">
        Fes
      </h1>
      <div className="mx-auto max-w-7xl px-4 pt-[150px] relative z-10">
        {images.map((image) => (
          <ParallaxImage
            src={image.src}
            alt={image.alt}
            start={image.start}
            end={image.end}
            className={image.className}
          />
        ))}
      </div>
    </section>
  );
}

export default IndexFes;
