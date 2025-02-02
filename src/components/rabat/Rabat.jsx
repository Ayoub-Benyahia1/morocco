import React, { createRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sectionsConfig } from "./SectionsConfig";
import { useSectionAnimation } from "../Animation";
import img1 from "../../assets/rabat/rabat6.jpg";
import img2 from "../../assets/rabat/rabat.jpg";
import img3 from "../../assets/rabat/rabat7.jpg";
import img4 from "../../assets/rabat/medina-de-rabat.jpg";
import img5 from "../../assets/rabat/rabat9.jpg";

const images = [img1, img2, img3, img4, img5];

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
