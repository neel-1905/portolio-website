import { ComponentProps, FC, ReactNode } from "react";

type SectionProps = { children: ReactNode } & ComponentProps<"section">;

const Section: FC<SectionProps> = (sectionProps) => {
  const { children, ...props } = sectionProps;

  return (
    <section className="scroll-mt-20" {...props}>
      {children}
    </section>
  );
};

export default Section;
