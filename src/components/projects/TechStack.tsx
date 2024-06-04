import { techStack } from "../../constants/techStack";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 py-10">
      {techStack.map((item) => {
        return (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.2 }}
            className="h-28 p-7 m-auto bg-card-bg rounded-lg shadow-md"
          >
            <img
              src={item.img}
              alt={item.name}
              className="object-cover h-full w-full"
              title={item.name}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechStack;
