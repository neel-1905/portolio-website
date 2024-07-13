// import SEO from "../SEO";
import AboutSection from "../about/AboutSection";
import ContactSection from "../contact/ContactSection";
import HeroSection from "../hero/HeroSection";
import ProjectsSection from "../projects/ProjectsSection";
// import logo from "../../assets/images/N.png";

const HomePage = () => {
  return (
    <>
      {/* <SEO
        title={"Portfolio | Home"}
        description={
          "Welcome to Neel's Portfolio Website. Neel is a full stack web developer. He specializes in building accessible and pixel perfect UI for websites and web applications as well as REST APIs."
        }
        keywords={
          "Neel, Narwadkar, Neel Narwadkar, Web, Developer, Full Stack, Portfolio, Website, Next.js, React.js, Node.js, HTML, CSS, JavaScript, TypeScript"
        }
        url={`https://neel-narwadkar-portfolio.vercel.app/`}
        image={logo}
        author="Neel Narwadkar"
      /> */}
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
