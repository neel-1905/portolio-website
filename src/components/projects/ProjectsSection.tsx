import { projects } from "../../constants/projectsData";
import H2 from "../H2";
import ProjectCard from "./ProjectCard";

// git config changes

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div>
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <H2>Projects</H2>
            <div className="h-1 w-20 bg-theme-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-text-secondary text-lg font-normal font-lexend">
            I have worked on a diverse range of web development projects
            showcasing my skills in creating dynamic websites, responsive
            layouts, and interactive applications. From content management
            systems to single-page applications and custom APIs, each project
            highlights my commitment to innovative solutions and seamless user
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-3">
          {projects.map((item, index) => {
            return <ProjectCard key={index} project={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
