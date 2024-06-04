import H3 from "../H3";
import ftsLogo from "../../assets/images/fts_logo.jpg";

const Experience = () => {
  return (
    <>
      <H3>Experience</H3>
      <div className="flex flex-wrap py-10">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-border-primary"
              src={ftsLogo}
            />
            <p className="leading-relaxed text-justify text-text-primary font-medium">
              Worked on different types of projects such as CMS, Web
              Applications, Admin Panels, as well as static websites. Also
              worked partly on backend of web applications using Node and
              Express.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-theme-primary mt-6 mb-4"></span>
            <p className="text-text-secondary text-sm mb-2">
              June 2023 - May 2024
            </p>
            <h4 className="text-text-primary font-medium title-font tracking-wider text-sm uppercase">
              Furation tech solutions PVT LTD
            </h4>
            <p className="text-text-secondary">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
