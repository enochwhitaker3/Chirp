import { createContext, ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { UserAccountContextInterface } from "../@types/UserAccount";
import { UserAccountQueries } from "../hooks/Queries/UserAccountQueries";

export const UserAccountContext = createContext<
  UserAccountContextInterface | undefined
>(undefined);

export const UserAccountProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  const { data, isLoading, error } = UserAccountQueries.useGetUserByAuthId(
    auth.user?.profile.sub ?? ""
  );

  return (
    <UserAccountContext.Provider
      value={{ user: data, error: error?.message, isLoading }}
    >
      {children}
    </UserAccountContext.Provider>
  );
};
