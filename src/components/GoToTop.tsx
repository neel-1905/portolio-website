import { FaChevronUp } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-10 right-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Link to={`#`} smooth>
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.8,
              }}
              className="h-10 w-10 rounded-full bg-theme-primary  flex justify-center items-center"
            >
              <FaChevronUp size={15} className="text-text-primary" />
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
