export const cityName = 
{
  scrollConfig: ["start end", "end start"],
  motionConfig: {
    opacity: { input: [0.2, 0.5], output: [0, 1] },
    x: { input: [0, 0.2, 0.5], output: ["-100%", "50%", "0%"] },
  },
}

export const sectionsConfig = [
  //First
  {
    scrollConfig: ["start end", "end start"],
    motionConfig: {
      scale: { input: [0.25, 0.8], output: [1, 4] },
      rotate: { input: [0, 0.2], output: [160, 360] },
      opacity: { input: [0.3, 0.9], output: [1, 0] },
      x: { input: [0.3, 0.6, 0.9], output: ["0%", "50%", "100%"] },
    },
  },
  // Second
  {
    scrollConfig: ["start end", "end start"],
    motionConfig: {
      scale: { input: [0.25, 0.4], output: [4, 1] },
      rotate: { input: [0, 0.2], output: [160, 360] },
      opacity: { input: [0, 0.2, 0.8, 0.9], output: [0, 1, 1, 0] },
      x: {
        input: [0.2, 0.35, 0.5, 0.7, 0.9],
        output: ["60%", "20%", "0%", "-50%", "-100%"],
      },
    },
  },
  // Third
  {
    scrollConfig: ["start end", "end start"],
    motionConfig: {
      opacity: { input: [0, 0.3, 0.6, 1], output: [0, 1, 1, 0] },
      x: {
        input: [0, 0.2, 0.3, 0.5, 0.7, 0.9],
        output: ["-50%", "-20%", "0%", "20%", "60%", "100%"],
      },
    },
  },
  // Fourth
  {
    scrollConfig: ["start end", "end start"],
    motionConfig: {
      scale: {
        input: [0, 0.2, 0.4, 0.6, 0.8, 0.9],
        output: [1, 0.8, 0.6, 0.9, 1.4, 2],
      },
      opacity: { input: [0, 0.3, 0.7, 0.8, 0.9], output: [0, 1, 0.8, 0.5, 0] },
      y: { input: [0, 0.3, 0.5], output: ["70%", "20%", "0%"] },
    },
  },
  // Fifth
  {
    scrollConfig: ["start end", "end start"],
    motionConfig: {
      scale: { input: [0, 0.2, 0.3], output: [0.6, 0.8, 1] },
      opacity: {
        input: [0, 0.3, 0.6, 0.7, 0.8, 0.9],
        output: [0, 1, 0.8, 0.5, 0.2, 0],
      },
      y: {
        input: [0, 0.5, 0.7, 0.8, 0.9],
        output: ["0%", "0%", "-30%", "-60%", "-100%"],
      },
    },
  },
  // Sixth
  {
    scrollConfig: ["start end", "end start"],
    motionConfig: {
      scale: {
        input: [0, 0.2, 0.3, 0.6, 0.8, 0.9],
        output: [0.6, 0.8, 1, 0.8, 0.5, 0.2],
      },
      opacity: {
        input: [0, 0.3, 0.6, 0.8, 0.9],
        output: [0, 1, 0.8, 0.4, 0],
      },
      rotate: { input: [0, 0.5, 0.6, 0.8, 0.9], output: [0, 0, 60, 230, 360] },
      y: {
        input: [0, 0.2, 0.3],
        output: ["-70%", "-30%", "0%"],
      },
      x: {
        input: [0, 0.5, 0.6, 0.8, 0.9],
        output: ["0%", "0%", "30%", "70%", "100%"],
      },
    },
  },
];
