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

  const { data, isLoading, error } = useQuery({
    queryKey: [auth.user?.profile.sub],
    queryFn: () =>
      UserAccountService.GetUserByAuthId(
        auth.user?.profile.sub || "9a02d2c0-285e-4940-be92-236fcefd1206"
      ),
  });

  return (
    <UserAccountContext.Provider
      value={{ user: data, error: error?.message, isLoading }}
    >
      {children}
    </UserAccountContext.Provider>
  );
};
