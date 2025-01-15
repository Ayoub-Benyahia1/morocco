import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

function Beginning() {
  const ref = useRef(null);
  const [isHiddenFirst, setIsHiddenFirst] = useState(false); // State to track when to hide the first text
  const [isHiddenSecond, setIsHiddenSecond] = useState(true); // State to track when to hide the first text

  // Track the scroll progress relative to the ref element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Adjust the offset for smoother animation timing
  });

  // Transformations for the first text: zooms in and fades out
  const opacityIn = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scaleIn = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.3]);

  // Transformations for the second text: zooms out and fades in
  const opacityOut = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  const scaleOut = useTransform(scrollYProgress, [0.5, 1], [1.3, 0.8]);

  // Monitor scroll progress to control visibility
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5 && latest < 0.8) {
      setIsHiddenFirst(true); // Hide the first text when scrollYProgress exceeds 0.5
      setIsHiddenSecond(false); // Show the second text after it exceeds 0.5
    } else if (latest >= 0.8) {
      setIsHiddenFirst(true); // Keep the first text hidden
      setIsHiddenSecond(true); // Hide the second text when Tanger starts
    } else {
      setIsHiddenFirst(false); // Show the first text before it exceeds 0.5
      setIsHiddenSecond(true); // Hide the second text before it starts
    }
  });

  return (
    <>
      <motion.section ref={ref} className="h-[300vh]">
        <div id="#" className="h-[100%] fixed top-0 left-0 right-0 flex items-center justify-center font-google font-bold text-white">
          {/* First text that zooms in */}
          {!isHiddenFirst && (
            <motion.h1
              style={{ opacity: opacityIn, scale: scaleIn }}
              className="text-5xl md:text-8xl text-center"
            >
              Let's start our journey ...
            </motion.h1>
          )}
          {/* Second text that zooms out */}
          {!isHiddenSecond && (
            <motion.h1
              style={{ opacity: opacityOut, scale: scaleOut }}
              className="text-4xl md:text-8xl text-center"
            >
              Let's begin with ...
            </motion.h1>
          )}
        </div>
      </motion.section>
    </>
  );
}

export default Beginning;
