import { useContext, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { UserAccountContext } from "../../context/UserAccountContext";
import { UserAccountContextInterface } from "../../@types/UserAccount";
import Profilesvg from "../Sidebar/Profile";

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

  const handleLogout = async () => {
    await auth.removeUser();
    document.cookie =
      "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
    window.location.href = "/";
  };

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

  if (auth.isAuthenticated) {
    return (
      <div className="text-base dark:text-white text-black flex justify-center">
        <button onClick={handleLogout} className="underline">
          {user ? (
            <img
              src={user.userPFP}
              className="h-10 w-10 rounded-full"
              alt="Profile"
            />
          ) : (
            <Profilesvg />
          )}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => void auth.signinRedirect()}
      className="dark:text-white text-black"
    >
      <Profilesvg />
    </button>
  );
};

export default ProfileSignIn;
