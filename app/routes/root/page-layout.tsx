import { useNavigate } from "react-router";
import { useAuth } from "~/appwrite/AuthProvider";

const PageLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={logout} className="cursor-pointer">
        <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
      </button>

      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
};
export default PageLayout;
