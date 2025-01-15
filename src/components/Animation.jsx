import { useState } from "react";
import { useTransform, useScroll, useMotionValueEvent } from "framer-motion";

export const useSectionAnimation = (ref, scrollConfig, motionConfig) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const styles = Object.keys(motionConfig).reduce((acc, key) => {
    acc[key] = useTransform(
      scrollYProgress,
      motionConfig[key].input,
      motionConfig[key].output
    );
    return acc;
  }, {});

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsVisible(latest > 0.01 && latest < 0.9);
  });

  return { styles, isVisible };
};

