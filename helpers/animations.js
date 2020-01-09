export const fadeUp = {
  in: {
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 500,
  },
  out: {
    opacity: [1, 0],
    translateY: [0, 10],
    duration: 250,
    easing: 'easeOutCubic',
  },
};

export const fadeDown = {
  in: {
    opacity: [0, 1],
    translateY: [0, 10],
    easing: 'easeOutCubic',
    duration: 250,
  },
  out: {
    opacity: [1, 0],
    translateY: [0, 10],
    duration: 500,
  },
};

export const fade = {
  in: {
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: 250,
  },
  out: {
    opacity: [1, 0],
  },
};

export const scale = {
  in: {
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: 250,
    scale: [0.5, 1],
  },
  out: {
    opacity: [1, 0],
    scale: [1, 0.5],
    easing: 'easeOutCubic',
    duration: 250,
  },
};
