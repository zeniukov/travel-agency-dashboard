import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  isNavigateToRegister: boolean;
}

const AuthLayout = ({
  title,
  description,
  children,
  isNavigateToRegister,
}: AuthLayoutProps) => {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <Card className="sign-in-card">
          <CardHeader>
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mb-2">
              <Link to="/" className="flex items-center">
                <img
                  src="/assets/icons/logo.svg"
                  alt="logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 "
                />
              </Link>
              <h1 className="font-bold text-lg sm:text-2xl text-dark-100 leading-none">
                Tourvisto
              </h1>
            </div>
            <CardTitle className="p-28-semibold text-dark-100 text-center mb-4">
              {title}
            </CardTitle>
            <CardDescription className="p-18-regular text-center text-gray-100">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
          <CardFooter className="flex justify-center gap-2">
            <p className="p-20-regular text-muted-foreground">
              {isNavigateToRegister
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              to={isNavigateToRegister ? "/sign-up" : "/sign-in"}
              className="p-20-semibold text-sm text-muted-foreground underline decoration-sky-500 decoration-2 underline-offset-4"
            >
              {isNavigateToRegister ? "Sign up" : "Sign in"}
            </Link>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default AuthLayout;
