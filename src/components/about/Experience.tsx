import H3 from "../H3";

const Experience = () => {
  return (
    <>
      <H3>Experience</H3>
      <div className="flex flex-wrap py-10">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
              src="https://dummyimage.com/302x302"
            />
            <p className="leading-relaxed text-justify text-text-primary">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-theme-primary mt-6 mb-4"></span>
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
