import React, { createRef, useRef } from "react";
import { motion } from "framer-motion";
import { sectionsConfig } from "./SectionsConfig";
import { useSectionAnimation } from "../Animation";

const images = [
  "https://ik.imagekit.io/nuywxjba2/morocco/agadir/agadir.jpg?updatedAt=1743875743467",
  "https://ik.imagekit.io/nuywxjba2/morocco/agadir/agadir-oufla-aerienne-Kasbah.jpg?updatedAt=1743875745510",
  "https://ik.imagekit.io/nuywxjba2/morocco/agadir/barrage-youssef-ibn-tachfine.jpg?updatedAt=1743875720194",
  "https://ik.imagekit.io/nuywxjba2/morocco/agadir/agadir3.jpg?updatedAt=1743875753337",
  "https://ik.imagekit.io/nuywxjba2/morocco/agadir/agadir4.jpg?updatedAt=1743875708475",
  "https://ik.imagekit.io/nuywxjba2/morocco/agadir/agadir6.jpg?updatedAt=1743875744062",
];

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
