import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="bg-theme-primary origin-[0%] h-2 fixed bottom-0 left-0 right-0 z-10"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
