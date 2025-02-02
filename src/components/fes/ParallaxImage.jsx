import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

function ParallaxImage({ className, alt, src, start, end }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      style={{ opacity, transform }}
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      loading="lazy"
    />
  );
}

export default ParallaxImage;
