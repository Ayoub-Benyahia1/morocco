import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../../assets/chefchaouen/chefchaouen1.jpg";
import img2 from "../../assets/chefchaouen/chefchaouen2.jpg";
import img3 from "../../assets/chefchaouen/chefchaouen3.jpg";
import img4 from "../../assets/chefchaouen/chefchaouen4.jpg";
import img5 from "../../assets/chefchaouen/chefchaouen5.jpg";
import img6 from "../../assets/chefchaouen/chefchaouen6.jpg";

function Chefchaouen() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Dynamically calculate the scroll range based on the container's width
  useEffect(() => {
    const updateScrollRange = () => {
      const containerWidth =
        containerRef.current?.getBoundingClientRect().width || 0;
      const screenWidth = window.innerWidth;
      const scrollDistance = containerWidth - screenWidth + 400;
      setScrollRange(scrollDistance > 0 ? -scrollDistance : 0);
    };

    updateScrollRange();

    // Update when the window resizes
    window.addEventListener("resize", updateScrollRange);

    return () => {
      window.removeEventListener("resize", updateScrollRange);
    };
  }, []);

  // Use the calculated scrollRange to transform the x position
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["200px", `${scrollRange}px`]
  );

  return (
    <section id="chefchaouen" ref={ref} className="h-[400svh]">
      <h1 className="text-3xl md:text-9xl text-white font-google p-6 my-[20svh] uppercase text-center italic font-extrabold">
        Chefchaouen
      </h1>
      <div className="h-[100svh] sticky top-0 flex items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="w-max lg:h-[70%] h-[60%] p-6"
        >
          <div className="w-max h-[100%] flex justify-start gap-6 p-1">
            <img
              src="https://ik.imagekit.io/nuywxjba2/morocco/chefchaouen/chefchaouen1.jpg?updatedAt=1743875202756"
              alt="chefchaouen1"
              className="w-auto h-full"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/nuywxjba2/morocco/chefchaouen/chefchaouen2.jpg?updatedAt=1743875213844"
              alt="chefchaouen2"
              className="w-auto h-full"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/nuywxjba2/morocco/chefchaouen/chefchaouen3.jpg?updatedAt=1743875210284"
              alt="chefchaouen3"
              className="w-auto h-full"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/nuywxjba2/morocco/chefchaouen/chefchaouen4.jpg?updatedAt=1743875221981"
              alt="chefchaouen4"
              className="w-auto h-full"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/nuywxjba2/morocco/chefchaouen/chefchaouen5.jpg?updatedAt=1743875214867"
              alt="chefchaouen5"
              className="w-auto h-full"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/nuywxjba2/morocco/chefchaouen/chefchaouen6.jpg?updatedAt=1743875195545"
              alt="chefchaouen6"
              className="w-auto h-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Chefchaouen;
