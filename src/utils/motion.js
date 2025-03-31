// Shared transition settings
const defaultSpring = { type: "spring", stiffness: 100 };
const defaultEaseOut = { ease: "easeOut" };

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: { ...defaultSpring, stiffness: 300, damping: 140 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...defaultSpring, delay: 0 },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.1 } },
};

export const slideIn = (
  direction,
  type = "spring",
  delay = 0,
  duration = 1
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: { type, delay, duration, ...defaultEaseOut },
  },
});

export const textVariant = (delay = 0) => ({
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ...defaultSpring, duration: 2, delay },
  },
});

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0.1
) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const textContainer = {
  hidden: { opacity: 0 },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeIn" },
  },
};

export const fadeIn = (
  direction,
  type = "spring",
  delay = 0,
  duration = 1
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ...defaultEaseOut },
  },
});

export const planetVariants = (direction) => ({
  hidden: { x: direction === "left" ? "-100%" : "100%", rotate: 120 },
  show: {
    x: 0,
    rotate: 0,
    transition: { ...defaultSpring, duration: 1.8, delay: 0.5 },
  },
});

export const zoomIn = (delay = 0, duration = 1) => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", delay, duration, ...defaultEaseOut },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: { ...defaultSpring, stiffness: 300, damping: 140 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...defaultSpring, stiffness: 80, delay: 0.5 },
  },
};
