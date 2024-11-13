import { createContext, ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { UserAccountService } from "../ApiService/UserAccountService";
import { UserAccountContextInterface } from "../@types/UserAccount";
import { useQuery } from "@tanstack/react-query";

export const UserAccountContext = createContext<
  UserAccountContextInterface | undefined
>(undefined);

export const UserAccountProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  //   console.log("auth", auth);

  const { data, isLoading, error } = useQuery({
    queryKey: ["UserAccount"],
    queryFn: () =>
      UserAccountService.GetUserByAuthId(auth.user?.profile.sub || ""),
  });

  return (
    <UserAccountContext.Provider
      value={{ user: data, error: error?.message, isLoading }}
    >
      {children}
    </UserAccountContext.Provider>
  );
};
