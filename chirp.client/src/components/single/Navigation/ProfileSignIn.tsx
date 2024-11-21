import { useContext, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { UserAccountContextInterface } from "../../../@types/UserAccount";
import { UserAccountContext } from "../../../context/UserAccountContext";
import Profilesvg from "../Sidebar/Profile";
import ProfileButton from "./ProfileButton";
import { Link } from "react-router-dom";

const ProfileSignIn = () => {
  const auth = useAuth();
  const { user, isLoading } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  useEffect(() => {
    if (auth.user) {
      const date = new Date((auth.user.expires_at ?? 0) * 1000);
      document.cookie = `auth_token=${
        auth.user.id_token
      }; expires=${date.toUTCString()}; SameSite=None; Secure`;
    }
  }, [auth.user]);

  switch (auth.activeNavigator) {
    case "signinSilent":
      return (
        <div className="dark:text-white text-black">Signing you in...</div>
      );
    case "signoutRedirect":
      return (
        <div className="dark:text-white text-black">Signing you out...</div>
      );
  }

  if (auth.isLoading || isLoading) {
    return <div className="dark:text-white text-black">Loading...</div>;
  }

  if (auth.error) {
    return (
      <div className="dark:text-white text-black">
        Oops... {auth.error.message}
      </div>
    );
  }

  if (auth.isAuthenticated && user) {
    return <ProfileButton user={user} auth={auth} />;
  }

  return (
    <Link
      to="/signup"
      className="dark:text-white text-black"
    >
      <Profilesvg />
    </Link>
  );
};

export default ProfileSignIn;
