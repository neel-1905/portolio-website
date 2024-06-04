import { ComponentProps, forwardRef } from "react";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
// import { FieldError } from './Form'

interface TextAreaProps extends ComponentProps<"textarea"> {
  label: string;
  error?: string;
  helperText?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ label, error, required, id, ...props }, ref) {
    return (
      <div className="w-full">
        <div className="w-full mb-3 ">
          <InputLabel htmlFor={id}>
            {label}
            {required ? "*" : ""}
          </InputLabel>
        </div>
        <textarea
          id={id}
          {...props}
          ref={ref}
          className="rounded-[4px] p-2 w-full font-lexend font-normal text-sm text-text-primary placeholder:text-text-secondary border border-border-primary bg-transparent focus:outline-none outline-none focus:border focus:border-theme-primary"
        ></textarea>

        {error ? <InputError>{error}</InputError> : null}
      </div>
    );
  }
);
