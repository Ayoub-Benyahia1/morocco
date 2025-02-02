import React, { createRef, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sectionsConfig } from "./SectionsConfig";
import { useSectionAnimation } from "../Animation";
import img1 from "../../assets/tanger/tanger1.jpg";
import img2 from "../../assets/tanger/tanger2.jpg";
import img3 from "../../assets/tanger/tanger3.jpg";
import img4 from "../../assets/tanger/tanger4.jpg";
import img5 from "../../assets/tanger/tanger5.jpg";
import img6 from "../../assets/tanger/tanger7.jpg";

const images = [img1, img2, img3, img4, img5, img6];

function Tanger() {
  const refs = useRef(sectionsConfig.map(() => createRef()));

  return (
    <div id="tanger">
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

export default Tanger;
