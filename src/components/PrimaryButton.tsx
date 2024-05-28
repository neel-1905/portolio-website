import {
  ButtonHTMLAttributes,
  ComponentProps,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";
import { MotionProps, motion } from "framer-motion";

type MotionButtonProps = MotionProps &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const PrimaryButton: FC<MotionButtonProps> = (btnProps) => {
  const { children, ...props } = btnProps;

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      className="bg-btn-primary px-3 py-2  rounded-md text-lg text-btn-text-primary"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
