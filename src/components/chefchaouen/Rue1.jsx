import React from "react";
import { motion } from "framer-motion";

const titleAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
    },
  },
};

const titleAnimationChildren = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

function Rue1() {
  return (
    <section className="h-[200vh] flex flex-col items-center relative">
      <div className="h-[100vh] w-[100%] bg-white"></div>
      <div className="h-[100vh] w-[100%] bg-black"></div>

      <motion.div
        variants={titleAnimation}
        initial="hidden"
        animate="visible"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold font-google text-white mix-blend-difference"
      >
        {Array.from("Let's Go To . . .").map((letter, idx) => (
          <motion.span
            key={idx}
            variants={titleAnimationChildren}
            className={letter === " " ? "w-6" : ""}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}

export default Rue1;
