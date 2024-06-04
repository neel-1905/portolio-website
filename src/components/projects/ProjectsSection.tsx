import { projects } from "../../constants/projectsData";
import H2 from "../H2";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import TechStack from "./TechStack";

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <div className="py-10">
        <div className="w-full mb-10">
          <div className="w-full mb-10">
            <H2>Projects</H2>
          </div>
          <p className="w-full leading-relaxed text-text-secondary text-lg font-normal font-lexend">
            I have worked on a diverse range of web development projects
            showcasing my skills in creating dynamic websites, responsive
            layouts, and interactive applications. From content management
            systems to single-page applications and custom APIs, each project
            highlights my commitment to innovative solutions and seamless user
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
          {projects.map((item, index) => {
            return <ProjectCard key={index} project={item} />;
          })}
        </div>
      </div>

      <div className="py-10">
        <H2>Tech Stack</H2>
        <TechStack />
      </div>
    </Section>
  );
};

export default ProjectsSection;
