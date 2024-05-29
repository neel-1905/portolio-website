import { Link } from "react-router-dom";
import { PROJECT } from "../../constants/projectsData";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: { project: PROJECT }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1, // Animation duration
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
        },
      }}
      viewport={{ once: false }}
    >
      <div className="bg-card-bg bg-opacity-40 p-4 rounded-lg font-lexend flex flex-col gap-4 h-full">
        <img
          className="h-48 rounded w-full object-cover object-center"
          src={project.image}
          alt={project.title}
        />
        <div className="mb-2">
          <h4 className="tracking-widest text-theme-primary text-sm font-medium uppercase">
            {project.category}
          </h4>
          <h3 className="text-lg text-text-primary font-medium line-clamp-2">
            {project.title}
          </h3>
        </div>
        <p className="leading-relaxed text-text-secondary line-clamp-4">
          {project.description}
        </p>

        <Link to={project.link ?? "/"} target="_blank" className="mt-auto">
          <PrimaryButton>View Project</PrimaryButton>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
