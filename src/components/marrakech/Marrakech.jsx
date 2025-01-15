import React, { createRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sectionsConfig } from "./SectionsConfig";
import { useSectionAnimation } from "../Animation";
import img1 from "../../assets/marrakech/marrakech31.jpg";
import img2 from "../../assets/marrakech/marrakech8.jpg";
import img3 from "../../assets/marrakech/Marrakech-jardin-majorelle.jpg";
import img4 from "../../assets/marrakech/marrakech27.jpg";
import img5 from "../../assets/marrakech/marrakech-vol-montgolfiere.jpg";
import img6 from "../../assets/marrakech/mehare-dunes-merzouga.jpg";
import img7 from "../../assets/marrakech/Ourika-setti-fatma.jpg";
import img8 from "../../assets/marrakech/marrakech-oukaimeden.jpg";
import img9 from "../../assets/marrakech/marrakech-casacades-ouzoud.jpeg";
import img10 from "../../assets/marrakech/marrakech33.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function Marrakech() {
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
  // bg-[#e8b690]

  return (
    <div id="marrakech">
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
                  style={styles}
                  transition={{ ease: "easeInOut"}}
                  className="h-[100%] fixed top-0 left-0 right-0 z-10 flex items-center justify-center"
                >
                  <img
                    src={images[index]}
                    className="h-[60%] w-[95%] md:h-[80%] md:w-auto rounded-md"
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

export default Marrakech;
