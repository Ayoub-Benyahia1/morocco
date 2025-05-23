import React, { createRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sectionsConfig } from "./SectionsConfig";
import { useSectionAnimation } from "../Animation";
import OptimizedImage from "../OptimizedImage";

const images = [
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/marrakech31.jpg?updatedAt=1743875564654",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/marrakech8.jpg?updatedAt=1743875535749",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/Marrakech-jardin-majorelle.jpg?updatedAt=1743875356363",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/marrakech27.jpg?updatedAt=1743875606424",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/marrakech-vol-montgolfiere.jpg?updatedAt=1743875297286",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/mehare-dunes-merzouga.jpg?updatedAt=1743875294358",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/Ourika-setti-fatma.jpg?updatedAt=1743875359972",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/marrakech-oukaimeden.jpg?updatedAt=1743875612399",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/marrakech-casacades-ouzoud.jpeg?updatedAt=1743875336590",
  "https://ik.imagekit.io/nuywxjba2/morocco/marrakesh/marrakech33.jpg?updatedAt=1743875330583",
];

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
                  transition={{ ease: "easeInOut" }}
                  className="h-[100%] fixed top-0 left-0 right-0 z-10 flex items-center justify-center"
                >
                  <OptimizedImage
                    src={images[index]}
                    alt={`Marrakech Image ${index + 1}`}
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
