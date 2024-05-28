import { Link } from "react-router-dom";
import { projectImages } from "../../assets/images/projects";
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
          duration: 2, // Animation duration
        },
      }}
      viewport={{ once: false }}
      className="p-3"
    >
      <div className="bg-card-bg bg-opacity-40 p-4 rounded-lg">
        <img
          className="h-48 rounded w-full object-cover object-center mb-6"
          src={projectImages.steelora}
          alt={project.title}
        />
        <h4 className="tracking-widest text-theme-primary text-sm font-medium">
          {project.category}
        </h4>
        <h3 className="text-lg text-text-primary font-medium mb-4">
          {project.title}
        </h3>
        <p className="leading-relaxed text-text-secondary mb-4 line-clamp-4">
          {project.description}
        </p>

        <Link to={project.link ?? "/"}>
          <PrimaryButton>View Project</PrimaryButton>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
