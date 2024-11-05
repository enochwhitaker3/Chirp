import React from "react";
import { useAuth } from "react-oidc-context";

export default function LoginLogoutButton() {
  const auth = useAuth();

  const handleLogout = async () => {
    await auth.removeUser();

    document.cookie =
      "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    window.location.href = "/";
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div className="flex">
        <h1 className="mx-4 sm:block hidden">
          Logged in as: {auth.user?.profile.name}
        </h1>
        <button onClick={handleLogout} className="underline">
          Log out
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => void auth.signinRedirect()} className="underline">
      Log in
    </button>
  );
}
