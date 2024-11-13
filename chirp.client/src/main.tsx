import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import { UserAccountService } from "./ApiService/UserAccountService.ts";
import { AddUserRequest } from "./@types/Requests/Add/AddUserRequest";

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "enoch-client",
  redirect_uri:
    process.env.NODE_ENV === "production"
      ? "https://enoch-chirp.duckdns.org/"
      : "http://localhost:5173/",
  onSigninCallback: async (user) => {
    // if (user?.id_token) {
    //   const backEmail = await UserAccountService.GetAuthenticatedUserEmail(
    //     user?.id_token
    //   );
    //   console.log("USER EMAIL FROM BACKEND", backEmail);
    // }
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);
    document.cookie = `jwt_token=${user?.id_token}; SameSite=None; Secure`;

    const newTempUser: AddUserRequest = {
      username: user!.profile.name ?? "User",
      email: user!.profile.email ?? "",
      authId: user!.profile.sub ?? "",
    };

    try {
      const existingUser = await UserAccountService.GetUserByAuthId(
        newTempUser.authId
      );
      if (existingUser.id == 0) {
        await UserAccountService.AddNewUser(newTempUser);
      }
    } catch (error) {
      console.error("Failed to add or verify user", error);
    }
  },
};

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
);
