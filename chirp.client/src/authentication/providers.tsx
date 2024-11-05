import { ReactNode } from "react";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

//https://auth.snowse.duckdns.org/realms/advanced-frontend/.well-known/openid-configuration
const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "enoch-client",
  redirect_uri:
    process.env.NODE_ENV === "production"
      ? "https://enoch-dchirp.duckdns.org/"
      : "http://localhost:3000/",
  onSigninCallback: async (user) => {
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);
    document.cookie = `jwt_token=${user?.id_token}`;
    console.log("USER", user?.id_token);
  },
};

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
}
