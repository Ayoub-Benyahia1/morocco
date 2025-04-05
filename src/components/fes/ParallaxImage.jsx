import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import OptimizedImage from "../OptimizedImage";

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
    <motion.div style={{ opacity, transform }} ref={ref}>
      <OptimizedImage
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </motion.div>
  );
}

export default ParallaxImage;
