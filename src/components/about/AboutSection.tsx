import Section from "../Section";
import H2 from "../H2";
import Education from "./Education";
import Experience from "./Experience";

const AboutSection = () => {
  return (
    <Section id="about">
      <div className="py-10">
        <div className="mb-10">
          <H2>About Me</H2>
        </div>

        <p className="font-lexend text-text-secondary text-lg mb-3">
          Hello! I'm Neel Narwadkar, a passionate and dedicated MERNStack
          developer with a knack for creating dynamic and responsive web
          applications. With a strong foundation in both front-end and back-end
          development, I love bringing ideas to life in the digital world. For
          the past 2 years, I have continuously improved my skills in
          development by working on a variety of projects, ranging from small
          business websites to large full stack applications. I am always eager
          to learn and adapt to new technologies to keep my skill set
          up-to-date.
        </p>
        <p className="font-lexend text-text-secondary text-lg mb-10">
          When I'm not coding, I love to play sports, PC games, go hiking and
          listen to music!
        </p>

        <div className="mb-10">
          <Experience />
        </div>
        <Education />
      </div>
    </Section>
  );
};

export default AboutSection;
