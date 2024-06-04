import { ComponentProps, FC, ReactNode } from "react";

type H3_PROPS = { children: ReactNode } & ComponentProps<"h2">;

const H3: FC<H3_PROPS> = (h2Props) => {
  const { children, ...props } = h2Props;
  return (
    <>
      <h3
        className="text-xl font-medium title-font mb-2 text-text-primary font-lexend"
        {...props}
      >
        {children}
      </h3>
      <div className="h-1 w-20 bg-theme-primary rounded"></div>
    </>
  );
};

export default H3;
