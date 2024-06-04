import { useForm } from "react-hook-form";
import Section from "../Section";
import Input from "./Input";
import { TextArea } from "./TextArea";
import PrimaryButton from "../PrimaryButton";

type FORM = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FORM>({
    mode: "all",
  });

  const onSubmit = (data: FORM) => {
    console.log(data);
  };

  return (
    <Section id="contact">
      <div className="flex flex-col text-center w-full mb-12">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-text-primary font-lexend">
          Contact Me
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-text-secondary">
          Get in touch with me!
        </p>
      </div>

      <div className="py-5">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <Input
              type="text"
              label="Name"
              {...register("name", {
                required: "Name is required",
              })}
              error={errors.name?.message}
              required
            />
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid Email",
                },
              })}
              error={errors.email?.message}
              type="email"
              label="Email Address"
              required
            />
          </div>

          <div className="mb-5">
            <TextArea
              label="Message"
              id="message"
              rows={7}
              {...register("message")}
            />
          </div>

          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
