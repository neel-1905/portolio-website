import { ComponentProps, forwardRef } from "react";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
// import { FieldError } from './Form'

interface InputProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
  capitalize?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, type = "text", error, required, capitalize, ...props },
  ref
) {
  const isEmailOrPassword =
    type === "email" || type === "password" || !capitalize;

  return (
    <div className="w-full">
      <div className="w-full mb-3">
        <InputLabel id={id}>
          {label}
          {required ? "*" : ""}
        </InputLabel>
      </div>
      <div className="mb-1 w-full">
        <input
          id={id}
          className={`rounded-[4px] ${
            isEmailOrPassword ? "normal-case" : "capitalize"
          } h-10  p-2 w-full font-lexend font-normal text-sm text-text-primary placeholder:text-text-secondary border border-border-primary bg-transparent focus:outline-none outline-none focus:border focus:border-theme-primary`}
          type={type}
          ref={ref}
          {...props}
        />
      </div>
      {error && <InputError>{error}</InputError>}
    </div>
  );
});

export default Input;
