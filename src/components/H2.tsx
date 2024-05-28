import { ReactNode } from "react";

const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-text-primary font-lexend">
      {children}
    </h2>
  );
};

export default H2;
