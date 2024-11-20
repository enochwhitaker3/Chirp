import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserAccountService } from "../ApiService/UserAccountService";
import keys from "../hooks/QueryKeys/UserAccountKeys";
import { AddUserRequest } from "../@types/Requests/Add/AddUserRequest";

export const UserAccountQueries = {
  useGetAllUsers: () => {
    return useQuery({
      queryFn: () => UserAccountService.GetAllUsers(),
      queryKey: keys.GetAllUser,
    });
  },
  useGetUserByUsername: (username: string) => {
    return useQuery({
      queryFn: () => UserAccountService.GetUserByUsername(username),
      queryKey: keys.GetAllUser,
    });
  },
  useGetUserByAuthId: (authId: string) => {
    return useQuery({
      queryFn: () => UserAccountService.GetUserByAuthId(authId),
      queryKey: keys.GetUserByAuthId,
    });
  },
  useAddNewUser: (addUserRequest: AddUserRequest) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: () => UserAccountService.AddNewUser(addUserRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: keys.AddNewUser });
        queryClient.invalidateQueries({ queryKey: keys.GetAllUser });
      },
    });
  },
};
