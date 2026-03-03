import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "~/components/ui";
import { useNavigate } from "react-router";
import { useState } from "react";
import { requireAuth, signUpUser } from "~/appwrite/auth";
import { AuthFormField, AuthLayout, LoadingButton } from "~/components";

export async function clientLoader() {
  try {
    await requireAuth();
  } catch (e) {
    console.log("Error fetching user", e);
  }
}

const registerSchema = z
  .object({
    email: z.string().email("Incorrect email address"),
    username: z
      .string()
      .min(5, "Username must be at least 5 symbols")
      .max(30, "Username cannot be more than 30 symbols"),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    try {
      const { email, username, password } = values;

      const createdUser = await signUpUser(email, username, password);

      if (createdUser) navigate("/");
    } catch (error: any) {
      const errorMessage = error.message?.toLowerCase() || "";

      if (error.code === 409) {
        if (errorMessage.includes("email")) {
          form.setError("email", { message: "Email is already registered" });
        } else if (errorMessage.includes("user")) {
          form.setError("username", {
            message: "This username is already taken",
          });
        }
      } else {
        form.setError("root", { message: "Auth failed. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create account"
      description="Type in information for registration"
      isNavigateToRegister={false}
      children={
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <AuthFormField
                name="email"
                label="Email"
                placeholder="Email..."
                inputType="email"
                autoComplete="email"
                formControl={form.control}
              />

              <AuthFormField
                name="password"
                label="Password"
                placeholder="Password..."
                inputType="password"
                formControl={form.control}
              />

              <AuthFormField
                name="confirmPassword"
                label="Confirm password"
                placeholder="Confirm password..."
                inputType="password"
                formControl={form.control}
              />

              <LoadingButton isLoading={isLoading}>Sign up</LoadingButton>

              {form.formState.errors.root && (
                <p className="text-red-500 text-sm font-medium text-center">
                  {form.formState.errors.root.message}
                </p>
              )}
            </form>
          </Form>
        </>
      }
    ></AuthLayout>
  );
};
export default SignUp;
