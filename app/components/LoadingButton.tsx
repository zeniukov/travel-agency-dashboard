import { Button } from "~/components/ui";

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

const LoadingButton = ({
  isLoading,
  children,
  type = "submit",
  onClick,
}: LoadingButtonProps) => {
  return (
    <Button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className="button-class !h-11 !w-full mb-1.5 hover:opacity-80 transition cursor-pointer"
    >
      <span className="p-18-semibold flex justify-center items-center gap-2">
        {isLoading ? "Loading..." : children}
      </span>
    </Button>
  );
};

export default LoadingButton;
