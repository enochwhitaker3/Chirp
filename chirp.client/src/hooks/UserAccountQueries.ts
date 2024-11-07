import { useQuery } from "@tanstack/react-query";
import { UserAccountService } from "../ApiService/UserAccountService";
import keys from "../hooks/QueryKeys/UserAccountKeys";

export const UserAccountQueries = {
  useGetAllUsers: () => {
    return useQuery({
      queryFn: () => UserAccountService.GetAllUsers(),
      queryKey: keys.GetAllUser,
    });
  },
};
