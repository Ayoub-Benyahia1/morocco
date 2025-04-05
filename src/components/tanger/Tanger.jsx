import React, { createRef, useRef } from "react";
import { motion } from "framer-motion";
import { sectionsConfig } from "./SectionsConfig";
import { useSectionAnimation } from "../Animation";

const images = [
  "https://ik.imagekit.io/nuywxjba2/morocco/tanger/tanger1.jpg?updatedAt=1743874815437",
  "https://ik.imagekit.io/nuywxjba2/morocco/tanger/tanger2.jpg?updatedAt=1743874859775",
  "https://ik.imagekit.io/nuywxjba2/morocco/tanger/tanger3.jpg?updatedAt=1743874866056",
  "https://ik.imagekit.io/nuywxjba2/morocco/tanger/tanger4.jpg?updatedAt=1743874827321",
  "https://ik.imagekit.io/nuywxjba2/morocco/tanger/tanger5.jpg?updatedAt=1743874855063",
  "https://ik.imagekit.io/nuywxjba2/morocco/tanger/tanger7.jpg?updatedAt=1743874857541",
];

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
