import { ComponentProps, FC, ReactNode } from "react";

interface LabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

const InputLabel: FC<LabelProps> = (labelProps) => {
  const { children, id, ...props } = labelProps;

  return (
    <label
      className="block text-base font-secondary-400 font-lexend font-medium text-theme-primary"
      htmlFor={id}
      {...props}
    >
      {children}
    </label>
  );
};

export default InputLabel;
