import type { FieldValues, Control, FieldPath } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Input,
} from "~/components/ui";

interface AuthFormFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  autoComplete?: string;
  formControl: Control<T>;
}

function AuthFormField<T extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  inputType,
  autoComplete,
  formControl,
}: AuthFormFieldProps<T>) {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              autoComplete={
                inputType === "password"
                  ? "current-password"
                  : name === "email"
                    ? "email"
                    : undefined
              }
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default AuthFormField;
