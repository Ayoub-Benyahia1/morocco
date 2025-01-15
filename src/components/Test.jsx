import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/tanger/tanger1.jpg";
import img2 from "../assets/tanger/tanger2.jpg";
import img3 from "../assets/tanger/tanger3.jpg";
import img4 from "../assets/tanger/tanger4.jpg";
import img5 from "../assets/tanger/tanger5.jpg";
import img6 from "../assets/tanger/tanger7.jpg";

function Test() {
  const ref = useRef(null);
  const containerRef = useRef(null); // For measuring container width
  const [scrollRange, setScrollRange] = useState(0); // Store the dynamic scroll range

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Dynamically calculate the scroll range based on the container's width
  useEffect(() => {
    const updateScrollRange = () => {
      const containerWidth = containerRef.current?.getBoundingClientRect().width || 0;
      const screenWidth = window.innerWidth;
      const scrollDistance = containerWidth - screenWidth;
      setScrollRange(scrollDistance > 0 ? -scrollDistance : 0);
    };

    // Set the initial value
    updateScrollRange();

    // Update when the window resizes
    window.addEventListener("resize", updateScrollRange);

    return () => {
      window.removeEventListener("resize", updateScrollRange);
    };
  }, []);

  // Use the calculated scrollRange to transform the x position
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `${scrollRange}px`]);

  return (
    <section ref={ref} className="h-[400svh] bg-slate-600">
      <div className="h-[100svh] sticky top-0 flex items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="w-max lg:h-[70%] h-[50%] p-6" // w-max to make it fit the content dynamically
        >
          <div className="w-max h-[100%] flex justify-start gap-6 p-1">
            <img src={img1} alt="" className="w-auto h-full" />
            <img src={img2} alt="" className="w-auto h-full" />
            <img src={img3} alt="" className="w-auto h-full" />
            <img src={img4} alt="" className="w-auto h-full" />
            <img src={img5} alt="" className="w-auto h-full" />
            <img src={img6} alt="" className="w-auto h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Test;
