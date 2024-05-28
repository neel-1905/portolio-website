import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import Resume from "../../assets/docs/resume.pdf";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center">
      <div>
        <div>
          <h3 className="capitalize text-primary-blue font-reddit-mono font-medium text-2xl mb-3">
            Hi, my name is
          </h3>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-primary font-semibold mb-3">
            Neel Narwadkar.
          </h1>
          <h2 className="text-4xl z-[1] md:text-5xl lg:text-6xl xl:text-7xl text-text-secondary font-semibold">
            I build things for the web.
          </h2>
        </div>

        <div className="mt-10 md:w-2/3">
          <p className="text-xl xl:text-2xl text-text-secondary">
            I am a full stack web developer. I specialize in building accessible
            and pixel perfect UI for websites and web applications as well as
            REST APIs
          </p>
        </div>

        <div className="mt-10">
          <Link
            to={Resume}
            download="Neel's Resume"
            target="_blank"
            rel="noreferrer"
          >
            <PrimaryButton>Resume</PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
