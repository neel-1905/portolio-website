import H3 from "../H3";

const Education = () => {
  return (
    <>
      <H3>Education</H3>
      <div className=" px-5 py-10 flex flex-col gap-10">
        <div className="flex flex-wrap  font-lexend">
          <div className="w-full md:w-1/4  p-2">
            <p className="text-sm lg:text-base text-text-secondary font-medium">
              August 2023 - Present
            </p>
          </div>
          <div className="w-full md:w-3/4  p-2">
            <h4 className="text-text-primary font-medium mb-1 text-lg">
              Master of Science in Information Technology
            </h4>
            <p className="text-text-secondary">
              V. G. Vaze College of Arts, Science and Commerce
            </p>
          </div>
        </div>

        <div className="flex flex-wrap  font-lexend">
          <div className="w-full md:w-1/4  p-2">
            <p className="text-sm lg:text-base text-text-secondary font-medium">
              August 2019 - April 2022
            </p>
          </div>
          <div className="w-full md:w-3/4  p-2">
            <h4 className="text-text-primary font-medium mb-1 text-lg">
              Bachelor of Science in Information Technology
            </h4>
            <p className="text-text-secondary">
              V. G. Vaze College of Arts, Science and Commerce
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
