export const sectionsConfig = [
    //First
    {
      scrollConfig: ["start end", "end start"],
      motionConfig: {
        scale: { input: [0, 0.2], output: [0, 1] },
        rotate: { input: [0, 0.2], output: [160, 360] },
        opacity: { input: [0.3, 0.9], output: [1, 0] },
        x: { input: [0.2, 0.6, 0.9], output: ["0%", "50%", "100%"] },
      },
    },
    // Second
    {
      scrollConfig: ["start end", "end start"],
      motionConfig: {
        scale: { input: [0, 0.2], output: [0, 1] },
        rotate: { input: [0, 0.2], output: [160, 360] },
        opacity: { input: [0, 0.2, 0.7, 0.9], output: [0, 1, 1, 0] },
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
        opacity: { input: [0, 0.3, 0.6, 0.9], output: [0, 1, 1, 0] },
        x: {
          input: [0, 0.3, 0.5, 0.7, 0.9],
          output: ["-70%", "-20%", "0%", "30%", "100%"],
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
  ];
  