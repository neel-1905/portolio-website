import { ComponentProps, FC, ReactNode } from "react";

type H2_PROPS = { children: ReactNode } & ComponentProps<"h2">;

const H2: FC<H2_PROPS> = (h2Props) => {
  const { children, ...props } = h2Props;
  return (
    <>
      <h2
        className="sm:text-3xl text-2xl font-medium title-font mb-2 text-text-primary font-lexend"
        {...props}
      >
        {children}
      </h2>
      <div className="h-1 w-20 bg-theme-primary rounded"></div>
    </>
  );
};

export default H2;
