import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { logIn, loginWithGoogle, requireAuth } from "~/appwrite/auth";
import { Form } from "~/components/ui";
import z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormField, AuthLayout, LoadingButton } from "~/components";

export async function clientLoader() {
  try {
    await requireAuth();
  } catch (e) {
    console.log("Error fetching user", e);
  }
}

const loginSchema = z.object({
  email: z.string().email("Incorrect email address"),
  password: z.string().min(1, "Password is required"),
});

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);

    try {
      const session = await logIn(values.email, values.password);

      if (session) {
        navigate("/");
      }
    } catch (error: any) {
      form.setError("root", {
        message: "Invalid email or password",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Start Your Travel Journey"
      description="Sign in to manage destinations, itineraries, and user activity
          with ease"
      isNavigateToRegister={true}
      children={
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <AuthFormField
                name="email"
                label="Email"
                placeholder="Email..."
                inputType="email"
                formControl={form.control}
              />
              <AuthFormField
                name="password"
                label="Password"
                placeholder="Password..."
                inputType="password"
                description="At least 8 characters"
                formControl={form.control}
              />

              <LoadingButton isLoading={isLoading}>Sign in</LoadingButton>

              {form.formState.errors.root && (
                <p className="text-red-500 text-sm font-medium text-center">
                  {form.formState.errors.root.message}
                </p>
              )}
            </form>
          </Form>

          <LoadingButton isLoading={isLoading} onClick={loginWithGoogle}>
            <img
              src="/assets/icons/google.svg"
              className="size-5"
              alt="google"
            />
            Sign in with Google
          </LoadingButton>
        </>
      }
    ></AuthLayout>
  );
};
export default SignIn;
