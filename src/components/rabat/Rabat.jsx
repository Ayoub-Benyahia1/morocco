import React, { createRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sectionsConfig } from "./SectionsConfig";
import { useSectionAnimation } from "../Animation";

const images = [
  "https://ik.imagekit.io/nuywxjba2/morocco/rabat/rabat6.jpg?updatedAt=1743874982000",
  "https://ik.imagekit.io/nuywxjba2/morocco/rabat/rabat.jpg?updatedAt=1743874968910",
  "https://ik.imagekit.io/nuywxjba2/morocco/rabat/rabat7.jpg?updatedAt=1743874976716",
  "https://ik.imagekit.io/nuywxjba2/morocco/rabat/medina-de-rabat.jpg?updatedAt=1743874976438",
  "https://ik.imagekit.io/nuywxjba2/morocco/rabat/rabat9.jpg?updatedAt=1743874985851",
];

function Rabat() {
  const [isVisible, setIsVisible] = useState(false);
  const refs = useRef(sectionsConfig.map(() => createRef()));

  // Detect when the section is visible
  useEffect(() => {
    const handleScroll = () => {
      const section = refs.current[0].current;
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="rabat">
      {sectionsConfig.map((config, index) => {
        const { styles, isVisible } = useSectionAnimation(
          refs.current[index],
          config.scrollConfig,
          config.motionConfig
        );

        return (
          <motion.section
            ref={refs.current[index]}
            className="h-[200svh] flex overflow-y-scroll scroll-smooth"
            key={index}
          >
            {isVisible && (
              <>
                <motion.div
                  style={{
                    ...styles,
                  }}
                  className="h-[100%] fixed top-0 left-0 right-0 z-10 flex items-center justify-center"
                >
                  <img
                    src={images[index]}
                    className="h-[60%] w-[95%] md:h-[80%] md:w-auto rounded-md"
                    loading="lazy"
                  />
                </motion.div>
              </>
            )}
          </motion.section>
        );
      })}
    </div>
  );
}

export default Rabat;
