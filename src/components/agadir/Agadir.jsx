import React, { createRef, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionsConfig } from "./SectionsConfig";
import { useSectionAnimation } from "../Animation";
import img1 from "../../assets/agadir/agadir.jpg";
import img2 from "../../assets/agadir/agadir-oufla-aerienne-Kasbah.jpg";
import img3 from "../../assets/agadir/barrage-youssef-ibn-tachfine.jpg";
import img4 from "../../assets/agadir/agadir3.jpg";
import img5 from "../../assets/agadir/agadir4.jpg";
import img6 from "../../assets/agadir/agadir6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

function Agadir() {
  const refs = useRef(sectionsConfig.map(() => createRef()));

  return (
    <div id="agadir">
      {sectionsConfig.map((config, index) => {
        const { styles, isVisible } = useSectionAnimation(
          refs.current[index],
          config.scrollConfig,
          config.motionConfig
        );

        return (
          <motion.section
            ref={refs.current[index]}
            className="h-[200svh] flex"
            key={index}
          >
            {isVisible && (
              <motion.div
                style={styles}
                className="h-[100%] fixed top-0 left-0 right-0 z-10 flex items-center justify-center"
              >
                <img
                  src={images[index]}
                  className="h-[60%] w-[95%] md:h-[70%] md:w-auto rounded-md"
                  loading="lazy"
                />
              </motion.div>
            )}
          </motion.section>
        );
      })}
    </div>
  );
}

export default Agadir;
